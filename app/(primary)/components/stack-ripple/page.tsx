import React from "react";
import type { Metadata } from "next";
import Stackripple from "./_components/preview";

export const metadata: Metadata = {
  title: "Stack Ripple | ForgeUI",
  description:
    "Stack Ripple component provides smooth animated ripple effects using Framer Motion. Built with React and Tailwind CSS, it's ideal for interactive dashboards, SaaS apps, and modern web interfaces that need visually engaging UI interactions.",
  keywords: [
    "Stack Ripple Component",
    "Framer Motion Ripple",
    "Animated UI Effects",
    "Tailwind CSS UI Components",
    "ForgeUI Components",
    "React UI Kit",
    "Premium React Components",
    "Frontend Design System",
    "Accessible React Components",
    "Customizable UI Components",
    "Next.js UI Components",
    "Interactive Dashboard UI",
    "SaaS UI Effects",
    "UI Animation React",
    "ForgeUI Pro by Aman Shakya",
    "Reusable UI Components",
    "Motion UI React",
    "Animated Ripple UI",
    "Interactive Web Components",
    "Developer Tools",
  ],
  authors: [{ name: "Aman Shakya", url: "https://amanshakya.in" }],
  creator: "Aman Shakya",
  publisher: "Aman Shakya",
  openGraph: {
    title: "Stack Ripple | ForgeUI Pro",
    description:
      "Create smooth ripple animations with ForgeUI Pro's Stack Ripple component. Animated with Framer Motion, built with React & Tailwind CSS for modern dashboards and apps.",
    url: "https://forgeui.in/components/stack-ripple",
    siteName: "ForgeUI",
    images: [
      {
        url: "ttps://forgeui.in/forgeui-ogimage-v2.png",
        width: 1200,
        height: 630,
        alt: "ForgeUI Pro Stack Ripple Open Graph Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Stack Ripple | ForgeUI",
    description:
      "ForgeUI Stack Ripple component delivers smooth Framer Motion ripple animations for interactive dashboards and web apps.",
    images: ["ttps://forgeui.in/forgeui-ogimage-v2.png"],
    site: "@amanshakya0018",
    creator: "@amanshakya0018",
  },
  icons: {
    icon: "/favicon.ico",
  },
  category: "developer",
};

const Page = () => {
  return <Stackripple />;
};

export default Page;
