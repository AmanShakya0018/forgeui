"use client"
import React from 'react'
import { Menu } from 'lucide-react';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { ScrollArea } from './ui/scroll-area';
import { navItems } from '@/contants';
import { primaryItems } from '@/contants';
import Link from 'next/link';

const NavbarDrawer = () => {

  const sortedPrimaryItems = [...primaryItems].sort((a, b) => a.name.localeCompare(b.name));

  return (
    <Drawer>
      <DrawerTrigger><Menu className="w-10 h-10 hover:bg-slate-100 dark:hover:bg-neutral-900 p-2 rounded-lg" /></DrawerTrigger>
      <DrawerContent>
        <DrawerTitle></DrawerTitle>
        <DrawerDescription></DrawerDescription>
        <ScrollArea className="h-80 flex flex-col w-full gap-4 pr-2 py-2 mx-1">
          <div className="my-2">
            {navItems.map((item) => (
              <a key={item.name} href={item.href} className="block text-[0.95rem] px-4 py-2 text-gray-900 hover:bg-slate-100 dark:text-gray-100 dark:hover:bg-neutral-900 rounded-lg relative">
                {item.name}
              </a>
            ))}
            <Link href="https://twitter.com/AmanShakya0018" target="_blank">
              <p className="block px-4 py-2 text-gray-900 hover:bg-slate-100 dark:text-gray-100 dark:hover:bg-neutral-900 rounded-lg relative">Twitter</p>
            </Link>
            <Link href="https://www.linkedin.com/in/amanshakya0018/" target="_blank">
              <p className="block px-4 py-2 text-gray-900 hover:bg-slate-100 dark:text-gray-100 dark:hover:bg-neutral-900 rounded-lg relative">LinkedIn</p>
            </Link>
            <div className="border-b border-y-2 rounded-lg border-slate-300 dark:border-neutral-800 mx-2 mt-2"></div>
          </div>
          <div>
            <div className="mb-2">
              <Link href="https://x.com/AmanShakya0018" target="_blank" rel="noopener noreferrer">
                <p className="block px-4 py-2 text-[1rem] font-semibold text-gray-900 dark:text-gray-100 rounded-lg relative">Follow for updates</p><p className="block px-4 py-2 text-[0.9rem] text-gray-900 hover:bg-slate-100 dark:text-neutral-400 dark:hover:bg-neutral-900 rounded-lg relative">X @amanshakya0018</p>
              </Link>
            </div>

            <div className="border-b border-y-2 rounded-lg border-slate-300 dark:border-neutral-800 mx-2"></div>
            <div>
              <p className="block px-4 py-2 text-[1rem] font-semibold text-gray-900 dark:text-gray-100 rounded-lg relative">Getting Started</p>
              <a
                key="introduction"
                href={"/introduction"}
                className="block px-4 py-2 text-[0.95rem] text-gray-900 hover:bg-slate-100 dark:text-neutral-400 dark:hover:bg-neutral-900 rounded-lg relative"
              >
                Introduction
              </a>
              <a
                key="installation"
                href={"/installation"}
                className="block px-4 py-2 text-[0.95rem] text-gray-900 hover:bg-slate-100 dark:text-neutral-400 dark:hover:bg-neutral-900 rounded-lg relative"
              >
                Installation
              </a>
            </div>
            <div className="border-b border-y-2 rounded-lg border-slate-300 dark:border-neutral-800 mx-2 mt-2"></div>
            <div>
              <p className="block px-4 py-2 text-[1rem] font-semibold text-gray-900 dark:text-gray-100 rounded-lg relative">All Components</p>
              {sortedPrimaryItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-2 text-[0.95rem] text-gray-900 hover:bg-slate-100 dark:text-neutral-400 dark:hover:bg-neutral-900 rounded-lg relative"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </ScrollArea>
        <DrawerFooter>
          <DrawerClose>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}

export default NavbarDrawer