import React from "react";
import type { Metadata } from "next";
import { LivePreviewTextMorph } from "@/app/(primary)/components/text-morph/_components/preview";

export const metadata: Metadata = {
  title: "Text Morph Preview | ForgeUI",
  description:
    "Beautiful text morph animation built with React, Tailwind CSS and Framer Motion. Copy and paste into your projects. Free, open-source UI component.",
  keywords: [
    "text morph",
    "morph animation",
    "text transition",
    "framer motion morph",
    "tailwind css text",
    "forgeui",
    "ui component",
    "open source ui",
  ],
  authors: [{ name: "Aman Shakya", url: "https://amanshakya.in" }],
  creator: "Aman Shakya",
  publisher: "Aman Shakya",
  openGraph: {
    title: "Text Morph Preview | ForgeUI",
    description:
      "Beautiful text morph animation built with React, Tailwind CSS and Framer Motion. Free, open-source UI component.",
    url: "https://forgeui.in/components/text-morph/preview",
    siteName: "ForgeUI",
    images: [
      {
        url: "https://forgeui.in/ogimage-forgeui.png",
        width: 1200,
        height: 630,
        alt: "Text Morph Preview | ForgeUI",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Text Morph Preview | ForgeUI",
    description:
      "Beautiful text morph animation built with React, Tailwind CSS and Framer Motion.",
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
  return <LivePreviewTextMorph />;
};

export default Preview;