import AnimatedOTP from "@/app/(primary)/components/animated-otp/_components/animated-otp";
import LivePreviewComponent from "@/components/layout/livepreview";
import React from "react";

const Preview = () => {
  return (
    <LivePreviewComponent>
      <AnimatedOTP />
    </LivePreviewComponent>
  );
};

export default Preview;
