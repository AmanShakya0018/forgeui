import React from "react";
import RequestComponents from "./requestforcomponents";
import Techstacksectionhero from "./techstacksectionhero";
import Herobuttons from "./herobuttons";

const HeroSection = () => {
  return (
    <div className="flex min-h-[100vh] flex-col items-center justify-center">
      <div className="z-[3] flex flex-col items-center justify-center gap-20 text-center">
        <div className="flex flex-col items-center justify-center gap-5">
          <div className="space-y-6">
            <RequestComponents />
            <h1 className="bg-gradient-stop mx-auto max-w-3xl text-balance bg-gradient-to-br from-foreground via-foreground via-50% to-foreground/30 bg-clip-text py-2 text-5xl font-medium leading-[1.1] tracking-tighter text-transparent md:text-6xl lg:text-7xl">
              Build Beautiful UI Faster
            </h1>
          </div>
          <p className="mb-6 max-w-sm text-balance bg-gradient-to-br from-zinc-800/80 via-zinc-700/70 to-zinc-900/40 bg-clip-text text-center text-[0.87rem] text-transparent dark:from-white/70 dark:via-white/70 dark:to-white/30 sm:max-w-[32rem] md:text-[1.15rem]">
            Launch sleek, responsive UIs in minutes using
            ready&#8209;to&#8209;use components built for speed, simplicity, and
            scalability.
          </p>
          <div className="flex items-center justify-center">
            <Herobuttons />
          </div>
        </div>
        <div className="space-y-4">
          <Techstacksectionhero />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
