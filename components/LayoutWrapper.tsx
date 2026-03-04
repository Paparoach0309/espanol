"use client";
import { AuthProvider } from "@/context/AuthContext";
import { ReactNode } from "react";
import { SubjuntivoProvider } from "../context/SubjuntivoContext";
import Navbar from "./Navbar";

export default function LayoutWrapper({ children }: { children: ReactNode }) {
  return (
    <AuthProvider>
      <SubjuntivoProvider>
        <Navbar />
        {children}
      </SubjuntivoProvider>
    </AuthProvider>
  );
}
