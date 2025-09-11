"use client";
import React from "react";
import { useWindowStore } from "@/components/store/useWindowStore";
import { cn } from "@/lib/utils";
import LayoutWithTerminal from "./LayoutWithTerminal";
import ClosedWindow from "@/components/window/ClosedWindow";
import { motion, AnimatePresence } from "framer-motion";

export default function ResponsiveLayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isMaximized, isMinimized, isFullscreen, isClosed, } = useWindowStore();

  // Show closed window if window is closed
  // This covers both first-time visitors and users who explicitly closed it
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
        className="relative min-h-[120vh] w-full"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 1.1, opacity: 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
      {/* Grid Background - covers entire viewport with extra height */}
      <div className="fixed inset-0 z-0 bg-black min-h-[120vh]">
        <div
          className={cn(
            "absolute inset-0 min-h-[120vh]",
            "[background-size:40px_40px]",
            "[background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)]",
            "opacity-10"
          )}
        />
        {/* Radial gradient for the container to give a faded look */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black min-h-[120vh] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      </div>
      
      {/* Desktop View */}
      <div className="hidden md:flex min-h-[120vh] w-full relative z-10 items-center">
        <div 
          className={cn(
            "relative flex flex-col transition-all duration-300 mx-auto",
            // Conditional styling based on window state
            isMinimized 
              ? "w-96 h-12 rounded-lg shadow-lg border border-neutral-800 overflow-hidden bg-neutral-950/90 backdrop-blur-sm"
              : isFullscreen 
                ? "min-h-screen w-full bg-transparent"
                : isMaximized
                  ? "min-h-screen w-full bg-neutral-950/20 backdrop-blur-sm"
                  : "w-[90vw] max-w-[1600px] min-h-[85vh] rounded-2xl shadow-2xl border border-neutral-800 bg-neutral-950/20 backdrop-blur-sm"
          )}
        >
          {isMinimized ? (
            <div className="flex items-center justify-center h-full bg-neutral-950 text-white">
              <span className="text-sm">Terminal - Minimized</span>
            </div>
          ) : (
            <LayoutWithTerminal>
              <div className="flex-1">
                {children}
              </div>
            </LayoutWithTerminal>
          )}
        </div>
      </div>
      {/* Mobile View */}
      <div className="md:hidden min-h-[120vh] w-full relative z-10">{children}</div>
    </motion.div>
    </AnimatePresence>
  );
}
