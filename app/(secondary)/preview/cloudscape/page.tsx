import React from "react";
import type { Metadata } from "next";
import LivePreviewComponent from "@/components/layout/livepreview";
import { LivePreviewCloudscapePage } from "@/app/(primary)/components/cloudscape/_components/preview";

export const metadata: Metadata = {
  title: "Cloudscape Preview | ForgeUI",
  description:
    "Beautiful cloudscape visual component built with React, Tailwind CSS and Framer Motion. Copy and paste into your projects. Free, open-source UI component.",
  keywords: [
    "cloudscape",
    "cloud animation",
    "background effect",
    "framer motion cloudscape",
    "tailwind css animation",
    "forgeui",
    "ui component",
    "open source ui",
  ],
  authors: [{ name: "Aman Shakya", url: "https://amanshakya.in" }],
  creator: "Aman Shakya",
  publisher: "Aman Shakya",
  openGraph: {
    title: "Cloudscape Preview | ForgeUI",
    description:
      "Beautiful cloudscape visual component built with React, Tailwind CSS and Framer Motion. Free, open-source UI component.",
    url: "https://forgeui.in/components/cloudscape/preview",
    siteName: "ForgeUI",
    images: [
      {
        url: "https://forgeui.in/ogimage-forgeui.png",
        width: 1200,
        height: 630,
        alt: "Cloudscape Preview | ForgeUI",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cloudscape Preview | ForgeUI",
    description:
      "Beautiful cloudscape visual component built with React, Tailwind CSS and Framer Motion.",
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
      <LivePreviewCloudscapePage />
    </LivePreviewComponent>
  );
};

export default Preview;