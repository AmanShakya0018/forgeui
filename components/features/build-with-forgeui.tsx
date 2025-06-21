import React from "react";
import NewNextApp from "./new-next-app";

const BuildWithForgeUI = () => {
  return (
    <div className="flex w-full flex-col gap-2 border px-6 py-12 md:py-16">
      <h3 className="text-xl font-semibold">Build with ForgeUI.</h3>
      <p className="mb-8">
        Set up your project with ForgeUI components and shadcn/ui integration.
      </p>
      <NewNextApp />
    </div>
  );
};

export default BuildWithForgeUI;
