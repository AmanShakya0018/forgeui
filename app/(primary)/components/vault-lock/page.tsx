import React from "react";
import type { Metadata } from "next";
import { description, title } from "./_components/show-code";
import Vaultlock from "./_components/preview";

export const metadata: Metadata = {
  title: `${title} | ForgeUI`,
  description: description,
};
const Page = () => {
  return <Vaultlock />;
};

export default Page;
