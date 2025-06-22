import CircularText from "@/app/(primary)/components/circular-text/_components/circulartext";
import LivePreviewComponent from "@/components/livepreview";
import React from "react";

const CircularProgressBarPreview = () => {
  return (
    <LivePreviewComponent>
      <CircularText
        text="FORGEUI*IS*AWESOME*"
        letterClassName="font-[900]"
        radius={65}
        duration={20}
      />
    </LivePreviewComponent>
  );
};

export default CircularProgressBarPreview;
