import React from "react";
import type { Metadata } from "next";
import LivePreviewComponent from "@/components/layout/livepreview";
import { LivePreviewTextReveal } from "@/app/(primary)/components/text-reveal/_components/preview";

export const metadata: Metadata = {
  title: "Text Reveal Preview | ForgeUI",
  description:
    "Beautiful text reveal animation built with React, Tailwind CSS and Framer Motion. Copy and paste into your projects. Free, open-source UI component.",
  keywords: [
    "text reveal",
    "text animation",
    "reveal animation",
    "framer motion text",
    "tailwind css text",
    "forgeui",
    "ui component",
    "open source ui",
  ],
  authors: [{ name: "Aman Shakya", url: "https://amanshakya.in" }],
  creator: "Aman Shakya",
  publisher: "Aman Shakya",
  openGraph: {
    title: "Text Reveal Preview | ForgeUI",
    description:
      "Beautiful text reveal animation built with React, Tailwind CSS and Framer Motion. Free, open-source UI component.",
    url: "https://forgeui.in/components/text-reveal/preview",
    siteName: "ForgeUI",
    images: [
      {
        url: "https://forgeui.in/ogimage-forgeui.png",
        width: 1200,
        height: 630,
        alt: "Text Reveal Preview | ForgeUI",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Text Reveal Preview | ForgeUI",
    description:
      "Beautiful text reveal animation built with React, Tailwind CSS and Framer Motion.",
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
      <LivePreviewTextReveal />
    </LivePreviewComponent>
  );
};

export default Preview;