import { JSX } from "react";
import { create } from "zustand";
import { FaExclamationCircle } from "react-icons/fa";
import React from "react";

interface FileTab {
  name: string;
  icon?: JSX.Element;
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

// Helper to serialize/deserialize tabs (icons can't be serialized, so restore manually)
const serializeTabs = (tabs: FileTab[]) =>
  JSON.stringify(
    tabs.map((tab) => ({
      ...tab,
      icon: undefined, // Don't store icon in localStorage
    }))
  );

const deserializeTabs = (tabs: FileTab[]) =>
  tabs.map((tab) =>
    tab.name === "Rifki.md"
      ? {
          ...tab,
          icon: React.createElement(FaExclamationCircle, {
            className: "text-blue-400",
          }),
        }
      : tab
  );

const defaultTab: FileTab = {
  name: "Rifki.md",
  icon: React.createElement(FaExclamationCircle, {
    className: "text-blue-400",
  }),
  route: "/",
};

const getInitialTabs = () => [defaultTab]; // SSR-safe: static value

const getInitialSelectedFile = () => defaultTab; // SSR-safe: static value

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
      selectedFile:
        file.name === "Rifki.md"
          ? {
              ...file,
              icon: React.createElement(FaExclamationCircle, {
                className: "text-blue-400",
              }),
            }
          : file,
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
      selectedFile: newSelected,
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
