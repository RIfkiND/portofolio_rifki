"use client";
import { useDevice } from "@/hooks/useDevice";
import { useRouteSync } from "@/hooks/useRouteSync";
import { SiLaravel, SiNodedotjs, SiGo, SiMysql, SiMongodb, SiDocker, SiReact, SiNextdotjs, SiGithubactions, SiJenkins, SiKubernetes, SiPostgresql, SiVuedotjs, SiNestjs, SiPython, SiFastapi, SiHtml5, SiCss3, SiTailwindcss, SiOpenai } from "react-icons/si";
import { VscCode } from "react-icons/vsc";

interface MobileSkillBodyProps {
  searchTerm?: string | null;
}

export function MobileSkillBody({ searchTerm }: MobileSkillBodyProps) {
  useRouteSync();
  const { isMobile } = useDevice();

  if (!isMobile) return null;

  const skillCategories = [
    {
      title: "Backend Development",
      icon: <VscCode className="text-blue-400" />,
      skills: [
        {
          name: "Laravel",
          icon: <SiLaravel className="text-red-500" />,
          level: "Expert",
        },
        {
          name: "Node.js",
          icon: <SiNodedotjs className="text-green-500" />,
          level: "Advanced",
        },
        {
          name: "NestJS",
          icon: <SiNestjs className="text-red-600" />,
          level: "Advanced",
        },
        {
          name: "Python",
          icon: <SiPython className="text-blue-400" />,
          level: "Advanced",
        },
        {
          name: "FastAPI",
          icon: <SiFastapi className="text-green-600" />,
          level: "Intermediate",
        },
        {
          name: "Gin",
          icon: <SiGo className="text-cyan-400" />,
          level: "Intermediate",
        },
      ],
    },
    {
      title: "Frontend Development",
      icon: <VscCode className="text-purple-400" />,
      skills: [
        {
          name: "HTML5",
          icon: <SiHtml5 className="text-orange-500" />,
          level: "Advanced",
        },
        {
          name: "CSS3",
          icon: <SiCss3 className="text-blue-500" />,
          level: "Advanced",
        },
        {
          name: "Tailwind CSS",
          icon: <SiTailwindcss className="text-cyan-400" />,
          level: "Advanced",
        },
        {
          name: "React",
          icon: <SiReact className="text-blue-500" />,
          level: "Intermediate",
        },
        {
          name: "Next.js",
          icon: <SiNextdotjs className="text-white" />,
          level: "Intermediate",
        },
        {
          name: "Vue.js",
          icon: <SiVuedotjs className="text-green-500" />,
          level: "Intermediate",
        },
      ],
    },
    {
      title: "Databases",
      icon: <VscCode className="text-yellow-400" />,
      skills: [
        {
          name: "MySQL",
          icon: <SiMysql className="text-blue-400" />,
          level: "Advanced",
        },
        {
          name: "PostgreSQL",
          icon: <SiPostgresql className="text-blue-500" />,
          level: "Advanced",
        },
        {
          name: "MongoDB",
          icon: <SiMongodb className="text-green-400" />,
          level: "Intermediate",
        },
      ],
    },
    {
      title: "DevOps & CI/CD",
      icon: <VscCode className="text-green-400" />,
      skills: [
        {
          name: "Docker",
          icon: <SiDocker className="text-blue-500" />,
          level: "Advanced",
        },
        {
          name: "GitHub Actions",
          icon: <SiGithubactions className="text-purple-400" />,
          level: "Advanced",
        },
        {
          name: "Jenkins",
          icon: <SiJenkins className="text-blue-400" />,
          level: "Intermediate",
        },
        {
          name: "Kubernetes",
          icon: <SiKubernetes className="text-blue-600" />,
          level: "Intermediate",
        },
      ],
    },
    {
      title: "AI Integration & Tools",
      icon: <VscCode className="text-pink-400" />,
      skills: [
        {
          name: "AI Integration",
          icon: <SiOpenai className="text-green-400" />,
          level: "Intermediate",
        },
        {
          name: "GitHub Copilot",
          icon: <SiOpenai className="text-purple-400" />,
          level: "Intermediate",
        },
      ],
    },
  ];

  // Filter skills based on search term
  const filteredCategories = searchTerm 
    ? skillCategories.map(category => ({
        ...category,
        skills: category.skills.filter(skill => 
          skill.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          skill.level.toLowerCase().includes(searchTerm.toLowerCase()) ||
          category.title.toLowerCase().includes(searchTerm.toLowerCase())
        )
      })).filter(category => category.skills.length > 0)
    : skillCategories;

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
      {/* Mobile Header */}
      <div className="sticky top-0 bg-neutral-900 border-b border-neutral-700 p-4 z-10">
        <h1 className="text-xl font-bold text-white">⚡ Skills & Technologies</h1>
        <p className="text-sm text-gray-400">
          {searchTerm 
            ? `${filteredCategories.reduce((acc, cat) => acc + cat.skills.length, 0)} skills matching "${searchTerm}"`
            : "Backend Developer Expertise"
          }
        </p>
        {searchTerm && (
          <div className="mt-2 text-xs text-yellow-400 bg-yellow-900 bg-opacity-30 px-2 py-1 rounded">
            🔍 Searching for: &quot;{searchTerm}&quot;
          </div>
        )}
      </div>

      {/* Mobile Skills */}
      <div className="p-4 space-y-6">
        {filteredCategories.length > 0 ? (
          filteredCategories.map((category, index) => (
            <div key={index} className="bg-neutral-800 border border-neutral-700 rounded-lg p-4">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center">
                {category.icon}
                <span className="ml-2">
                  {searchTerm ? highlightText(category.title, searchTerm) : category.title}
                </span>
              </h3>
              
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex items-center justify-between p-3 bg-neutral-700 rounded-lg">
                    <div className="flex items-center space-x-3">
                      {skill.icon}
                      <span className="text-white font-medium">
                        {searchTerm ? highlightText(skill.name, searchTerm) : skill.name}
                      </span>
                    </div>
                    <span className={`text-sm font-semibold px-2 py-1 rounded-full ${
                      searchTerm && skill.level.toLowerCase().includes(searchTerm.toLowerCase())
                        ? 'bg-yellow-600 bg-opacity-30 text-yellow-300 border border-yellow-500'
                        : skill.level === 'Expert' ? 'bg-green-900 text-green-400' :
                          skill.level === 'Advanced' ? 'bg-blue-900 text-blue-400' :
                          skill.level === 'Intermediate' ? 'bg-yellow-900 text-yellow-400' :
                          'bg-gray-900 text-gray-400'
                    }`}>
                      {searchTerm ? highlightText(skill.level, searchTerm) : skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-lg font-bold text-white mb-2">No skills found</h3>
            <p className="text-gray-400 text-sm">
              No skills match your search for &quot;{searchTerm}&quot;
            </p>
            <p className="text-gray-500 text-xs mt-2">
              Try searching with different keywords
            </p>
          </div>
        )}
      </div>

      {/* Mobile Summary */}
      <div className="p-4 border-t border-neutral-700">
        <div className="bg-neutral-800 border border-neutral-700 rounded-lg p-4">
          <h3 className="text-lg font-bold text-white mb-3">💼 About My Skills</h3>
          <p className="text-sm text-gray-300 leading-relaxed">
            I&apos;m a backend developer with 1 year of experience, and while I have my go-to stack (Laravel, NestJS, Go, and Express), I&apos;m always ready to roll with whatever technology your project demands. Need me to write Rust? No problem. C? Sounds fun. Assembly? …Let&apos;s negotiate.
          </p>
        </div>
      </div>

      {/* Mobile Footer */}
      <div className="p-4 text-center text-gray-500 text-sm border-t border-neutral-700">
        <p>🚀 Ready to build amazing things!</p>
        <p className="mt-1">Always learning new technologies</p>
      </div>
    </div>
  );
}
