import {
  VscClose,
  VscChromeMinimize,
  VscChromeMaximize,
  VscChromeRestore,
  VscArrowLeft,
  VscArrowRight,

} from "react-icons/vsc";
import { TbBrandGithubCopilot } from "react-icons/tb"; // Copilot icon
import { BiSearch } from "react-icons/bi"; // Search icon
import { FaChevronUp, } from "react-icons/fa"; // Upside-down caret
import { useWindowStore } from "@/components/store/useWindowStore";


export default function Header() {
  const { 
    isMaximized, 
    isMinimized, 
    maximize, 
    minimize, 
    restore, 
    toggleFullscreen, 
    close 
  } = useWindowStore();

  const handleMinimize = () => {
    minimize();
  };

  const handleMaximize = () => {
    if (isMaximized) {
      restore();    
    } else {
      maximize();
    }
  };

  const handleClose = () => {
    close();
  };

  return (
    <div className="w-full flex flex-col bg-neutral-950 text-white shadow-md">
      {/* Menu Bar */}
      <div className="flex items-center justify-between px-2 lg:px-4 py-1 text-sm bg-neutral-950 min-w-0">
        {/* Left Menu Items */}
        <div className="flex items-center space-x-2 lg:space-x-6 flex-shrink-0">
          {[
            "File",
            "Edit",
            "Selection",
            "View",
            "Go",
            "Run",
            "Terminal",
            "Help",
          ].map((item, index) => (
            <span
              key={item}
              className={`hover:bg-neutral-800 p-1 rounded cursor-pointer text-xs lg:text-sm ${
                index > 3 ? 'hidden lg:inline' : ''
              }`}
            >
              {item}
            </span>
          ))}
        </div>

        {/* Middle Navigation & Search */}
        <div className="flex items-center flex-1 justify-center space-x-2 lg:space-x-4 mx-4">
          <VscArrowLeft
            className="text-gray-400 text-4xl 2xl:text-4xl cursor-pointer hover:bg-neutral-800 rounded p-2"
            title="Back"
          />
          <VscArrowRight
            className="text-gray-400 text-4xl 2xl:text-4xl cursor-pointer hover:bg-neutral-800 rounded p-2"
            title="Forward"
          />

          {/* Search Bar */}
          <div className="relative flex items-center bg-neutral-800 hover:bg-neutral-700 px-3 py-1 rounded-lg w-full max-w-sm lg:max-w-md xl:max-w-lg">
            <BiSearch className="text-gray-400 text-xl 2xl:text-2xl flex-shrink-0" />
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent outline-none text-sm text-white ml-2 placeholder-gray-400 w-full min-w-0"
            />
          </div>

          <TbBrandGithubCopilot
            className="text-gray-400 text-3xl 2xl:text-4xl cursor-pointer hover:bg-neutral-800 rounded p-2 flex-shrink-0"
            title="Copilot"
          />
          <FaChevronUp
            className="text-gray-400 text-3xl 2xl:text-4xl rotate-180 cursor-pointer hover:bg-neutral-800 rounded p-2 flex-shrink-0"
            title="Toggle"
          />
        </div>

        {/* Right Icons */}
        <div className="flex items-center space-x-2 lg:space-x-6 flex-shrink-0">
          <VscChromeMinimize
            className={`text-gray-400 text-3xl 2xl:text-4xl cursor-pointer hover:text-gray-500 p-2 transition-colors ${
              isMinimized ? 'text-blue-400' : ''
            }`}
            title="Minimize"
            onClick={handleMinimize}
          />
          {isMaximized ? (
            <VscChromeRestore
              className="text-gray-400 text-3xl 2xl:text-4xl cursor-pointer hover:text-gray-500 p-2 transition-colors"
              title="Restore (Double-click for fullscreen)"
              onClick={handleMaximize}
              onDoubleClick={toggleFullscreen}
            />
          ) : (
            <VscChromeMaximize
              className="text-gray-400 text-3xl 2xl:text-4xl cursor-pointer hover:text-gray-500 p-2 transition-colors"
              title="Maximize (Double-click for fullscreen)"
              onClick={handleMaximize}
              onDoubleClick={toggleFullscreen}
            />
          )}
          <VscClose
            className="text-red-400 text-3xl 2xl:text-4xl cursor-pointer hover:text-red-500 p-2 transition-colors"
            title="Close Window"
            onClick={handleClose}
          />
        </div>
      </div>
    </div>
  );
}

