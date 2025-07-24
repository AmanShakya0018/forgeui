import FrameworkAgnostic from "@/app/(primary)/components/framework-agnostic/_components/framework-agnostic";
import LivePreviewComponent from "@/components/layout/livepreview";
import React from "react";

const Preview = () => {
  return (
    <LivePreviewComponent>
      <FrameworkAgnostic />
    </LivePreviewComponent>
  );
};

export default Preview;
