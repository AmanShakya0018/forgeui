import React from "react";
import type { Metadata } from "next";
import { LivePreviewNotificationPanel } from "@/app/(primary)/components/notification-panel/_components/preview";

export const metadata: Metadata = {
  title: "Notification Panel Preview | ForgeUI",
  description:
    "Beautiful notification panel component built with React, Tailwind CSS and Framer Motion. Copy and paste into your projects. Free, open-source UI component.",
  keywords: [
    "notification panel",
    "react notification panel",
    "panel component",
    "framer motion panel",
    "tailwind css panel",
    "forgeui",
    "ui component",
    "open source ui",
  ],
  authors: [{ name: "Aman Shakya", url: "https://amanshakya.in" }],
  creator: "Aman Shakya",
  publisher: "Aman Shakya",
  openGraph: {
    title: "Notification Panel Preview | ForgeUI",
    description:
      "Beautiful notification panel component built with React, Tailwind CSS and Framer Motion. Free, open-source UI component.",
    url: "https://forgeui.in/components/notification-panel/preview",
    siteName: "ForgeUI",
    images: [
      {
        url: "https://forgeui.in/ogimage-forgeui.png",
        width: 1200,
        height: 630,
        alt: "Notification Panel Preview | ForgeUI",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Notification Panel Preview | ForgeUI",
    description:
      "Beautiful notification panel component built with React, Tailwind CSS and Framer Motion.",
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
  return <LivePreviewNotificationPanel />;
};

export default Preview;