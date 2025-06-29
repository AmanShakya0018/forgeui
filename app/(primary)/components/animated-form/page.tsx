import React from "react";
import Animatedform from "./_components/preview";
import type { Metadata } from "next";
import { description, title } from "./_components/show-code";

export const metadata: Metadata = {
  title: `${title} | ForgeUI`,
  description: description,
};
const Page = () => {
  return <Animatedform />;
};

export default Page;
