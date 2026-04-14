import React from "react";
import type { Metadata } from "next";
import LumaDriftPage from "./_components/preview";

export const metadata: Metadata = {
  title: "Luma Drift Background | ForgeUI",
  description:
    "ForgeUI's Luma Drift component creates smooth, flowing animated light patterns using WebGL and procedural noise. Perfect for modern landing pages, hero sections, and immersive UI backgrounds. Fully customizable and easy to integrate with React and Tailwind CSS.",
  keywords: [
    "Animated Gradient Background",
    "WebGL Background React",
    "Procedural Noise Animation",
    "Luma Drift UI Effect",
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
      "Luma Drift Background for React — WebGL Animated Gradient | ForgeUI",
    description:
      "Create fluid, animated light backgrounds with ForgeUI's Luma Drift component. Built with WebGL and procedural noise for modern, immersive UI experiences.",
    url: "https://forgeui.in/components/lumadrift",
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
      "Luma Drift Background for React — WebGL Animated Gradient | ForgeUI",
    description:
      "Add smooth, flowing light animations to your React apps with ForgeUI. Lightweight, customizable, and visually immersive.",
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
  return <LumaDriftPage />;
};

export default Page;
