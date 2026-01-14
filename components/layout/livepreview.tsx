import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

interface LivePreviewComponentProps {
  children: ReactNode;
  className?: string;
}

const LivePreviewComponent = ({
  children,
  className,
}: LivePreviewComponentProps) => {
  return (
    <div
      className={cn(
        "flex min-h-screen items-center justify-center px-2",
        className,
      )}
    >
      {children}
    </div>
  );
};

export default LivePreviewComponent;
