import SecurityCard from "@/app/(primary)/components/security-card/_components/security-card";
import LivePreviewComponent from "@/components/layout/livepreview";
import React from "react";

const TextRenderingPreview = () => {
  return (
    <LivePreviewComponent>
      <SecurityCard />
    </LivePreviewComponent>
  );
};

export default TextRenderingPreview;
