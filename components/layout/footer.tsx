"use client";
import Link from "next/link";
import React from "react";
import { CiHeart } from "react-icons/ci";
import { MyIcon } from "../icons/logo";

const Footer = () => {
  return (
    <div className="border-t">
      <div className="mx-auto max-w-[95.8rem] border-x px-4 py-12">
        <div className="mx-auto flex max-w-full flex-col items-start justify-between pr-8 pl-4 text-sm text-zinc-500 sm:flex-row dark:text-zinc-400">
          <div>
            <div className="mb-4 flex">
              <Link href="/" className="flex items-center space-x-2">
                <MyIcon className="h-5 w-5 text-black dark:text-white" />
                <span className="text-xl font-bold text-black dark:text-white">
                  Forge UI
                </span>
              </Link>
            </div>

            <p className="mt-5 text-sm text-zinc-500 dark:text-zinc-400">
              © {new Date().getFullYear()} Forge UI. All rights reserved.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-3 items-start gap-10 md:mt-0">
            <div className="mt-4 flex flex-col justify-center space-y-4">
              <Link href="/">
                <p className="text-foreground/60 hover:text-foreground/80">
                  Home
                </p>
              </Link>
              <Link href="/components/animated-form">
                <p className="text-foreground/60 hover:text-foreground/80">
                  Components
                </p>
              </Link>
              <Link href="/docs/introduction">
                <p className="text-foreground/60 hover:text-foreground/80">
                  Docs
                </p>
              </Link>
            </div>
            <div className="mt-4 flex flex-col justify-center space-y-4">
              <Link href="https://x.com/amanshakya0018" target="_blank">
                <p className="text-foreground/60 hover:text-foreground/80">
                  Twitter
                </p>
              </Link>
              <Link
                href="https://www.github.com/amanshakya0018/"
                target="_blank"
              >
                <p className="text-foreground/60 hover:text-foreground/80">
                  Github
                </p>
              </Link>
              <Link
                href="https://www.linkedin.com/in/amanshakya18/"
                target="_blank"
              >
                <p className="text-foreground/60 hover:text-foreground/80">
                  LinkedIn
                </p>
              </Link>
            </div>
            <div className="mt-4 flex flex-col justify-center space-y-4">
              <p className="text-foreground/60 hover:text-foreground/80">
                <a href="/termsofservice" target="_blank">
                  Terms of Service
                </a>
              </p>
              <p className="text-foreground/60 hover:text-foreground/80">
                <a href="/privacypolicy" target="_blank">
                  Privacy Policy
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="mt-4 hidden w-full items-center justify-center md:flex">
          <h1 className="bg-gradient-to-b from-neutral-200 to-neutral-400 bg-clip-text text-center text-3xl font-bold text-transparent select-none md:text-7xl lg:text-[10rem] dark:from-neutral-700 dark:to-neutral-900">
            FORGE UI
          </h1>
        </div>
        <p className="mt-12 -mb-6 w-full text-center text-sm text-zinc-600 dark:text-zinc-400">
          Made with{" "}
          <CiHeart className="text-foreground inline-block h-5 w-5 pb-0.5 align-middle" />{" "}
          by{" "}
          <a
            href="https://amanshakya.in"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 hover:underline"
          >
            this guy
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
