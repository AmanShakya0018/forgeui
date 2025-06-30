import NotificationCenter from "@/app/(primary)/components/notification-center/_components/notification-center";
import LivePreviewComponent from "@/components/layout/livepreview";
import React from "react";

const Preview = () => {
  return (
    <LivePreviewComponent>
      <NotificationCenter />
    </LivePreviewComponent>
  );
};

export default Preview;
