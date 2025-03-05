import { create } from "zustand";

export const useSidebarStore = create((set) => ({
  showFiles: true, // Sidebar stays open by default
  toggleFiles: () => set((state:any) => ({ showFiles: !state.showFiles })),
  openFiles: () => set({ showFiles: true }), // Explicitly open
  closeFiles: () => set({ showFiles: false }), // Explicitly close
}));
