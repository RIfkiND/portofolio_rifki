import { useEffect } from "react";
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

export function useRouteSync() {
  const pathname = usePathname();
  const { setSelectedFile, openTabs, setOpenTabs, isHydrated, hydrate } = useTabStore();

  useEffect(() => {
    // Hydrate the store first
    if (!isHydrated) {
      hydrate();
      return;
    }

    const currentFileInfo = getFileInfoForRoute(pathname);
    
    // Update selected file to match current route
    setSelectedFile(currentFileInfo);
    
    // Add to open tabs if not already open (check both name and route)
    const isTabOpen = openTabs.some(tab => tab.route === pathname && tab.name === currentFileInfo.name);
    if (!isTabOpen) {
      const newTabs = [...openTabs, currentFileInfo];
      setOpenTabs(newTabs);
    }
  }, [pathname, setSelectedFile, openTabs, setOpenTabs, isHydrated, hydrate]);
}
