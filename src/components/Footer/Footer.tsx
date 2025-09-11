"use client";
import { useState, useEffect } from "react";
import { VscError, VscWarning, VscTerminal } from "react-icons/vsc";
import { useTerminalStore } from "@/components/store/useTerminalStore";

export default function Footer() {
  const [mounted, setMounted] = useState(false);
  const { toggle, isOpen } = useTerminalStore();

  // Only access store state after hydration
  useEffect(() => {
    setMounted(true);
  }, []);

  const handleTerminalClick = () => {
    console.log("Footer terminal click - current state:", isOpen); // Debug log
    toggle();
  };

  return (
    <div className="flex items-center justify-between bg-neutral-900 text-gray-400 px-2 lg:px-4 py-2 text-xs border-t border-neutral-800">
      <div className="flex items-center space-x-2 lg:space-x-4 overflow-hidden">
        <span className="text-green-400 text-xs whitespace-nowrap">✔ Build</span>
        <div className="hidden sm:flex items-center space-x-1">
          <VscError className="text-red-500" /> 
          <span className="hidden md:inline">0 Errors</span>
          <span className="md:hidden">0</span>
        </div>
        <div className="hidden sm:flex items-center space-x-1">
          <VscWarning className="text-yellow-500" /> 
          <span className="hidden md:inline">0 Warnings</span>
          <span className="md:hidden">0</span>
        </div>
        <div 
          className={`flex items-center space-x-1 cursor-pointer hover:text-white transition-colors ${
            mounted && isOpen ? 'text-blue-400' : 'text-gray-400'
          }`}
          onClick={handleTerminalClick}
        >
          <VscTerminal />
          <span className="hidden sm:inline">Terminal</span>
          <span className="sm:hidden">Term</span>
          <span className="hidden lg:inline">{mounted && isOpen ? '(Open)' : '(Closed)'}</span>
        </div>
      </div>
      <div className="text-gray-500 text-xs truncate max-w-32 sm:max-w-none">
        <span className="hidden lg:inline">Ln 10, Col 5 | UTF-8 | LF | TypeScript | </span>
        <span className="hidden md:inline lg:hidden">TypeScript | </span>
        <span>Rifki Nauval Dzaki</span>
      </div>
    </div>
  );
}
