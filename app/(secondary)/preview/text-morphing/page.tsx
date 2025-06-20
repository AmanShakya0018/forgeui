import TextMorphing from "@/app/(primary)/components/text-morphing/_components/text-morphing";
import LivePreviewComponent from "@/components/livepreview";
import React from "react";

const TextMorphingPreview = () => {
  return (
    <LivePreviewComponent>
      <TextMorphing />
    </LivePreviewComponent>
  );
};

export default TextMorphingPreview;
