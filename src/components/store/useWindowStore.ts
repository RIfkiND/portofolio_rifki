import { create } from "zustand";
import { persist } from "zustand/middleware";

interface WindowState {
  isMaximized: boolean;
  isMinimized: boolean;
  isFullscreen: boolean;
  isClosed: boolean;
  hasBeenOpened: boolean; // Track if portfolio has been opened before
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
      isClosed: true, // Default to closed
      hasBeenOpened: false, // Track if portfolio has been opened before
      
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
        set({ isClosed: false, hasBeenOpened: true });
      },
    }),
    {
      name: 'window-storage',
      // Custom logic for persistence
      partialize: (state) => ({ 
        // If user has opened before, keep it open on refresh (unless explicitly closed)
        isClosed: state.hasBeenOpened ? state.isClosed : true,
        hasBeenOpened: state.hasBeenOpened 
      }),
    }
  )
);
