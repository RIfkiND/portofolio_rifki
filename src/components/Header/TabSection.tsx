"use client";
import {
  VscClose,
  VscRunAll,
  VscOpenPreview,
  VscSplitHorizontal,
  VscEllipsis,
  VscJson,
} from "react-icons/vsc";
import { FaCode, FaMarkdown } from "react-icons/fa";
import { SiGo, SiReact } from "react-icons/si";
import { useTabStore } from "@/components/store/useTabStore";
import { useTerminalStore } from "@/components/store/useTerminalStore";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import React from "react";
import PythonLogo from "@/components/icons/PythonLogo";

// Helper to get icon for a specific file name
const getIconForFile = (fileName: string) => {
  const iconMap: Record<string, React.ReactElement> = {
    "rifki.md": React.createElement(FaMarkdown, { className: "text-blue-400" }),
    "blog.md": React.createElement(FaMarkdown, { className: "text-purple-400" }),
    "experience.py": React.createElement(PythonLogo, { size: 16 }),
    "skill.go": React.createElement(SiGo, { className: "text-cyan-400" }),
    "projects.tsx": React.createElement(SiReact, { className: "text-blue-500" }),
    "contact.json": React.createElement(VscJson, { className: "text-yellow-500" }),
  };
  return iconMap[fileName] || React.createElement(FaCode, { className: "text-gray-400" });
};

export default function TabSection() {
  const { openTabs, setSelectedFile, closeTab, setOpenTabs } = useTabStore();
  const { open: openTerminal } = useTerminalStore();
  const pathname = usePathname();
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
    // Force refresh tabs with icons after hydration
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem("openTabs");
      if (stored) {
        try {
          const parsed = JSON.parse(stored);
          const tabsWithIcons = parsed.map((tab: any) => ({
            ...tab,
            icon: getIconForFile(tab.name),
          }));
          setOpenTabs(tabsWithIcons);
        } catch {
          // If parsing fails, keep current tabs
        }
      }
    }
  }, [setOpenTabs]);

  const handleTabClick = (file: { name: string; icon: React.ReactElement; route?: string }) => {
    setSelectedFile(file);
    // Don't navigate when used within VSCode interface - let LayoutWithTerminal handle content switching
    // if (file.route) {
    //   router.push(file.route);
    // }
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
        {openTabs.map(({ icon, name, route }, index) => {
          const isActive = route === pathname;
          // Use a combination of name, route, and index for unique keys
          const uniqueKey = `${name}-${route || 'noroute'}-${index}`;
          return (
            <div
              key={uniqueKey}
              onClick={() => handleTabClick({ name, icon, route })}
              className={`group flex items-center px-3 py-2 cursor-pointer transition duration-200 ${
                isActive
                  ? "bg-neutral-950 border-b-2 border-blue-400"
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
          );
        })}
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
