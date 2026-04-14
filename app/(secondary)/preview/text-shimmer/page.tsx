import React from "react";
import type { Metadata } from "next";
import { LivePreviewTextShimmer } from "@/app/(primary)/components/text-shimmer/_components/preview";

export const metadata: Metadata = {
  title: "Text Shimmer Preview | ForgeUI",
  description:
    "Beautiful text shimmer effect built with React, Tailwind CSS and Framer Motion. Copy and paste into your projects. Free, open-source UI component.",
  keywords: [
    "text shimmer",
    "shimmer effect",
    "text effect",
    "framer motion shimmer",
    "tailwind css shimmer",
    "forgeui",
    "ui component",
    "open source ui",
  ],
  authors: [{ name: "Aman Shakya", url: "https://amanshakya.in" }],
  creator: "Aman Shakya",
  publisher: "Aman Shakya",
  openGraph: {
    title: "Text Shimmer Preview | ForgeUI",
    description:
      "Beautiful text shimmer effect built with React, Tailwind CSS and Framer Motion. Free, open-source UI component.",
    url: "https://forgeui.in/components/text-shimmer/preview",
    siteName: "ForgeUI",
    images: [
      {
        url: "https://forgeui.in/ogimage-forgeui.png",
        width: 1200,
        height: 630,
        alt: "Text Shimmer Preview | ForgeUI",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Text Shimmer Preview | ForgeUI",
    description:
      "Beautiful text shimmer effect built with React, Tailwind CSS and Framer Motion.",
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
  return <LivePreviewTextShimmer />;
};

export default Preview;