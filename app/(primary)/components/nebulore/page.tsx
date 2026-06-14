import React from "react";
import type { Metadata } from "next";
import NebulorePage from "./_components/preview";

export const metadata: Metadata = {
  title: "Nebulore Background | ForgeUI",
  description:
    "ForgeUI's Nebulore component creates a cinematic animated nebula background using WebGL, domain-warped simplex noise, and flowing aurora ribbons. Ideal for hero sections, landing pages, and immersive dark UI experiences. Fully customizable colors and easy to integrate with React and Tailwind CSS.",
  keywords: [
    "Nebula Background Animation",
    "WebGL Background React",
    "Animated Nebula Background",
    "Nebulore UI Effect",
    "React Background Animation",
    "Tailwind CSS Backgrounds",
    "ForgeUI Components",
    "Hero Section Background",
    "Aurora Background React",
    "Cosmic UI Effects",
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
    title:
      "Nebulore Background for React — Cinematic WebGL Nebula Animation | ForgeUI",
    description:
      "Create stunning animated nebula backgrounds with ForgeUI's Nebulore component. Built with WebGL, fully customizable, and perfect for modern dark UI and SaaS products.",
    url: "https://forgeui.in/components/nebulore",
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
      "Nebulore Background for React — WebGL Animated Nebula | ForgeUI",
    description:
      "Add cinematic, flowing nebula background animations to your React apps with ForgeUI. Lightweight, customizable, and visually stunning.",
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
  return <NebulorePage />;
};

export default Page;
