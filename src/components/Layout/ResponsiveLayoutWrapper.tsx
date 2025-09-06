"use client";
import React from "react";
import { useWindowStore } from "@/components/store/useWindowStore";
import { cn } from "@/lib/utils";
import LayoutWithTerminal from "./LayoutWithTerminal";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import ClosedWindow from "./ClosedWindow";
import { motion, AnimatePresence } from "framer-motion";

export default function ResponsiveLayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isMaximized, isMinimized, isFullscreen, isClosed } = useWindowStore();

  // If window is closed, show the closed window interface
  if (isClosed) {
    return (
      <AnimatePresence mode="wait">
        <motion.div
          key="closed-window"
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          <ClosedWindow />
        </motion.div>
      </AnimatePresence>
    );
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div 
        key="main-window"
        className="relative min-h-screen w-full"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 1.1, opacity: 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
      {/* Background gradient - covers entire viewport */}
      <div className="fixed inset-0 z-0">
        <BackgroundGradientAnimation />
      </div>
      
      {/* Desktop View */}
      <div className="hidden md:block min-h-screen w-full relative z-10">
        <div 
          className={cn(
            "relative flex flex-col overflow-hidden transition-all duration-300",
            // Conditional styling based on window state
            isMinimized 
              ? "w-96 h-12 rounded-lg shadow-lg border border-neutral-800 mx-auto mt-[50vh] overflow-hidden bg-neutral-950/90 backdrop-blur-sm"
              : isFullscreen 
                ? "h-screen w-full bg-transparent"
                : isMaximized
                  ? "h-screen w-full bg-neutral-950/20 backdrop-blur-sm"
                  : "w-[90vw] max-w-[1600px] h-[90vh] max-h-screen rounded-2xl shadow-2xl border border-neutral-800 mx-auto mt-[5vh] bg-neutral-950/20 backdrop-blur-sm"
          )}
        >
          {isMinimized ? (
            <div className="flex items-center justify-center h-full bg-neutral-950 text-white">
              <span className="text-sm">Terminal - Minimized</span>
            </div>
          ) : (
            <LayoutWithTerminal>
              <div className="flex-1 overflow-hidden">
                {children}
              </div>
            </LayoutWithTerminal>
          )}
        </div>
      </div>

      {/* Mobile View */}
      <div className="md:hidden h-full relative z-10">{children}</div>
    </motion.div>
    </AnimatePresence>
  );
}
