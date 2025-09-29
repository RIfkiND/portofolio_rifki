import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { useTabStore } from "@/components/store/useTabStore";
import { FaMarkdown } from "react-icons/fa";
import { SiGo, SiReact } from "react-icons/si";
import { VscJson } from "react-icons/vsc";
import React from "react";
import PythonLogo from "@/components/icons/PythonLogo";

// File mapping for different routes
const getFileInfoForRoute = (pathname: string) => {
  const fileMap: Record<string, { name: string; icon: React.ReactElement; route: string }> = {
    "/": {
      name: "rifki.md",
      icon: React.createElement(FaMarkdown, { className: "text-blue-400" }),
      route: "/"
    },
    "/experience": {
      name: "experience.py",
      icon: React.createElement(PythonLogo, { size: 16 }),
      route: "/experience"
    },
    "/skill": {
      name: "skill.go",
      icon: React.createElement(SiGo, { className: "text-cyan-400" }),
      route: "/skill"
    },
    "/project": {
      name: "projects.tsx",
      icon: React.createElement(SiReact, { className: "text-blue-500" }),
      route: "/project"
    },
    "/contact": {
      name: "contact.json",
      icon: React.createElement(VscJson, { className: "text-yellow-500" }),
      route: "/contact"
    }
  };

  return fileMap[pathname] || fileMap["/"];
};

export function useRouteSync(skipSync = false) {
  const pathname = usePathname();
  const { setSelectedFile, setOpenTabs, isHydrated, hydrate } = useTabStore();
  const previousPathname = useRef<string | undefined>(undefined);

  // Hydration effect
  useEffect(() => {
    if (!isHydrated) {
      hydrate();
    }
  }, [isHydrated, hydrate]);

  // Route sync effect - only run when pathname actually changes and not skipping
  useEffect(() => {
    if (!isHydrated || previousPathname.current === pathname || skipSync) return;

    const currentFileInfo = getFileInfoForRoute(pathname);
    
    // Update selected file to match current route
    setSelectedFile(currentFileInfo);

    // Get current tabs from store and check if tab is already open
    const currentTabs = useTabStore.getState().openTabs;
    const isTabOpen = currentTabs.some(tab => tab.route === currentFileInfo.route);
    if (!isTabOpen) {
      const newTabs = [...currentTabs, currentFileInfo];
      setOpenTabs(newTabs);
    }

    // Update the previous pathname
    previousPathname.current = pathname;
  }, [pathname, isHydrated, setSelectedFile, setOpenTabs, skipSync]); // Added skipSync to dependencies
}
