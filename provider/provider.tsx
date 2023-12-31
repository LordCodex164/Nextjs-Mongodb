"use client"
import React from "react";
import { SessionProvider } from "next-auth/react";

interface SessionProviderProps {
    children: React.ReactNode
}


const Provider = ({children}: SessionProviderProps) => {
  return <SessionProvider>
    {children}
  </SessionProvider>
}

export default Provider