import React, { ReactNode } from 'react';

interface MainDescriptionProps {
  children: ReactNode;
}

const MainDescription = ({ children }: MainDescriptionProps) => {
  return <p className="text-lg mt-0 text-neutral-400">{children}</p>;
};

export default MainDescription;
