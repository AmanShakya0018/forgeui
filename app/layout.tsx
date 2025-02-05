import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Provider from "@/provider/provider";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Toaster } from "@/components/ui/toaster";
import { Analytics } from "@vercel/analytics/react"


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
      <body
        className={cn("min-h-screen font-sans antialiased bg-background dark:bg-black ", inter.variable)}
      >
        <Provider>
          <div className={cn("relative flex min-h-dvh flex-col bg-background dark:bg-black")}>
            <Navbar />
            <main className="flex-1 px-6">{children}</main>
            <Footer />
            <Toaster />
          </div>
        </Provider>
        <Analytics />
      </body>
    </html>
  );
}
