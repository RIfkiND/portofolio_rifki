"use client";
import { JSX, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
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
  VscFile,
} from "react-icons/vsc";
import {
  FaDocker,
  FaDatabase,
  FaChevronRight,
  FaChevronDown,
  FaExclamationCircle,
} from "react-icons/fa";
import { SiKubernetes, SiGo, SiTypescript, SiPython } from "react-icons/si";
import { usePathname } from "next/navigation";
import { useTabStore } from "@/components/store/useTabStore";
import { useTerminalStore } from "@/components/store/useTerminalStore";

export default function Sidebar() {
  interface FileTab {
    name: string;
    icon?: JSX.Element;
    route: string;
  }

  const {
    openTabs,
    setOpenTabs,
    setSelectedFile,
    isSidebarOpen,
    setSidebarOpen,
    toggleSidebar,
  } = useTabStore();
  const { isOpen: isTerminalOpen } = useTerminalStore();
  const [openFolders, setOpenFolders] = useState<{ [key: string]: boolean }>(
    {}
  );
  const route = usePathname();
  const router = useRouter();

  // Sync sidebar, openTabs, and selectedFile state from localStorage after mount (avoids hydration error)
  useEffect(() => {
    // Sidebar open state
    const storedSidebar = localStorage.getItem("isSidebarOpen");
    if (storedSidebar !== null) setSidebarOpen(storedSidebar === "true");

    // Open tabs
    const storedTabs = localStorage.getItem("openTabs");
    if (storedTabs) {
      try {
        setOpenTabs(JSON.parse(storedTabs));
      } catch {}
    }

    // Selected file
    const storedSelected = localStorage.getItem("selectedFile");
    if (storedSelected) {
      try {
        setSelectedFile(JSON.parse(storedSelected));
      } catch {}
    }
  }, [setOpenTabs, setSelectedFile, setSidebarOpen]);

  const toggleFolder = (folder: string) => {
    setOpenFolders((prev) => ({
      ...prev,
      [folder]: !prev[folder],
    }));
  };
  const handleOpenFile = (file: FileTab) => {
    if (!openTabs.some((tab) => tab.name === file.name)) {
      setOpenTabs([...openTabs, file]);
    }
    setSelectedFile(file);
    router.push(file.route);
  };

  const files = [
    {
      name: "skill.go",
      icon: <SiGo className="text-blue-400" />,
      route: "/skill",
    },
    {
      name: "Experience.py",
      icon: <SiPython className="text-yellow-400" />,
      route: "/experience",
    },
    {
      name: "Project.ts",
      icon: <SiTypescript className="text-blue-500" />,
      route: "/project",
    },
    {
      name: "Rifki.md",
      icon: <FaExclamationCircle className="text-blue-400" />,
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
        <div 
          className="w-64 bg-neutral-950 text-white flex flex-col justify-between transition-all duration-300"
          style={{
            height: isTerminalOpen ? 'calc(100% - 280px)' : '100%'
          }}
        >
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

          {/* Timeline Folder (Moved to the Bottom) */}
          <div>
            <div
              className="flex items-center bg-neutral-900 w-full py-1 px-3 cursor-pointer"
              onClick={() => toggleFolder("timeline")}
            >
              {openFolders["timeline"] ? (
                <FaChevronDown className="text-gray-400 text-sm" />
              ) : (
                <FaChevronRight className="text-gray-400 text-sm" />
              )}
              <h2 className="text-sm ml-2">timeline</h2>
            </div>

            {openFolders["timeline"] && (
              <div className="space-y-2 px-3 pb-3 ml-4">
                {["events.json", "history.md"].map((file) => (
                  <div
                    key={file}
                    className="flex items-center cursor-pointer hover:bg-neutral-800 px-2 py-1 rounded"
                  >
                    <VscFile className="text-gray-400" />
                    <span className="ml-2">{file}</span>
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
