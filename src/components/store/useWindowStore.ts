import { create } from "zustand";
import { persist } from "zustand/middleware";

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

export const useWindowStore = create<WindowState>()(
  persist(
    (set, get) => ({
      isMaximized: false,
      isMinimized: false,
      isFullscreen: false,
      isClosed: false,
      
      maximize: () => {
        console.log("Window maximized");
        set({ isMaximized: true, isMinimized: false, isClosed: false });
      },
      
      minimize: () => {
        console.log("Window minimized");
        const currentMinimized = get().isMinimized;
        set({ isMinimized: !currentMinimized, isMaximized: false });
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
    }),
    {
      name: 'vscode-window-storage',
    }
  )
);
