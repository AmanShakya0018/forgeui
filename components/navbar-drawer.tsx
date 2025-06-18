"use client";
import React from "react";
import { Menu } from "lucide-react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { ScrollArea } from "./ui/scroll-area";
import { navItems } from "@/contants";
import { primaryItems } from "@/contants";
import Link from "next/link";

const NavbarDrawer = () => {
  const sortedPrimaryItems = [...primaryItems].sort((a, b) =>
    a.name.localeCompare(b.name),
  );

  return (
    <Drawer>
      <DrawerTrigger>
        <Menu className="h-10 w-10 rounded-lg p-2 hover:bg-slate-100 dark:hover:bg-neutral-900" />
      </DrawerTrigger>
      <DrawerContent>
        <DrawerTitle></DrawerTitle>
        <DrawerDescription></DrawerDescription>
        <ScrollArea className="mx-1 flex h-80 w-full flex-col gap-4 py-2 pr-2">
          <div className="my-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="relative block rounded-lg px-4 py-2 text-[0.95rem] text-gray-900 hover:bg-slate-100 dark:text-gray-100 dark:hover:bg-neutral-900"
              >
                {item.name}
              </a>
            ))}
            <Link href="https://twitter.com/AmanShakya0018" target="_blank">
              <p className="relative block rounded-lg px-4 py-2 text-gray-900 hover:bg-slate-100 dark:text-gray-100 dark:hover:bg-neutral-900">
                Twitter
              </p>
            </Link>
            <Link
              href="https://www.linkedin.com/in/amanshakya0018/"
              target="_blank"
            >
              <p className="relative block rounded-lg px-4 py-2 text-gray-900 hover:bg-slate-100 dark:text-gray-100 dark:hover:bg-neutral-900">
                LinkedIn
              </p>
            </Link>
            <div className="mx-2 mt-2 rounded-lg border-y-2 border-b border-slate-300 dark:border-neutral-800"></div>
          </div>
          <div>
            <div>
              <p className="relative block rounded-lg px-4 py-2 text-[1rem] font-semibold text-gray-900 dark:text-gray-100">
                Getting Started
              </p>
              <a
                key="introduction"
                href={"/docs/introduction"}
                className="relative block rounded-lg px-4 py-2 text-[0.95rem] text-gray-900 hover:bg-slate-100 dark:text-neutral-400 dark:hover:bg-neutral-900"
              >
                Introduction
              </a>
              <a
                key="install-nextjs"
                href={"/install-nextjs"}
                className="relative block rounded-lg px-4 py-2 text-[0.95rem] text-gray-900 hover:bg-slate-100 dark:text-neutral-400 dark:hover:bg-neutral-900"
              >
                Install Next.js
              </a>
              <a
                key="install-tailwindcss"
                href={"/install-tailwindcss"}
                className="relative block rounded-lg px-4 py-2 text-[0.95rem] text-gray-900 hover:bg-slate-100 dark:text-neutral-400 dark:hover:bg-neutral-900"
              >
                Install Tailwind CSS
              </a>
            </div>
            <div className="mx-2 mt-2 rounded-lg border-y-2 border-b border-slate-300 dark:border-neutral-800"></div>
            <div>
              <p className="relative block rounded-lg px-4 py-2 text-[1rem] font-semibold text-gray-900 dark:text-gray-100">
                All Components
              </p>
              {sortedPrimaryItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="relative block rounded-lg px-4 py-2 text-[0.95rem] text-gray-900 hover:bg-slate-100 dark:text-neutral-400 dark:hover:bg-neutral-900"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </ScrollArea>
        <DrawerFooter>
          <DrawerClose></DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default NavbarDrawer;
