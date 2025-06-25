import AnimatedForm from "@/app/(primary)/components/animated-form/_components/animated-form";
import LivePreviewComponent from "@/components/layout/livepreview";
import React from "react";

const TextRenderingPreview = () => {
  return (
    <LivePreviewComponent>
      <AnimatedForm />
    </LivePreviewComponent>
  );
};

export default TextRenderingPreview;
