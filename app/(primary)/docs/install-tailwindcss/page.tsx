import TailwindInstallationPage from "@/components/docs/tailwindinstallationpage";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Install Tailwind CSS | ForgeUI",
  description:
    "Set up Tailwind CSS in your ForgeUI project with this detailed installation guide. Learn how to configure Tailwind, optimize it for React components, and start building responsive, modern UIs with ease.",
  keywords: [
    "Tailwind CSS Installation",
    "Setup Tailwind CSS ForgeUI",
    "Tailwind CSS Next.js Guide",
    "Tailwind Configuration",
    "Responsive UI with Tailwind",
    "ForgeUI Tailwind Setup",
    "Frontend Design System",
    "ForgeUI Documentation",
    "React Tailwind Integration",
    "UI Library Tailwind CSS",
    "Developer Tools",
    "ForgeUI by Aman Shakya",
    "Reusable React Components",
    "Copy Paste UI Components",
    "Next.js Tailwind Setup",
  ],
  authors: [{ name: "Aman Shakya", url: "https://amanshakya.in" }],
  creator: "Aman Shakya",
  publisher: "Aman Shakya",
  openGraph: {
    title: "Install Tailwind CSS for ForgeUI — Full Setup Guide | ForgeUI Docs",
    description:
      "Follow this step-by-step guide to install and configure Tailwind CSS for your ForgeUI project. Build beautiful, responsive UIs with React and Tailwind.",
    url: "https://forgeui.in/docs/tailwind-installation",
    siteName: "ForgeUI",
    images: [
      {
        url: "https://forgeui.in/forgeui-ogimage-v2.png",
        width: 1200,
        height: 630,
        alt: "ForgeUI Documentation Open Graph Image",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Install Tailwind CSS for ForgeUI — Full Setup Guide | ForgeUI Docs",
    description:
      "Learn how to install Tailwind CSS for ForgeUI with this easy-to-follow guide. Configure Tailwind with React to start building modern, responsive UIs.",
    images: ["https://forgeui.in/forgeui-ogimage-v2.png"],
    site: "@amanshakya0018",
    creator: "@amanshakya0018",
  },
  icons: {
    icon: "/favicon.ico",
  },
  category: "developer",
};
const TailwindInstallation = () => {
  return <TailwindInstallationPage />;
};

export default TailwindInstallation;
