import "./globals.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";
import Provider from "@/provider/provider";
import Script from "next/script";
// import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ForgeUI",
  description:
    "Beautifully designed components that you can copy and paste into your apps. Accessible. Customizable. Open Source.",
  keywords: [
    "ForgeUI",
    "UI Library",
    "Component Library",
    "React Components",
    "Next.js",
    "Tailwind CSS",
    "Open Source",
    "Frontend",
    "Design System",
    "Aman Shakya",
    "ForgeUI by Aman",
    "Copy and Paste Components",
    "Developer Tools",
    "Frontend Engineer",
    "Beautiful UI",
    "React UI Kit",
    "Free React Components",
    "Open Source UI Kit",
    "Tailwind UI Components",
    "Headless UI",
    "Reusable React Components",
    "UI Templates",
    "Accessible React Components",
    "Copy-Paste UI",
    "Next.js Component Library",
    "Open Source Developer Tools",
    "Frontend Design System",
    "Minimal UI Kit",
    "Clean React UI",
  ],
  authors: [{ name: "Aman Shakya", url: "https://amanshakya.in" }],
  creator: "Aman Shakya",
  publisher: "Aman Shakya",
  openGraph: {
    title: "ForgeUI",
    description:
      "Beautifully designed components you can copy and paste into your apps. Open Source. Customizable. Accessible.",
    url: "https://forgeui.in",
    siteName: "ForgeUI",
    images: [
      {
        url: "https://forgeui.in/forgeui-ogimage-v2.png",
        width: 1200,
        height: 630,
        alt: "ForgeUI Open Graph Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ForgeUI",
    description:
      "Open source component library built with accessibility and customization in mind.",
    images: ["https://forgeui.in/forgeui-ogimage-v2.png"],
    site: "@amanshakya0018",
    creator: "@amanshakya0018",
  },
  icons: {
    icon: "/favicon.ico",
  },
  category: "developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      {/* <Script
        defer
        data-site="217027c0-3557-4a81-8f84-92043de74a6a"
        src="https://statsio.amanshakya.in/tracker.js"
      /> */}
      <Script
        defer
        src="https://static.cloudflareinsights.com/beacon.min.js"
        strategy="afterInteractive"
      />

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Provider>
          {children}
          <Toaster />
        </Provider>
      </body>
    </html>
  );
}
