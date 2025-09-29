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
  isHydrated: boolean;
  setOpenTabs: (tabs: FileTab[]) => void;
  setSelectedFile: (file: FileTab) => void;
  closeTab: (name: string) => void;
  setSidebarOpen: (open: boolean) => void;
  toggleSidebar: () => void;
  hydrate: () => void;
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

export const useTabStore = create<TabStore>((set, get) => ({
  openTabs: [defaultTab],
  selectedFile: defaultTab,
  isSidebarOpen: false,
  isHydrated: false,

  hydrate: () => {
    const state = get();
    if (typeof window === 'undefined' || state.isHydrated) return; // Don't hydrate multiple times
    
    const storedTabs = localStorage.getItem("openTabs");
    const storedSelectedFile = localStorage.getItem("selectedFile");
    
    let tabs = [defaultTab];
    let selectedFile = defaultTab;
    
    if (storedTabs) {
      try {
        const parsed = JSON.parse(storedTabs);
        tabs = deserializeTabs(parsed);
        // Remove duplicates during hydration
        tabs = tabs.filter((tab, index, self) => 
          index === self.findIndex(t => t.name === tab.name && t.route === tab.route)
        );
        if (tabs.length === 0) tabs = [defaultTab]; // Ensure we have at least one tab
      } catch {
        tabs = [defaultTab];
      }
    }
    
    if (storedSelectedFile) {
      try {
        const parsed = JSON.parse(storedSelectedFile);
        selectedFile = {
          ...parsed,
          icon: getIconForFile(parsed.name),
        };
      } catch {
        selectedFile = defaultTab;
      }
    }
    
    // Mark as hydrated BEFORE setting state to prevent loops
    set({
      openTabs: tabs,
      selectedFile: selectedFile,
      isHydrated: true
    });
  },

  setOpenTabs: (tabs) => {
    // Remove duplicates based on name and route
    const uniqueTabs = tabs.filter((tab, index, self) => 
      index === self.findIndex(t => t.name === tab.name && t.route === tab.route)
    );
    
    if (typeof window !== 'undefined') {
      localStorage.setItem("openTabs", serializeTabs(uniqueTabs));
    }
    set({ openTabs: deserializeTabs(uniqueTabs) });
  },
  setSelectedFile: (file) => {
    console.log("🏪 setSelectedFile called with:", file.name, "->", file.route);
    
    if (typeof window !== 'undefined') {
      localStorage.setItem(
        "selectedFile",
        JSON.stringify({ ...file, icon: undefined })
      );
    }
    
    const newSelectedFile = {
      ...file,
      icon: getIconForFile(file.name),
    };
    
    console.log("🏪 Setting selectedFile state to:", newSelectedFile);
    set({
      selectedFile: newSelectedFile,
    });
    
    // Verify the state was set
    console.log("🏪 Current state after set:", get().selectedFile);
  },
  closeTab: (name) => {
    const state = get();
    const newTabs = state.openTabs.filter((tab) => tab.name !== name);
    
    if (typeof window !== 'undefined') {
      localStorage.setItem("openTabs", serializeTabs(newTabs));
    }
    
    const newSelected =
      state.selectedFile?.name === name
        ? newTabs[0] || null
        : state.selectedFile;
    
    if (typeof window !== 'undefined') {
      if (newSelected) {
        localStorage.setItem(
          "selectedFile",
          JSON.stringify({ ...newSelected, icon: undefined })
        );
      } else {
        localStorage.removeItem("selectedFile");
      }
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
    if (typeof window !== 'undefined') {
      localStorage.setItem("isSidebarOpen", String(open));
    }
    set({ isSidebarOpen: open });
  },
  toggleSidebar: () => {
    const current = get().isSidebarOpen;
    if (typeof window !== 'undefined') {
      localStorage.setItem("isSidebarOpen", String(!current));
    }
    set({ isSidebarOpen: !current });
  },
}));
