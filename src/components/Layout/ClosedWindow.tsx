import { VscWindow, VscFolder, VscCode } from "react-icons/vsc";
import { useWindowStore } from "@/components/store/useWindowStore";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import { motion } from "framer-motion";

export default function ClosedWindow() {
  const { reopen } = useWindowStore();

  const handleReopenWindow = () => {
    reopen();
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Gradient Animation */}
      <div className="absolute inset-0 z-0">
        <BackgroundGradientAnimation />
      </div>
      
      {/* Window Animation Container */}
      <motion.div 
        className="min-h-screen flex items-center justify-center p-4 relative z-10"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <motion.div 
          className="text-center max-w-md"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
        >
        {/* VS Code Logo */}
        <motion.div 
          className="mb-8"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.4, duration: 0.5, type: "spring", stiffness: 200 }}
        >
          <VscCode className="w-24 h-24 text-blue-500 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-white mb-2">VS Code Portfolio</h1>
          <p className="text-gray-400 text-sm">Window has been closed</p>
        </motion.div>

        {/* Window Preview */}
        <div className="bg-neutral-800 border border-neutral-700 rounded-lg p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <VscFolder className="text-blue-400" />
              <span className="text-white text-sm font-medium">portofolio_rifki</span>
            </div>
            <div className="flex space-x-1">
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            </div>
          </div>
          
          <div className="text-left">
            <div className="text-xs text-gray-400 mb-2">📁 Recent files:</div>
            <div className="space-y-1 text-xs">
              <div className="text-blue-400">📄 MobileMainBody.tsx</div>
              <div className="text-green-400">📄 Header.tsx</div>
              <div className="text-purple-400">📄 useWindowStore.ts</div>
            </div>
          </div>
        </div>

        {/* Reopen Button */}
        <motion.button
          onClick={handleReopenWindow}
          className="group bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 mx-auto"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <VscWindow className="w-5 h-5 group-hover:rotate-12 transition-transform" />
          <span>Reopen Window</span>
        </motion.button>

        {/* Quick Actions */}
        <motion.div 
          className="mt-6 flex justify-center space-x-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0, duration: 0.5 }}
        >
          <button className="text-gray-400 hover:text-white text-sm hover:underline transition-colors">
            New Window
          </button>
          <button className="text-gray-400 hover:text-white text-sm hover:underline transition-colors">
            Open Folder
          </button>
          <button className="text-gray-400 hover:text-white text-sm hover:underline transition-colors">
            Settings
          </button>
        </motion.div>

        {/* Footer */}
        <motion.div 
          className="mt-8 text-xs text-gray-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
        >
          <p>Rifki Nauval Dzaki • Backend Developer</p>
          <p className="mt-1">Built with Next.js & TypeScript</p>
        </motion.div>
      </motion.div>
    </motion.div>
    </div>
  );
}
