"use client";
import React from "react";
import Header from "@/components/Header/Header";
import GlobalTerminal from "@/components/Terminal/GlobalTerminal";
import Footer from "@/components/Footer/Footer";

export default function LayoutWithTerminal({
  children,
}: {
  children: React.ReactNode;
}) {
  console.log("🏗️ LayoutWithTerminal rendering - GlobalTerminal should be included");
  
  return (
    <div className="flex flex-col min-h-full relative bg-transparent">
      <Header />
      <div className="flex-1 flex bg-transparent">
        {children}
      </div>
      <GlobalTerminal />
      <Footer />
    </div>
  );
}
