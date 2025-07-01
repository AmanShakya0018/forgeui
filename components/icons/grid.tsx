import React from "react";

const Grid = () => {
  return (
    <div className="grid h-[220px] grid-cols-[1fr_2fr_1fr]">
      <div className="border-b border-r border-dashed border-neutral-800" />
      <div className="border-b border-dashed border-neutral-800" />
      <div className="border-b border-l border-dashed border-neutral-800" />
      <div className="border-r border-dashed border-neutral-800" />
      <div className="w-[200px] border-dashed border-neutral-800" />
      <div className="border-l border-dashed border-neutral-800" />
      <div className="border-r border-t border-dashed border-neutral-800" />
      <div className="border-t border-dashed border-neutral-800" />
      <div className="border-l border-t border-dashed border-neutral-800" />
    </div>
  );
};

export default Grid;
