import NextjsInstallationPage from "@/components/docs/nextjsinstallationpage";
import React from "react";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Install Next.js | ForgeUI",
  description:
    "Learn how to quickly set up ForgeUI in your Next.js project. Follow the step-by-step installation guide to integrate Tailwind CSS and start building modern UIs.",
};

const NextjsInstallation = () => {
  return <NextjsInstallationPage />;
};

export default NextjsInstallation;
