import IntroductionPage from "@/components/docs/introductionpage";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Introduction | ForgeUI",
  description:
    "ForgeUI, a beautifully crafted open-source React component library powered by Tailwind CSS and Framer Motion. Learn the core principles, philosophy, and how ForgeUI helps developers build modern, accessible, and customizable UI components with ease.",
  keywords: [
    "ForgeUI Introduction",
    "React Component Library",
    "Tailwind CSS UI Kit",
    "Open Source UI Components",
    "ForgeUI Documentation",
    "Frontend Design System",
    "Framer Motion Components",
    "Reusable React Components",
    "Accessible UI Components",
    "ForgeUI by Aman Shakya",
    "Developer Tools",
    "UI Library for React & Next.js",
    "Copy Paste UI Components",
    "Modern UI Kit",
    "Frontend Engineer Resources",
  ],
  authors: [{ name: "Aman Shakya", url: "https://amanshakya.in" }],
  creator: "Aman Shakya",
  publisher: "Aman Shakya",
  openGraph: {
    title:
      "Introduction to ForgeUI — Open Source React Component Library | ForgeUI Docs",
    description:
      "Get an overview of ForgeUI, an open-source React component library designed with Tailwind CSS and Framer Motion. Learn its core principles and how to integrate it into your frontend projects.",
    url: "https://forgeui.in/docs/introduction",
    siteName: "ForgeUI",
    images: [
      {
        url: "https://forgeui.in/forgeui-ogimage-v2.png",
        width: 1200,
        height: 630,
        alt: "ForgeUI Documentation Open Graph Image",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Introduction to ForgeUI — Open Source React Component Library | ForgeUI Docs",
    description:
      "Start building with ForgeUI, an open-source React UI library built with Tailwind CSS & Framer Motion. Learn the core principles and how to use it in your projects.",
    images: ["https://forgeui.in/forgeui-ogimage-v2.png"],
    site: "@amanshakya0018",
    creator: "@amanshakya0018",
  },
  icons: {
    icon: "/favicon.ico",
  },
  category: "developer",
};

export default function Introduction() {
  return <IntroductionPage />;
}
