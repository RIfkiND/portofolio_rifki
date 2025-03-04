import {
  VscClose,
  VscChromeMinimize,
  VscChromeMaximize,
  VscArrowLeft,
  VscArrowRight,

} from "react-icons/vsc";
import { TbBrandGithubCopilot } from "react-icons/tb"; // Copilot icon
import { BiSearch } from "react-icons/bi"; // Search icon
import { FaChevronUp, } from "react-icons/fa"; // Upside-down caret


export default function Header() {

  return (
    <div className="w-full flex flex-col bg-neutral-950 text-white shadow-md">
      {/* Menu Bar */}
      <div className="flex items-center justify-between px-4 py-1 text-sm bg-neutral-950">
        {/* Left Menu Items */}
        <div className="flex items-center space-x-6">
          {[
            "File",
            "Edit",
            "Selection",
            "View",
            "Go",
            "Run",
            "Terminal",
            "Help",
          ].map((item) => (
            <span
              key={item}
              className="hover:bg-neutral-800 p-1 rounded cursor-pointer"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Middle Navigation & Search */}
        <div className="flex items-center flex-1 justify-center space-x-4">
          <VscArrowLeft
            className="text-gray-400 text-lg cursor-pointer hover:bg-neutral-800 rounded"
            title="Back"
          />
          <VscArrowRight
            className="text-gray-400 text-lg cursor-pointer hover:bg-neutral-800 rounded"
            title="Forward"
          />

          {/* Search Bar */}
          <div className="relative flex items-center bg-neutral-800 hover:bg-neutral-700 px-3 py-1 rounded-lg w-[750px]">
            <BiSearch className="text-gray-400 text-lg" />
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent outline-none text-sm text-white ml-2 placeholder-gray-400 w-full"
            />
          </div>

          <TbBrandGithubCopilot
            className="text-gray-400 text-lg cursor-pointer hover:bg-neutral-800 rounded"
            title="Copilot"
          />
          <FaChevronUp
            className="text-gray-400 text-sm rotate-180 cursor-pointer    hover:bg-neutral-800 rounded"
            title="Toggle"
          />
        </div>

        {/* Right Icons */}
        <div className="flex items-center space-x-6">
          <VscChromeMinimize
            className="text-gray-400 text-lg cursor-pointer hover:text-gray-500"
            title="Minimize"
          />
          <VscChromeMaximize
            className="text-gray-400 text-lg cursor-pointer hover:text-gray-500"
            title="Maximize"
          />
          <VscClose
            className="text-red-400 text-lg cursor-pointer hover:text-red-500"
            title="Close Window"
          />
        </div>
      </div>
    </div>
  );
}

