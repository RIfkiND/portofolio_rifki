import {
  FaExclamationTriangle,
  FaArrowRight,
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaDownload,
  FaRocket,
  FaCode,
} from "react-icons/fa";
import Image from "next/image";
import GradientText from "@/components/Bits/GradientText";
import { useRouter } from "next/navigation";
import TechStack from "@/components/Table/TechStack";
import ShinyText from "@/components/Bits/ShinyText";
import { useRouteSync } from "@/hooks/useRouteSync";
import { MobileMainBody } from "@/components/Mobile/MobileMainBody";
import { motion } from "framer-motion";

interface MainBodyProps {
  searchTerm?: string | null;
}

export function MainBody({ searchTerm }: MainBodyProps) {
  useRouteSync(); // This will sync the current route with the tab store
  const router = useRouter();

  return (
    <>
      {/* Mobile Main Body - Show on mobile screens only via CSS */}
      <div className="mobile-only">
        <MobileMainBody searchTerm={searchTerm} />
      </div>

      {/* Desktop Main Body - Show on desktop screens only via CSS */}
      <div className="desktop-only h-full flex flex-col relative bg-neutral-900 overflow-hidden">
        {/* Sticky Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="sticky top-0 left-0 w-full bg-neutral-900/90 backdrop-blur-sm text-gray-300 text-sm px-2 md:px-4 py-1 flex items-center z-50"
        >
          <FaCode className="mr-2 text-blue-400" />
          <span className="font-mono text-xs md:text-sm">src &gt; rifki.md</span>
          <span className="ml-auto text-xs text-gray-500">Portfolio • Markdown</span>
        </motion.div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto">
          {/* Hero Section with Picture */}
          <div className="flex justify-center items-start pt-4 md:pt-8 pb-16 md:pb-32">
            <div className="max-w-7xl w-full px-4 md:px-6">
              
              {/* Main Hero Section */}
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex flex-col lg:flex-row items-center gap-6 md:gap-8 lg:gap-12 mb-8 md:mb-12 lg:mb-16"
              >
                {/* Profile Picture Section */}
                <motion.div 
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="relative group"
                >
                  <div className="w-48 md:w-56 lg:w-64 xl:w-72 h-48 md:h-56 lg:h-64 xl:h-72 rounded-2xl bg-gradient-to-br from-blue-500 via-purple-500 to-green-500 p-1 shadow-2xl">
                    <div className="w-full h-full rounded-2xl bg-neutral-800 flex items-center justify-center overflow-hidden">
                    {/* Placeholder for your image - replace src with your actual image path */}
                    <Image
                      src="/cv/Fropil.jpg" // Add your photo to public folder
                      alt="Rifki Nauval Dzaki"
                      width={320}
                      height={320}
                      className="w-full h-full object-cover rounded-xl transition-transform duration-300 group-hover:scale-105"
                      onError={(e) => {
                        // Fallback if image doesn't exist
                        const target = e.currentTarget as HTMLImageElement;
                        target.style.display = 'none';
                        const nextElement = target.nextElementSibling as HTMLElement;
                        if (nextElement) {
                          nextElement.style.display = 'flex';
                        }
                      }}
                    />
                    {/* Fallback content if image doesn't exist */}
                    <div className="hidden w-full h-full flex-col items-center justify-center text-center p-8">
                      <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center mb-4">
                        <span className="text-4xl font-bold text-white">RN</span>
                      </div>
                      <p className="text-gray-400 text-sm">
                        Add your photo as<br />
                        <code className="text-blue-400">/public/cv/profile-photo.jpg</code>
                      </p>
                    </div>
                  </div>
                </div>
                  {/* Floating elements */}
                  <div className="absolute -top-2 md:-top-4 -right-2 md:-right-4 w-4 md:w-6 lg:w-8 h-4 md:h-6 lg:h-8 bg-green-500 rounded-full animate-pulse"></div>
                  <div className="absolute -bottom-2 md:-bottom-4 -left-2 md:-left-4 w-3 md:w-4 lg:w-6 h-3 md:h-4 lg:h-6 bg-blue-500 rounded-full animate-bounce"></div>
                </motion.div>

                {/* Text Content Section */}
                <motion.div 
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="flex-1 text-center lg:text-left"
                >
                  {/* Gradient Name */}
                  <GradientText
                    colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                    animationSpeed={20}
                    showBorder={false}
                    className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold mb-6 md:mb-8"
                  >
                    Rifki Nauval Dzaki
                  </GradientText>

                  {/* Role with animated background */}
                  <div className="relative inline-block mb-4 md:mb-6 mt-5">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-30"></div>
                    <p className="relative text-sm md:text-base lg:text-lg xl:text-xl font-semibold text-white px-3 md:px-4 lg:px-6 py-2 md:py-3 bg-neutral-800 rounded-lg border border-neutral-700">
                      Backend Developer | Fullstack | DevOps Enthusiast | AI Enthusiast
                    </p>
                  </div>

                  {/* Education */}
                  <div className="bg-gradient-to-r from-green-900/30 to-blue-900/30 border border-green-600/30 rounded-lg p-3 md:p-4 mb-4 md:mb-6">
                    <p className="text-sm md:text-base lg:text-lg text-green-400 font-semibold mb-1">
                      🎓 Majoring in Software Engineering
                    </p>
                    <p className="text-gray-300 text-xs md:text-sm lg:text-base">
                      at <span className="text-blue-400 font-semibold">Telkom University Purwokerto</span>
                    </p>
                  </div>

                  {/* Experience Description */}
                  <p className="text-gray-300 text-sm md:text-base lg:text-lg xl:text-xl mb-4 md:mb-6 leading-relaxed">
                    With <span className="text-green-400 font-semibold">1 year of experience</span> in{" "}
                    <span className="text-blue-400 font-semibold">backend development</span>, I have built{" "}
                    <span className="text-purple-400 font-semibold">scalable and secure web applications</span>. 
                    Currently focusing on learning <span className="text-yellow-400 font-semibold">DevOps and AI</span>.
                  </p>

                  {/* Fun Fact with better styling */}
                  <div className="bg-neutral-800 border border-neutral-700 rounded-lg p-3 md:p-4 mb-6 md:mb-8">
                    <p className="text-gray-300 text-sm md:text-base lg:text-lg italic">
                      💭 <span className="text-white">Why is a backend developer making a portfolio website?</span>
                      <br />
                      Well, I&apos;m also fullstack but mainly backend-focused. I enjoy frontend work too...
                      <span className="text-red-400 font-bold"> but I hate CSS! 😅</span>
                    </p>
                  </div>

                  {/* Quick Stats */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 mb-6 md:mb-8">
                    <div className="bg-gradient-to-br from-blue-900 to-blue-800 p-3 md:p-4 rounded-lg text-center">
                      <div className="text-lg md:text-xl lg:text-2xl font-bold text-blue-400">1+</div>
                      <div className="text-xs text-gray-300">Years Experience</div>
                    </div>
                    <div className="bg-gradient-to-br from-purple-900 to-purple-800 p-3 md:p-4 rounded-lg text-center">
                      <div className="text-lg md:text-xl lg:text-2xl font-bold text-purple-400">10+</div>
                      <div className="text-xs text-gray-300">Technologies</div>
                    </div>
                    <div className="bg-gradient-to-br from-yellow-900 to-yellow-800 p-3 md:p-4 rounded-lg text-center">
                      <div className="text-lg md:text-xl lg:text-2xl font-bold text-yellow-400">24/7</div>
                      <div className="text-xs text-gray-300">Learning Mode</div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

            {/* Skills Section */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="w-full mb-8 lg:mb-12"
            >
              <div className="text-center mb-6 lg:mb-8">
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2">Tech Stack & Skills</h2>
                <p className="text-gray-400 text-sm lg:text-base">Technologies I work with daily</p>
              </div>
              <TechStack />
            </motion.div>

            {/* Action Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 lg:gap-6 mb-8 lg:mb-12"
            >
              {/* Learn More About Skills */}
              <div
                className="flex items-center gap-2 text-gray-400 hover:text-white transition cursor-pointer group"
                onClick={() => router.push("/skill")}
              >
                <ShinyText
                  text="Learn More About My Skills"
                  disabled={false}
                  speed={3}
                />
                <FaArrowRight className="transition-transform group-hover:translate-x-2" />
              </div>

              {/* Download Resume Button */}
              <a
                href="/cv/CV_Rifki.pdf"
                download
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-3 sm:px-4 lg:px-6 py-2 lg:py-3 rounded-lg transition transform hover:scale-105 shadow-lg text-xs sm:text-sm lg:text-base"
              >
                <FaDownload />
                Download My Resume
              </a>
            </motion.div>

            {/* Inspirational Quote */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-neutral-800 to-neutral-700 border border-neutral-600 rounded-xl p-4 sm:p-6 lg:p-8 mb-8 lg:mb-12 text-center"
            >
              <FaRocket className="text-2xl sm:text-3xl lg:text-4xl text-yellow-400 mx-auto mb-3 lg:mb-4" />
              <p className="text-gray-300 text-sm sm:text-base lg:text-lg xl:text-xl italic leading-relaxed">
                &quot;Never underestimate someone who practices self-education in
                their free time. They know that success comes from always remaining
                a student.&quot; ✨
              </p>
            </motion.div>

            {/* Contact Section */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center mb-8 lg:mb-12"
            >
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-4 lg:mb-6">Let&apos;s Connect!</h3>
              <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 lg:gap-8">
                <a
                  href="mailto:rifkinauvaldzaki08@gmail.com"
                  className="group flex items-center gap-2 sm:gap-3 text-gray-400 hover:text-white transition text-sm sm:text-base lg:text-lg bg-neutral-800 hover:bg-neutral-700 px-3 sm:px-4 lg:px-6 py-2 lg:py-3 rounded-lg border border-neutral-700 hover:border-neutral-600"
                >
                  <FaEnvelope className="transition-transform group-hover:scale-110" /> 
                  <span>Email</span>
                </a>
                <a
                  href="https://linkedin.com/in/rifki-nd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 sm:gap-3 text-gray-400 hover:text-blue-400 transition text-sm sm:text-base lg:text-lg bg-neutral-800 hover:bg-neutral-700 px-3 sm:px-4 lg:px-6 py-2 lg:py-3 rounded-lg border border-neutral-700 hover:border-blue-600"
                >
                  <FaLinkedin className="transition-transform group-hover:scale-110" /> 
                  <span>LinkedIn</span>
                </a>
                <a
                  href="https://github.com/RIfkiND"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 sm:gap-3 text-gray-400 hover:text-green-400 transition text-sm sm:text-base lg:text-lg bg-neutral-800 hover:bg-neutral-700 px-3 sm:px-4 lg:px-6 py-2 lg:py-3 rounded-lg border border-neutral-700 hover:border-green-600"
                >
                  <FaGithub className="transition-transform group-hover:scale-110" /> 
                  <span>GitHub</span>
                </a>
              </div>
            </motion.div>

            {/* Development Status */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-yellow-900/50 to-orange-900/50 border border-yellow-600/50 rounded-xl p-4 sm:p-6 text-center"
            >
              <div className="flex items-center justify-center gap-2 lg:gap-3 mb-2">
                <FaExclamationTriangle className="text-yellow-400 text-base sm:text-lg lg:text-xl" />
                <h4 className="text-base sm:text-lg lg:text-xl font-semibold text-yellow-100">Development Status</h4>
              </div>
              <p className="text-yellow-200 text-sm sm:text-base">
                Some features are still in development. Stay tuned for updates! 🚀
              </p>
            </motion.div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}
