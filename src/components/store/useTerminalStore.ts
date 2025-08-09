import { create } from "zustand";

interface TerminalState {
  isOpen: boolean;
  command: string;
  toggle: () => void;
  open: () => void;
  close: () => void;
  setCommand: (command: string) => void;
  executeCommand: (command: string) => void;
}

export const useTerminalStore = create<TerminalState>((set, get) => ({
  isOpen: false,
  command: "",
  toggle: () => {
    const currentState = get().isOpen;
    console.log("Terminal toggle:", !currentState); // Debug log
    set((state) => ({ isOpen: !state.isOpen }));
  },
  open: () => {
    console.log("Terminal opening"); // Debug log
    set({ isOpen: true });
  },
  close: () => {
    console.log("Terminal closing"); // Debug log
    set({ isOpen: false });
  },
  setCommand: (command: string) => set({ command }),
  executeCommand: (command: string) => {
    set({ command });
    // Auto-open terminal when executing command
    if (!get().isOpen) {
      set({ isOpen: true });
    }
  },
}));
