import React from "react";
import type { Metadata } from "next";
import ChromaticFluidPage from "./_components/preview";

export const metadata: Metadata = {
  title: "Chromatic Fluid Background | ForgeUI",
  description:
    "ForgeUI's Chromatic Fluid component creates a stunning WebGL-powered animated fluid effect with procedural noise, chromatic glint highlights, and dynamic lighting. Fully customizable and easy to integrate with React and Tailwind CSS.",
  keywords: [
    "Fluid Background Animation",
    "WebGL Background React",
    "Animated Fluid Effect",
    "Chromatic UI Effect",
    "React Background Animation",
    "Tailwind CSS Backgrounds",
    "ForgeUI Components",
    "Hero Section Background",
    "Modern UI Effects",
    "Interactive Background React",
    "Frontend Visual Effects",
    "Reusable UI Components",
    "Next.js UI Components",
    "WebGL Shader Background",
    "Smooth Fluid Animation",
    "SaaS UI Components",
    "Developer UI Tools",
    "ForgeUI by Aman Shakya",
    "Creative UI Backgrounds",
  ],
  authors: [{ name: "Aman Shakya", url: "https://amanshakya.in" }],
  creator: "Aman Shakya",
  publisher: "Aman Shakya",
  openGraph: {
    title:
      "Chromatic Fluid Background for React — WebGL Animated Fluid Effect | ForgeUI",
    description:
      "Add stunning animated fluid backgrounds to your React apps with ForgeUI's Chromatic Fluid component. Built with WebGL, fully customizable, and visually stunning.",
    url: "https://forgeui.in/components/chromatic-fluid",
    siteName: "ForgeUI",
    images: [
      {
        url: "https://forgeui.in/ogimage-forgeui.png",
        width: 1200,
        height: 630,
        alt: "ForgeUI Open Graph Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Chromatic Fluid Background for React — WebGL Animated Fluid | ForgeUI",
    description:
      "Add stunning fluid animations to your React apps with ForgeUI. Lightweight, customizable, and visually stunning.",
    images: ["https://forgeui.in/ogimage-forgeui.png"],
    site: "@amanshakya0018",
    creator: "@amanshakya0018",
  },
  icons: {
    icon: "/favicon.ico",
  },
  category: "developer",
};

const Page = () => {
  return <ChromaticFluidPage />;
};

export default Page;
