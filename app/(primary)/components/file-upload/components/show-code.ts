export const title = "File Upload";
export const routepoint = "file-upload";
export const description = "Clean file upload form featuring drag-and-drop, subtle micro-interactions, and a grid backdrop.";

export const cliscript = "add https://forgeui.amanshakya.in/registry/file-upload.json";

export const commandMap = {
  npm: `npx shadcn@latest ${cliscript}`,
  pnpm: `pnpm dlx shadcn@latest ${cliscript}`,
  yarn: `npx shadcn@latest ${cliscript}`,
  bun: `bunx --bun shadcn@latest ${cliscript}`,
};

export const democode = `"use client";
import React from 'react'
import FileUpload from './components/ui/file-upload';
function Page() {
  return (
    <>
      <FileUpload />
    </>
  )
}

export default Page;`;

export const code = `"use client"

import { cn } from "@/lib/utils";
import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Upload, FileIcon, XIcon } from 'lucide-react';
import { useDropzone } from "react-dropzone";

const mainVariant = {
  initial: { scale: 1, y: 0 },
  animate: { scale: 1.02, y: -5 },
};

const containerVariant = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
};

const FileUpload = ({
  onChange,
  maxFiles = 5,
  accept = {},
}: {
  onChange?: (files: File[]) => void;
  maxFiles?: number;
  accept?: Record<string, string[]>;
}) => {
  const [files, setFiles] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (newFiles: File[]) => {
    const updatedFiles = [...files, ...newFiles].slice(0, maxFiles);
    setFiles(updatedFiles);
    if (onChange) onChange(updatedFiles);
  };

  const removeFile = (index: number) => {
    const updatedFiles = files.filter((_, idx) => idx !== index);
    setFiles(updatedFiles);
    if (onChange) onChange(updatedFiles);
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const { getRootProps, isDragActive } = useDropzone({
    multiple: true,
    maxFiles,
    accept,
    noClick: true,
    onDrop: handleFileChange,
    onDropRejected: (error) => {
      console.log(error);
    },
  });

  return (
    <div className="w-full" {...getRootProps()}>
      <motion.div
        onClick={handleClick}
        whileHover="animate"
        initial="initial"
        animate="initial"
        variants={mainVariant}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className={cn(
          "p-10 group/file block rounded-lg cursor-pointer w-full relative overflow-hidden",
          "bg-gradient-to-br from-white to-gray-50 dark:from-neutral-900 dark:to-neutral-950",
          "border-2 border-dashed transition-colors",
          isDragActive
            ? "border-emerald-400 bg-emerald-50/10"
            : "border-gray-200 hover:border-emerald-400/70 dark:border-neutral-800 dark:hover:border-emerald-400/70",
        )}
      >
        <input
          ref={fileInputRef}
          id="file-upload-handle"
          type="file"
          multiple
          onChange={(e) => handleFileChange(Array.from(e.target.files || []))}
          className="hidden"
          accept={Object.entries(accept)
            .map(([key, values]) => values.map((value) => \`\${key}/\${value}\`))
            .flat()
            .join(",")}
        />

        <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,white,transparent)]">
          <div className="flex bg-gray-100 dark:bg-neutral-900 flex-shrink-0 flex-wrap justify-center items-center gap-x-px gap-y-px scale-105">
            {Array.from({ length: 10 }).map((_, row) =>
              Array.from({ length: 40 }).map((_, col) => {
                return (
                  <div
                    key={\`\${col}-\${row}\`}
                    className={\`w-10 h-10 flex flex-shrink-0 rounded-[2px] bg-gray-50 dark:bg-neutral-950\`}
                  />
                );
              })
            )}
          </div>
        </div>

        <div className="flex flex-col items-center justify-center relative z-10">
          <motion.div
            initial={{ scale: 1 }}
            animate={{ scale: isDragActive ? 1.1 : 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="mb-6"
          >
            <div className={cn(
              "p-4 rounded-full",
              "bg-gradient-to-br from-emerald-400/20 to-emerald-300/10 dark:from-emerald-400/30 dark:to-emerald-300/20",
              "group-hover/file:from-emerald-400/30 group-hover/file:to-emerald-300/20",
              "transition-all duration-300"
            )}>
              <Upload className="h-8 w-8 text-emerald-500 dark:text-emerald-400" />
            </div>
          </motion.div>

          <h3 className="font-sans font-semibold text-neutral-800 dark:text-neutral-200 text-lg">
            {isDragActive ? "Drop files here" : "Upload files"}
          </h3>
          <p className="font-sans text-neutral-500 dark:text-neutral-400 text-sm mt-2 text-center max-w-sm">
            Drag and drop your files here, or click to browse.
            {maxFiles > 1 && \` Upload up to \${maxFiles} files.\`}
          </p>

          <AnimatePresence>
            {files.length > 0 && (
              <motion.div
                variants={containerVariant}
                initial="initial"
                animate="animate"
                exit="exit"
                className="w-full mt-8 space-y-3 max-w-2xl mx-auto"
              >
                {files.map((file, idx) => (
                  <motion.div
                    key={\`file-\${idx}\`}
                    layout
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ delay: idx * 0.1 }}
                    className={cn(
                      "relative group overflow-hidden z-40",
                      "bg-white dark:bg-neutral-900/50",
                      "backdrop-blur-sm",
                      "flex items-center gap-4 p-4 rounded-lg",
                      "border border-gray-100 dark:border-neutral-800",
                      "hover:border-emerald-400/20 dark:hover:border-emerald-400/20",
                      "transition-all duration-300"
                    )}
                  >
                    <div className="p-2 rounded-lg bg-emerald-400/10 dark:bg-emerald-400/20">
                      <FileIcon className="h-5 w-5 text-emerald-500 dark:text-emerald-400" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-neutral-800 dark:text-neutral-200 truncate">
                        {file.name}
                      </p>
                      <div className="flex items-center gap-3 text-xs text-neutral-500 dark:text-neutral-400 mt-1">
                        <span className="rounded-full px-2 py-0.5 bg-neutral-100 dark:bg-neutral-800">
                          {(file.size / (1024 * 1024)).toFixed(2)} MB
                        </span>
                        <span>{file.type || 'Unknown type'}</span>
                      </div>
                    </div>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        removeFile(idx);
                      }}
                      className={cn(
                        "p-1.5 rounded-full",
                        "opacity-0 group-hover:opacity-100",
                        "bg-neutral-100 hover:bg-neutral-200",
                        "dark:bg-neutral-800 dark:hover:bg-neutral-700",
                        "transition-all duration-200"
                      )}
                    >
                      <XIcon className="h-4 w-4 text-neutral-500 dark:text-neutral-400" />
                    </button>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {!files.length && (
            <motion.div
              variants={mainVariant}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className={cn(
                "absolute inset-0 z-0",
                "pointer-events-none",
                "opacity-0 group-hover/file:opacity-100",
                "transition-opacity duration-300"
              )}
            />
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default FileUpload;
`;