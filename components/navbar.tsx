import React from "react";
import { Themetoggle } from "@/components/ui/ThemeToggle";
import Link from "next/link";
import Image from "next/image";
import { navItems } from "@/contants";
import DocumentSearch from "./documentsearch";
import NavbarDrawer from "./navbar-drawer";
import AnchorNav from "./anchor-nav";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-white/5 shadow-lg shadow-neutral-400/5 backdrop-blur-lg dark:bg-neutral-800/5 dark:shadow-neutral-700/5">
      <div className="mx-auto max-w-[95.8rem] border-x px-8">
        <div className="flex h-[3.5rem] items-center justify-between">
          <div className="flex items-center space-x-12">
            <Link href="/" className="flex items-center space-x-1">
              <Image
                src="/logo-ui.png"
                width={30}
                height={30}
                priority={false}
                alt="Logo"
                unoptimized={true}
                className="rounded-xl"
              />
              <span className="text-2xl font-bold">Forge UI</span>
            </Link>

            <div className="hidden items-center space-x-6 lg:flex">
              {navItems.map((item) => (
                <AnchorNav
                  key={item.name + item.href}
                  absolute
                  href={item.href}
                >
                  {item.name}
                </AnchorNav>
              ))}
            </div>
          </div>

          <div className="hidden items-center space-x-4 lg:flex">
            <Link href="https://twitter.com/AmanShakya0018" target="_blank">
              <p className="relative text-sm font-medium text-zinc-500 hover:text-foreground/80 dark:text-zinc-400">
                Twitter
              </p>
            </Link>
            <Link
              href="https://www.linkedin.com/in/amanshakya0018/"
              target="_blank"
            >
              <p className="relative text-sm font-medium text-zinc-500 hover:text-foreground/80 dark:text-zinc-400">
                LinkedIn
              </p>
            </Link>
            <Themetoggle />
            <DocumentSearch />
          </div>
          <div className="flex items-center space-x-1 lg:hidden">
            <Themetoggle />
            <NavbarDrawer />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
