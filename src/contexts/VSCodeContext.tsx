"use client";
import React, { createContext, useContext, useState } from "react";

interface VSCodeContextType {
  isInVSCodeMode: boolean;
  setIsInVSCodeMode: (value: boolean) => void;
}

const VSCodeContext = createContext<VSCodeContextType | undefined>(undefined);

export function VSCodeProvider({ children }: { children: React.ReactNode }) {
  const [isInVSCodeMode, setIsInVSCodeMode] = useState(true); // Default to true when inside VSCodeProvider

  return (
    <VSCodeContext.Provider value={{ isInVSCodeMode, setIsInVSCodeMode }}>
      {children}
    </VSCodeContext.Provider>
  );
}

export function useVSCodeContext() {
  const context = useContext(VSCodeContext);
  if (context === undefined) {
    // Return default values when not in VSCode context (regular pages)
    return { isInVSCodeMode: false, setIsInVSCodeMode: () => {} };
  }
  return context;
}