"use client";
import { useDevice } from "@/hooks/useDevice";
import { useRouteSync } from "@/hooks/useRouteSync";
import { VscTerminal, VscAccount } from "react-icons/vsc";
import { FaCode, FaGraduationCap } from "react-icons/fa";
import { 
  SiGithub, 
  SiLinkedin, 
  SiLaravel, 
  SiNestjs, 
  SiExpress, 
  SiGo, 
  SiPhp, 
  SiJavascript, 
  SiTypescript, 
  SiPython, 
  SiMysql, 
  SiPostgresql, 
  SiMongodb, 
  SiRedis, 
  SiDocker, 
  SiKubernetes, 
  SiGithubactions, 
  SiJenkins, 
  SiArgo, 
  SiLinux, 
  SiGnubash 
} from "react-icons/si";

interface MobileMainBodyProps {
  searchTerm?: string | null;
}

export function MobileMainBody({ searchTerm }: MobileMainBodyProps) {
  useRouteSync();
  const { isMobile } = useDevice();

  if (!isMobile) return null;

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


  const filterTechItems = (items: Array<{name: string; color: string; icon: React.ReactNode}>) => {
    if (!searchTerm) return items;
    return items.filter(item => 
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
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

      {/* Mobile Hero Section */}
      <div className="p-6 text-center border-b border-neutral-700">
        <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
          <VscAccount className="w-12 h-12 text-white" />
        </div>
        <h1 className="text-2xl font-bold text-white mb-2">
          {searchTerm
            ? highlightText("Rifki Nauval Dzaki", searchTerm)
            : "Rifki Nauval Dzaki"}
        </h1>
        <p className="text-blue-400 mb-1">
          {searchTerm
            ? highlightText("Backend Developer", searchTerm)
            : "Backend Developer"}
        </p>
        <p className="text-sm text-gray-400">
          {searchTerm
            ? highlightText(
                "Student at Telkom University Purwokerto",
                searchTerm
              )
            : "Student at Telkom University Purwokerto"}
        </p>
      </div>

      {/* Mobile Stats */}
      <div className="p-6 grid grid-cols-2 gap-4">
        <div className="bg-neutral-800 border border-neutral-700 rounded-lg p-4 text-center">
          <FaCode className="w-6 h-6 text-blue-400 mx-auto mb-2" />
          <div className="text-white font-bold">1+ Years</div>
          <div className="text-xs text-gray-400">Experience</div>
        </div>
        <div className="bg-neutral-800 border border-neutral-700 rounded-lg p-4 text-center">
          <FaGraduationCap className="w-6 h-6 text-green-400 mx-auto mb-2" />
          <div className="text-white font-bold">10+</div>
          <div className="text-xs text-gray-400">Technologies</div>
        </div>
      </div>

      {/* Mobile About */}
      <div className="p-6 border-t border-neutral-700">
        <h2 className="text-lg font-bold text-white mb-4 flex items-center">
          <VscTerminal className="mr-2 text-green-400" />
          About Me
        </h2>
        <div className="space-y-4 text-sm">
          <p className="text-gray-300 leading-relaxed">
            {searchTerm ? (
              <span dangerouslySetInnerHTML={{
                __html: highlightText(
                  "Welcome to my portfolio! I'm a passionate backend developer who specializes in solving complex server-side challenges. From building high-performance APIs to designing scalable microservices, I help businesses streamline their operations and improve user experiences.",
                  searchTerm
                )
              }} />
            ) : (
              "Welcome to my portfolio! I'm a passionate backend developer who specializes in solving complex server-side challenges. From building high-performance APIs to designing scalable microservices, I help businesses streamline their operations and improve user experiences."
            )}
          </p>
          <p className="text-gray-300 leading-relaxed">
            {searchTerm ? (
              <span dangerouslySetInnerHTML={{
                __html: highlightText(
                  "Currently pursuing Software Engineering at Telkom University while diving deep into AI and IoT technologies. I solve problems like slow database queries, API bottlenecks, system integration challenges, and deployment automation.",
                  searchTerm
                )
              }} />
            ) : (
              "Currently pursuing Software Engineering at Telkom University while diving deep into AI and IoT technologies. I solve problems like slow database queries, API bottlenecks, system integration challenges, and deployment automation."
            )}
          </p>
          <p className="text-gray-300 leading-relaxed">
            {searchTerm ? (
              <span dangerouslySetInnerHTML={{
                __html: highlightText(
                  "Working with me means getting a collaborative partner who communicates clearly, delivers on time, and isn't afraid to dive deep into documentation to find the best solution. I'm flexible with technologies and can adapt to your existing tech stack or recommend the best tools for your project. I believe in clean code, thorough testing, and making complex systems simple.",
                  searchTerm
                )
              }} />
            ) : (
              "Working with me means getting a collaborative partner who communicates clearly, delivers on time, and isn't afraid to dive deep into documentation to find the best solution. I'm flexible with technologies and can adapt to your existing tech stack or recommend the best tools for your project. I believe in clean code, thorough testing, and making complex systems simple."
            )}
          </p>
          <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-blue-600/30 rounded-lg p-3 mt-4">
            <p className="text-blue-300 text-center font-medium">
              {searchTerm ? (
                <span dangerouslySetInnerHTML={{
                  __html: highlightText(
                    "💬 Ready to discuss your next project? Let's build something amazing together!",
                    searchTerm
                  )
                }} />
              ) : (
                "💬 Ready to discuss your next project? Let's build something amazing together!"
              )}
            </p>
          </div>
        </div>
      </div>

      {/* Why Work With Me Section - Mobile */}
      <div className="p-6 border-t border-neutral-700">
        <h2 className="text-lg font-bold text-white mb-4 flex items-center">
          <span className="mr-2">🎯</span>
          Why Work With Me?
        </h2>
        
        <div className="space-y-4 mb-6">
          <div className="bg-gradient-to-r from-green-900/30 to-green-800/30 border border-green-600/30 rounded-lg p-4">
            <div className="flex items-start space-x-3">
              <span className="text-xl">🚀</span>
              <div>
                <h3 className="text-sm font-semibold text-green-400 mb-1">Fast Problem Solver</h3>
                <p className="text-xs text-gray-300 leading-relaxed">
                  {searchTerm ? (
                    <span dangerouslySetInnerHTML={{
                      __html: highlightText(
                        "I solve business problems, not just write code. From API optimization to system design, I deliver solutions that impact your bottom line.",
                        searchTerm
                      )
                    }} />
                  ) : (
                    "I solve business problems, not just write code. From API optimization to system design, I deliver solutions that impact your bottom line."
                  )}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-900/30 to-blue-800/30 border border-blue-600/30 rounded-lg p-4">
            <div className="flex items-start space-x-3">
              <span className="text-xl">💬</span>
              <div>
                <h3 className="text-sm font-semibold text-blue-400 mb-1">Clear Communicator</h3>
                <p className="text-xs text-gray-300 leading-relaxed">
                  {searchTerm ? (
                    <span dangerouslySetInnerHTML={{
                      __html: highlightText(
                        "No technical jargon, no surprises. I explain complex systems simply and keep everyone updated.",
                        searchTerm
                      )
                    }} />
                  ) : (
                    "No technical jargon, no surprises. I explain complex systems simply and keep everyone updated."
                  )}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-900/30 to-purple-800/30 border border-purple-600/30 rounded-lg p-4">
            <div className="flex items-start space-x-3">
              <span className="text-xl">⚡</span>
              <div>
                <h3 className="text-sm font-semibold text-purple-400 mb-1">Deadline Crusher</h3>
                <p className="text-xs text-gray-300 leading-relaxed">
                  {searchTerm ? (
                    <span dangerouslySetInnerHTML={{
                      __html: highlightText(
                        "Clean, documented code delivered on time. No 'it works on my machine' drama.",
                        searchTerm
                      )
                    }} />
                  ) : (
                    "Clean, documented code delivered on time. No 'it works on my machine' drama."
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Impact Stats */}
        <div className="bg-gradient-to-r from-orange-900/20 to-red-900/20 border border-orange-600/30 rounded-lg p-4">
          <h3 className="text-sm font-bold text-orange-400 mb-3 text-center">🎯 Impact & Results</h3>
          <div className="grid grid-cols-3 gap-3 text-center">
            <div>
              <div className="text-lg font-bold text-green-400">30%</div>
              <div className="text-xs text-gray-400">Faster APIs</div>
            </div>
            <div>
              <div className="text-lg font-bold text-blue-400">100%</div>
              <div className="text-xs text-gray-400">Flexible</div>
            </div>
            <div>
              <div className="text-lg font-bold text-purple-400">100%</div>
              <div className="text-xs text-gray-400">On Time</div>
            </div>
          </div>
          <p className="text-xs text-gray-300 mt-3 text-center">
            {searchTerm ? (
              <span dangerouslySetInnerHTML={{
                __html: highlightText(
                  "I save you time, money, and headaches while delivering solutions that scale.",
                  searchTerm
                )
              }} />
            ) : (
              "I save you time, money, and headaches while delivering solutions that scale."
            )}
          </p>
        </div>
      </div>

      {/* Mobile Tech Stack */}
      <div className="p-6 border-t border-neutral-700">
        <h3 className="text-lg font-bold text-white mb-4">Tech Stack</h3>
        <p className="text-sm text-gray-300 mb-4 leading-relaxed">
          {searchTerm ? (
            <span dangerouslySetInnerHTML={{
              __html: highlightText(
                "I'm a backend developer with 1 year of experience, and while I have my go-to stack (Laravel, NestJS, Go, and Express), I'm always ready to roll with whatever technology your project demands. Need me to write Rust? No problem. C? Sounds fun. Assembly? …Let's negotiate.",
                searchTerm
              )
            }} />
          ) : (
            "I'm a backend developer with 1 year of experience, and while I have my go-to stack (Laravel, NestJS, Go, and Express), I'm always ready to roll with whatever technology your project demands. Need me to write Rust? No problem. C? Sounds fun. Assembly? …Let's negotiate."
          )}
        </p>

        <div className="space-y-4">
          {/* Check if any tech items match the search */}
          {searchTerm && (
            filterTechItems([
              { name: "Laravel", color: "", icon: null },
              { name: "NestJS", color: "", icon: null },
              { name: "Express", color: "", icon: null },
              { name: "Gin", color: "", icon: null },
              { name: "PHP", color: "", icon: null },
              { name: "JavaScript", color: "", icon: null },
              { name: "TypeScript", color: "", icon: null },
              { name: "Python", color: "", icon: null },
              { name: "Go", color: "", icon: null },
              { name: "MySQL", color: "", icon: null },
              { name: "PostgreSQL", color: "", icon: null },
              { name: "MongoDB", color: "", icon: null },
              { name: "Redis", color: "", icon: null },
              { name: "Docker", color: "", icon: null },
              { name: "Kubernetes", color: "", icon: null },
              { name: "GitHub Actions", color: "", icon: null },
              { name: "Jenkins", color: "", icon: null },
              { name: "ArgoCD", color: "", icon: null },
              { name: "Linux", color: "", icon: null },
              { name: "Bash", color: "", icon: null },
              { name: "Shell Scripts", color: "", icon: null },
            ]).length === 0
          ) && (
            <div className="text-center py-8">
              <div className="text-gray-400 text-sm">
                🔍 No technologies found matching &quot;{searchTerm}&quot;
              </div>
            </div>
          )}

          {/* Backend Frameworks */}
          {(!searchTerm || filterTechItems([
            { name: "Laravel", color: "", icon: null },
            { name: "NestJS", color: "", icon: null },
            { name: "Express", color: "", icon: null },
            { name: "Gin", color: "", icon: null },
          ]).length > 0) && (
          <div>
            <h4 className="text-sm font-semibold text-blue-400 mb-2">
              Backend Frameworks
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {filterTechItems([
                {
                  name: "Laravel",
                  color: "text-red-400",
                  icon: <SiLaravel className="w-4 h-4" />,
                },
                {
                  name: "NestJS",
                  color: "text-red-500",
                  icon: <SiNestjs className="w-4 h-4" />,
                },
                {
                  name: "Express",
                  color: "text-green-400",
                  icon: <SiExpress className="w-4 h-4" />,
                },
                {
                  name: "Gin",
                  color: "text-cyan-400",
                  icon: <SiGo className="w-4 h-4" />,
                },
              ]).map((tech) => (
                <div key={tech.name} className="flex items-center space-x-2">
                  <div className={tech.color}>{tech.icon}</div>
                  <span className={`text-sm ${tech.color}`}>
                    {searchTerm ? (
                      <span dangerouslySetInnerHTML={{
                        __html: highlightText(tech.name, searchTerm)
                      }} />
                    ) : (
                      tech.name
                    )}
                  </span>
                </div>
              ))}
            </div>
          </div>
          )}

          {/* Languages */}
          {(!searchTerm || filterTechItems([
            { name: "PHP", color: "", icon: null },
            { name: "JavaScript", color: "", icon: null },
            { name: "TypeScript", color: "", icon: null },
            { name: "Python", color: "", icon: null },
            { name: "Go", color: "", icon: null },
          ]).length > 0) && (
          <div>
            <h4 className="text-sm font-semibold text-purple-400 mb-2">
              Languages
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {filterTechItems([
                {
                  name: "PHP",
                  color: "text-purple-400",
                  icon: <SiPhp className="w-4 h-4" />,
                },
                {
                  name: "JavaScript",
                  color: "text-yellow-400",
                  icon: <SiJavascript className="w-4 h-4" />,
                },
                {
                  name: "TypeScript",
                  color: "text-blue-400",
                  icon: <SiTypescript className="w-4 h-4" />,
                },
                {
                  name: "Python",
                  color: "text-blue-300",
                  icon: <SiPython className="w-4 h-4" />,
                },
                {
                  name: "Go",
                  color: "text-blue-300",
                  icon: <SiGo className="w-4 h-4" />,
                },
              ]).map((tech) => (
                <div key={tech.name} className="flex items-center space-x-2">
                  <div className={tech.color}>{tech.icon}</div>
                  <span className={`text-sm ${tech.color}`}>
                    {searchTerm ? (
                      <span dangerouslySetInnerHTML={{
                        __html: highlightText(tech.name, searchTerm)
                      }} />
                    ) : (
                      tech.name
                    )}
                  </span>
                </div>
              ))}
            </div>
          </div>
          )}

          {/* Databases */}
          {(!searchTerm || filterTechItems([
            { name: "MySQL", color: "", icon: null },
            { name: "PostgreSQL", color: "", icon: null },
            { name: "MongoDB", color: "", icon: null },
            { name: "Redis", color: "", icon: null },
          ]).length > 0) && (
          <div>
            <h4 className="text-sm font-semibold text-green-400 mb-2">
              Databases
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {filterTechItems([
                {
                  name: "MySQL",
                  color: "text-blue-400",
                  icon: <SiMysql className="w-4 h-4" />,
                },
                {
                  name: "PostgreSQL",
                  color: "text-blue-500",
                  icon: <SiPostgresql className="w-4 h-4" />,
                },
                {
                  name: "MongoDB",
                  color: "text-green-400",
                  icon: <SiMongodb className="w-4 h-4" />,
                },
                {
                  name: "Redis",
                  color: "text-red-400",
                  icon: <SiRedis className="w-4 h-4" />,
                },
              ]).map((tech) => (
                <div key={tech.name} className="flex items-center space-x-2">
                  <div className={tech.color}>{tech.icon}</div>
                  <span className={`text-sm ${tech.color}`}>
                    {searchTerm ? (
                      <span dangerouslySetInnerHTML={{
                        __html: highlightText(tech.name, searchTerm)
                      }} />
                    ) : (
                      tech.name
                    )}
                  </span>
                </div>
              ))}
            </div>
          </div>
          )}

          {/* DevOps & Tools */}
          {(!searchTerm || filterTechItems([
            { name: "Docker", color: "", icon: null },
            { name: "Kubernetes", color: "", icon: null },
            { name: "GitHub Actions", color: "", icon: null },
            { name: "Jenkins", color: "", icon: null },
            { name: "ArgoCD", color: "", icon: null },
            { name: "Linux", color: "", icon: null },
          ]).length > 0) && (
          <div>
            <h4 className="text-sm font-semibold text-orange-400 mb-2">
              DevOps & Tools
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {filterTechItems([
                {
                  name: "Docker",
                  color: "text-blue-500",
                  icon: <SiDocker className="w-4 h-4" />,
                },
                {
                  name: "Kubernetes",
                  color: "text-blue-600",
                  icon: <SiKubernetes className="w-4 h-4" />,
                },
                {
                  name: "GitHub Actions",
                  color: "text-purple-400",
                  icon: <SiGithubactions className="w-4 h-4" />,
                },
                {
                  name: "Jenkins",
                  color: "text-blue-400",
                  icon: <SiJenkins className="w-4 h-4" />,
                },
                {
                  name: "ArgoCD",
                  color: "text-orange-400",
                  icon: <SiArgo className="w-4 h-4" />,
                },
                {
                  name: "Linux",
                  color: "text-yellow-400",
                  icon: <SiLinux className="w-4 h-4" />,
                },
              ]).map((tech) => (
                <div key={tech.name} className="flex items-center space-x-2">
                  <div className={tech.color}>{tech.icon}</div>
                  <span className={`text-sm ${tech.color}`}>
                    {searchTerm ? (
                      <span dangerouslySetInnerHTML={{
                        __html: highlightText(tech.name, searchTerm)
                      }} />
                    ) : (
                      tech.name
                    )}
                  </span>
                </div>
              ))}
            </div>
          </div>
          )}

          {/* Scripting */}
          {(!searchTerm || filterTechItems([
            { name: "Bash", color: "", icon: null },
            { name: "Shell Scripts", color: "", icon: null },
          ]).length > 0) && (
          <div>
            <h4 className="text-sm font-semibold text-gray-400 mb-2">
              Scripting
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {filterTechItems([
                {
                  name: "Bash",
                  color: "text-green-500",
                  icon: <SiGnubash className="w-4 h-4" />,
                },
                {
                  name: "Shell Scripts",
                  color: "text-gray-400",
                  icon: <VscTerminal className="w-4 h-4" />,
                },
              ]).map((tech) => (
                <div key={tech.name} className="flex items-center space-x-2">
                  <div className={tech.color}>{tech.icon}</div>
                  <span className={`text-sm ${tech.color}`}>
                    {searchTerm ? (
                      <span dangerouslySetInnerHTML={{
                        __html: highlightText(tech.name, searchTerm)
                      }} />
                    ) : (
                      tech.name
                    )}
                  </span>
                </div>
              ))}
            </div>
          </div>
          )}
        </div>
      </div>

      {/* Mobile Contact */}
      <div className="p-6 border-t border-neutral-700">
        <h3 className="text-lg font-bold text-white mb-4 text-center">
          {searchTerm ? (
            <span dangerouslySetInnerHTML={{
              __html: highlightText("🚀 Ready to Work Together?", searchTerm)
            }} />
          ) : (
            "🚀 Ready to Work Together?"
          )}
        </h3>
        <p className="text-sm text-gray-300 text-center mb-6 leading-relaxed">
          {searchTerm ? (
            <span dangerouslySetInnerHTML={{
              __html: highlightText(
                "Have a project in mind? Let's discuss how I can help bring your ideas to life with clean, scalable backend solutions.",
                searchTerm
              )
            }} />
          ) : (
            "Have a project in mind? Let's discuss how I can help bring your ideas to life with clean, scalable backend solutions."
          )}
        </p>

        {/* Primary Contact Button */}
        <div className="mb-6">
          <a
            href="mailto:rifkinauvaldzaki08@gmail.com"
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2"
          >
            <span>📧</span>
            <span>Contact Me Now</span>
          </a>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-4">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center space-y-2 p-3 bg-neutral-800 border border-neutral-700 rounded-lg hover:bg-neutral-700 transition"
          >
            <SiGithub className="w-6 h-6 text-gray-300" />
            <span className="text-xs text-gray-400">GitHub</span>
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center space-y-2 p-3 bg-neutral-800 border border-neutral-700 rounded-lg hover:bg-neutral-700 transition"
          >
            <SiLinkedin className="w-6 h-6 text-blue-400" />
            <span className="text-xs text-gray-400">LinkedIn</span>
          </a>
        </div>

        {/* Quick Response Promise */}
        <div className="mt-4 text-center">
          <p className="text-xs text-gray-500">
            ⚡ Usually respond within 24 hours
          </p>
        </div>
      </div>

      {/* Mobile Footer */}
      <div className="p-6 text-center text-gray-500 text-sm border-t border-neutral-700">
        <p>👨‍💻 Building amazing backend solutions</p>
        <p className="mt-1">📧 rifkinauvaldzaki08@gmail.com</p>
      </div>
    </div>
  );
}
