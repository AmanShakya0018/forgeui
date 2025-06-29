import { redirect } from "next/navigation";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Components | ForgeUI",
  description:
    "ForgeUI — a modern, open-source UI library built with React and Tailwind CSS.",
};

export default function DashboardPage() {
  redirect("/components/animated-form");
}
