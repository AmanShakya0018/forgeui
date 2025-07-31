import React from "react";
import type { Metadata } from "next";
import Expandablecard from "./_components/preview";

export const metadata: Metadata = {
  title: "Expandable Card | ForgeUI",
  description:
    "ForgeUI's Expandable Card component enables developers to build interactive cards that expand and collapse with smooth animations using React, Tailwind CSS, and Framer Motion. Perfect for FAQs, product features, dashboards, and content previews. Fully customizable, accessible, and easy to integrate into modern web applications.",
  keywords: [
    "Expandable Card Component",
    "React Expand Collapse UI",
    "Framer Motion Expandable Card",
    "Tailwind CSS Cards",
    "ForgeUI Components",
    "Animated Card Component",
    "Collapsible Card React",
    "React UI Kit",
    "Frontend Design System",
    "Accessible Card Components",
    "Customizable UI Components",
    "Copy Paste UI Components",
    "Next.js UI Components",
    "Interactive Cards UI",
    "Developer Tools",
    "SaaS UI Components",
    "Content Toggle React",
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
      "Expandable Card Component for React — Interactive & Smooth UI | ForgeUI",
    description:
      "Design expandable and collapsible card interfaces with ForgeUI's React component. Smooth animations, accessible design, and easy integration using Tailwind CSS & Framer Motion.",
    url: "https://forgeui.in/components/expandable-card",
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
      "Expandable Card Component for React — Interactive & Smooth UI | ForgeUI",
    description:
      "ForgeUI's Expandable Card component enables smooth, customizable expand/collapse cards in React apps. Built with TailwindCSS & Framer Motion.",
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
  return <Expandablecard />;
};

export default Page;
