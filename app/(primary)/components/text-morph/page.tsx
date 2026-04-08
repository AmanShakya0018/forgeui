import React from "react";
import type { Metadata } from "next";
import Textmorpheffect from "./_components/preview";

export const metadata: Metadata = {
  title: "Text Morph | ForgeUI",
  description:
    "ForgeUI's Text Morph component lets developers create smooth rotating text animations with letter-by-letter transitions using React, Tailwind CSS, and Framer Motion. Perfect for hero sections, developer portfolios, SaaS landing pages, and interactive UI experiences. Fully customizable, accessible, and easy to integrate into modern projects.",
  keywords: [
    "Text Morph Component",
    "React Rotating Text Animation",
    "Animated Text React",
    "ForgeUI Components",
    "Text Transition Animation",
    "Framer Motion Text Animation",
    "Hero Section Text Animation",
    "React UI Kit",
    "Frontend Design System",
    "Accessible Text Components",
    "Customizable UI Components",
    "Copy Paste UI Components",
    "Next.js UI Components",
    "Rotating Words Animation",
    "Developer Tools",
    "SaaS UI Components",
    "Animated Typography React",
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
      "Text Morph Component for React — Animated Rotating Text UI | ForgeUI",
    description:
      "Create smooth rotating text animations with ForgeUI's Text Morph React component. Clean transitions powered by Tailwind CSS and Framer Motion.",
    url: "https://forgeui.in/components/text-morph",
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
      "Text Morph Component for React — Animated Rotating Text UI | ForgeUI",
    description:
      "ForgeUI's Text Morph component helps developers build smooth rotating text animations with React, TailwindCSS and Framer Motion.",
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
  return <Textmorpheffect />;
};

export default Page;
