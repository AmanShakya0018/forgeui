import React from "react";
import type { Metadata } from "next";
import { LivePreviewNotificationCenter } from "@/app/(primary)/components/notification-center/_components/preview";

export const metadata: Metadata = {
  title: "Notification Center Preview | ForgeUI",
  description:
    "Beautiful notification center component built with React, Tailwind CSS and Framer Motion. Copy and paste into your projects. Free, open-source UI component.",
  keywords: [
    "notification center",
    "react notification",
    "notification component",
    "framer motion notification",
    "tailwind css notification",
    "forgeui",
    "ui component",
    "open source ui",
  ],
  authors: [{ name: "Aman Shakya", url: "https://amanshakya.in" }],
  creator: "Aman Shakya",
  publisher: "Aman Shakya",
  openGraph: {
    title: "Notification Center Preview | ForgeUI",
    description:
      "Beautiful notification center component built with React, Tailwind CSS and Framer Motion. Free, open-source UI component.",
    url: "https://forgeui.in/components/notification-center/preview",
    siteName: "ForgeUI",
    images: [
      {
        url: "https://forgeui.in/ogimage-forgeui.png",
        width: 1200,
        height: 630,
        alt: "Notification Center Preview | ForgeUI",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Notification Center Preview | ForgeUI",
    description:
      "Beautiful notification center component built with React, Tailwind CSS and Framer Motion.",
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
  return <LivePreviewNotificationCenter />;
};

export default Preview;