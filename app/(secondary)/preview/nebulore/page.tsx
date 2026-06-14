import React from "react";
import type { Metadata } from "next";
import { LivePreviewNebulorePage } from "@/app/(primary)/components/nebulore/_components/preview";

export const metadata: Metadata = {
  title: "Nebulore Preview | ForgeUI",
  description:
    "Beautiful nebulore visual component built with React, Tailwind CSS and WebGL. Copy and paste into your projects. Free, open-source UI component.",
  keywords: [
    "nebulore",
    "nebula animation",
    "background effect",
    "webgl nebula",
    "tailwind css animation",
    "forgeui",
    "ui component",
    "open source ui",
  ],
  authors: [{ name: "Aman Shakya", url: "https://amanshakya.in" }],
  creator: "Aman Shakya",
  publisher: "Aman Shakya",
  openGraph: {
    title: "Nebulore Preview | ForgeUI",
    description:
      "Beautiful nebulore visual component built with React, Tailwind CSS and WebGL. Free, open-source UI component.",
    url: "https://forgeui.in/components/nebulore/preview",
    siteName: "ForgeUI",
    images: [
      {
        url: "https://forgeui.in/ogimage-forgeui.png",
        width: 1200,
        height: 630,
        alt: "Nebulore Preview | ForgeUI",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nebulore Preview | ForgeUI",
    description:
      "Beautiful nebulore visual component built with React, Tailwind CSS and WebGL.",
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
  return <LivePreviewNebulorePage />;
};

export default Preview;
