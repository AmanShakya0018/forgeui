import React from "react";
import type { Metadata } from "next";
import { LivePreviewAuralisPage } from "@/app/(primary)/components/auralis/_components/preview";

export const metadata: Metadata = {
  title: "Auralis Preview | ForgeUI",
  description:
    "A WebGL-powered animated background featuring layered simplex noise, glowing light effects, vignette, and subtle film grain for a dramatic ambiance. Built with React and shaders. Copy and paste into your projects.",
  keywords: [
    "glow background",
    "light effect animation",
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
    title: "Auralis Preview | ForgeUI",
    description:
      "A WebGL-powered animated background with glowing light effects and film grain.",
    url: "https://forgeui.in/components/auralis/preview",
    siteName: "ForgeUI",
    images: [
      {
        url: "https://forgeui.in/ogimage-forgeui.png",
        width: 1200,
        height: 630,
        alt: "Auralis Preview | ForgeUI",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Auralis Preview | ForgeUI",
    description:
      "A WebGL-powered animated background with glowing light effects.",
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
  return <LivePreviewAuralisPage />;
};

export default Preview;
