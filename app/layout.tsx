import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Provider from "@/provider/provider";
import { Toaster } from "@/components/ui/toaster";
import { Analytics } from "@vercel/analytics/react"
import Script from "next/script";


const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
export const metadata: Metadata = {
  title: "Forge UI",
  description: "Future of UI Design",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-pt-[4.2rem]" suppressHydrationWarning={true}>
      <Script
        defer
        data-site="217027c0-3557-4a81-8f84-92043de74a6a"
        src="https://statsio.amanshakya.in/tracker.js"
      />
      <body
        className={cn("min-h-screen font-sans antialiased bg-background dark:bg-black ", inter.variable)}
      >
        <Provider>
          <div className={cn("relative flex min-h-dvh flex-col bg-background dark:bg-black")}>
            <main className="flex-1">{children}</main>
            <Toaster />
          </div>
        </Provider>
        <Analytics />
      </body>
    </html>
  );
}
