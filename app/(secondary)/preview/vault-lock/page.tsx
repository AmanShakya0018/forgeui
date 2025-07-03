import VaultLock from "@/app/(primary)/components/vault-lock/_components/vault-lock";
import LivePreviewComponent from "@/components/layout/livepreview";
import React from "react";

const Preview = () => {
  return (
    <LivePreviewComponent>
      <VaultLock />
    </LivePreviewComponent>
  );
};

export default Preview;
