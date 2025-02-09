import { cn } from "@/lib/utils"

interface TiltedScrollItem {
  id: string;
  text: string;
}

interface TiltedScrollProps {
  items?: TiltedScrollItem[];
  className?: string;
}

export function TiltedScroll({
  items = defaultItems,
  className
}: TiltedScrollProps) {
  return (
    <div className={cn("flex items-center justify-center", className)}>
      <div className="relative overflow-hidden [mask-composite:intersect] [mask-image:linear-gradient(to_right,transparent,black_5rem),linear-gradient(to_left,transparent,black_5rem),linear-gradient(to_bottom,transparent,black_5rem),linear-gradient(to_top,transparent,black_5rem)]">
        <div className="grid h-[250px] w-[300px] gap-5 animate-skew-scroll grid-cols-1">
          {items.map((item, index) => (
            <div
              key={index}
              className="group flex items-center gap-2 cursor-pointer rounded-md border border-border/40 bg-gradient-to-b dark:from-black/80 from-white dark:to-zinc-900/80 to-zinc-100 p-4 shadow-md transition-all duration-300 ease-in-out hover:scale-105 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-xl dark:border-zinc-800"
            >
              <CheckCircleIcon className="h-6 w-6 mr-2 stroke-foreground/40 transition-colors group-hover:stroke-foreground" />
              <p className="text-foreground/80 text-sm transition-colors group-hover:text-foreground">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function CheckCircleIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  )
}

const defaultItems: TiltedScrollItem[] = [
  { id: "1", text: "Create stunning interfaces" },
  { id: "2", text: "Develop and progress" },
  { id: "3", text: "Seamless Customization" },
  { id: "4", text: "Optimize your workflow" },
  { id: "5", text: "Composable UI components" },
  { id: "6", text: "Effortless integration" },
  { id: "8", text: "Modern and accessible design" },
  { id: "9", text: "Flexible layout system" },
  { id: "10", text: "Ready-to-use components" },
  { id: "11", text: "Responsive out of the box" },
  { id: "12", text: "Customizable themes and styles" },
  { id: "13", text: "Real-time updates and changes" },
  { id: "14", text: "User-centric design" },
  { id: "15", text: "Seamless component interactions" },
  { id: "16", text: "Optimized for mobile-first design" },
]