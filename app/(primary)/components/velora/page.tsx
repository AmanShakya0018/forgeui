import React from "react";
import type { Metadata } from "next";
import VeloraPage from "./_components/preview";

export const metadata: Metadata = {
  title: "Velora Background | ForgeUI",
  description:
    "ForgeUI's Velora component creates a stunning WebGL-powered animated radial light effect with swirling color streaks, 3D noise-based flow, and dynamic color transitions. Fully customizable and easy to integrate with React and Tailwind CSS.",
  keywords: [
    "Radial Light Animation",
    "WebGL Background React",
    "Animated Light Effect",
    "Velora UI Effect",
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
    "Smooth Light Animation",
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
      "Velora Background for React — WebGL Animated Radial Light | ForgeUI",
    description:
      "Add stunning animated radial light backgrounds to your React apps with ForgeUI's Velora component. Built with WebGL, fully customizable, and visually stunning.",
    url: "https://forgeui.in/components/velora",
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
    title: "Velora Background for React — WebGL Animated Light | ForgeUI",
    description:
      "Add stunning radial light animations to your React apps with ForgeUI. Lightweight, customizable, and visually stunning.",
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
  return <VeloraPage />;
};

export default Page;
