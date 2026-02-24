import React from "react";
import type { Metadata } from "next";
import Spectrumswitcher from "./_components/preview";

export const metadata: Metadata = {
  title: "Spectrum Switcher | ForgeUI ",
  description:
    "ForgeUI 's Spectrum Switcher component vides smooth animated color or spectrum transitions using Framer Motion. Built with React and Tailwind CSS, it's ideal for dashboards, design tools, and interactive web apps requiring visually engaging UI elements.",
  keywords: [
    "Spectrum Switcher Component",
    "Framer Motion Animations",
    "Animated Color Transitions",
    "Tailwind CSS UI Components",
    "ForgeUI  Components",
    "React UI Kit",
    "Premium React Components",
    "Frontend Design System",
    "Accessible React Components",
    "Customizable UI Components",
    "Next.js UI Components",
    "Interactive Dashboard UI",
    "Design Tool Components",
    "UI Transitions React",
    "ForgeUI  by Aman Shakya",
    "Reusable UI Components",
    "Motion UI React",
    "Animated Spectrum UI",
    "Color Picker Animation",
    "Developer Tools",
  ],
  authors: [{ name: "Aman Shakya", url: "https://amanshakya.in" }],
  creator: "Aman Shakya",
  publisher: "Aman Shakya",
  openGraph: {
    title: "Spectrum Switcher | ForgeUI",
    description:
      "Create smooth animated color/spectrum transitions with ForgeUI 's Spectrum Switcher component. Animated with Framer Motion, styled with React & Tailwind CSS.",
    url: "https://forgeui.in/components/spectrum-switcher",
    siteName: "ForgeUI ",
    images: [
      {
        url: "https://forgeui.in/forgeui-ogimage-v2.png",
        width: 1200,
        height: 630,
        alt: "ForgeUI Spectrum Switcher Open Graph Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Spectrum Switcher | ForgeUI",
    description:
      "ForgeUI's Spectrum Switcher component delivers smooth Framer Motion animations for color/spectrum transitions in React & Tailwind CSS apps.",
    images: ["https://forgeui.in/forgeui-ogimage-v2.png"],
    site: "@amanshakya0018",
    creator: "@amanshakya0018",
  },
  icons: {
    icon: "/favicon.ico",
  },
  category: "developer",
};

const Page = () => {
  return <Spectrumswitcher />;
  // return <p>hi</p>;
};

export default Page;
