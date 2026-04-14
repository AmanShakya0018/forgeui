import React from "react";
import type { Metadata } from "next";
import LivePreviewComponent from "@/components/layout/livepreview";
import { LivePreviewSpectrumSwitcher } from "@/app/(primary)/components/spectrum-switcher/_components/preview";

export const metadata: Metadata = {
  title: "Spectrum Switcher Preview | ForgeUI",
  description:
    "Beautiful spectrum switcher component built with React, Tailwind CSS and Framer Motion. Copy and paste into your projects. Free, open-source UI component.",
  keywords: [
    "spectrum switcher",
    "color switcher",
    "theme switcher",
    "framer motion switcher",
    "tailwind css switcher",
    "forgeui",
    "ui component",
    "open source ui",
  ],
  authors: [{ name: "Aman Shakya", url: "https://amanshakya.in" }],
  creator: "Aman Shakya",
  publisher: "Aman Shakya",
  openGraph: {
    title: "Spectrum Switcher Preview | ForgeUI",
    description:
      "Beautiful spectrum switcher component built with React, Tailwind CSS and Framer Motion. Free, open-source UI component.",
    url: "https://forgeui.in/components/spectrum-switcher/preview",
    siteName: "ForgeUI",
    images: [
      {
        url: "https://forgeui.in/ogimage-forgeui.png",
        width: 1200,
        height: 630,
        alt: "Spectrum Switcher Preview | ForgeUI",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Spectrum Switcher Preview | ForgeUI",
    description:
      "Beautiful spectrum switcher component built with React, Tailwind CSS and Framer Motion.",
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
      <LivePreviewSpectrumSwitcher />
    </LivePreviewComponent>
  );
};

export default Preview;