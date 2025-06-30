import AnimatedTabs from "@/app/(primary)/components/animated-tabs/_components/animated-tabs";
import LivePreviewComponent from "@/components/layout/livepreview";
import React from "react";

const tabs = ["Home", "Components", "Docs", "Templates"];

const Preview = () => {
  return (
    <LivePreviewComponent>
      <AnimatedTabs tabs={tabs} />
    </LivePreviewComponent>
  );
};

export default Preview;
