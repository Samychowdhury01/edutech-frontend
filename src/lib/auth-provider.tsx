"use client"
/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable @typescript-eslint/no-explicit-any */

import { createContext, useContext, useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";

import { getToken, getUserInfo } from "@/action/auth-actions";
// import { toast } from "sonner";

export const AuthContext = createContext<any>(null);

export const AuthProviders = ({ children }: any) => {
  const [user, setUser] = useState<any>();
  const [token, setToken] = useState<string>();
  //   const router = useRouter();
  const pathname = usePathname();
  // a async function to get the userInfo

  const auth = async () => {
    const response: any = await getUserInfo();
    const token = await getToken();
    setToken(token);
    setUser(response);
  };

  useEffect(() => {
    auth();
  }, [pathname]);

  const data = {
    user,
    // handleLogout,
    token,
    setToken,
    setUser,
  };
  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
