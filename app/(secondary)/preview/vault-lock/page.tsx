import React from "react";
import type { Metadata } from "next";
import LivePreviewComponent from "@/components/layout/livepreview";
import { LivePreviewVaultLock } from "@/app/(primary)/components/vault-lock/_components/preview";

export const metadata: Metadata = {
  title: "Vault Lock Preview | ForgeUI",
  description:
    "Beautiful vault lock component built with React, Tailwind CSS and Framer Motion. Copy and paste into your projects. Free, open-source UI component.",
  keywords: [
    "vault lock",
    "lock component",
    "security lock",
    "framer motion lock",
    "tailwind css lock",
    "forgeui",
    "ui component",
    "open source ui",
  ],
  authors: [{ name: "Aman Shakya", url: "https://amanshakya.in" }],
  creator: "Aman Shakya",
  publisher: "Aman Shakya",
  openGraph: {
    title: "Vault Lock Preview | ForgeUI",
    description:
      "Beautiful vault lock component built with React, Tailwind CSS and Framer Motion. Free, open-source UI component.",
    url: "https://forgeui.in/components/vault-lock/preview",
    siteName: "ForgeUI",
    images: [
      {
        url: "https://forgeui.in/ogimage-forgeui.png",
        width: 1200,
        height: 630,
        alt: "Vault Lock Preview | ForgeUI",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vault Lock Preview | ForgeUI",
    description:
      "Beautiful vault lock component built with React, Tailwind CSS and Framer Motion.",
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
      <LivePreviewVaultLock />
    </LivePreviewComponent>
  );
};

export default Preview;