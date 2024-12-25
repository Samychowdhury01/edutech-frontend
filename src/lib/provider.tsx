"use client"

import React from "react";
import { AuthProviders } from "./auth-provider";

const Provider = ({children}: {children: React.ReactNode}) => {
    return (
        <AuthProviders>
        {children}
       </AuthProviders>
    );
};

export default Provider;