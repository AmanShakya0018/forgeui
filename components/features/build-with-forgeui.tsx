import FeaturesContainer from "./features-container";
import NewNextApp from "./new-next-app";
import { Layers } from "lucide-react";

const BuildWithForgeUI = () => {
  return (
    <FeaturesContainer>
      <div className="mb-4 inline-flex items-center gap-2 text-sm font-medium">
        <Layers className="h-4 w-4" />
        <p>Build with ForgeUI</p>
      </div>
      <p className="mb-6 text-balance text-primary/70">
        Create beautiful, accessible UI components with ForgeUI&apos;s powerful
        toolkit built on top of shadcn/ui foundation.
      </p>
      <NewNextApp />
    </FeaturesContainer>
  );
};

export default BuildWithForgeUI;
