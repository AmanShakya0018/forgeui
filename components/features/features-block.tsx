import CliCompatible from "./cli-compatible";
import BuildWithForgeUI from "./build-with-forgeui";
import BuildFeature from "./build-feature";
import SecurityCard from "./security-card";
import BotDetection from "./bot-detection";
import AnimatedOTP from "./animated-otp";
import NotificationCenter from "./notification-center";
import BuildComponents, { ExploreComponentsButton } from "./build-components";

const FeaturesBlock = () => {
  return (
    <div className="flex min-h-screen flex-col items-center gap-4 py-12 lg:py-6">
      <BuildComponents />
      <div className="mt-5 grid w-full grid-cols-1 gap-4 md:grid-cols-2">
        <SecurityCard />
        <BotDetection />
      </div>
      <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <div className="md:col-span-1 lg:col-span-2">
          <AnimatedOTP />
        </div>
        <div className="md:col-span-1 lg:col-span-1">
          <NotificationCenter />
        </div>
      </div>
      <ExploreComponentsButton />
      <BuildFeature />
      <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2">
        <CliCompatible />
        <BuildWithForgeUI />
      </div>
    </div>
  );
};

export default FeaturesBlock;
