import { redirect } from "next/navigation";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Documentation | ForgeUI",
  description:
    "Explore the ForgeUI documentation to learn how to integrate and customize beautifully designed, open-source React components with Tailwind CSS.",
};

export default function DocsPage() {
  redirect("/docs/introduction");
}
