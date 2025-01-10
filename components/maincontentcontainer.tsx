import React, { ReactNode } from 'react';

interface MainContentContainerProps {
  children: ReactNode;
}

const MainContentContainer = ({ children }: MainContentContainerProps) => {
  return (
    <article className="container lg:pl-8 py-6 max-w-6xl mx-auto">
      {children}
    </article>
  );
};

export default MainContentContainer;
