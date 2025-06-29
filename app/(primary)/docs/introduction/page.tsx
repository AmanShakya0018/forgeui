import IntroductionPage from "@/components/docs/introductionpage";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Introduction | ForgeUI",
  description:
    "Get started with ForgeUI, an open-source React component library built with Tailwind CSS. Learn the core principles and how to use it in your projects.",
};
export default function Introduction() {
  return <IntroductionPage />;
}
