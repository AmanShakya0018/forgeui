import React from "react";
import type { Metadata } from "next";
import { LivePreviewStatsCard } from "@/app/(primary)/components/stats-card/_components/preview";

export const metadata: Metadata = {
  title: "Stats Card Preview | ForgeUI",
  description:
    "Beautiful stats card component built with React, Tailwind CSS and Framer Motion. Copy and paste into your projects. Free, open-source UI component.",
  keywords: [
    "stats card",
    "stat card",
    "react card",
    "counter card",
    "framer motion card",
    "tailwind css card",
    "forgeui",
    "ui component",
    "open source ui",
  ],
  authors: [{ name: "Aman Shakya", url: "https://amanshakya.in" }],
  creator: "Aman Shakya",
  publisher: "Aman Shakya",
  openGraph: {
    title: "Stats Card Preview | ForgeUI",
    description:
      "Beautiful stats card component built with React, Tailwind CSS and Framer Motion. Free, open-source UI component.",
    url: "https://forgeui.in/components/stats-card/preview",
    siteName: "ForgeUI",
    images: [
      {
        url: "https://forgeui.in/ogimage-forgeui.png",
        width: 1200,
        height: 630,
        alt: "Stats Card Preview | ForgeUI",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Stats Card Preview | ForgeUI",
    description:
      "Beautiful stats card component built with React, Tailwind CSS and Framer Motion.",
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
  return <LivePreviewStatsCard />;
};

export default Preview;