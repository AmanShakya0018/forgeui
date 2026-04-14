import React from "react";
import type { Metadata } from "next";
import { LivePreviewAnimatedTabs } from "@/app/(primary)/components/animated-tabs/_components/preview";

export const metadata: Metadata = {
  title: "Animated Tabs Preview | ForgeUI",
  description:
    "Beautiful animated tabs component built with React, Tailwind CSS and Framer Motion. Copy and paste into your projects. Free, open-source UI component.",
  keywords: [
    "animated tabs",
    "react tabs",
    "tabs component",
    "framer motion tabs",
    "tailwind css tabs",
    "forgeui",
    "ui component",
    "open source ui",
  ],
  authors: [{ name: "Aman Shakya", url: "https://amanshakya.in" }],
  creator: "Aman Shakya",
  publisher: "Aman Shakya",
  openGraph: {
    title: "Animated Tabs Preview | ForgeUI",
    description:
      "Beautiful animated tabs component built with React, Tailwind CSS and Framer Motion. Free, open-source UI component.",
    url: "https://forgeui.in/components/animated-tabs/preview",
    siteName: "ForgeUI",
    images: [
      {
        url: "https://forgeui.in/ogimage-forgeui.png",
        width: 1200,
        height: 630,
        alt: "Animated Tabs Preview | ForgeUI",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Animated Tabs Preview | ForgeUI",
    description:
      "Beautiful animated tabs component built with React, Tailwind CSS and Framer Motion.",
    images: ["https://forgeui.in/ogimage-forgeui.png"],
    site: "@amanshakya0018",
    creator: "@amanshakya0018",
  },
  icons: {
    icon: "/favicon.ico",
  },
  category: "developer",
};

const Preview = () => {
  return <LivePreviewAnimatedTabs />;
};

export default Preview;