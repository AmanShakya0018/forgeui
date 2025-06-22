import React, { ReactNode } from "react";

interface LivePreviewComponentProps {
  children: ReactNode;
}

const LivePreviewComponent = ({ children }: LivePreviewComponentProps) => {
  return (
    <div className="flex min-h-screen items-center justify-center px-2">
      {children}
    </div>
  );
};

export default LivePreviewComponent;
