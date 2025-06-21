import { Terminal } from "lucide-react";
import Grid from "../icons/grid";
import FeaturesContainer from "./features-container";

const CliCompatible = () => {
  return (
    <FeaturesContainer>
      <div className="mb-4 inline-flex items-center gap-2 text-sm font-medium">
        <Terminal className="h-4 w-4" />
        <p>Forge/ui CLI</p>
      </div>
      <p className="text-balance text-primary/70">
        ForgeUI CLI seamlessly integrates with shadcn/ui, providing enhanced
        components and utilities to accelerate your development workflow.
      </p>

      <div className="relative mt-6">
        <Grid />
        <code className="absolute inset-0 flex items-center justify-center">
          <code className="bg-gradient-to-r from-neutral-500 to-neutral-400 bg-clip-text text-sm font-medium text-transparent dark:from-neutral-400 dark:to-neutral-300">
            npx shadcn@latest add
          </code>
        </code>
      </div>
    </FeaturesContainer>
  );
};

export default CliCompatible;
