import React from "react";
import type { Metadata } from "next";
import NoctylisPage from "./_components/preview";

export const metadata: Metadata = {
  title: "Noctylis Background | ForgeUI",
  description:
    "ForgeUI's Noctylis component creates a moody animated glow background using layered simplex noise, soft violet light blooms, vignette, and film grain. A nocturnal variation built for hero sections and dark UI layouts.",
  keywords: [
    "Violet Glow Background",
    "WebGL Background React",
    "Animated Dark Background",
    "Noctylis UI Effect",
    "React Background Animation",
    "Tailwind CSS Backgrounds",
    "ForgeUI Components",
    "Hero Section Background",
    "Simplex Noise Background",
    "Modern UI Effects",
    "Interactive Background React",
    "Frontend Visual Effects",
    "Reusable UI Components",
    "Next.js UI Components",
    "WebGL Shader Background",
    "Dark Mode Background",
    "SaaS UI Components",
    "Developer UI Tools",
    "ForgeUI by Aman Shakya",
    "Creative UI Backgrounds",
  ],
  authors: [{ name: "Aman Shakya", url: "https://amanshakya.in" }],
  creator: "Aman Shakya",
  publisher: "Aman Shakya",
  openGraph: {
    title: "Noctylis Background for React — Moody Violet WebGL Glow | ForgeUI",
    description:
      "Create a moody violet glow background with ForgeUI's Noctylis component. Built with WebGL, fully customizable, and perfect for dark hero sections.",
    url: "https://forgeui.in/components/noctylis",
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
    title: "Noctylis Background for React — WebGL Violet Glow | ForgeUI",
    description:
      "Add a moody violet glow background to your React apps with ForgeUI. Soft, dramatic, and built for real websites.",
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
  return <NoctylisPage />;
};

export default Page;
