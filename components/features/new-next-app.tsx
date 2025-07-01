"use client";
import { type ReactElement, useEffect, useState } from "react";
import LocalHost from "./localhost";
import MacControls from "../icons/maccontrols";

const NewNextApp = () => {
  const pulseInterval = 100;
  const firstPhase = 27;
  const secondPhase = firstPhase + 3;
  const thirdPhase = secondPhase + 3;
  const fourthPhase = thirdPhase + 1;
  const finalPhase = fourthPhase + 1;

  const [counter, setCounter] = useState(finalPhase);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((previous) =>
        previous >= finalPhase ? previous : previous + 1,
      );
    }, pulseInterval);

    return () => {
      clearInterval(interval);
    };
  }, [finalPhase]);

  const elements: ReactElement[] = [];

  elements.push(
    <span key="initialize" className="text-white">
      {"npx create-next-app@latest".substring(0, counter)}
      {counter < firstPhase && (
        <div className="inline-block h-3 w-1 animate-pulse" />
      )}
    </span>,
  );

  if (counter >= firstPhase) {
    elements.push(<span key="empty"> </span>);
  }

  if (counter > secondPhase) {
    if (counter > secondPhase + 1) {
      elements.push(
        <span key="project-create" className="font-bold text-white">
          ~ Project name
        </span>,
      );
      elements.push(
        <span key="app-name" className="text-white">
          | my-app
        </span>,
      );
    }

    if (counter > secondPhase + 2) {
      elements.push(
        <span key="open-app" className="text-white">
          | cd my-app
        </span>,
      );
      elements.push(
        <span key="install-components" className="font-bold text-white">
          ~ Installing UI components
        </span>,
      );
    }

    if (counter > secondPhase + 3) {
      elements.push(
        <span key="fumadocs" className="text-white">
          | ✓ forge/ui
        </span>,
      );
      elements.push(
        <span key="collections" className="text-white">
          | ✓ shadcn/ui
        </span>,
      );
    }
  }

  return (
    <div
      className="relative"
      onMouseEnter={() => {
        if (counter >= finalPhase) {
          setCounter(0);
        }
      }}
    >
      {counter > fourthPhase && <LocalHost />}
      <pre className="overflow-hidden rounded-xl border border-neutral-800 text-[13px] shadow-lg">
        <div className="flex flex-row items-center gap-2 border-b border-neutral-800 px-4 py-2">
          <MacControls />
        </div>
        <div className="min-h-[200px] bg-gradient-to-b from-neutral-900 to-neutral-950">
          <div className="grid p-4">{elements}</div>
        </div>
      </pre>
    </div>
  );
};

export default NewNextApp;
