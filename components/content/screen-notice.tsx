import React from "react";

type ScreenNoticeProps = {
  text: string;
};

const ScreenNotice = ({ text }: ScreenNoticeProps) => {
  return (
    <p className="mt-0.5 block w-full text-right text-[10px] text-primary/30 [@media(min-width:400px)]:hidden">
      {text}
    </p>
  );
};

export default ScreenNotice;
