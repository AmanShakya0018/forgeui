import React from "react";
import CliCompatible from "./cli-compatible";
import BuildWithForgeUI from "./build-with-forgeui";

const FeaturesBlock = () => {
  return (
    <div className="mb-20 grid grid-cols-1 gap-4 md:grid-cols-2">
      <CliCompatible />
      <BuildWithForgeUI />
    </div>
  );
};

export default FeaturesBlock;
