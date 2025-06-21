import CliCompatible from "./cli-compatible";
import BuildWithForgeUI from "./build-with-forgeui";
import BuildFeature from "./build-feature";
import TextShimmer from "@/app/(primary)/components/text-shimmer/_components/text-shimmer";

const FeaturesBlock = () => {
  return (
    <div className="flex min-h-screen flex-col items-center gap-6 py-12 lg:py-6">
      <BuildFeature />
      <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2">
        <CliCompatible />
        <BuildWithForgeUI />
      </div>
      <TextShimmer className="py-4 text-sm" duration={2}>
        In Development...
      </TextShimmer>
    </div>
  );
};

export default FeaturesBlock;
