"use client";
import React, { ReactNode } from "react";
import { ThemeProvider } from "@/provider/theme-provider";

type Props = {
  children: ReactNode;
};

const Provider = ({ children }: Props) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  );
};

export default Provider;
