import { JSX } from "react";
import { create } from "zustand";
import { FaCode, FaMarkdown } from "react-icons/fa";
import { SiGo, SiReact } from "react-icons/si";
import { VscJson } from "react-icons/vsc";
import React from "react";
import PythonLogo from "@/components/icons/PythonLogo";

interface FileTab {
  name: string;
  icon: JSX.Element;
  route?: string;
}

interface TabStore {
  openTabs: FileTab[];
  selectedFile: FileTab | null;
  isSidebarOpen: boolean;
  setOpenTabs: (tabs: FileTab[]) => void;
  setSelectedFile: (file: FileTab) => void;
  closeTab: (name: string) => void;
  setSidebarOpen: (open: boolean) => void;
  toggleSidebar: () => void;
}

// Helper to get icon for a specific file name
const getIconForFile = (fileName: string): JSX.Element => {
  const iconMap: Record<string, JSX.Element> = {
    "rifki.md": React.createElement(FaMarkdown, { className: "text-blue-400" }),
    "blog.md": React.createElement(FaMarkdown, { className: "text-purple-400" }),
    "experience.py": React.createElement(PythonLogo, { size: 16 }),
    "skill.go": React.createElement(SiGo, { className: "text-cyan-400" }),
    "projects.tsx": React.createElement(SiReact, { className: "text-blue-500" }),
    "contact.json": React.createElement(VscJson, { className: "text-yellow-500" }),
  };
  return iconMap[fileName] || React.createElement(FaCode, { className: "text-gray-400" });
};

// Helper to serialize/deserialize tabs (icons can't be serialized, so restore manually)
const serializeTabs = (tabs: FileTab[]) =>
  JSON.stringify(
    tabs.map((tab) => ({
      ...tab,
      icon: undefined, // Don't store icon in localStorage
    }))
  );

const deserializeTabs = (tabs: FileTab[]) =>
  tabs.map((tab) => ({
    ...tab,
    icon: getIconForFile(tab.name),
  }));

const defaultTab: FileTab = {
  name: "rifki.md",
  icon: React.createElement(FaMarkdown, {
    className: "text-blue-400",
  }),
  route: "/",
};

const getInitialTabs = () => {
  if (typeof window === 'undefined') return [defaultTab]; // SSR-safe
  
  const stored = localStorage.getItem("openTabs");
  if (stored) {
    try {
      const parsed = JSON.parse(stored);
      return deserializeTabs(parsed);
    } catch {
      return [defaultTab];
    }
  }
  return [defaultTab];
};

const getInitialSelectedFile = () => {
  if (typeof window === 'undefined') return defaultTab; // SSR-safe
  
  const stored = localStorage.getItem("selectedFile");
  if (stored) {
    try {
      const parsed = JSON.parse(stored);
      return {
        ...parsed,
        icon: getIconForFile(parsed.name),
      };
    } catch {
      return defaultTab;
    }
  }
  return defaultTab;
};

const getInitialSidebarOpen = () => false; // SSR-safe: static value

export const useTabStore = create<TabStore>((set, get) => ({
  openTabs: getInitialTabs(),
  selectedFile: getInitialSelectedFile(),
  isSidebarOpen: getInitialSidebarOpen(),

  setOpenTabs: (tabs) => {
    localStorage.setItem("openTabs", serializeTabs(tabs));
    set({ openTabs: deserializeTabs(tabs) });
  },
  setSelectedFile: (file) => {
    localStorage.setItem(
      "selectedFile",
      JSON.stringify({ ...file, icon: undefined })
    );
    set({
      selectedFile: {
        ...file,
        icon: getIconForFile(file.name),
      },
    });
  },
  closeTab: (name) => {
    const state = get();
    const newTabs = state.openTabs.filter((tab) => tab.name !== name);
    localStorage.setItem("openTabs", serializeTabs(newTabs));
    const newSelected =
      state.selectedFile?.name === name
        ? newTabs[0] || null
        : state.selectedFile;
    if (newSelected) {
      localStorage.setItem(
        "selectedFile",
        JSON.stringify({ ...newSelected, icon: undefined })
      );
    } else {
      localStorage.removeItem("selectedFile");
    }
    set({
      openTabs: deserializeTabs(newTabs),
      selectedFile: newSelected ? {
        ...newSelected,
        icon: getIconForFile(newSelected.name),
      } : null,
    });
  },
  setSidebarOpen: (open) => {
    localStorage.setItem("isSidebarOpen", String(open));
    set({ isSidebarOpen: open });
  },
  toggleSidebar: () => {
    const current = get().isSidebarOpen;
    localStorage.setItem("isSidebarOpen", String(!current));
    set({ isSidebarOpen: !current });
  },
}));
