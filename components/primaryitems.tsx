import React from "react";
import { introItems, primaryItems } from "@/contants";
import Anchor from "./ui/anchor-single";

const PrimaryItems = () => {
  const sortedPrimaryItems = [...primaryItems].sort((a, b) =>
    a.name.localeCompare(b.name),
  );

  return (
    <div className="flex flex-col gap-6 pr-6">
      <div className="flex flex-col gap-1">
        <h4 className="px-3 py-2 text-[0.8rem] font-normal uppercase tracking-widest text-muted-foreground/70">
          Getting Started
        </h4>
        <div className="grid gap-1">
          {introItems.map((item) => (
            <Anchor key={item.name + item.href} matchDepth={2} href={item.href}>
              {item.name}
            </Anchor>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <h4 className="px-3 py-2 text-[0.8rem] font-normal uppercase tracking-widest text-muted-foreground/70">
          All Components
        </h4>
        {sortedPrimaryItems.map((item) => (
          <Anchor key={item.name + item.href} matchDepth={2} href={item.href}>
            {item.name}
          </Anchor>
        ))}
      </div>
    </div>
  );
};

export default PrimaryItems;
