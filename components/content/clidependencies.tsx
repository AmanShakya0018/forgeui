import React, { ReactNode } from "react";

interface SectionProps {
  title?: string;
  children?: ReactNode;
}

const CliDependencies = ({ title, children }: SectionProps) => {
  return (
    <div className="flex flex-col gap-5">
      <div className="space-y-4 py-6">
        <h2 className="font-medium text-primary/90">{title}</h2>
        <span className="pl-7">{children}</span>
      </div>
    </div>
  );
};

export default CliDependencies;
