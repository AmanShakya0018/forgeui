import React, { ReactNode } from "react";

interface MainContentContainerProps {
  children: ReactNode;
}

const MainContentContainer = ({ children }: MainContentContainerProps) => {
  return (
    <article className="container mx-auto max-w-6xl scroll-smooth py-6 lg:pl-8">
      {children}
    </article>
  );
};

export default MainContentContainer;
