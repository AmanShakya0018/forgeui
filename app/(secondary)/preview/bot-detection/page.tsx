import BotDetection from "@/app/(primary)/components/bot-detection/_components/bot-detection";
import LivePreviewComponent from "@/components/layout/livepreview";
import React from "react";

const Preview = () => {
  return (
    <LivePreviewComponent>
      <BotDetection />
    </LivePreviewComponent>
  );
};

export default Preview;
