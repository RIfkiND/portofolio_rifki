import { JSX } from "react";
import { create } from "zustand";

interface FileTab {
  name: string;
  icon?: JSX.Element;
  route?: string;
}

interface TabStore {
  openTabs: FileTab[];
  selectedFile: FileTab | null;

  setOpenTabs: (tabs: FileTab[]) => void;
  setSelectedFile: (file: FileTab) => void;
  closeTab: (name: string) => void;
}

export const useTabStore = create<TabStore>((set) => ({
  openTabs: [],
  selectedFile: null,

  setOpenTabs: (tabs) => set({ openTabs: tabs }),
  setSelectedFile: (file) => set({ selectedFile: file }),

  closeTab: (name) =>
    set((state) => {
      const newTabs = state.openTabs.filter((tab) => tab.name !== name);
      return {
        openTabs: newTabs,
        selectedFile:
          state.selectedFile?.name === name
            ? newTabs[0] || null
            : state.selectedFile,
      };
    }),
}));
