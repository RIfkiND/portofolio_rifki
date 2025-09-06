"use client";
import React from "react";
import Header from "@/components/Header/Header";
import GlobalTerminal from "@/components/Terminal/GlobalTerminal";
import Footer from "@/components/Footer/Footer";
import { useTerminalStore } from "@/components/store/useTerminalStore";

export default function LayoutWithTerminal({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isOpen: isTerminalOpen } = useTerminalStore();
  
  console.log("🏗️ LayoutWithTerminal rendering - GlobalTerminal should be included");
  
  return (
    <div className="flex flex-col h-full relative bg-transparent">
      <Header />
      <div 
        className="flex-1 flex bg-transparent"
        style={{
          height: isTerminalOpen ? 'calc(100% - 280px)' : 'calc(100% - 0px)',
          overflow: 'hidden'
        }}
      >
        {children}
      </div>
      <GlobalTerminal />
      <Footer />
    </div>
  );
}
