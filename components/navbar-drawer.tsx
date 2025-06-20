"use client";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ScrollArea } from "./ui/scroll-area";
import { introItems, primaryItems } from "@/contants";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import Anchor from "./ui/anchor-single";
import Image from "next/image";
import Link from "next/link";

const NavbarDrawer = () => {
  const sortedPrimaryItems = [...primaryItems].sort((a, b) =>
    a.name.localeCompare(b.name),
  );

  return (
    <Sheet>
      <SheetTrigger>
        <HiOutlineMenuAlt2 className="h-10 w-10 rounded-lg p-2 hover:bg-slate-100 dark:hover:bg-neutral-900" />
      </SheetTrigger>
      <SheetContent side={"left"} className="p-2">
        <SheetHeader>
          <div className="ml-1 mt-2 flex items-center">
            <Link href="/" className="flex items-center space-x-1.5">
              <Image
                src="/logo-ui.png"
                width={500}
                height={500}
                priority={false}
                alt="Logo"
                unoptimized={true}
                className="h-7 w-7 rounded-xl"
              />
              <span className="text-xl font-bold">Forge UI</span>
            </Link>
          </div>
          <SheetTitle></SheetTitle>
          <SheetDescription></SheetDescription>
          <ScrollArea className="flex h-[calc(100vh-10rem)] w-full flex-col gap-4 py-2">
            <div className="flex flex-col gap-6 pr-6">
              <div className="flex flex-col gap-1">
                <div className="flex px-3 py-2 text-[0.8rem] font-normal uppercase tracking-widest text-muted-foreground/70">
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
                <div className="flex px-3 py-2 text-[0.8rem] font-normal uppercase tracking-widest text-muted-foreground/70">
                  All Components
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
          </ScrollArea>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default NavbarDrawer;
