import { cn } from "@/lib/utils";
import React from "react";

type ScreenNoticeProps = {
  text: string;
  className?: string;
};

const ScreenNotice = ({ text, className }: ScreenNoticeProps) => {
  return (
    <p
      className={cn(
        "mt-0.5 w-full text-right text-[10px] text-primary/30",
        className,
      )}
    >
      {text}
    </p>
  );
};

export default ScreenNotice;
