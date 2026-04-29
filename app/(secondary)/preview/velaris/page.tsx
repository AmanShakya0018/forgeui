import React from "react";
import type { Metadata } from "next";
import { LivePreviewVelarisPage } from "@/app/(primary)/components/velaris/_components/preview";

export const metadata: Metadata = {
  title: "Velaris Preview | ForgeUI",
  description:
    "A WebGL-powered animated background featuring layered simplex noise, multi-color blending, vignette glow, and subtle film grain effects. Built with React and shaders. Copy and paste into your projects.",
  keywords: [
    "noise background",
    "color blend animation",
    "webgl background",
    "shader animation",
    "vignette effect",
    "react background animation",
    "forgeui",
    "ui component",
  ],
  authors: [{ name: "Aman Shakya", url: "https://amanshakya.in" }],
  creator: "Aman Shakya",
  publisher: "Aman Shakya",
  openGraph: {
    title: "Velaris Preview | ForgeUI",
    description:
      "A WebGL-powered animated background with layered simplex noise and multi-color blending.",
    url: "https://forgeui.in/components/velaris/preview",
    siteName: "ForgeUI",
    images: [
      {
        url: "https://forgeui.in/ogimage-forgeui.png",
        width: 1200,
        height: 630,
        alt: "Velaris Preview | ForgeUI",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Velaris Preview | ForgeUI",
    description:
      "A WebGL-powered animated background with layered noise and color blending.",
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
  return <LivePreviewVelarisPage />;
};

export default Preview;
