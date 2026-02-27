import { create } from "zustand";
import { persist } from "zustand/middleware";

export type PackageManager = "npm" | "pnpm" | "yarn" | "bun";

type PackageManagerStore = {
  packageManager: PackageManager;
  setPackageManager: (pm: PackageManager) => void;
};

export const usePackageManagerStore = create<PackageManagerStore>()(
  persist(
    (set) => ({
      packageManager: "npm",
      setPackageManager: (pm) => set({ packageManager: pm }),
    }),
    {
      name: "package-manager",
      skipHydration: false,
    }
  )
);