"use client";
import React, { useEffect } from "react";
import Header from "@/components/Header/Header";
import Sidebar from "@/components/SideBar/Sidebar";
import GlobalTerminal from "@/components/Terminal/GlobalTerminal";
import Footer from "@/components/Footer/Footer";
import { useWindowStore } from "@/components/store/useWindowStore";
import { useTabStore } from "@/components/store/useTabStore";
import { cn } from "@/lib/utils";

// Import different body components with correct export names
import { MainBody } from "@/components/Body/MainBody";
import { ExperienceBody } from "@/components/Body/ExperienceBody";
import { SkillBody } from "@/components/Body/SkillBody";
import { ProjectBody } from "@/components/Body/ProjectBody";
import { BlogBody } from "@/components/Body/BlogBody";

export default function LayoutWithTerminal() {
  const { isFullscreen } = useWindowStore();
  
  // Use direct state subscription to ensure reactivity
  const selectedFile = useTabStore((state) => state.selectedFile);
  const isHydrated = useTabStore((state) => state.isHydrated);
  const hydrate = useTabStore((state) => state.hydrate);
  
  // Debug: Log whenever selectedFile changes
  useEffect(() => {
    console.log("🔄 LayoutWithTerminal: selectedFile changed to:", selectedFile?.name, "route:", selectedFile?.route);
  }, [selectedFile]);
  
  // Hydrate the store on mount
  useEffect(() => {
    if (!isHydrated) {
      console.log("💧 Hydrating store...");
      hydrate();
    }
  }, [isHydrated, hydrate]);
  
  console.log("🏗️ LayoutWithTerminal rendering - VSCode layout with sidebar");
  console.log("📁 Selected file:", selectedFile);
  console.log("💧 Is hydrated:", isHydrated);
  
  // Function to render the appropriate body component based on selected file
  const renderBodyContent = () => {
    // Show loading if not hydrated yet
    if (!isHydrated) {
      return (
        <div className="flex items-center justify-center h-full">
          <div className="text-gray-300">Loading VSCode interface...</div>
        </div>
      );
    }
    
    // Get current route from selected file
    const currentRoute = selectedFile?.route || '/';
    
    // Render appropriate body component based on route
    switch (currentRoute) {
      case '/experience':
        return <ExperienceBody />;
      case '/skill':
        return <SkillBody />;
      case '/project':
        return <ProjectBody />;
      case '/blog':
        return <BlogBody />;
      case '/':
      default:
        return <MainBody />;
    }
  };
  
  return (
    <div className={cn(
      "flex flex-col relative bg-transparent",
      isFullscreen ? "h-screen w-screen" : "h-full"
    )}>
      {/* VSCode Header */}
      {!isFullscreen && <Header />}
      
      {/* Main Content Area with Sidebar */}
      <div className={cn(
        "flex bg-transparent",
        isFullscreen ? "flex-1 overflow-hidden" : "flex-1 overflow-hidden"
      )}>
        {/* VSCode Sidebar */}
        <Sidebar />
        
        {/* Main Content */}
        <div className="flex-1 flex flex-col bg-neutral-950">
          {/* Render dynamic content based on selected file */}
          <div key={selectedFile?.name || 'default'} className="h-full">
            {renderBodyContent()}
          </div>
        </div>
      </div>
      
      {/* Terminal and Footer */}
      {!isFullscreen && <GlobalTerminal />}
      {!isFullscreen && <Footer />}
    </div>
  );
}
