"use client";
import { useState } from "react";
import { FaExclamationCircle } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import {
  VscClose,
  VscRunAll,
  VscOpenPreview,
  VscSplitHorizontal,
  VscEllipsis,
} from "react-icons/vsc";

export default function TabSection() {
  const [activeTab, setActiveTab] = useState("Rifki.md");

  const tabs = [
    {
      icon: <FaExclamationCircle className="text-blue-400 text-xl" />,
      name: "Rifki.md",
    },
    {
      icon: <SiTypescript className="text-blue-500 text-xl" />,
      name: "dashboard.ts",
    },
  ];

  return (
    <div className="flex items-center justify-between bg-neutral-900 text-white  border-neutral-800">
      {/* Tabs */}
      <div className="flex">
        {tabs.map(({ icon, name }) => (
          <div
            key={name}
            onClick={() => setActiveTab(name)}
            className={`group flex items-center px-3 py-2 cursor-pointer transition duration-200 ${
              activeTab === name
                ? "bg-neutral-950"
                : "bg-neutral-900 hover:bg-neutral-800"
            }`}
          >
            {icon}
            <span className="font-semibold text-sm ml-2">{name}</span>
            <div
              className={`ml-2 transition duration-150 ${
                activeTab === name
                  ? "opacity-100"
                  : "opacity-0 group-hover:opacity-100"
              }`}
            >
              <VscClose className="text-gray-400 text-sm hover:text-red-500 cursor-pointer" />
            </div>
          </div>
        ))}
      </div>

      {/* Actions */}
      <div className="flex items-center space-x-3 pr-4">
        <VscRunAll
          className="text-green-400 text-lg cursor-pointer hover:text-green-500"
          title="Run Code"
        />
        <VscOpenPreview
          className="text-gray-400 text-lg cursor-pointer hover:text-gray-500"
          title="Open Editor"
        />
        <VscSplitHorizontal
          className="text-gray-400 text-lg cursor-pointer hover:text-gray-500"
          title="Split Editor"
        />
        <VscEllipsis
          className="text-gray-400 text-lg cursor-pointer hover:text-gray-500"
          title="More Options"
        />
      </div>
    </div>
  );
}
