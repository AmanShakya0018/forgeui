
export const title = "Card Hover Effect";
export const routepoint = "card-hover-effect";
export const description = "Hover over the cards to see the effect shift smoothly to the highlighted card.";

export const democode = `"use client";
import React from 'react'
import CardHover from './components/ui/card-hover-effect'
function Page() {
  return (
    <>
      <CardHover />
    </>
  )
}

export default Page;`;

export const code = `"use client"

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const CardHover = () => {
  return (
    <div className="w-full max-w-5xl mx-auto">
      <HoverEffect items={projects} />
    </div>
  );
}

export default CardHover;

const HoverEffect = ({
  items,
}: {
  items: {
    title: string;
    description: string;
    link: string;
  }[];
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10">
      {items.map((item, idx) => (
        <Link
          href={item.link}
          key={item.link}
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.div
                className="absolute inset-0 h-full w-full rounded-3xl overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-neutral-300 via-neutral-200 to-neutral-300 dark:from-zinc-800 dark:via-zinc-700 dark:to-zinc-800"
                  animate={{
                    x: ["0%", "-100%"],
                    transition: {
                      repeat: Infinity,
                      repeatType: "mirror",
                      duration: 3,
                      ease: "linear",
                    },
                  }}
                />
              </motion.div>
            )}
          </AnimatePresence>
          <Card isHovered={hoveredIndex === idx}>
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
          </Card>
        </Link>
      ))}
    </div>
  );
};

const Card = ({
  children,
  isHovered,
}: {
  children: React.ReactNode;
  isHovered: boolean;
}) => (
  <motion.div
    className="rounded-2xl h-full w-full p-4 overflow-hidden bg-black border border-transparent dark:border-white/[0.2] relative z-20"
    animate={{
      borderColor: isHovered ? "rgba(255, 255, 255, 0.5)" : "rgba(255, 255, 255, 0.2)",
      scale: isHovered ? 1.05 : 1,
      transition: { duration: 0.3, ease: "easeInOut" }
    }}
  >
    <motion.div
      className="relative z-50 p-4"
      animate={{
        y: isHovered ? -5 : 0,
        transition: { duration: 0.3, ease: "easeInOut" }
      }}
    >
      {children}
    </motion.div>
  </motion.div>
);

const CardTitle = ({
  children,
}: {
  children: React.ReactNode;
}) => (
  <h4 className="text-zinc-100 font-bold tracking-wide mt-4">
    {children}
  </h4>
);

const CardDescription = ({
  children,
}: {
  children: React.ReactNode;
}) => (
  <p className="mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm">
    {children}
  </p>
);

export const projects = [
  {
    title: "Tesla",
    description:
      "An automotive and energy company revolutionizing transportation with electric vehicles and sustainable energy solutions.",
    link: "https://tesla.com",
  },
  {
    title: "OpenAI",
    description:
      "An AI research and deployment company dedicated to ensuring that artificial general intelligence benefits all of humanity.",
    link: "https://openai.com",
  },
  {
    title: "Apple",
    description:
      "A technology company that designs and manufactures consumer electronics, software, and online services.",
    link: "https://apple.com",
  },
  {
    title: "Spotify",
    description:
      "A digital music service that gives you access to millions of songs and podcasts from artists all over the world.",
    link: "https://spotify.com",
  },
  {
    title: "Airbnb",
    description:
      "A platform that allows individuals to rent out their properties or spare rooms to travelers seeking short-term accommodations.",
    link: "https://airbnb.com",
  },
  {
    title: "Adobe",
    description:
      "A software company known for its creative tools, including Photoshop, Illustrator, and Premiere Pro, empowering creators worldwide.",
    link: "https://adobe.com",
  },
];
`