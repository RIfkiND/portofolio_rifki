"use client";
import React from "react";
import Header from "@/components/Header/Header";
import GlobalTerminal from "@/components/Terminal/GlobalTerminal";
import Footer from "@/components/Footer/Footer";
import { useWindowStore } from "@/components/store/useWindowStore";
import { cn } from "@/lib/utils";

export default function LayoutWithTerminal({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isFullscreen } = useWindowStore();
  console.log("🏗️ LayoutWithTerminal rendering - GlobalTerminal should be included");
  
  return (
    <div className={cn(
      "flex flex-col relative bg-transparent",
      isFullscreen ? "h-screen w-screen" : "h-full min-h-full"
    )}>
      {!isFullscreen && <Header />}
      <div className={cn(
        "flex bg-transparent",
        isFullscreen ? "flex-1 h-full overflow-hidden" : "flex-1 min-h-0"
      )}>
        {children}
      </div>
      {!isFullscreen && <GlobalTerminal />}
      {!isFullscreen && <Footer />}
    </div>
  );
}
