"use client";
import Link from "next/link";
import React from "react";
import { CiHeart } from "react-icons/ci";
import { MyIcon } from "../icons/logo";

const Footer = () => {
  return (
    <div className="border-t">
      <div className="mx-auto max-w-[95.8rem] border-x px-4 py-12">
        <div className="mx-auto flex max-w-full flex-col items-start justify-between pl-4 pr-8 text-sm text-zinc-500 dark:text-zinc-400 sm:flex-row">
          <div>
            <div className="mb-4 flex">
              <Link href="/" className="flex items-center space-x-2">
                <MyIcon className="h-5 w-5 text-black dark:text-white" />
                <span className="text-xl font-bold text-black dark:text-white">
                  Forge UI
                </span>
              </Link>
            </div>
            <div className="mr-2 mt-2 max-w-fit">
              <Link
                href="https://x.com/compose/tweet?text=🚀%20Just%20discovered%20%23ForgeUI%20and%20it%27s%20a%20game-changer%20for%20building%20modern%20UIs!%20%F0%9F%9A%80%20%40amanshakya0018%20%23WebDev%20%23React"
                target="_blank"
              >
                <div className="flex flex-row items-center gap-2 rounded-md bg-neutral-200 px-3 py-2 text-zinc-900 dark:bg-neutral-800 dark:text-zinc-200">
                  Share Your Thoughts On
                  <svg
                    height="14"
                    viewBox="0 0 1200 1227"
                    fill="currentColor"
                    width="14"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z" />
                  </svg>
                </div>
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
              <Link href="https://x.com/AmanShakya0018" target="_blank">
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
                href="https://www.linkedin.com/in/amanshakya0018/"
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
          <h1 className="select-none bg-gradient-to-b from-neutral-200 to-neutral-400 bg-clip-text text-center text-3xl font-bold text-transparent dark:from-neutral-700 dark:to-neutral-900 md:text-7xl lg:text-[10rem]">
            FORGE UI
          </h1>
        </div>
        <p className="-mb-6 mt-12 w-full text-center text-sm text-zinc-600 dark:text-zinc-400">
          Made with{" "}
          <CiHeart className="inline-block h-5 w-5 pb-0.5 align-middle text-foreground" />{" "}
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
