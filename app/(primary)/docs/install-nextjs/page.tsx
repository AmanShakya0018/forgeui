import NextjsInstallationPage from "@/components/docs/nextjsinstallationpage";
import React from "react";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Install Next.js | ForgeUI",
  description:
    "Learn how to seamlessly integrate ForgeUI into your Next.js project. Follow this comprehensive installation guide to set up Tailwind CSS, import components, and start building beautiful UIs with React and Framer Motion.",
  keywords: [
    "ForgeUI Installation",
    "Next.js Component Library",
    "Install ForgeUI Next.js",
    "Tailwind CSS Setup Guide",
    "React UI Components",
    "Next.js UI Library",
    "Frontend Design System",
    "ForgeUI Documentation",
    "UI Library for Next.js",
    "Component Installation Guide",
    "Framer Motion in Next.js",
    "ForgeUI by Aman Shakya",
    "Reusable React Components",
    "Copy Paste UI Components",
    "Next.js Developer Tools",
  ],
  authors: [{ name: "Aman Shakya", url: "https://amanshakya.in" }],
  creator: "Aman Shakya",
  publisher: "Aman Shakya",
  openGraph: {
    title:
      "Install ForgeUI in Next.js — Step-by-Step Setup Guide | ForgeUI Docs",
    description:
      "Integrate ForgeUI into your Next.js projects with this simple installation guide. Setup Tailwind CSS and start building modern, animated UI components in minutes.",
    url: "https://forgeui.in/docs/nextjs-installation",
    siteName: "ForgeUI",
    images: [
      {
        url: "https://forgeui.in/forgeui-ogimage-v2.png",
        width: 1200,
        height: 630,
        alt: "ForgeUI Documentation Open Graph Image",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Install ForgeUI in Next.js — Step-by-Step Setup Guide | ForgeUI Docs",
    description:
      "Follow this step-by-step guide to install ForgeUI in your Next.js project. Learn how to setup Tailwind CSS and start using beautiful, reusable components instantly.",
    images: ["https://forgeui.in/forgeui-ogimage-v2.png"],
    site: "@amanshakya0018",
    creator: "@amanshakya0018",
  },
  icons: {
    icon: "/favicon.ico",
  },
  category: "developer",
};

const NextjsInstallation = () => {
  return <NextjsInstallationPage />;
};

export default NextjsInstallation;
