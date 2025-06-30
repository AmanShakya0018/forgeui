import TextReveal from "@/app/(primary)/components/text-reveal/_components/text-reveal";
import LivePreviewComponent from "@/components/layout/livepreview";
import React from "react";

const text = `ForgeUI is a beautifully designed component library built with Tailwind CSS and Motion. It helps developers build modern, animated UIs faster, with consistent styling and production-ready components.
`;

const Preview = () => {
  return (
    <LivePreviewComponent>
      <TextReveal
        staggerDelay={0.2}
        text={text}
        className="mx-auto max-w-3xl text-lg font-semibold"
      />
    </LivePreviewComponent>
  );
};

export default Preview;
