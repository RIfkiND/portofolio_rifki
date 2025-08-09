"use client";
import {
  VscClose,
  VscRunAll,
  VscOpenPreview,
  VscSplitHorizontal,
  VscEllipsis,
} from "react-icons/vsc";
import { useTabStore } from "@/components/store/useTabStore";
import { useTerminalStore } from "@/components/store/useTerminalStore";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function TabSection() {
  const { openTabs, selectedFile, setSelectedFile, closeTab } = useTabStore();
  const { open: openTerminal } = useTerminalStore();
  const router = useRouter();
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  const handleTabClick = (file: { name: string; route?: string }) => {
    setSelectedFile(file);
    if (file.route) {
      router.push(file.route);
    }
  };

  const handleRunCode = () => {
    openTerminal();
    // The terminal will use the selectedFile from the store
  };

  if (!hydrated) return null; // Prevent SSR/CSR mismatch

  return (
    <div className="flex items-center justify-between bg-neutral-900 text-white border-neutral-800">
      {/* Tabs */}
      <div className="flex">
        {openTabs.map(({ icon, name, route }) => (
          <div
            key={name}
            onClick={() => handleTabClick({ name, route })}
            className={`group flex items-center px-3 py-2 cursor-pointer transition duration-200 ${
              selectedFile?.name === name
                ? "bg-neutral-950"
                : "bg-neutral-900 hover:bg-neutral-800"
            }`}
          >
            {icon}
            <span className="font-semibold text-sm ml-2">{name}</span>
            <VscClose
              onClick={(e) => {
                e.stopPropagation();
                closeTab(name);
              }}
              className="ml-2 text-gray-400 text-sm hover:text-red-500 cursor-pointer"
            />
          </div>
        ))}
      </div>

      {/* Actions */}
      <div className="flex items-center space-x-3 pr-4">
        <VscRunAll
          className="text-green-400 text-lg cursor-pointer hover:text-green-500"
          title="Run Code"
          onClick={handleRunCode}
        />
        <VscOpenPreview
          className="text-gray-400 text-lg cursor-pointer hover:text-gray-500"
          title="Open Editor"
        />
        <VscSplitHorizontal
          className="text-gray-400 text-lg cursor-pointer hover:text-gray-500"
          title="Split Editor"
        />
        <VscEllipsis
          className="text-gray-400 text-lg cursor-pointer hover:text-gray-500"
          title="More Options"
        />
      </div>
    </div>
  );
}
