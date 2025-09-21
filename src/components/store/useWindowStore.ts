import { create } from "zustand";
import { persist } from "zustand/middleware";

interface WindowState {
  isMaximized: boolean;
  isMinimized: boolean;
  isFullscreen: boolean;
  maximize: () => void;
  minimize: () => void;
  restore: () => void;
  toggleFullscreen: () => void;
}

export const useWindowStore = create<WindowState>()(
  persist(
    (set, get) => ({
      isMaximized: false,
      isMinimized: false,
      isFullscreen: false,
      
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
    }),
    {
      name: 'vscode-window-storage',
    }
  )
);
