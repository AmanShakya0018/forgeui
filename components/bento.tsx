import React from "react";
import { IoLogoWebComponent } from "react-icons/io5";
import { BentoGrid, BentoGridItem } from "./bento-grid";
import { TiltedScroll } from "./tilted-scroll";
import { AnimatedBeamDemo } from "./animated-beam";

export function BentoGridFeatures() {
  return (
    <BentoGrid className="max-w-6xl mx-auto md:auto-rows-[20rem]">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={item.className}
          icon={item.icon}
        />
      ))}
    </BentoGrid>
  );
}
const items = [
  {
    header: <TiltedScroll />,
    className: "md:col-span-1",
  },
  {
    title: "ForgeUI: A Component Library Based on Shadcn",
    description: "No need to go anywhere else; ForgeUI provides everything you need to bring your ideas to life, built on the foundation of Shadcn.",
    header: <AnimatedBeamDemo />,
    className: "md:col-span-2",
    icon: <IoLogoWebComponent className="h-4 w-4 text-neutral-500" />,
  },
];
