import { create } from "zustand";

interface WindowState {
  isMaximized: boolean;
  isMinimized: boolean;
  isFullscreen: boolean;
  isClosed: boolean;
  maximize: () => void;
  minimize: () => void;
  restore: () => void;
  toggleFullscreen: () => void;
  close: () => void;
  reopen: () => void;
}

export const useWindowStore = create<WindowState>((set, get) => ({
  isMaximized: false,
  isMinimized: false,
  isFullscreen: false,
  isClosed: true, // Start with window closed to show ClosedWindow component first
  
  maximize: () => {
    console.log("Window maximized");
    set({ isMaximized: true, isMinimized: false });
  },
  
  minimize: () => {
    console.log("Window minimized");
    set({ isMinimized: !get().isMinimized, isMaximized: false });
  },
  
  restore: () => {
    console.log("Window restored");
    set({ isMaximized: false, isMinimized: false, isFullscreen: false });
  },
  
  toggleFullscreen: () => {
    const newFullscreenState = !get().isFullscreen;
    console.log("Fullscreen toggled:", newFullscreenState);
    set({ 
      isFullscreen: newFullscreenState,
      isMaximized: false,
      isMinimized: false 
    });
  },
  
  close: () => {
    console.log("Window closed");
    set({ isClosed: true, isMaximized: false, isMinimized: false, isFullscreen: false });
  },
  
  reopen: () => {
    console.log("Window reopened");
    set({ isClosed: false });
  },
}));
