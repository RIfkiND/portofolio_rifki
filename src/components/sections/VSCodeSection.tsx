"use client";
import React from "react";
import { useWindowStore } from "@/components/store/useWindowStore";
import { cn } from "@/lib/utils";
import LayoutWithTerminal from "@/components/Layout/LayoutWithTerminal";
import { motion } from "framer-motion";

export default function VSCodeSection() {
  const { isMaximized, isMinimized, isFullscreen, isClosed, reopen } = useWindowStore();

  return (
    <section id="vscode" className="py-20 bg-neutral-950 relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 [background-size:60px_60px] [background-image:linear-gradient(to_right,white_0.5px,transparent_0.5px),linear-gradient(to_bottom,white_0.5px,transparent_0.5px)] opacity-5" />
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-neutral-950 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Interactive Portfolio
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Experience my portfolio in a VSCode-style interface. Browse through my projects, skills, and experience 
            just like navigating through code files.
          </p>
        </motion.div>

        {/* VSCode Container */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {/* Show closed state when window is closed */}
          {isClosed ? (
            <div className="w-full max-w-6xl h-[70vh] border border-neutral-700 bg-neutral-900/50 backdrop-blur-sm rounded-lg flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-3xl">VS</span>
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">VSCode Portfolio Closed</h3>
                <p className="text-gray-400 mb-6">Click below to open the interactive portfolio experience</p>
                <button
                  onClick={reopen}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
                >
                  Open Portfolio
                </button>
              </div>
            </div>
          ) : (
            <>
              {/* Fullscreen Mode */}
              {isFullscreen && (
                <div className="fixed inset-0 h-screen w-screen bg-neutral-950 z-50 overflow-hidden">
                  <LayoutWithTerminal />
                </div>
              )}

              {/* Section VSCode Window */}
              {!isFullscreen && (
                <div 
                  className={cn(
                    "transition-all duration-300 shadow-2xl border border-neutral-700 bg-neutral-950/90 backdrop-blur-sm rounded-lg overflow-hidden",
                    // Responsive sizing with proper conditions
                    isMinimized 
                      ? "w-80 h-12"
                      : isMaximized
                        ? "w-full h-[85vh]"
                        : "w-full max-w-6xl h-[70vh]"
                  )}
                >
                  {isMinimized ? (
                    <div className="flex items-center justify-center h-full bg-neutral-950 text-white cursor-pointer" onClick={() => useWindowStore.getState().minimize()}>
                      <span className="text-sm">VSCode Portfolio - Minimized (Click to restore)</span>
                    </div>
                  ) : (
                    <LayoutWithTerminal />
                  )}
                </div>
              )}
            </>
          )}
        </motion.div>

        {/* Section Footer */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400 text-lg">
            Use the window controls to minimize, maximize, or go fullscreen for the complete VSCode experience.
          </p>
          <div className="flex justify-center gap-4 mt-6">
            <span className="text-sm text-gray-500 bg-neutral-800 px-3 py-1 rounded">💡 Click files in sidebar to switch content</span>
            <span className="text-sm text-gray-500 bg-neutral-800 px-3 py-1 rounded">🚀 Try fullscreen mode</span>
            <span className="text-sm text-gray-500 bg-neutral-800 px-3 py-1 rounded">📦 Minimize to save space</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}