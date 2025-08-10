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
import { useDevice } from "@/hooks/useDevice";
import { MobileMainBody } from "./MobileMainBody";

interface MainBodyProps {
  searchTerm?: string | null;
}

export function MainBody({ searchTerm }: MainBodyProps) {
  useRouteSync(); // This will sync the current route with the tab store
  const router = useRouter();
  const { isMobile } = useDevice();

  // Return mobile version for mobile devices
  if (isMobile) {
    return <MobileMainBody searchTerm={searchTerm} />;
  }

  // Desktop version
  return (
    <div className="h-full flex flex-col relative bg-neutral-900 overflow-hidden">
      {/* Sticky Header */}
      <div className="sticky top-0 left-0 w-full bg-neutral-900 text-gray-300 text-sm px-4 py-1 flex items-center  z-50">
        <FaCode className="mr-2 text-blue-400" />
        <span className="font-mono">src &gt; rifki.md</span>
        <span className="ml-auto text-xs text-gray-500">Portfolio • Markdown</span>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto">
        {/* Hero Section with Picture */}
        <div className="flex justify-center items-start pt-16 pb-60">
          <div className="max-w-6xl w-full px-6">
            
            {/* Main Hero Section */}
            <div className="flex flex-col lg:flex-row items-center gap-12 mb-16">
              {/* Profile Picture Section */}
              <div className="relative group">
                <div className="w-80 h-80 rounded-2xl bg-gradient-to-br from-blue-500 via-purple-500 to-green-500 p-1 shadow-2xl">
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
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-green-500 rounded-full animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-500 rounded-full animate-bounce"></div>
              </div>

              {/* Text Content Section */}
              <div className="flex-1 text-center lg:text-left">
                {/* Gradient Name */}
                <GradientText
                  colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                  animationSpeed={20}
                  showBorder={false}
                  className="text-4xl lg:text-6xl font-extrabold mb-4"
                >
                  Rifki Nauval Dzaki
                </GradientText>

                {/* Role with animated background */}
                <div className="relative inline-block mb-6">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-30"></div>
                  <p className="relative text-xl lg:text-2xl font-semibold text-white px-6 py-3 bg-neutral-800 rounded-lg border border-neutral-700">
                    Backend Developer | Fullstack | DevOps Enthusiast | AI Enthusiast
                  </p>
                </div>

                {/* Education */}
                <div className="bg-gradient-to-r from-green-900/30 to-blue-900/30 border border-green-600/30 rounded-lg p-4 mb-6">
                  <p className="text-lg text-green-400 font-semibold mb-1">
                    🎓 Majoring in Software Engineering
                  </p>
                  <p className="text-gray-300">
                    at <span className="text-blue-400 font-semibold">Telkom University Purwokerto</span>
                  </p>
                </div>

                {/* Experience Description */}
                <p className="text-gray-300 text-lg lg:text-xl mb-6 leading-relaxed">
                  With <span className="text-green-400 font-semibold">1 year of experience</span> in{" "}
                  <span className="text-blue-400 font-semibold">backend development</span>, I have built{" "}
                  <span className="text-purple-400 font-semibold">scalable and secure web applications</span>. 
                  Currently focusing on learning <span className="text-yellow-400 font-semibold">DevOps and AI</span>.
                </p>

                {/* Fun Fact with better styling */}
                <div className="bg-neutral-800 border border-neutral-700 rounded-lg p-4 mb-8">
                  <p className="text-gray-300 text-lg italic">
                    💭 <span className="text-white">Why is a backend developer making a portfolio website?</span>
                    <br />
                    Well, I&apos;m also fullstack but mainly backend-focused. I enjoy frontend work too...
                    <span className="text-red-400 font-bold"> but I hate CSS! 😅</span>
                  </p>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-8">
                  <div className="bg-gradient-to-br from-blue-900 to-blue-800 p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-blue-400">1+</div>
                    <div className="text-xs text-gray-300">Years Experience</div>
                  </div>
                  <div className="bg-gradient-to-br from-purple-900 to-purple-800 p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-purple-400">10+</div>
                    <div className="text-xs text-gray-300">Technologies</div>
                  </div>
                  <div className="bg-gradient-to-br from-yellow-900 to-yellow-800 p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-yellow-400">24/7</div>
                    <div className="text-xs text-gray-300">Learning Mode</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Why Work With Me Section - HR Impact */}
            <div className="w-full mb-12">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-white mb-2">Why Work With Me?</h2>
                <p className="text-gray-400">What makes me different from other developers</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {/* Problem Solver */}
                <div className="bg-gradient-to-br from-green-900/40 to-green-800/40 border border-green-600/30 rounded-xl p-6 hover:border-green-500/50 transition-all duration-300 group">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-500/30 transition-all">
                      <span className="text-2xl">🚀</span>
                    </div>
                    <h3 className="text-xl font-bold text-green-400 mb-3">Fast Problem Solver</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      I don&apos;t just write code—I solve business problems. From API bottlenecks to database optimization, 
                      I deliver solutions that directly impact your bottom line.
                    </p>
                  </div>
                </div>

                {/* Clear Communication */}
                <div className="bg-gradient-to-br from-blue-900/40 to-blue-800/40 border border-blue-600/30 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300 group">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-500/30 transition-all">
                      <span className="text-2xl">💬</span>
                    </div>
                    <h3 className="text-xl font-bold text-blue-400 mb-3">Clear Communicator</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      No technical jargon, no surprises. I explain complex systems in simple terms and 
                      keep stakeholders updated throughout the development process.
                    </p>
                  </div>
                </div>

                {/* Reliable Delivery */}
                <div className="bg-gradient-to-br from-purple-900/40 to-purple-800/40 border border-purple-600/30 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300 group">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-500/30 transition-all">
                      <span className="text-2xl">⚡</span>
                    </div>
                    <h3 className="text-xl font-bold text-purple-400 mb-3">Deadline Crusher</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      I deliver on time, every time. My code is clean, well-documented, and ready for production 
                      without the usual &quot;it works on my machine&quot; drama.
                    </p>
                  </div>
                </div>
              </div>

              {/* Value Proposition Banner */}
              <div className="bg-gradient-to-r from-orange-900/30 to-red-900/30 border border-orange-600/30 rounded-xl p-8 text-center">
                <h3 className="text-2xl font-bold text-orange-400 mb-4">🎯 Bottom Line Impact</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-green-400">30%</div>
                    <div className="text-sm text-gray-300">Faster API Response Times</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-blue-400">100%</div>
                    <div className="text-sm text-gray-300">Flexible & Adaptable</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-purple-400">100%</div>
                    <div className="text-sm text-gray-300">On-Time Project Delivery</div>
                  </div>
                </div>
                <p className="text-gray-300 mt-4 text-lg">
                  <span className="text-yellow-400 font-semibold">Translation:</span> I save you time, money, and headaches while delivering 
                  robust solutions that scale with your business.
                </p>
              </div>
            </div>

            {/* Skills Section */}
            <div className="w-full mb-12">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-white mb-2">Tech Stack & Skills</h2>
                <p className="text-gray-400">Technologies I work with daily</p>
              </div>
              <TechStack />
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
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
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-lg transition transform hover:scale-105 shadow-lg"
              >
                <FaDownload />
                Download My Resume
              </a>
            </div>

            {/* Inspirational Quote */}
            <div className="bg-gradient-to-r from-neutral-800 to-neutral-700 border border-neutral-600 rounded-xl p-8 mb-12 text-center">
              <FaRocket className="text-4xl text-yellow-400 mx-auto mb-4" />
              <p className="text-gray-300 text-lg lg:text-xl italic leading-relaxed">
                &quot;Never underestimate someone who practices self-education in
                their free time. They know that success comes from always remaining
                a student.&quot; ✨
              </p>
            </div>

            {/* Contact Section */}
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold text-white mb-6">Let&apos;s Connect!</h3>
              <div className="flex flex-wrap items-center justify-center gap-8">
                <a
                  href="mailto:rifkinauvaldzaki08@gmail.com"
                  className="group flex items-center gap-3 text-gray-400 hover:text-white transition text-lg bg-neutral-800 hover:bg-neutral-700 px-6 py-3 rounded-lg border border-neutral-700 hover:border-neutral-600"
                >
                  <FaEnvelope className="transition-transform group-hover:scale-110" /> 
                  <span>Email</span>
                </a>
                <a
                  href="https://linkedin.com/in/rifki-nd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 text-gray-400 hover:text-blue-400 transition text-lg bg-neutral-800 hover:bg-neutral-700 px-6 py-3 rounded-lg border border-neutral-700 hover:border-blue-600"
                >
                  <FaLinkedin className="transition-transform group-hover:scale-110" /> 
                  <span>LinkedIn</span>
                </a>
                <a
                  href="https://github.com/RIfkiND"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 text-gray-400 hover:text-green-400 transition text-lg bg-neutral-800 hover:bg-neutral-700 px-6 py-3 rounded-lg border border-neutral-700 hover:border-green-600"
                >
                  <FaGithub className="transition-transform group-hover:scale-110" /> 
                  <span>GitHub</span>
                </a>
              </div>
            </div>

            {/* Development Status */}
            <div className="bg-gradient-to-r from-yellow-900/50 to-orange-900/50 border border-yellow-600/50 rounded-xl p-6 text-center">
              <div className="flex items-center justify-center gap-3 mb-2">
                <FaExclamationTriangle className="text-yellow-400 text-xl" />
                <h4 className="text-xl font-semibold text-yellow-100">Development Status</h4>
              </div>
              <p className="text-yellow-200">
                Some features are still in development. Stay tuned for updates! 🚀
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
