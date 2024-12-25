/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import * as React from "react";
import Link from "next/link";
import { Menu, Search, X } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import logo from "@/assets/logo.png";
import Container from "./Container";
import { getUserInfo, logout } from "@/action/auth-actions";
import { useRouter } from "next/navigation";

const SearchBar = () => (
  <div className="relative w-full max-w-xl">
    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
    <Input
      type="search"
      placeholder="Search for skills courses, or school programs"
      className="w-full pl-8"
    />
  </div>
);

const Navbar = () => {
  const router = useRouter();
  const [user, setUser] = React.useState<any>(null);
  const [isLoading, setIsLoading] = React.useState(true);
console.log(user, 'from nav');
  //   setting up the user decoded info in state
  React.useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const userInfo = await getUserInfo();
        setUser(userInfo);
      } catch (error) {
        console.error("Failed to fetch user info:", error);
        setUser(null);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserInfo();
  }, []);

  //   handle for logout
  const handleLogout = async () => {
    //   call the logout function from the auth actions
    const removeUser = await logout();

    if (removeUser.success) {
      router.push("/");
    }
  };

  const NAV_ITEMS = [
    { label: "Classes 6-12", href: "#" },
    { label: "Skills", href: "#" },
    { label: "Admission test", href: "#" },
    { label: "Online Batch", href: "#" },
    { label: "English Center", href: "#" },
    ...(user?.role === "admin"
      ? [{ label: "Dashboard", href: "/dashboard" }]
      : []),
  ];

  const AuthButton = () => {
    if (isLoading) {
      return (
        <Button size="sm" disabled>
          Loading...
        </Button>
      );
    }

    return (
      <>
        {!user?.isLoggedIn ? (
          <Link
            href="/auth"
            className="bg-green-600 hover:bg-green-700 text-white text-sm px-5 py-2 rounded-md"
          >
            Log in
          </Link>
        ) : (
          <Button
            onClick={handleLogout}
            size="sm"
            className="bg-red-600 hover:bg-red-700"
          >
            Log out
          </Button>
        )}
      </>
    );
  };

  const MobileMenu = () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="lg:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Open menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] sm:w-[400px]">
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between py-4 border-b">
            <Image src={logo} alt="logo" width={100} height={40} />
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <X className="h-6 w-6" />
                <span className="sr-only">Close menu</span>
              </Button>
            </SheetTrigger>
          </div>
          <div className="flex-grow overflow-y-auto py-4">
            <SearchBar />
            <nav className="mt-4 space-y-2">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="block py-2 text-sm font-medium"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
          <div className="border-t py-4">
            <Link
              href="tel:16910"
              className="block mb-4 text-sm font-medium text-green-600"
            >
              16910
            </Link>
            <AuthButton />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      <Container>
        <div className="container flex h-16 items-center justify-between gap-2">
          <div className="flex items-center gap-4">
            <MobileMenu />
            <Image src={logo} alt="logo" width={100} height={40} />
          </div>

          <div className="hidden md:block flex-1 px-4">
            <SearchBar />
          </div>

          <nav className="hidden lg:flex items-center space-x-4">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm font-medium"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <AuthButton />
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Navbar;
