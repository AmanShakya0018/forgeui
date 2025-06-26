import StatsCard from "@/app/(primary)/components/stats-card/_components/statscard";
import LivePreviewComponent from "@/components/layout/livepreview";
import React from "react";

const TextRenderingPreview = () => {
  return (
    <LivePreviewComponent>
      <StatsCard />
    </LivePreviewComponent>
  );
};

export default TextRenderingPreview;
