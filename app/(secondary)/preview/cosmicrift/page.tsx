import React from "react";
import type { Metadata } from "next";
import { LivePreviewCosmicriftPage } from "@/app/(primary)/components/cosmicrift/_components/preview";

export const metadata: Metadata = {
  title: "CosmicRift Preview | ForgeUI",
  description:
    "A WebGL-powered cosmic background with a procedural starfield, dynamic twinkling, and fluid nebula-like waves. Built with React and shaders. Copy and paste into your projects.",
  keywords: [
    "cosmic background",
    "starfield animation",
    "webgl background",
    "shader animation",
    "nebula effect",
    "react background animation",
    "forgeui",
    "ui component",
  ],
  authors: [{ name: "Aman Shakya", url: "https://amanshakya.in" }],
  creator: "Aman Shakya",
  publisher: "Aman Shakya",
  openGraph: {
    title: "CosmicRift Preview | ForgeUI",
    description:
      "A WebGL-powered cosmic background with procedural stars, twinkling effects, and nebula-like waves.",
    url: "https://forgeui.in/components/cosmicrift/preview",
    siteName: "ForgeUI",
    images: [
      {
        url: "https://forgeui.in/ogimage-forgeui.png",
        width: 1200,
        height: 630,
        alt: "CosmicRift Preview | ForgeUI",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CosmicRift Preview | ForgeUI",
    description:
      "A WebGL-powered cosmic background with procedural stars and nebula waves.",
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
  return <LivePreviewCosmicriftPage />;
};

export default Preview;
