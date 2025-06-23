import { Terminal } from "lucide-react";
import Grid from "../icons/grid";
import FeaturesContainer from "./features-container";
import TextShimmer from "@/app/(primary)/components/text-shimmer/_components/text-shimmer";

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
          <code className="text-sm font-medium">
            <TextShimmer duration={3} repeatDelay={0.5}>
              npx shadcn@latest add
            </TextShimmer>
          </code>
        </code>
      </div>
    </FeaturesContainer>
  );
};

export default CliCompatible;
