import { cn } from "@/lib/utils";
import {
  IconTrendingUp,
  IconAutomation,
  IconCurrencyDollar,
  IconBrain,
  IconHeart,
  IconAdjustmentsBolt,
  IconDeviceDesktopCode,
  IconTerminal2,
} from "@tabler/icons-react";

export default function FeaturesSectionDemo() {
  const features = [
    {
      title: "Create stunning interfaces",
      description: "Design impressive and functional websites with ready-made components.",
      icon: <IconDeviceDesktopCode />,
    },
    {
      title: "Focus on core tasks",
      description:
        "Leave the UI to us, and focus on solving key problems.",
      icon: <IconBrain />,
    },
    {
      title: "Develop and progress",
      description:
        "Explore materials on design principles and UI/UX best practices to improve your skills.",
      icon: <IconTrendingUp />,
    },
    {
      title: "Optimize your workflow",
      description: "Save time on repetitive tasks with integrated tools and reusable components.",
      icon: <IconAutomation />,
    },
    {
      title: "Built for developers",
      description:
        "Built for engineers, developers, dreamers, thinkers and doers.",
      icon: <IconTerminal2 />,
    },
    {
      title: "Build at No Cost",
      description:
        "Create your website with ease and without any technical barriers.",
      icon: <IconCurrencyDollar />,
    },
    {
      title: "Seamless Customization",
      description:
        "Effortlessly personalize your website with flexible, intuitive features.",
      icon: <IconAdjustmentsBolt />,
    },
    {
      title: "And everything else",
      description: "I just ran out of copy ideas. Accept my sincere apologies",
      icon: <IconHeart />,
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-cyan-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
