import React, { ReactNode } from 'react';

interface MainTitleProps {
  children: ReactNode;
}

const MainTitle = ({ children }: MainTitleProps) => {
  return <h1 className="mb-2 text-4xl font-bold">{children}</h1>;
};

export default MainTitle;
