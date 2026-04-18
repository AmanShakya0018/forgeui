import React from "react";
import type { Metadata } from "next";
import { LivePreviewVeloraPage } from "@/app/(primary)/components/velora/_components/preview";

export const metadata: Metadata = {
  title: "Velora Preview | ForgeUI",
  description:
    "A WebGL-powered animated radial light effect with swirling color streaks, 3D noise-based flow, and dynamic color transitions. Built with React and shaders. Copy and paste into your projects.",
  keywords: [
    "radial light animation",
    "swirling light effect",
    "webgl background",
    "shader animation",
    "light effect",
    "react background animation",
    "forgeui",
    "ui component",
  ],
  authors: [{ name: "Aman Shakya", url: "https://amanshakya.in" }],
  creator: "Aman Shakya",
  publisher: "Aman Shakya",
  openGraph: {
    title: "Velora Preview | ForgeUI",
    description:
      "A WebGL-powered animated radial light effect with swirling color streaks and dynamic transitions.",
    url: "https://forgeui.in/components/velora/preview",
    siteName: "ForgeUI",
    images: [
      {
        url: "https://forgeui.in/ogimage-forgeui.png",
        width: 1200,
        height: 630,
        alt: "Velora Preview | ForgeUI",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Velora Preview | ForgeUI",
    description:
      "A WebGL-powered animated radial light effect with swirling streaks.",
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
  return <LivePreviewVeloraPage />;
};

export default Preview;
