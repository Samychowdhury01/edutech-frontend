"use client";
import { usePathname } from "next/navigation";
import React from "react";
import Link from "next/link";

const DashboardSideNavbar = () => {
    const user = true;

  const pathname = usePathname();

  const navItems = [
    {
      title: "Overview",
      url: "/dashboard",
    },
    {
      title: "Courses",
      url: "/dashboard/courses",
      role: "admin",
    },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <ul className="bg-green-100 py-10 px-10 space-y-5 lg:h-screen">
      {user &&
        navItems.map((item, index) => (
          <li key={index}>
            <Link
              href={item.url}
              className={`${
                isActive(item.url)
                  ? "text-primary border-b-3 border-primary font-semibold"
                  : "foreground"
              }`}
            >
              {item.title}
            </Link>
          </li>
        ))}
    </ul>
  );
};

export default DashboardSideNavbar;
