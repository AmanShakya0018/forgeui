import React from "react";
import type { Metadata } from "next";
import Textshimmereffect from "./_components/preview";

export const metadata: Metadata = {
  title: "Text Shimmer | ForgeUI",
  description:
    "ForgeUI's Text Shimmer Effect component enables developers to create eye-catching shimmer animations on text elements using React, Tailwind CSS, and Framer Motion. Ideal for headings, loading placeholders, and hero sections in landing pages, SaaS dashboards, and web applications. Fully customizable, accessible, and easy to integrate into modern projects.",
  keywords: [
    "Text Shimmer Effect Component",
    "React Shimmer Text Animation",
    "Tailwind CSS Shimmer Effect",
    "ForgeUI Components",
    "Animated Text Highlight UI",
    "Loading State Shimmer React",
    "Hero Section Text Effects",
    "React UI Kit",
    "Frontend Design System",
    "Accessible Text Components",
    "Customizable UI Components",
    "Copy Paste UI Components",
    "Next.js UI Components",
    "Attention Grabbing Text UI",
    "Developer Tools",
    "SaaS UI Components",
    "Text Highlight Animation",
    "ForgeUI by Aman Shakya",
    "Reusable React Components",
    "Motion UI React",
    "Frontend Engineer Tools",
  ],
  authors: [{ name: "Aman Shakya", url: "https://amanshakya.in" }],
  creator: "Aman Shakya",
  publisher: "Aman Shakya",
  openGraph: {
    title:
      "Text Shimmer Effect Component for React — Animated Text Highlight UI | ForgeUI",
    description:
      "Design stunning shimmer text animations with ForgeUI's React component. Smooth, accessible, and easy to integrate using Tailwind CSS & Framer Motion.",
    url: "https://forgeui.in/components/text-shimmer-effect",
    siteName: "ForgeUI",
    images: [
      {
        url: "https://forgeui.in/forgeui-ogimage-v2.png",
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
      "Text Shimmer Effect Component for React — Animated Text Highlight UI | ForgeUI",
    description:
      "ForgeUI's Text Shimmer Effect component helps developers add smooth, customizable shimmer animations to text in React apps using TailwindCSS & Framer Motion.",
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
  return <Textshimmereffect />;
};

export default Page;
