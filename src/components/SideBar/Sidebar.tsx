"use client";
import { useState, useEffect } from "react";
import {
  VscFiles,
  VscSearch,
  VscSourceControl,
  VscExtensions,
  VscAccount,
  VscSettings,
  VscEllipsis,
  VscGithub,
  VscBookmark,
} from "react-icons/vsc";
import {
  FaDocker,
  FaDatabase,
  FaChevronRight,
  FaChevronDown,
  FaMarkdown,
} from "react-icons/fa";
import { SiKubernetes, SiGo, SiReact } from "react-icons/si";
import { usePathname } from "next/navigation";
import { useTabStore } from "@/components/store/useTabStore";
import PythonLogo from "@/components/icons/PythonLogo";

export default function Sidebar() {
  const {
    openTabs,
    setOpenTabs,
    setSelectedFile,
    isSidebarOpen,
    setSidebarOpen,
    toggleSidebar,
  } = useTabStore();
  const [openFolders, setOpenFolders] = useState<{ [key: string]: boolean }>(
    {}
  );
  const route = usePathname();

  // Sync sidebar and openTabs state from localStorage after mount (avoids hydration error)
  useEffect(() => {
    // Sidebar open state
    const storedSidebar = localStorage.getItem("isSidebarOpen");
    if (storedSidebar !== null) setSidebarOpen(storedSidebar === "true");

    // Open tabs - but don't override if already set by store hydration
    const storedTabs = localStorage.getItem("openTabs");
    if (storedTabs && openTabs.length <= 1) { // Only load if we have default tabs
      try {
        setOpenTabs(JSON.parse(storedTabs));
      } catch {}
    }

    // DON'T sync selectedFile here - let the store handle it through hydration
    // The LayoutWithTerminal's hydrate() will handle selectedFile restoration
  }, [setSidebarOpen, setOpenTabs, openTabs.length]); // Fixed dependencies

  const toggleFolder = (folder: string) => {
    setOpenFolders((prev) => ({
      ...prev,
      [folder]: !prev[folder],
    }));
  };
  const handleOpenFile = (file: { name: string; icon: React.ReactElement; route: string }) => {
    console.log("🖱️ Sidebar: File clicked:", file.name, "->", file.route);
    
    // Check for duplicates by both name and route
    if (!openTabs.some((tab) => tab.name === file.name && tab.route === file.route)) {
      setOpenTabs([...openTabs, file]);
    }
    
    console.log("🖱️ Sidebar: Calling setSelectedFile...");
    setSelectedFile(file);
  };

  const files = [
    {
      name: "skill.go",
      icon: <SiGo className="text-cyan-400" />,
      route: "/skill",
    },
    {
      name: "experience.py",
      icon: <PythonLogo size={16} />,
      route: "/experience",
    },
    {
      name: "projects.tsx",
      icon: <SiReact className="text-blue-500" />,
      route: "/project",
    },
    {
      name: "blog.md",
      icon: <FaMarkdown className="text-purple-400" />,
      route: "/blog",
    },
    {
      name: "rifki.md",
      icon: <FaMarkdown className="text-blue-400" />,
      route: "/",
    },
  ];

  return (
    <div className="flex h-full">
      {/* Sidebar */}
      <div className="w-16 bg-neutral-800 text-white flex flex-col items-center py-4 space-y-6 justify-between">
        <div className="flex flex-col space-y-6">
          <VscFiles
            className="text-xl hover:text-blue-400 cursor-pointer"
            onClick={toggleSidebar}
          />
          <VscSearch className="text-xl hover:text-blue-400 cursor-pointer" />
          <VscSourceControl className="text-xl hover:text-blue-400 cursor-pointer" />
          <VscExtensions className="text-xl hover:text-blue-400 cursor-pointer" />
          <FaDocker className="text-xl hover:text-blue-400 cursor-pointer" />
          <SiKubernetes className="text-xl hover:text-blue-400 cursor-pointer" />
          <FaDatabase className="text-xl hover:text-blue-400 cursor-pointer" />
          <VscGithub className="text-xl hover:text-blue-400 cursor-pointer" />
          <VscBookmark className="text-xl hover:text-blue-400 cursor-pointer" />
        </div>
        <div className="pb-4 flex flex-col space-y-4">
          <VscAccount className="text-xl hover:text-blue-400 cursor-pointer" />
          <VscSettings className="text-xl hover:text-blue-400 cursor-pointer" />
        </div>
      </div>

      {/* File Explorer */}
      {isSidebarOpen && (
        <div className="w-64 bg-neutral-950 text-white flex flex-col h-full">
          <div className="flex-1 overflow-y-auto">
            <div className="flex items-center justify-between px-3 pt-3 mb-1">
              <h2 className="text-sm">Explorer</h2>
              <VscEllipsis
                className="text-gray-400 text-lg cursor-pointer hover:text-gray-500"
                title="More Options"
              />
            </div>

            {/* Root Folder */}
            <div
              className="flex items-center bg-neutral-900 w-full py-1 px-3 cursor-pointer"
              onClick={() => toggleFolder("root")}
            >
              {openFolders["root"] ? (
                <FaChevronDown className="text-gray-400 text-sm" />
              ) : (
                <FaChevronRight className="text-gray-400 text-sm" />
              )}
              <h2 className="text-sm ml-2">Rifki_ND</h2>
            </div>

            {openFolders["root"] && (
              <div className="space-y-2 py-2">
                {files.map((file) => (
                  <div
                    key={file.name}
                    className={`flex items-center cursor-pointer px-2 py-1 rounded ${
                      route === file.route
                        ? "bg-neutral-700"
                        : "hover:bg-neutral-800"
                    }`}
                    onClick={() => handleOpenFile(file)}
                  >
                    {file.icon}
                    <span className="ml-2">{file.name}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
