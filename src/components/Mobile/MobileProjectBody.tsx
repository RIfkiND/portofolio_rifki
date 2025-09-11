"use client";
import { useRouteSync } from "@/hooks/useRouteSync";
import { VscGithub, VscLinkExternal, VscCode } from "react-icons/vsc";
import { SiLaravel, SiVuedotjs, SiReact, SiNextdotjs, SiNodedotjs, SiGo } from "react-icons/si";

interface MobileProjectBodyProps {
  searchTerm?: string | null;
}

export function MobileProjectBody({ searchTerm }: MobileProjectBodyProps) {
  useRouteSync();

  const projects = [
    {
      title: "Portfolio Website",
      description: "VSCode-inspired portfolio built with Next.js, TypeScript, and Tailwind CSS featuring interactive terminal and responsive design.",
      status: "Live",
      tech: ["Next.js", "TypeScript", "Tailwind CSS"],
      icons: [<SiNextdotjs key="next" className="text-white" />],
      links: { live: "#", github: "#" }
    },
    {
      title: "SINDARA",
      description: "Government education platform for Indonesia's Ministry of Education. National-level project with high security requirements.",
      status: "Live",
      tech: ["Laravel", "Government", "Indonesia"],
      icons: [<SiLaravel key="laravel" className="text-red-500" />],
      links: { live: "#" },
      isConfidential: true
    },
    {
      title: "Diklat Platform",
      description: "Training and education management system built with Laravel backend and React frontend.",
      status: "Live", 
      tech: ["Laravel", "React", "MySQL"],
      icons: [<SiLaravel key="laravel" className="text-red-500" />, <SiReact key="react" className="text-blue-500" />],
      links: { live: "#", github: "#" }
    },
    {
      title: "NickTopup",
      description: "Digital payment and top-up platform with integrated payment gateways including Stripe, Tripay, and DigiFlazz.",
      status: "Live",
      tech: ["Laravel", "Payment APIs", "Stripe"],
      icons: [<SiLaravel key="laravel" className="text-red-500" />],
      links: { live: "#" }
    },
    {
      title: "Express API",
      description: "RESTful API service built with Node.js and Express.js for various client applications.",
      status: "Live",
      tech: ["Node.js", "Express", "API"],
      icons: [<SiNodedotjs key="node" className="text-green-500" />],
      links: { github: "#" }
    },
    {
      title: "Web Scraping Tool",
      description: "High-performance web scraping solution built with Go for data collection and processing.",
      status: "Live",
      tech: ["Go", "Web Scraping", "Performance"],
      icons: [<SiGo key="go" className="text-cyan-400" />],
      links: { github: "#" }
    },
    {
      title: "HasilBumi",
      description: "E-commerce platform with Laravel backend, Vue.js frontend, and Stripe payment integration.",
      status: "Offline",
      tech: ["Laravel", "Vue.js", "Stripe"],
      icons: [<SiLaravel key="laravel" className="text-red-500" />, <SiVuedotjs key="vue" className="text-green-500" />],
      links: {}
    }
  ];

  // Filter projects based on search term
  const filteredProjects = searchTerm 
    ? projects.filter(project => 
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.tech.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()))
      )
    : projects;

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

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Live': return 'bg-green-900 text-green-400 border-green-600';
      case 'Offline': return 'bg-red-900 text-red-400 border-red-600';
      default: return 'bg-yellow-900 text-yellow-400 border-yellow-600';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Live': return '✓';
      case 'Offline': return '✗';
      default: return '⚠';
    }
  };

  return (
    <div className="bg-neutral-900 text-gray-300 h-full overflow-y-auto">
      {/* Mobile Header */}
      <div className="sticky top-0 bg-neutral-900 border-b border-neutral-700 p-4 z-10">
        <h1 className="text-xl font-bold text-white">🚀 Projects & Portfolio</h1>
        <p className="text-sm text-gray-400">
          {searchTerm 
            ? `${filteredProjects.length} of ${projects.length} projects matching "${searchTerm}"`
            : `${projects.length} projects showcased`
          }
        </p>
        {searchTerm && (
          <div className="mt-2 text-xs text-yellow-400 bg-yellow-900 bg-opacity-30 px-2 py-1 rounded">
            🔍 Searching for: &quot;{searchTerm}&quot;
          </div>
        )}
      </div>

      {/* Mobile Projects */}
      <div className="p-4 space-y-4">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project, index) => (
            <div key={index} className="bg-neutral-800 border border-neutral-700 rounded-lg p-4">
              {/* Project Header */}
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <h3 className="text-white font-bold text-lg leading-tight">
                    {searchTerm ? highlightText(project.title, searchTerm) : project.title}
                  </h3>
                  {project.isConfidential && (
                    <span className="inline-block mt-1 px-2 py-1 text-xs bg-orange-900 text-orange-400 rounded">
                      🔒 Confidential
                    </span>
                  )}
                </div>
                <span className={`px-2 py-1 text-xs rounded border shrink-0 ml-2 ${getStatusColor(project.status)}`}>
                  {getStatusIcon(project.status)} {project.status}
                </span>
              </div>

              {/* Tech Icons */}
              <div className="flex items-center space-x-2 mb-3">
                {project.icons.map((icon, iconIndex) => (
                  <div key={iconIndex} className="w-6 h-6 flex items-center justify-center">
                    {icon}
                  </div>
                ))}
                <VscCode className="text-gray-400 ml-auto" />
              </div>

              {/* Description */}
              <p className="text-gray-300 text-sm leading-relaxed mb-3">
                {searchTerm ? highlightText(project.description, searchTerm) : project.description}
              </p>

              {/* Tech Stack */}
              <div className="mb-4">
                <div className="flex flex-wrap gap-1">
                  {project.tech.slice(0, 3).map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className={`px-2 py-1 text-xs rounded border border-neutral-600 ${
                        searchTerm && tech.toLowerCase().includes(searchTerm.toLowerCase())
                          ? 'bg-yellow-600 bg-opacity-30 text-yellow-300 border-yellow-500'
                          : 'bg-neutral-700 text-blue-400'
                      }`}
                    >
                      {searchTerm ? highlightText(tech, searchTerm) : tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="px-2 py-1 text-xs text-gray-500">
                      +{project.tech.length - 3} more
                    </span>
                  )}
                </div>
              </div>

              {/* Links */}
              {(project.links.live || project.links.github) && (
                <div className="flex justify-end space-x-3">
                  {project.links.live && (
                    <button className="flex items-center space-x-1 text-blue-400 text-sm">
                      <VscLinkExternal className="w-4 h-4" />
                      <span>Live Demo</span>
                    </button>
                  )}
                  {project.links.github && (
                    <button className="flex items-center space-x-1 text-gray-400 text-sm">
                      <VscGithub className="w-4 h-4" />
                      <span>Code</span>
                    </button>
                  )}
                </div>
              )}
            </div>
          ))
        ) : (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-lg font-bold text-white mb-2">No projects found</h3>
            <p className="text-gray-400 text-sm">
              No projects match your search for &quot;{searchTerm}&quot;
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
          <h3 className="text-lg font-bold text-white mb-3">📊 Project Stats</h3>
          <div className="grid grid-cols-3 gap-4 text-sm">
            <div className="text-center">
              <div className="text-xl font-bold text-green-400">
                {projects.filter(p => p.status === 'Live').length}
              </div>
              <div className="text-gray-400">Live</div>
            </div>
            <div className="text-center">
              <div className="text-xl font-bold text-blue-400">{projects.length}</div>
              <div className="text-gray-400">Total</div>
            </div>
            <div className="text-center">
              <div className="text-xl font-bold text-purple-400">5+</div>
              <div className="text-gray-400">Technologies</div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Footer */}
      <div className="p-4 text-center text-gray-500 text-sm border-t border-neutral-700">
        <p>💡 Always working on something new</p>
        <p className="mt-1">Open to collaboration opportunities</p>
      </div>
    </div>
  );
}
