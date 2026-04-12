import React from "react";
import type { Metadata } from "next";
import CloudscapePage from "./_components/preview";

export const metadata: Metadata = {
  title: "Cloudscape Background | ForgeUI",
  description:
    "ForgeUI's Cloudscape component creates a smooth animated cloud background using WebGL, layered noise, and dynamic color blending. Ideal for modern landing pages, hero sections, and immersive UI experiences. Fully customizable and easy to integrate with React and Tailwind CSS.",
  keywords: [
    "Cloud Background Animation",
    "WebGL Background React",
    "Animated Gradient Background",
    "Cloudscape UI Effect",
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
    "Smooth Gradient Animation",
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
      "Cloudscape Background for React — Smooth WebGL Gradient Animation | ForgeUI",
    description:
      "Create stunning animated cloud backgrounds with ForgeUI's Cloudscape component. Built with WebGL, fully customizable, and perfect for modern UI and SaaS products.",
    url: "https://forgeui.in/components/cloudscape",
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
      "Cloudscape Background for React — WebGL Animated Gradient | ForgeUI",
    description:
      "Add smooth, immersive cloud background animations to your React apps with ForgeUI. Lightweight, customizable, and visually stunning.",
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
  return <CloudscapePage />;
};

export default Page;
