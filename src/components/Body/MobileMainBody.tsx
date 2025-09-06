"use client";
import { useRouteSync } from "@/hooks/useRouteSync";
import { VscTerminal, VscAccount } from "react-icons/vsc";
import { FaCode, FaGraduationCap, FaRocket, FaBlog, FaTools } from "react-icons/fa";
import { 
  SiGithub, 
  SiLinkedin, 
  SiLaravel, 
  SiNestjs, 
  SiGo, 
  SiDocker, 
  SiLinux
} from "react-icons/si";
import Link from "next/link";

interface MobileMainBodyProps {
  searchTerm?: string | null;
}

export function MobileMainBody({ searchTerm }: MobileMainBodyProps) {
  useRouteSync();

  // Highlight search term in text
  const highlightText = (text: string, searchTerm: string) => {
    if (!searchTerm) return text;
    
    const regex = new RegExp(`(${searchTerm})`, 'gi');
    const parts = text.split(regex);
    
    return parts.map((part, index) => 
      regex.test(part) ? (
        <span key={index} className="bg-yellow-500 bg-opacity-30 text-yellow-300 font-medium">
          {part}
        </span>
      ) : part
    );
  };

  return (
    <div className="bg-neutral-900 text-gray-300 h-full overflow-y-auto">
      {/* Search indicator */}
      {searchTerm && (
        <div className="p-4 bg-yellow-900 bg-opacity-30 border-b border-yellow-600">
          <div className="text-xs text-yellow-400">
            🔍 Searching for: &quot;{searchTerm}&quot; on homepage
          </div>
        </div>
      )}

      {/* Mobile Hero Section - Compact */}
      <div className="p-4 text-center border-b border-neutral-700">
        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-3 flex items-center justify-center">
          <VscAccount className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-xl font-bold text-white mb-1">
          {searchTerm
            ? highlightText("Rifki Nauval Dzaki", searchTerm)
            : "Rifki Nauval Dzaki"}
        </h1>
        <p className="text-blue-400 text-sm mb-1">Backend Developer</p>
        <p className="text-xs text-gray-400">Software Engineering Student</p>
      </div>

      {/* Quick Stats - Compact */}
      <div className="p-4 grid grid-cols-2 gap-3">
        <div className="bg-neutral-800 border border-neutral-700 rounded-lg p-3 text-center">
          <FaCode className="w-5 h-5 text-blue-400 mx-auto mb-1" />
          <div className="text-white font-bold text-sm">1+ Years</div>
          <div className="text-xs text-gray-400">Experience</div>
        </div>
        <div className="bg-neutral-800 border border-neutral-700 rounded-lg p-3 text-center">
          <FaGraduationCap className="w-5 h-5 text-green-400 mx-auto mb-1" />
          <div className="text-white font-bold text-sm">Student</div>
          <div className="text-xs text-gray-400">Telkom Univ</div>
        </div>
      </div>

      {/* About - HR Friendly & Concise */}
      <div className="p-4">
        <h2 className="text-lg font-bold text-white mb-3 flex items-center">
          <VscTerminal className="mr-2 text-green-400" />
          About Me
        </h2>
        <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-blue-600/30 rounded-lg p-4 mb-4">
          <p className="text-sm text-gray-300 text-center leading-relaxed">
            🎯 <strong className="text-blue-300">Backend Developer</strong> with 1+ year building scalable web applications. 
            Currently studying <strong className="text-green-300">Software Engineering</strong> while expanding into 
            <strong className="text-yellow-300"> DevOps and AI</strong>.
          </p>
        </div>
        
        {/* Key Skills Grid */}
        <div className="grid grid-cols-2 gap-2 mb-4">
          <div className="bg-neutral-800 border border-neutral-700 rounded-lg p-2 text-center">
            <span className="text-blue-400 font-semibold text-sm">APIs</span>
            <p className="text-xs text-gray-400">Backend Systems</p>
          </div>
          <div className="bg-neutral-800 border border-neutral-700 rounded-lg p-2 text-center">
            <span className="text-green-400 font-semibold text-sm">DevOps</span>
            <p className="text-xs text-gray-400">Deployment</p>
          </div>
        </div>
      </div>

      {/* Core Technologies - Essential Only */}
      <div className="p-4 border-t border-neutral-700">
        <h3 className="text-base font-bold text-white mb-3">Core Technologies</h3>
        <div className="grid grid-cols-3 gap-2">
          <div className="bg-neutral-800 border border-neutral-700 rounded-lg p-2 text-center">
            <SiLaravel className="w-5 h-5 text-red-400 mx-auto mb-1" />
            <span className="text-xs text-gray-300">Laravel</span>
          </div>
          <div className="bg-neutral-800 border border-neutral-700 rounded-lg p-2 text-center">
            <SiNestjs className="w-5 h-5 text-red-500 mx-auto mb-1" />
            <span className="text-xs text-gray-300">NestJS</span>
          </div>
          <div className="bg-neutral-800 border border-neutral-700 rounded-lg p-2 text-center">
            <SiGo className="w-5 h-5 text-cyan-400 mx-auto mb-1" />
            <span className="text-xs text-gray-300">Go</span>
          </div>
          <div className="bg-neutral-800 border border-neutral-700 rounded-lg p-2 text-center">
            <SiDocker className="w-5 h-5 text-blue-400 mx-auto mb-1" />
            <span className="text-xs text-gray-300">Docker</span>
          </div>
          <div className="bg-neutral-800 border border-neutral-700 rounded-lg p-2 text-center">
            <span className="w-5 h-5 text-orange-400 mx-auto mb-1 flex items-center justify-center text-sm font-bold">DB</span>
            <span className="text-xs text-gray-300">SQL & NoSQL</span>
          </div>
          <div className="bg-neutral-800 border border-neutral-700 rounded-lg p-2 text-center">
            <SiLinux className="w-5 h-5 text-yellow-400 mx-auto mb-1" />
            <span className="text-xs text-gray-300">Linux</span>
          </div>
        </div>
        
        {/* Explore More - Ultra Cool Navigation */}
        <div className="mt-4">
          <div className="text-center mb-4">
            <h4 className="text-sm font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent mb-1">
              ⚡ EXPLORE MORE ⚡
            </h4>
            <div className="w-16 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto"></div>
          </div>
          <div className="grid grid-cols-3 gap-2">
            <Link href="/skill" className="group relative">
              <div className="bg-gradient-to-br from-blue-600/30 to-cyan-600/30 border border-blue-400/50 rounded-xl p-3 text-center hover:from-blue-500/40 hover:to-cyan-500/40 transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-1 relative overflow-hidden">
                {/* Animated background sparkle */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                <FaTools className="w-5 h-5 text-cyan-300 mx-auto mb-2 group-hover:rotate-45 group-hover:text-cyan-200 transition-all duration-500" />
                <span className="text-xs text-cyan-200 font-bold tracking-wide">SKILLS</span>
                <p className="text-xs text-blue-300 mt-1 font-medium">Tech Arsenal</p>
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-xl bg-blue-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
              </div>
            </Link>
            
            <Link href="/project" className="group relative">
              <div className="bg-gradient-to-br from-green-600/30 to-emerald-600/30 border border-green-400/50 rounded-xl p-3 text-center hover:from-green-500/40 hover:to-emerald-500/40 transition-all duration-500 transform group-hover:scale-110 group-hover:-rotate-1 relative overflow-hidden">
                {/* Animated background sparkle */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 delay-100"></div>
                <FaRocket className="w-5 h-5 text-emerald-300 mx-auto mb-2 group-hover:-translate-y-1 group-hover:text-emerald-200 transition-all duration-500" />
                <span className="text-xs text-emerald-200 font-bold tracking-wide">PROJECTS</span>
                <p className="text-xs text-green-300 mt-1 font-medium">Code Creations</p>
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-xl bg-green-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
              </div>
            </Link>
            
            <Link href="/blog" className="group relative">
              <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 border border-purple-400/50 rounded-xl p-3 text-center hover:from-purple-500/40 hover:to-pink-500/40 transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-1 relative overflow-hidden">
                {/* Animated background sparkle */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 delay-200"></div>
                <FaBlog className="w-5 h-5 text-pink-300 mx-auto mb-2 group-hover:rotate-12 group-hover:text-pink-200 transition-all duration-500" />
                <span className="text-xs text-pink-200 font-bold tracking-wide">BLOG</span>
                <p className="text-xs text-purple-300 mt-1 font-medium">Dev Stories</p>
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-xl bg-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
              </div>
            </Link>
          </div>
          
          {/* Cool floating particles effect */}
          <div className="relative mt-3 text-center">
            <div className="inline-flex items-center space-x-1 text-xs text-gray-400">
              <span className="animate-pulse">✨</span>
              <span>Tap to explore</span>
              <span className="animate-pulse delay-500">✨</span>
            </div>
          </div>
        </div>
      </div>

      {/* Contact CTA - Direct & Professional */}
      <div className="p-4 border-t border-neutral-700">
        <div className="bg-gradient-to-r from-green-900/30 to-blue-900/30 border border-green-600/30 rounded-lg p-4">
          <h4 className="text-sm font-bold text-white mb-2 text-center">📞 Let&apos;s Connect</h4>
          <p className="text-xs text-gray-300 text-center mb-3">
            Ready to discuss your project?
          </p>
          <div className="flex justify-center space-x-3">
            <a 
              href="https://linkedin.com/in/rifki-nauval-dzaki" 
              className="flex items-center space-x-1 bg-blue-600/20 border border-blue-500/30 rounded-lg px-3 py-2 text-xs hover:bg-blue-600/30 transition-colors"
            >
              <SiLinkedin className="w-3 h-3 text-blue-400" />
              <span className="text-blue-300">LinkedIn</span>
            </a>
            <a 
              href="https://github.com/RIfkiND" 
              className="flex items-center space-x-1 bg-gray-600/20 border border-gray-500/30 rounded-lg px-3 py-2 text-xs hover:bg-gray-600/30 transition-colors"
            >
              <SiGithub className="w-3 h-3 text-gray-400" />
              <span className="text-gray-300">GitHub</span>
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="p-4 text-center text-gray-500 text-xs border-t border-neutral-700">
        <p>👨‍💻 Backend Solutions • 📧 rifkinauvaldzaki08@gmail.com</p>
      </div>
    </div>
  );
}
