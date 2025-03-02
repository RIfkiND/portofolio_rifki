"use client";
import { useState } from "react";
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
  VscFolder,
  VscFolderOpened,
} from "react-icons/vsc";
import {
  FaDocker,
  FaDatabase,
  FaChevronRight,
  FaChevronDown,
} from "react-icons/fa";
import { SiKubernetes } from "react-icons/si";

export default function Sidebar() {
  const [showFiles, setShowFiles] = useState(false);
  const [openFolders, setOpenFolders] = useState<{ [key: string]: boolean }>(
    {}
  );

  const toggleFolder = (folder: string) => {
    setOpenFolders((prev) => ({
      ...prev,
      [folder]: !prev[folder],
    }));
  };

  return (
    <div className="flex h-full">
      {/* Sidebar */}
      <div className="w-16 bg-neutral-800 text-white flex flex-col items-center py-4 space-y-6 justify-between">
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

      {/* File Explorer */}
      {showFiles && (
        <div className="w-64 bg-neutral-950 text-white flex flex-col">
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
            <div className="space-y-2 px-3 pb-3">
              {/* SRC Folder */}
              <div>
                <div
                  className="flex items-center cursor-pointer hover:bg-neutral-800 px-2 py-1 rounded"
                  onClick={() => toggleFolder("src")}
                >
                  {openFolders["src"] ? (
                    <FaChevronDown className="text-gray-400 text-sm" />
                  ) : (
                    <FaChevronRight className="text-gray-400 text-sm" />
                  )}
                  {openFolders["src"] ? (
                    <VscFolderOpened className="ml-2 text-yellow-500" />
                  ) : (
                    <VscFolder className="ml-2 text-yellow-500" />
                  )}
                  <span className="ml-2">src</span>
                </div>
                {openFolders["src"] && (
                  <div className="ml-5 space-y-1">
                    {["components", "pages", "utils"].map((folder) => (
                      <div
                        key={folder}
                        className="flex items-center cursor-pointer hover:bg-neutral-800 px-2 py-1 rounded"
                      >
                        <VscFolder className="text-yellow-500" />
                        <span className="ml-2">{folder}/</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Files in root */}
              {["package.json", "README.md"].map((file) => (
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

          {/* Timeline Folder */}
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
      )}
    </div>
  );
}
