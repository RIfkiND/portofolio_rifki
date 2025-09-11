import { VscWindow, VscFolder, VscCode, VscSettings, VscFiles } from "react-icons/vsc";
import { useWindowStore } from "@/components/store/useWindowStore";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function ClosedWindow() {
  const { reopen } = useWindowStore();

  const handleReopenWindow = () => {
    reopen();
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-black">
      {/* Grid Background */}
      <div className="absolute inset-0">
        <div
          className={cn(
            "absolute inset-0",
            "[background-size:60px_60px]",
            "[background-image:linear-gradient(to_right,white_0.5px,transparent_0.5px),linear-gradient(to_bottom,white_0.5px,transparent_0.5px)]",
            "opacity-15"
          )}
        />
        {/* Animated gradient overlays */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-cyan-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        {/* Radial gradient for the container to give a faded look */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_30%,black)]"></div>
      </div>
      
      {/* Main Content */}
      <motion.div 
        className="min-h-screen flex items-center justify-center p-4 relative z-10"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="text-center max-w-5xl">
          {/* Windows 11 Style Header */}
          <motion.div 
            className="mb-12"
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative">
              {/* Profile Image Container with enhanced design */}
              <motion.div
                className="relative w-40 h-40 mx-auto mb-8"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.4, duration: 0.8, type: "spring", stiffness: 100 }}
              >
                {/* Outer ring animation */}
                <div className="absolute inset-0 rounded-full border-2 border-blue-400/30 animate-spin" style={{ animationDuration: '8s' }}></div>
                <div className="absolute inset-2 rounded-full border border-purple-400/20 animate-spin" style={{ animationDuration: '6s', animationDirection: 'reverse' }}></div>
                
                {/* Main profile container */}
                <div className="absolute inset-4 bg-gradient-to-br from-blue-500 via-purple-600 to-cyan-500 rounded-full shadow-2xl flex items-center justify-center overflow-hidden">
                  {/* Inner glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400/50 to-purple-500/50 rounded-full"></div>
                  <VscCode className="w-16 h-16 text-white relative z-10 drop-shadow-lg" />
                </div>
                
                {/* Floating particles */}
                <div className="absolute -top-2 -right-2 w-3 h-3 bg-blue-400 rounded-full animate-bounce"></div>
                <div className="absolute -bottom-2 -left-2 w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
                <div className="absolute top-1/2 -right-4 w-1 h-1 bg-cyan-400 rounded-full animate-ping"></div>
              </motion.div>
              
              {/* Enhanced text with better typography */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="text-center"
              >
                <h1 className="text-5xl font-light text-white mb-4 tracking-wide">
                  <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
                    Rifki Nauval Dzaki
                  </span>
                </h1>
                <div className="mb-6 space-y-2">
                  <p className="text-blue-300 text-2xl font-medium tracking-wide">Backend Developer</p>
                  <p className="text-gray-300 text-lg">Software Engineering Student</p>
                  <div className="flex items-center justify-center space-x-2 mt-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-green-300 text-sm font-medium">Available for opportunities</span>
                  </div>
                </div>
                <p className="text-gray-400 text-lg max-w-4xl mx-auto leading-relaxed">
                  Passionate about crafting scalable backend systems and learning cutting-edge technologies. 
                  <br />
                  <span className="text-blue-300 font-medium">1+ year</span> of hands-on experience in modern web development and API design.
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Enhanced Cards Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 max-w-7xl mx-auto"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            {/* Recent Projects Card */}
            <motion.div 
              className="group relative bg-gradient-to-br from-neutral-900/90 to-neutral-800/90 backdrop-blur-lg border border-neutral-700/50 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-500 cursor-pointer shadow-2xl overflow-hidden"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Card glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
              
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-blue-500/20 rounded-xl mr-4 group-hover:bg-blue-500/30 transition-colors duration-300">
                    <VscFolder className="w-8 h-8 text-blue-400 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="text-white font-bold text-xl group-hover:text-blue-300 transition-colors duration-300">Recent Projects</h3>
                </div>
                <div className="text-gray-300 space-y-3 text-base">
                  <p className="flex items-center"><span className="text-blue-400 mr-2">▸</span> E-Learning Platform API</p>
                  <p className="flex items-center"><span className="text-blue-400 mr-2">▸</span> RESTful Web Services</p>
                  <p className="flex items-center"><span className="text-blue-400 mr-2">▸</span> Database Design & Optimization</p>
                  <p className="flex items-center"><span className="text-blue-400 mr-2">▸</span> Authentication Systems</p>
                </div>
              </div>
            </motion.div>

            {/* Skills & Technologies Card */}
            <motion.div 
              className="group relative bg-gradient-to-br from-neutral-900/90 to-neutral-800/90 backdrop-blur-lg border border-neutral-700/50 rounded-2xl p-8 hover:border-green-500/50 transition-all duration-500 cursor-pointer shadow-2xl overflow-hidden"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Card glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
              
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-green-500/20 rounded-xl mr-4 group-hover:bg-green-500/30 transition-colors duration-300">
                    <VscFiles className="w-8 h-8 text-green-400 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="text-white font-bold text-xl group-hover:text-green-300 transition-colors duration-300">Tech Stack</h3>
                </div>
                <div className="text-gray-300 space-y-3 text-base">
                  <p className="flex items-center"><span className="text-green-400 mr-2">▸</span> Laravel, NestJS, Node.js</p>
                  <p className="flex items-center"><span className="text-green-400 mr-2">▸</span> PostgreSQL, MySQL, Redis</p>
                  <p className="flex items-center"><span className="text-green-400 mr-2">▸</span> Docker, Git, Linux</p>
                  <p className="flex items-center"><span className="text-green-400 mr-2">▸</span> TypeScript, Go, Python</p>
                </div>
              </div>
            </motion.div>

            {/* Experience Card */}
            <motion.div 
              className="group relative bg-gradient-to-br from-neutral-900/90 to-neutral-800/90 backdrop-blur-lg border border-neutral-700/50 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-500 cursor-pointer shadow-2xl overflow-hidden"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Card glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
              
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-purple-500/20 rounded-xl mr-4 group-hover:bg-purple-500/30 transition-colors duration-300">
                    <VscSettings className="w-8 h-8 text-purple-400 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="text-white font-bold text-xl group-hover:text-purple-300 transition-colors duration-300">Experience</h3>
                </div>
                <div className="text-gray-300 space-y-3 text-base">
                  <p className="flex items-center"><span className="text-purple-400 mr-2">▸</span> 1+ Year Backend Development</p>
                  <p className="flex items-center"><span className="text-purple-400 mr-2">▸</span> API Design & Implementation</p>
                  <p className="flex items-center"><span className="text-purple-400 mr-2">▸</span> Database Architecture</p>
                  <p className="flex items-center"><span className="text-purple-400 mr-2">▸</span> Modern Development Practices</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Enhanced Main Action Button */}
          <motion.div
            className="relative"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.0, duration: 0.6 }}
          >
            <motion.button
              onClick={handleReopenWindow}
              className="group relative bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 hover:from-blue-700 hover:via-purple-700 hover:to-cyan-700 text-white px-16 py-5 rounded-2xl font-semibold text-xl transition-all duration-500 shadow-2xl hover:shadow-blue-500/25 flex items-center space-x-4 mx-auto overflow-hidden"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Button shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              
              <VscWindow className="w-7 h-7 group-hover:rotate-12 transition-transform duration-500 relative z-10" />
              <span className="relative z-10 tracking-wide">Launch Portfolio</span>
              
              {/* Floating particles around button */}
              <div className="absolute -top-2 -left-2 w-2 h-2 bg-blue-400 rounded-full animate-ping opacity-75"></div>
              <div className="absolute -bottom-2 -right-2 w-1 h-1 bg-purple-400 rounded-full animate-ping opacity-75" style={{ animationDelay: '0.5s' }}></div>
            </motion.button>
            
            {/* Additional call-to-action text */}
            <motion.p 
              className="text-gray-400 text-center mt-4 text-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.6 }}
            >
              Discover my journey in backend development
            </motion.p>
          </motion.div>

          {/* Quick Access Links */}
          <motion.div 
            className="mt-8 flex flex-wrap justify-center gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.0, duration: 0.6 }}
          >
            {[
              { label: "View Projects", shortcut: "See my work" },
              { label: "Download CV", shortcut: "PDF available" },
              { label: "Contact Me", shortcut: "Let's connect" }
            ].map((item) => (
              <motion.button 
                key={item.label}
                className="text-gray-400 hover:text-white text-sm transition-colors group"
                whileHover={{ y: -2 }}
              >
                <div className="text-center">
                  <div className="group-hover:underline">{item.label}</div>
                  <div className="text-xs text-gray-500 mt-1">{item.shortcut}</div>
                </div>
              </motion.button>
            ))}
          </motion.div>

          {/* Get in Touch Section */}
          <motion.div 
            className="mt-12 bg-neutral-900/60 backdrop-blur-sm border border-neutral-700 rounded-2xl p-8 max-w-xl mx-auto"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.8 }}
          >
            <h3 className="text-2xl font-light text-white mb-6 text-center">Get in Touch</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <motion.a 
                href="mailto:rifkinauvaldzaki08@gmail.com"
                className="flex items-center space-x-3 p-4 bg-neutral-800/60 rounded-xl hover:bg-neutral-700/60 transition-all duration-300 group border border-neutral-600 hover:border-neutral-500"
                whileHover={{ scale: 1.02 }}
              >
                <div className="w-10 h-10 bg-red-500/20 rounded-lg flex items-center justify-center">
                  <span className="text-red-400 text-lg">📧</span>
                </div>
                <div>
                  <p className="text-white font-medium">Email</p>
                  <p className="text-gray-400 text-sm">Send a message</p>
                </div>
              </motion.a>

              <motion.a 
                href="https://linkedin.com/in/rifkinauvaldzaki"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 p-4 bg-neutral-800/60 rounded-xl hover:bg-neutral-700/60 transition-all duration-300 group border border-neutral-600 hover:border-neutral-500"
                whileHover={{ scale: 1.02 }}
              >
                <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <span className="text-blue-400 text-lg">💼</span>
                </div>
                <div>
                  <p className="text-white font-medium">LinkedIn</p>
                  <p className="text-gray-400 text-sm">Professional network</p>
                </div>
              </motion.a>

              <motion.a 
                href="https://github.com/RIfkiND"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 p-4 bg-neutral-800/60 rounded-xl hover:bg-neutral-700/60 transition-all duration-300 group border border-neutral-600 hover:border-neutral-500"
                whileHover={{ scale: 1.02 }}
              >
                <div className="w-10 h-10 bg-gray-500/20 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400 text-lg">🐙</span>
                </div>
                <div>
                  <p className="text-white font-medium">GitHub</p>
                  <p className="text-gray-400 text-sm">View my code</p>
                </div>
              </motion.a>

              <motion.a 
                href="/cv/CV_Rifki.pdf"
                download
                className="flex items-center space-x-3 p-4 bg-neutral-800/60 rounded-xl hover:bg-neutral-700/60 transition-all duration-300 group border border-neutral-600 hover:border-neutral-500"
                whileHover={{ scale: 1.02 }}
              >
                <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                  <span className="text-green-400 text-lg">📄</span>
                </div>
                <div>
                  <p className="text-white font-medium">Resume</p>
                  <p className="text-gray-400 text-sm">Download PDF</p>
                </div>
              </motion.a>
            </div>
          </motion.div>

          {/* Footer */}
          <motion.div 
            className="mt-8 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.6 }}
          >
            <div className="text-gray-500 text-sm">
              <p className="mb-2">Rifki Nauval Dzaki • Backend Developer & DevOps Engineer</p>
              <p>📧 rifkinauvaldzaki08@gmail.com • 💼 LinkedIn: rifkinauvaldzaki</p>
              <p className="mt-2 text-xs">Built with Next.js, TypeScript & Modern Web Technologies</p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
