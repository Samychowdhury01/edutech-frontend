/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { TAuthInfo } from "@/types/auth.types";
import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";

// Check if email exists in the database
export async function checkEmail(email: string) {
  const response = await fetch(
    `${process.env.PRODUCTION_SERVER}/auth/check-email`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email }),
    }
  );
  const data = await response.json();
  return data.success;
}

// Login user with email and password
export const login = async (loginInfo: TAuthInfo) => {
  const Cookies = await cookies();
  // login logic here
  const res = await fetch(`${process.env.PRODUCTION_SERVER}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(loginInfo),
  });
  const data = await res.json();
  if (data?.success) {
    await Cookies.set("token", data?.token);
  }
  return data;
};

// Sign-up user with email and password
export const signUp = async (singUpInfo: TAuthInfo) => {
  const Cookies = await cookies();
  // sign-up logic here
  const res = await fetch(`${process.env.PRODUCTION_SERVER}/auth/sign-up`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(singUpInfo),
  });
  const data = await res.json();

  if (data?.success) {
    await Cookies.set("token", data?.token);
  }
  return data;
};

export const logout = async () => {
  const Cookies = await cookies();
 
  const res = await fetch(`${process.env.PRODUCTION_SERVER}/auth/logout`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${await Cookies.get("token")?.value}`,
    },
  });
  const data = await res.json();
  if (data?.success) {
    await Cookies.delete("token");
  }
  return data;
};

// get user info from token
export const getUserInfo = async () => {
  const Cookies = await cookies();
  const token = await Cookies.get("token")?.value;
  let decodedData = null;
  if (token) {
    decodedData = (await jwtDecode(token)) as any;

    return decodedData;
  } else {
    return null;
  }
};

export const getToken = async () => {
  const Cookies = await cookies();
  const token = await Cookies.get("token")?.value;
  return token;
};
