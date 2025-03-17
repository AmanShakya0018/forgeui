import React, { ReactNode } from 'react';

interface LivePreviewComponentProps {
  children: ReactNode;
}

const LivePreviewComponent = ({ children }: LivePreviewComponentProps) => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      {children}
    </div>
  );
};

export default LivePreviewComponent;
