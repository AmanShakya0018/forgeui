import React from "react";

type FeaturesContainerProps = {
  children: React.ReactNode;
};

const FeaturesContainer = ({ children }: FeaturesContainerProps) => {
  return (
    <div className="flex w-full flex-col gap-2 rounded-2xl border border-secondary/50 px-6 py-6 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] md:py-10">
      {children}
    </div>
  );
};

export default FeaturesContainer;
