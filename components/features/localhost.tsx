import { TerminalIcon } from "lucide-react";

const LocalHost = () => {
  return (
    <div className="absolute bottom-5 right-4 z-10 overflow-hidden rounded-md border border-neutral-800 bg-black shadow-xl animate-in fade-in slide-in-from-top-10">
      <div className="relative flex h-6 flex-row items-center border-b border-neutral-800 bg-neutral-900 px-4 text-xs text-white/50">
        <TerminalIcon className="absolute inset-2 size-3" />
        <p className="absolute inset-x-0 text-center">localhost:3000</p>
      </div>
      <div className="p-4 text-sm text-white">New App Created!</div>
    </div>
  );
};

export default LocalHost;
