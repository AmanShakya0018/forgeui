import React from "react";
import type { Metadata } from "next";
import { LivePreviewStackRipple } from "@/app/(primary)/components/stack-ripple/_components/preview";

export const metadata: Metadata = {
  title: "Stack Ripple Preview | ForgeUI",
  description:
    "Beautiful stack ripple effect built with React, Tailwind CSS and Framer Motion. Copy and paste into your projects. Free, open-source UI component.",
  keywords: [
    "stack ripple",
    "ripple effect",
    "button ripple",
    "framer motion ripple",
    "tailwind css ripple",
    "forgeui",
    "ui component",
    "open source ui",
  ],
  authors: [{ name: "Aman Shakya", url: "https://amanshakya.in" }],
  creator: "Aman Shakya",
  publisher: "Aman Shakya",
  openGraph: {
    title: "Stack Ripple Preview | ForgeUI",
    description:
      "Beautiful stack ripple effect built with React, Tailwind CSS and Framer Motion. Free, open-source UI component.",
    url: "https://forgeui.in/components/stack-ripple/preview",
    siteName: "ForgeUI",
    images: [
      {
        url: "https://forgeui.in/ogimage-forgeui.png",
        width: 1200,
        height: 630,
        alt: "Stack Ripple Preview | ForgeUI",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Stack Ripple Preview | ForgeUI",
    description:
      "Beautiful stack ripple effect built with React, Tailwind CSS and Framer Motion.",
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
  return <LivePreviewStackRipple />;
};

export default Preview;