import React from "react";

const Grid = () => {
  return (
    <div className="grid h-[220px] grid-cols-[1fr_2fr_1fr]">
      <div className="border-b border-r border-dashed" />
      <div className="border-b border-dashed" />
      <div className="border-b border-l border-dashed" />
      <div className="border-r border-dashed" />
      <div className="w-[200px] border-dashed" />
      <div className="border-l border-dashed" />
      <div className="border-r border-t border-dashed" />
      <div className="border-t border-dashed" />
      <div className="border-l border-t border-dashed" />
    </div>
  );
};

export default Grid;
