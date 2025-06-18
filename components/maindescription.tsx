import React, { ReactNode } from "react";

interface MainDescriptionProps {
  children: ReactNode;
}

const MainDescription = ({ children }: MainDescriptionProps) => {
  return <p className="mt-0 text-neutral-500 dark:text-zinc-400">{children}</p>;
};

export default MainDescription;
