import React from "react";
import Frameworkagnostic from "./_components/preview";
import type { Metadata } from "next";
import { description, title } from "./_components/show-code";

export const metadata: Metadata = {
  title: `${title} | ForgeUI`,
  description: description,
};
const Page = () => {
  return <Frameworkagnostic />;
};

export default Page;
