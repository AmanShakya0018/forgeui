import React from "react";
import type { Metadata } from "next";
import LivePreviewComponent from "@/components/layout/livepreview";
import { LivePreviewBotDetection } from "@/app/(primary)/components/bot-detection/_components/preview";

export const metadata: Metadata = {
  title: "Bot Detection Preview | ForgeUI",
  description:
    "Beautiful bot detection component built with React, Tailwind CSS and Framer Motion. Copy and paste into your projects. Free, open-source UI component.",
  keywords: [
    "bot detection",
    "security captcha",
    "react bot detection",
    "framer motion",
    "tailwind css",
    "forgeui",
    "ui component",
    "open source ui",
  ],
  authors: [{ name: "Aman Shakya", url: "https://amanshakya.in" }],
  creator: "Aman Shakya",
  publisher: "Aman Shakya",
  openGraph: {
    title: "Bot Detection Preview | ForgeUI",
    description:
      "Beautiful bot detection component built with React, Tailwind CSS and Framer Motion. Free, open-source UI component.",
    url: "https://forgeui.in/components/bot-detection/preview",
    siteName: "ForgeUI",
    images: [
      {
        url: "https://forgeui.in/ogimage-forgeui.png",
        width: 1200,
        height: 630,
        alt: "Bot Detection Preview | ForgeUI",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bot Detection Preview | ForgeUI",
    description:
      "Beautiful bot detection component built with React, Tailwind CSS and Framer Motion.",
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
  return (
    <LivePreviewComponent>
      <LivePreviewBotDetection />
    </LivePreviewComponent>
  );
};

export default Preview;