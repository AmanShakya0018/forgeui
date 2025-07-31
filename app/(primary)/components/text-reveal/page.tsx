import React from "react";
import type { Metadata } from "next";
import Textrenderingeffect from "./_components/preview";

export const metadata: Metadata = {
  title: "Text Reveal| ForgeUI",
  description:
    "ForgeUI's Text Rendering Effect component enables developers to create stunning animated text effects such as typewriter, gradient reveals, and smooth transitions using React, Tailwind CSS, and Framer Motion. Perfect for landing pages, hero sections, and interactive content blocks. Fully customizable, accessible, and easy to integrate into modern web apps.",
  keywords: [
    "Text Rendering Effect Component",
    "React Animated Text UI",
    "Typewriter Effect React",
    "Gradient Text Animation",
    "Tailwind CSS Text Effects",
    "ForgeUI Components",
    "Interactive Text Animation",
    "Hero Section Text Effects",
    "Frontend Design System",
    "Accessible Text Components",
    "Customizable UI Components",
    "Copy Paste UI Components",
    "Next.js UI Components",
    "Landing Page Text Effects",
    "Developer Tools",
    "SaaS UI Components",
    "Animated Text Reveal React",
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
      "Text Rendering Effect Component for React — Animated & Interactive Text UI | ForgeUI",
    description:
      "Design interactive text animations like typewriter and gradient reveals with ForgeUI's React component. Smooth, accessible, and customizable using Tailwind CSS & Framer Motion.",
    url: "https://forgeui.in/components/text-rendering-effect",
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
      "Text Rendering Effect Component for React — Animated & Interactive Text UI | ForgeUI",
    description:
      "ForgeUI's Text Rendering Effect component helps developers build beautiful animated text elements in React apps using TailwindCSS & Framer Motion.",
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
  return <Textrenderingeffect />;
};

export default Page;
