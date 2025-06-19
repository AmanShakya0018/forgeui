import React, { ReactNode } from "react";

interface MainTitleProps {
  children: ReactNode;
}

const MainTitle = ({ children }: MainTitleProps) => {
  return (
    <h1 id="preview" className="mb-3 text-3xl font-bold sm:text-4xl">
      {children}
    </h1>
  );
};

export default MainTitle;
