import React from "react";
import { GoTerminal } from "react-icons/go";

const MacControls = () => {
  return (
    <>
      <GoTerminal className="mr-1 size-4 text-white/40" />
      <div className="h-2 w-2 rounded-full bg-red-500" />
      <div className="h-2 w-2 rounded-full bg-yellow-500" />
      <div className="h-2 w-2 rounded-full bg-green-500" />
    </>
  );
};

export default MacControls;
