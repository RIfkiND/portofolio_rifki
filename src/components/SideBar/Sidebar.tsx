"use client";
import { useState } from "react";
import {
  VscFiles,
  VscSearch,
  VscSourceControl,
  VscExtensions,
  VscAccount,
  VscSettings,
  VscChevronRight,
  VscChevronDown,
  VscGithub,
  VscBookmark,
} from "react-icons/vsc";
import { FaDocker, FaDatabase } from "react-icons/fa";
import { SiKubernetes } from "react-icons/si";

export default function Sidebar() {
  const [showFiles, setShowFiles] = useState(false);
  const [openFolders, setOpenFolders] = useState<{ [key: string]: boolean }>(
    {}
  );

  const toggleFolder = (folder: string) => {
    setOpenFolders((prev) => ({ ...prev, [folder]: !prev[folder] }));
  };

  return (
    <div className="flex h-full">
      {/* Sidebar */}
      <div className="w-16 bg-neutral-900 text-white flex flex-col items-center py-4 space-y-6 justify-between">
        <div className="flex flex-col space-y-6">
          <VscFiles
            className="text-xl hover:text-blue-400 cursor-pointer"
            onClick={() => setShowFiles(!showFiles)}
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

      {/* File System (Expands when clicking the Files icon) */}
      {showFiles && (
        <div className="w-64 bg-neutral-800 text-white p-3 flex flex-col">
          <h2 className="text-lg font-semibold mb-3">File Explorer</h2>
          <div className="space-y-2">
            {/* Dummy Folders and Files */}
            <div>
              <div
                className="flex items-center cursor-pointer hover:bg-neutral-700 px-2 py-1 rounded-md"
                onClick={() => toggleFolder("src")}
              >
                {openFolders["src"] ? <VscChevronDown /> : <VscChevronRight />}
                <span className="ml-2">src</span>
              </div>
              {openFolders["src"] && (
                <div className="ml-5 space-y-1">
                  <div className="cursor-pointer hover:bg-neutral-700 px-2 py-1 rounded-md">
                    components/
                  </div>
                  <div className="cursor-pointer hover:bg-neutral-700 px-2 py-1 rounded-md">
                    pages/
                  </div>
                  <div className="cursor-pointer hover:bg-neutral-700 px-2 py-1 rounded-md">
                    utils/
                  </div>
                </div>
              )}
            </div>
            <div className="cursor-pointer hover:bg-neutral-700 px-2 py-1 rounded-md">
              package.json
            </div>
            <div className="cursor-pointer hover:bg-neutral-700 px-2 py-1 rounded-md">
              README.md
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
