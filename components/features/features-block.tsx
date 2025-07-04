"use client";

import React from "react";
import dynamic from "next/dynamic";
import LazyShow from "../layout/lazy-show";
import BuildComponents, { ExploreComponentsButton } from "./build-components";
import SecurityCard from "./security-card";
import BotDetection from "./bot-detection";
import AnimatedOTP from "./animated-otp";
import NotificationCenter from "./notification-center";
import BuildFeature from "./build-feature";
const CliCompatible = dynamic(() => import("./cli-compatible"), { ssr: false });
const BuildWithForgeUI = dynamic(() => import("./build-with-forgeui"), {
  ssr: false,
});

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
        <LazyShow
          fallback={
            <div className="h-[400px] w-full animate-pulse rounded-md bg-neutral-900/50" />
          }
        >
          <CliCompatible />
        </LazyShow>
        <LazyShow
          fallback={
            <div className="h-[400px] w-full animate-pulse rounded-md bg-neutral-900/50" />
          }
        >
          <BuildWithForgeUI />
        </LazyShow>
      </div>
    </div>
  );
};

export default FeaturesBlock;
