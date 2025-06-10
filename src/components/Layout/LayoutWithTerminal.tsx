"use client";
import React from "react";
import Header from "@/components/Header/Header";
import Terminal from "@/components/Terminal/Terminal";
import Footer from "@/components/Footer/Footer";
import { useTerminalStore } from "@/components/store/useTerminalStore";

export default function LayoutWithTerminal({
  children,
}: {
  children: React.ReactNode;
}) {
  const isTerminalOpen = useTerminalStore((state) => state.isOpen);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 flex flex-col">{children}</main>
      {isTerminalOpen && <Terminal />}
      <Footer />
    </div>
  );
}
