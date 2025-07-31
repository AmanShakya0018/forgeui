import React from "react";
import type { Metadata } from "next";
import LivePreviewComponent from "@/components/layout/livepreview";
import AnimatedTabs from "@/app/(primary)/components/animated-tabs/_components/animated-tabs";

export const metadata: Metadata = {
  title: "Animated Tabs Live Preview | ForgeUI",
  description:
    "Explore ForgeUI's Animated Tabs component in this live interactive preview. Crafted with React, Tailwind CSS, and Framer Motion, these tabs offer smooth transitions, responsive design, and accessible navigation patterns. Easily copy and integrate into your projects.",
  keywords: [
    "Animated Tabs Preview",
    "Tabs Component Demo",
    "React Tabs Animation",
    "ForgeUI Tabs Component",
    "Framer Motion Tabs",
    "Tailwind CSS Tabs",
    "UI Component Preview",
    "React UI Playground",
    "Interactive Tabs Demo",
    "Reusable React Components",
    "Copy Paste UI Components",
    "Open Source UI Kit",
    "ForgeUI by Aman Shakya",
  ],
  authors: [{ name: "Aman Shakya", url: "https://amanshakya.in" }],
  creator: "Aman Shakya",
  publisher: "Aman Shakya",
  openGraph: {
    title: "Animated Tabs Live Preview | ForgeUI",
    description:
      "Live demo of ForgeUI's Animated Tabs component with smooth animations and responsive UI, built using React, Tailwind CSS & Framer Motion.",
    url: "https://forgeui.in/components/animated-tabs/preview",
    siteName: "ForgeUI",
    images: [
      {
        url: "https://forgeui.in/forgeui-ogimage-v2.png",
        width: 1200,
        height: 630,
        alt: "ForgeUI Component Preview Open Graph Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Animated Tabs Live Preview | ForgeUI",
    description:
      "Experience ForgeUI's Animated Tabs component in an interactive live preview. Smooth transitions and responsive design with React, Tailwind CSS, and Framer Motion.",
    images: ["https://forgeui.in/forgeui-ogimage-v2.png"],
    site: "@amanshakya0018",
    creator: "@amanshakya0018",
  },
  icons: {
    icon: "/favicon.ico",
  },
  category: "developer",
};

const tabs = ["Home", "Components", "Docs", "Templates"];
const Preview = () => {
  return (
    <LivePreviewComponent>
      <AnimatedTabs tabs={tabs} />
    </LivePreviewComponent>
  );
};

export default Preview;
