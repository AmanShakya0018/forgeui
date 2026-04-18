import React from "react";
import type { Metadata } from "next";
import { LivePreviewChromaticFluidPage } from "@/app/(primary)/components/chromatic-fluid/_components/preview";

export const metadata: Metadata = {
  title: "Chromatic Fluid Preview | ForgeUI",
  description:
    "A WebGL-powered animated fluid effect with procedural noise, chromatic glint highlights, and dynamic lighting. Built with React and shaders. Copy and paste into your projects.",
  keywords: [
    "fluid animation",
    "chromatic effect",
    "webgl background",
    "shader animation",
    "fluid effect",
    "react background animation",
    "forgeui",
    "ui component",
  ],
  authors: [{ name: "Aman Shakya", url: "https://amanshakya.in" }],
  creator: "Aman Shakya",
  publisher: "Aman Shakya",
  openGraph: {
    title: "Chromatic Fluid Preview | ForgeUI",
    description:
      "A WebGL-powered animated fluid effect with chromatic glint highlights and dynamic lighting.",
    url: "https://forgeui.in/components/chromatic-fluid/preview",
    siteName: "ForgeUI",
    images: [
      {
        url: "https://forgeui.in/ogimage-forgeui.png",
        width: 1200,
        height: 630,
        alt: "Chromatic Fluid Preview | ForgeUI",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chromatic Fluid Preview | ForgeUI",
    description:
      "A WebGL-powered animated fluid effect with chromatic highlights.",
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
  return <LivePreviewChromaticFluidPage />;
};

export default Preview;
