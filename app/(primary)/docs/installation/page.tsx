import React from "react";
import type { Metadata } from "next";
import InstallationPage from "@/components/docs/installationpage";

export const metadata: Metadata = {
  title: "Installation | ForgeUI",
  description:
    "Install ForgeUI with Next.js and Tailwind CSS in one guide. Create your app, configure Tailwind, add globals.css, and start building modern UI components.",
  keywords: [
    "ForgeUI Installation",
    "Install ForgeUI",
    "Next.js and Tailwind CSS Setup",
    "Tailwind CSS Setup Guide",
    "React UI Components",
    "Next.js UI Library",
    "Frontend Design System",
    "ForgeUI Documentation",
    "Component Installation Guide",
    "Framer Motion in Next.js",
    "ForgeUI by Aman Shakya",
    "Reusable React Components",
    "Copy Paste UI Components",
  ],
  authors: [{ name: "Aman Shakya", url: "https://amanshakya.in" }],
  creator: "Aman Shakya",
  publisher: "Aman Shakya",
  openGraph: {
    title: "Installation — Next.js and Tailwind CSS Setup | ForgeUI Docs",
    description:
      "Install ForgeUI with Next.js and Tailwind CSS using this step-by-step guide, including complete globals.css setup.",
    url: "https://forgeui.in/docs/installation",
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
    title: "Installation — Next.js and Tailwind CSS Setup | ForgeUI Docs",
    description:
      "Set up ForgeUI with Next.js and Tailwind CSS, including globals.css, in one installation guide.",
    images: ["https://forgeui.in/forgeui-ogimage-v2.png"],
    site: "@amanshakya0018",
    creator: "@amanshakya0018",
  },
  icons: {
    icon: "/favicon.ico",
  },
  category: "developer",
};

const Installation = () => {
  return <InstallationPage />;
};

export default Installation;
