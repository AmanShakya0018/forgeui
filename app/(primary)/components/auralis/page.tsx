import React from "react";
import type { Metadata } from "next";
import AuralisPage from "./_components/preview";

export const metadata: Metadata = {
  title: "Auralis Background | ForgeUI",
  description:
    "ForgeUI's Auralis component creates a stunning WebGL-powered animated background with layered simplex noise, glowing light effects, vignette, and film grain. Fully customizable and easy to integrate with React and Tailwind CSS.",
  keywords: [
    "Glow Background Animation",
    "WebGL Background React",
    "Animated Light Effect",
    "Auralis UI Effect",
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
    "Smooth Glow Animation",
    "SaaS UI Components",
    "Developer UI Tools",
    "ForgeUI by Aman Shakya",
    "Creative UI Backgrounds",
  ],
  authors: [{ name: "Aman Shakya", url: "https://amanshakya.in" }],
  creator: "Aman Shakya",
  publisher: "Aman Shakya",
  openGraph: {
    title: "Auralis Background for React — WebGL Animated Glow | ForgeUI",
    description:
      "Add stunning animated glowing backgrounds to your React apps with ForgeUI's Auralis component. Built with WebGL, fully customizable, and visually stunning.",
    url: "https://forgeui.in/components/auralis",
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
    title: "Auralis Background for React — WebGL Animated Glow | ForgeUI",
    description:
      "Add stunning glowing animations to your React apps with ForgeUI. Lightweight, customizable, and visually stunning.",
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
  return <AuralisPage />;
};

export default Page;
