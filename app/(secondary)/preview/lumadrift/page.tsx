import React from "react";
import type { Metadata } from "next";
import { LivePreviewLumaDriftPage } from "@/app/(primary)/components/lumadrift/_components/preview";

export const metadata: Metadata = {
  title: "Luma Drift Preview | ForgeUI",
  description:
    "Live preview of the Luma Drift component — a WebGL-powered animated gradient with smooth, flowing light patterns. Copy and integrate easily into React and Tailwind CSS projects.",
  keywords: [
    "luma drift",
    "animated gradient",
    "webgl background",
    "procedural noise animation",
    "react background effect",
    "tailwind css animation",
    "forgeui",
    "ui component",
    "open source ui",
  ],
  authors: [{ name: "Aman Shakya", url: "https://amanshakya.in" }],
  creator: "Aman Shakya",
  publisher: "Aman Shakya",
  openGraph: {
    title: "Luma Drift Preview | ForgeUI",
    description:
      "Explore the Luma Drift component — a smooth WebGL animated gradient background for modern UI and React apps.",
    url: "https://forgeui.in/components/lumadrift/preview",
    siteName: "ForgeUI",
    images: [
      {
        url: "https://forgeui.in/ogimage-forgeui.png",
        width: 1200,
        height: 630,
        alt: "Luma Drift Preview | ForgeUI",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Luma Drift Preview | ForgeUI",
    description:
      "Preview Luma Drift — a WebGL-powered animated gradient for modern React interfaces.",
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
  return <LivePreviewLumaDriftPage />;
};

export default Preview;
