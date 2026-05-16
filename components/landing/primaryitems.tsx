"use client";
import React from "react";
import {
  eliteItems,
  introItems,
  primaryItems,
  templates,
  backgroundItems,
} from "@/contants";
import Anchor from "../ui/anchor-single";
import AnchorTemplate from "../ui/anchor-template";

const PrimaryItems = () => {
  const sortedPrimaryItems = [...primaryItems].sort((a, b) =>
    a.name.localeCompare(b.name),
  );

  const sortedEliteItems = [...eliteItems].sort((a, b) =>
    a.name.localeCompare(b.name),
  );

  const sortedBackgroundItems = [...backgroundItems].sort((a, b) =>
    a.name.localeCompare(b.name),
  );

  return (
    <div className="flex flex-col gap-6 pr-6">
      <div className="flex flex-col gap-1">
        <div className="text-muted-foreground/70 px-3 py-2 text-start text-[0.8rem] font-normal tracking-widest uppercase">
          Getting Started
        </div>
        <div className="grid gap-1">
          {introItems.map((item) => (
            <Anchor key={item.name + item.href} href={item.href}>
              {item.name}
            </Anchor>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <div className="text-muted-foreground/70 px-3 py-2 text-start text-[0.8rem] font-normal tracking-widest uppercase">
          Templates
        </div>

        <div className="grid gap-1">
          {templates.map((item) => (
            <AnchorTemplate
              target="_blank"
              key={item.name + item.href}
              href={item.href}
            >
              {item.name}
            </AnchorTemplate>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <div className="text-muted-foreground/70 px-3 py-2 text-start text-[0.8rem] font-normal tracking-widest uppercase">
          Featured Components
        </div>

        <div className="grid gap-1">
          {sortedEliteItems.map((item) => (
            <Anchor key={item.name + item.href} href={item.href}>
              {item.name}
            </Anchor>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <div className="text-muted-foreground/70 px-3 py-2 text-start text-[0.8rem] font-normal tracking-widest uppercase">
          Backgrounds
        </div>

        <div className="grid gap-1">
          {sortedBackgroundItems.map((item) => (
            <Anchor key={item.name + item.href} href={item.href}>
              {item.name}
            </Anchor>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <div className="text-muted-foreground/70 px-3 py-2 text-start text-[0.8rem] font-normal tracking-widest uppercase">
          Basic Components
        </div>

        <div className="grid gap-1">
          {sortedPrimaryItems.map((item) => (
            <Anchor key={item.name + item.href} href={item.href}>
              {item.name}
            </Anchor>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PrimaryItems;
