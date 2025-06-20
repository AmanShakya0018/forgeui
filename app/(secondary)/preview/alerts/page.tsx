import Alert from "@/app/(primary)/components/alerts/_components/alert";
import LivePreviewComponent from "@/components/livepreview";
import React from "react";

const AlertsPreview = () => {
  return (
    <LivePreviewComponent>
      <Alert />
    </LivePreviewComponent>
  );
};

export default AlertsPreview;
