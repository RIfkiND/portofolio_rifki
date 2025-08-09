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
    <div className="flex items-center justify-between bg-neutral-900 text-gray-400 px-4 py-2 text-xs border-t border-neutral-800">
      <div className="flex items-center space-x-4">
        <span className="text-green-400">✔ Build Successful</span>
        <VscError className="text-red-500" /> <span>0 Errors</span>
        <VscWarning className="text-yellow-500" /> <span>0 Warnings</span>
        <div 
          className={`flex items-center space-x-1 cursor-pointer hover:text-white transition-colors ${
            mounted && isOpen ? 'text-blue-400' : 'text-gray-400'
          }`}
          onClick={handleTerminalClick}
        >
          <VscTerminal />
          <span>Terminal {mounted && isOpen ? '(Open)' : '(Closed)'}</span>
        </div>
      </div>
      <div className="text-gray-500">
        Ln 10, Col 5 | UTF-8 | LF | TypeScript | Created by Rifki Nauval Dzaki
      </div>
    </div>
  );
}
