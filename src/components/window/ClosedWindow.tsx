import { VscWindow, VscFolder, VscCode, VscSettings, VscFiles } from "react-icons/vsc";
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
      {/* Dark Background Gradient Animation */}
      <div className="absolute inset-0">
        <BackgroundGradientAnimation
          gradientBackgroundStart="rgb(0, 0, 0)"
          gradientBackgroundEnd="rgb(15, 15, 35)"
          firstColor="30, 30, 100"
          secondColor="50, 20, 80"
          thirdColor="20, 40, 120"
          fourthColor="40, 10, 60"
          fifthColor="25, 25, 90"
          pointerColor="60, 30, 140"
          size="90%"
          blendingValue="multiply"
          interactive={true}
        />
        {/* Additional dark overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
        {/* Subtle accent gradients */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-purple-600/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-600/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-indigo-600/10 via-purple-600/10 to-blue-600/10 rounded-full blur-3xl"></div>
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
              {/* Profile Image Container */}
              <motion.div
                className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl shadow-2xl flex items-center justify-center overflow-hidden"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.4, duration: 0.8, type: "spring", stiffness: 100 }}
              >
                {/* You can replace this with your actual image */}
                <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                  <VscCode className="w-16 h-16 text-white" />
                </div>
              </motion.div>
              <h1 className="text-4xl font-light text-white mb-2">Rifki Nauval Dzaki</h1>
              <div className="mb-4">
                <p className="text-blue-200 text-xl font-medium">Backend Developer & DevOps Engineer</p>
                <p className="text-blue-300/80 text-lg mt-2">Software Engineering Student at Telkom University</p>
              </div>
              <p className="text-blue-200/70 text-base max-w-3xl mx-auto leading-relaxed">
                Passionate about building scalable backend systems and cloud infrastructure. 
                Experienced in modern web technologies, API development, and DevOps practices.
              </p>
            </div>
          </motion.div>

          {/* Windows 11 Style Cards Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-6xl mx-auto"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            {/* Recent Projects Card */}
            <motion.div 
              className="bg-black/30 backdrop-blur-xl border border-white/10 rounded-xl p-8 hover:bg-black/40 hover:border-white/20 transition-all duration-300 cursor-pointer group shadow-2xl"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <VscFolder className="w-10 h-10 text-blue-400 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-white font-semibold mb-4 text-lg">Recent Projects</h3>
              <div className="text-sm text-blue-200/80 space-y-2">
                <p>• E-Learning Platform API</p>
                <p>• Microservices Architecture</p>
                <p>• Cloud Infrastructure Setup</p>
                <p>• Real-time Chat Application</p>
              </div>
            </motion.div>

            {/* Skills & Technologies Card */}
            <motion.div 
              className="bg-black/30 backdrop-blur-xl border border-white/10 rounded-xl p-8 hover:bg-black/40 hover:border-white/20 transition-all duration-300 cursor-pointer group shadow-2xl"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <VscFiles className="w-10 h-10 text-green-400 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-white font-semibold mb-4 text-lg">Tech Stack</h3>
              <div className="text-sm text-blue-200/80 space-y-2">
                <p>• Node.js, Python, Go</p>
                <p>• PostgreSQL, Redis, Docker</p>
                <p>• AWS, Kubernetes, CI/CD</p>
                <p>• React, Next.js, TypeScript</p>
              </div>
            </motion.div>

            {/* Experience Card */}
            <motion.div 
              className="bg-black/30 backdrop-blur-xl border border-white/10 rounded-xl p-8 hover:bg-black/40 hover:border-white/20 transition-all duration-300 cursor-pointer group shadow-2xl"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <VscSettings className="w-10 h-10 text-purple-400 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-white font-semibold mb-4 text-lg">Experience</h3>
              <div className="text-sm text-blue-200/80 space-y-2">
                <p>• 2+ Years Backend Dev</p>
                <p>• DevOps & Cloud Expert</p>
                <p>• Team Collaboration</p>
                <p>• Agile Development</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Main Action Button */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <motion.button
              onClick={handleReopenWindow}
              className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-12 py-4 rounded-full font-medium text-lg transition-all duration-300 shadow-xl hover:shadow-2xl flex items-center space-x-3 mx-auto"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <VscWindow className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
              <span>Explore My Portfolio</span>
            </motion.button>
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
                className="text-blue-200/80 hover:text-white text-sm transition-colors group"
                whileHover={{ y: -2 }}
              >
                <div className="text-center">
                  <div className="group-hover:underline">{item.label}</div>
                  <div className="text-xs text-blue-300/60 mt-1">{item.shortcut}</div>
                </div>
              </motion.button>
            ))}
          </motion.div>

          {/* Get in Touch Section */}
          <motion.div 
            className="mt-12 bg-black/20 backdrop-blur-xl border border-white/10 rounded-2xl p-8 max-w-xl mx-auto"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.8 }}
          >
            <h3 className="text-2xl font-light text-white mb-6 text-center">Get in Touch</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <motion.a 
                href="mailto:rifkinauvaldzaki08@gmail.com"
                className="flex items-center space-x-3 p-4 bg-black/30 rounded-xl hover:bg-black/40 transition-all duration-300 group border border-white/5 hover:border-white/20"
                whileHover={{ scale: 1.02 }}
              >
                <div className="w-10 h-10 bg-red-500/20 rounded-lg flex items-center justify-center">
                  <span className="text-red-400 text-lg">📧</span>
                </div>
                <div>
                  <p className="text-white font-medium">Email</p>
                  <p className="text-blue-200/70 text-sm">Send a message</p>
                </div>
              </motion.a>

              <motion.a 
                href="https://linkedin.com/in/rifkinauvaldzaki"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 p-4 bg-black/30 rounded-xl hover:bg-black/40 transition-all duration-300 group border border-white/5 hover:border-white/20"
                whileHover={{ scale: 1.02 }}
              >
                <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <span className="text-blue-400 text-lg">💼</span>
                </div>
                <div>
                  <p className="text-white font-medium">LinkedIn</p>
                  <p className="text-blue-200/70 text-sm">Professional network</p>
                </div>
              </motion.a>

              <motion.a 
                href="https://github.com/RIfkiND"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 p-4 bg-black/30 rounded-xl hover:bg-black/40 transition-all duration-300 group border border-white/5 hover:border-white/20"
                whileHover={{ scale: 1.02 }}
              >
                <div className="w-10 h-10 bg-gray-500/20 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400 text-lg">🐙</span>
                </div>
                <div>
                  <p className="text-white font-medium">GitHub</p>
                  <p className="text-blue-200/70 text-sm">View my code</p>
                </div>
              </motion.a>

              <motion.a 
                href="/cv/CV_Rifki.pdf"
                download
                className="flex items-center space-x-3 p-4 bg-black/30 rounded-xl hover:bg-black/40 transition-all duration-300 group border border-white/5 hover:border-white/20"
                whileHover={{ scale: 1.02 }}
              >
                <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                  <span className="text-green-400 text-lg">📄</span>
                </div>
                <div>
                  <p className="text-white font-medium">Resume</p>
                  <p className="text-blue-200/70 text-sm">Download PDF</p>
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
            <div className="text-blue-200/60 text-sm">
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
