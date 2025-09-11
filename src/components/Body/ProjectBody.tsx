"use client";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { VscGithub, VscLinkExternal, VscTerminal } from "react-icons/vsc";
import { SiLaravel, SiVuedotjs, SiStripe, SiReact, SiExpress, SiNodedotjs, SiGo, SiTypescript } from "react-icons/si";
import { useRouteSync } from "@/hooks/useRouteSync";
import { MobileProjectBody } from "@/components/Mobile/MobileProjectBody";
import Line from "@/components/ui/line";
import { motion } from "framer-motion";

interface ProjectBodyProps {
  searchTerm?: string | null;
}

export function ProjectBody({ searchTerm }: ProjectBodyProps) {
  const router = useRouter();
  useRouteSync(); // This will sync the current route with the tab store
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  // Function to create URL-friendly slug from project name
  const createSlug = (name: string) => {
    return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  };

  // Handle project card click
  const handleProjectClick = (projectName: string) => {
    const slug = createSlug(projectName);
    router.push(`/project/${slug}`);
  };

  const projects = [
    {
      name: "HasilBumi",
      techStack: ["Laravel", "Vue.js", "Stripe"],
      description:
        "A comprehensive marketplace platform connecting farmers directly with consumers. Features secure payment processing with Stripe integration, real-time inventory management, and farmer verification system.",
      image: "/images/projects/hasilbumi.png",
      github: "https://github.com/RIfkiND/hasilbumi",
      demo: "https://hasilbumi.com",
      icons: [
        <SiLaravel key="laravel" className="text-red-500" />,
        <SiVuedotjs key="vue" className="text-green-500" />,
        <SiStripe key="stripe" className="text-purple-500" />,
      ],
      status: "Offline",
      category: "E-commerce",
      year: "2024",
    },
    {
      name: "Portfolio",
      techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
      description:
        "My personal portfolio website built with Next.js, featuring a VSCode-inspired design with interactive terminal, responsive layout, and modern animations. Showcases my projects and skills in an engaging way.",
      image:
        "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=800&h=400&fit=crop&crop=center",
      github: "https://github.com/RIfkiND/Porto-BE",
      demo: "https://portfolio.rifki.dev",
      icons: [
        <SiReact key="nextjs" className="text-black" style={{ color: "#000" }} />,
        <SiTypescript key="typescript" className="text-blue-500" />,
        <VscTerminal key="tailwind" className="text-blue-400" />,
      ],
      status: "Live",
      category: "Portfolio",
      year: "2024",
    },
    {
      name: "SINDARA",
      techStack: ["Confidential"],
      description:
        "SINDARA (Sistem Informasi dan Integrasi Data Guru Pendidikan Dasar) is a centralized platform for elementary and junior high school teachers across Indonesia. As a Backend Developer, I contributed to streamlining teacher data access, visit planning, and consultation scheduling nationwide.",
      image: "/images/projects/sindara.png",
      github: "https://github.com",
      demo: "https://gurudikdas.dikdasmen.go.id/sindara",
      icons: [
        <VscTerminal key="gov" className="text-red-600" />,
        <VscTerminal key="id" className="text-white" />,
        <VscTerminal key="secure" className="text-red-600" />,
      ],
      status: "Live",
      category: "Government",
      year: "2024",
      isConfidential: true,
    },
    {
      name: "Diklat",
      techStack: ["Laravel", "React.js"],
      description:
        "A comprehensive Content Management System for BMTI Bandung to manage teacher and student training programs from all over Indonesia. Features include course management, certification tracking, and progress monitoring.",
      image: "/images/projects/diklat.png",
      github: "https://github.com",
      demo: "https://edp.kejuruan.id/",
      icons: [
        <SiLaravel key="laravel" className="text-red-500" />,
        <SiReact key="react" className="text-blue-500" />,
      ],
      status: "Live",
      category: "Education",
      year: "2024",
    },
    {
      name: "NickTopup",
      techStack: ["Laravel", "DigiFlazz", "Tripay"],
      description:
        "A modern digital top-up platform that integrates DigiFlazz and Tripay APIs for seamless payment handling. Features include automated processing, real-time balance updates, and comprehensive transaction history.",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=400&fit=crop&crop=center",
      github: "https://github.com",
      demo: "https://nicktopup.com",
      icons: [
        <SiLaravel key="laravel" className="text-red-500" />,
        <VscTerminal key="api1" className="text-yellow-500" />,
        <VscTerminal key="api2" className="text-green-500" />,
      ],
      status: "Live",
      category: "Fintech",
      year: "2023",
    },
    {
      name: "Express API",
      techStack: ["Express.js", "Node.js"],
      description:
        "A robust RESTful API built with Express.js for handling user authentication, data processing, and third-party integrations. Features JWT authentication, rate limiting, and comprehensive error handling.",
      image:
        "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=800&h=400&fit=crop&crop=center",
      github: "https://github.com",
      demo: "https://api.example.com",
      icons: [
        <SiExpress key="express" className="text-gray-400" />,
        <SiNodedotjs key="node" className="text-green-600" />,
      ],
      status: "Live",
      category: "API",
      year: "2023",
    },
    {
      name: "Web Scraping",
      techStack: ["Golang"],
      description:
        "A high-performance web scraper written in Go to extract and process data from various sources. Features concurrent processing, rate limiting, and data validation with export to multiple formats.",
      image:
        "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=400&fit=crop&crop=center",
      github: "https://github.com",
      demo: "https://scraper.example.com",
      icons: [<SiGo key="go" className="text-blue-400" />],
      status: "Live",
      category: "Data Processing",
      year: "2023",
    },
  ];

  const filteredProjects = searchTerm
    ? projects.filter(project =>
        project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.techStack.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase())) ||
        project.category.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : projects;

  const lineCount = projects.length * 12 + 20;

  return (
    <>
      {/* Mobile Project Body - Show on mobile screens only via CSS */}
      <div className="mobile-only">
        <MobileProjectBody searchTerm={searchTerm} />
      </div>

      {/* Desktop Project Body - Enhanced for Window and Desktop */}
      <div className="desktop-only h-full flex flex-col relative bg-neutral-900 text-gray-300 font-mono  ">
        {/* Enhanced Sticky Header */}
        <div className="sticky top-0 left-0 w-full bg-neutral-900/95 backdrop-blur-sm px-6 py-3 flex items-center justify-between border-b border-neutral-700 z-50">
          <div className="flex items-center">
            <SiTypescript className="mr-3 text-blue-400 text-lg" />
            <div>
              <span className="text-base font-semibold text-white">projects.tsx</span>
              <span className="ml-2 text-sm text-gray-500">
                {searchTerm ? `${filteredProjects.length} of ${projects.length} projects` : `${projects.length} projects`}
              </span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            {searchTerm && (
              <div className="bg-yellow-900/30 border border-yellow-600/50 px-3 py-1 rounded-lg">
                <span className="text-yellow-400 text-sm">🔍 &quot;{searchTerm}&quot;</span>
              </div>
            )}
            <div className="text-sm text-gray-400">
              {filteredProjects.filter(p => p.status === 'Live').length} Live • {filteredProjects.filter(p => p.status === 'Offline').length} Offline
            </div>
          </div>
        </div>

        {/* Main Content Layout */}
        <div className="flex flex-1 min-h-0">
          {/* VS Code-like Line Numbers */}
          <div className="w-16 bg-neutral-900/50 border-r border-neutral-700 flex-shrink-0">
            <Line line={lineCount} />
          </div>

          {/* Enhanced Projects Grid */}
          <div className="flex-1 overflow-y-auto overflow-x-hidden">
            <div className="p-8 min-h-full">
            {filteredProjects.length > 0 ? (
              <>
                {/* Projects Grid */}
                <div className="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-8 mb-12">
                  {filteredProjects.map((project, index) => (
                    <motion.div
                      key={project.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      className={`group relative bg-neutral-800/80 backdrop-blur-sm border border-neutral-700 rounded-2xl overflow-hidden transition-all duration-500 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/10 cursor-pointer ${
                        selectedProject === index ? 'border-blue-500 shadow-xl shadow-blue-500/20 scale-105' : ''
                      }`}
                      onMouseEnter={() => setSelectedProject(index)}
                      onMouseLeave={() => setSelectedProject(null)}
                      onClick={() => handleProjectClick(project.name)}
                      whileHover={{ y: -5 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {/* Confidential Badge */}
                      {project.isConfidential && (
                        <div className="absolute top-4 right-4 z-20 bg-orange-600/90 text-white px-2 py-1 rounded-lg text-xs font-semibold">
                          🔒 Confidential
                        </div>
                      )}

                      {/* Enhanced Project Image */}
                      <div className="relative h-48 overflow-hidden">
                        <Image
                          src={project.image}
                          alt={project.name}
                          width={800}
                          height={400}
                          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                        />
                        
                        {/* Enhanced Code Editor Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/90 to-transparent">
                          {/* Window Controls */}
                          <div className="absolute top-3 left-3 flex space-x-2">
                            <div className="w-3 h-3 bg-red-500 rounded-full group-hover:animate-pulse"></div>
                            <div className="w-3 h-3 bg-yellow-500 rounded-full group-hover:animate-pulse" style={{animationDelay: '0.1s'}}></div>
                            <div className="w-3 h-3 bg-green-500 rounded-full group-hover:animate-pulse" style={{animationDelay: '0.2s'}}></div>
                          </div>
                          
                          {/* Category and Year */}
                          <div className="absolute top-3 right-3 text-xs">
                            <span className="bg-neutral-800/80 px-2 py-1 rounded-md text-gray-300">
                              {project.category} • {project.year}
                            </span>
                          </div>
                          
                          {/* Code Preview */}
                          <div className="absolute bottom-4 left-4 right-4">
                            <div className="text-xs text-green-400 font-mono opacity-80 group-hover:opacity-100 transition-opacity">
                              <div className="mb-1">
                                <span className="text-purple-400">const</span>{" "}
                                <span className="text-blue-400">{project.name.toLowerCase()}</span> ={" "}
                                <span className="text-yellow-400">new</span>{" "}
                                <span className="text-cyan-400">Project</span>();
                              </div>
                              <div className="text-gray-400">
                                {`// Status: `}<span className={project.status === 'Live' ? 'text-green-400' : 'text-red-400'}>{project.status}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Enhanced Project Details */}
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-3">
                          <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors">
                            {project.name}
                          </h3>
                          <div className="flex items-center space-x-2">
                            <span className={`px-3 py-1 text-xs rounded-full font-medium ${
                              project.status === 'Live' 
                                ? 'bg-green-900/50 text-green-400 border border-green-600' 
                                : 'bg-red-900/50 text-red-400 border border-red-600'
                            }`}>
                              {project.status === 'Live' ? '✓' : '✗'} {project.status}
                            </span>
                          </div>
                        </div>

                        <p className="text-sm text-gray-300 mb-4 leading-relaxed line-clamp-3">
                          {project.description}
                        </p>

                        {/* Tech Stack Icons and Tags */}
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center space-x-3">
                            {project.icons.map((icon, iconIndex) => (
                              <div key={iconIndex} className="text-lg group-hover:scale-110 transition-transform">
                                {icon}
                              </div>
                            ))}
                          </div>
                          <div className="flex flex-wrap gap-1">
                            {project.techStack.slice(0, 3).map((tech) => (
                              <span
                                key={tech}
                                className="px-2 py-1 text-xs bg-neutral-700/80 text-gray-300 rounded-md border border-neutral-600 group-hover:bg-neutral-600/80 transition-colors"
                              >
                                {tech}
                              </span>
                            ))}
                            {project.techStack.length > 3 && (
                              <span className="px-2 py-1 text-xs text-gray-500">
                                +{project.techStack.length - 3}
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Action Links */}
                        <div className="flex items-center justify-between">
                          <div className="flex space-x-3">
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="flex items-center space-x-1 text-gray-400 hover:text-white transition-colors group/link"
                            >
                              <VscGithub className="w-4 h-4 group-hover/link:scale-110 transition-transform" />
                              <span className="text-sm">Code</span>
                            </a>
                            <a
                              href={project.demo}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="flex items-center space-x-1 text-gray-400 hover:text-blue-400 transition-colors group/link"
                            >
                              <VscLinkExternal className="w-4 h-4 group-hover/link:scale-110 transition-transform" />
                              <span className="text-sm">Demo</span>
                            </a>
                          </div>
                        </div>

                        {/* Code Preview Box */}
                        <div className="mt-4 p-3 bg-neutral-900/80 rounded-lg border border-neutral-600 text-xs font-mono">
                          <div className="text-gray-500 mb-1">{`// ${project.name.toLowerCase()}.deploy()`}</div>
                          <div className="flex justify-between">
                            <span>
                              <span className="text-blue-400">Category:</span>{" "}
                              <span className="text-cyan-300">{project.category}</span>
                            </span>
                            <span>
                              <span className="text-purple-400">Year:</span>{" "}
                              <span className="text-yellow-300">{project.year}</span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Enhanced Stats Section */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
                  <div className="bg-neutral-800/50 backdrop-blur-sm border border-neutral-700 rounded-xl p-6 text-center">
                    <div className="text-3xl font-bold text-blue-400 mb-2">
                      {filteredProjects.length}
                    </div>
                    <div className="text-sm text-gray-400">Total Projects</div>
                  </div>
                  <div className="bg-neutral-800/50 backdrop-blur-sm border border-neutral-700 rounded-xl p-6 text-center">
                    <div className="text-3xl font-bold text-green-400 mb-2">
                      {filteredProjects.filter(p => p.status === 'Live').length}
                    </div>
                    <div className="text-sm text-gray-400">Live Projects</div>
                  </div>
                  <div className="bg-neutral-800/50 backdrop-blur-sm border border-neutral-700 rounded-xl p-6 text-center">
                    <div className="text-3xl font-bold text-purple-400 mb-2">
                      {Array.from(new Set(filteredProjects.flatMap(p => p.techStack))).length}
                    </div>
                    <div className="text-sm text-gray-400">Technologies</div>
                  </div>
                  <div className="bg-neutral-800/50 backdrop-blur-sm border border-neutral-700 rounded-xl p-6 text-center">
                    <div className="text-3xl font-bold text-cyan-400 mb-2">
                      {Array.from(new Set(filteredProjects.map(p => p.category))).length}
                    </div>
                    <div className="text-sm text-gray-400">Categories</div>
                  </div>
                </div>
              </>
            ) : (
              /* No Results State */
              <div className="flex flex-col items-center justify-center h-96">
                <div className="text-8xl mb-6 opacity-50">🔍</div>
                <h3 className="text-2xl font-bold text-white mb-2">No projects found</h3>
                <p className="text-gray-400 text-center max-w-md">
                  No projects match your search for &quot;{searchTerm}&quot;. Try searching with different keywords or technologies.
                </p>
              </div>
            )}

              {/* Enhanced Code Comment Footer */}
              <div className="mt-16 mb-32 p-6 bg-neutral-800/50 backdrop-blur-sm border border-neutral-700 rounded-xl">
                <div className="text-sm font-mono text-gray-400">
                  <div className="flex items-center mb-2">
                    <span className="text-green-500">{`/**`}</span>
                    <span className="ml-2 text-white font-semibold">Project Portfolio Summary</span>
                  </div>
                  <span className="text-green-500">{` * `}</span>
                  Total Projects: {filteredProjects.length} • Live: {filteredProjects.filter(p => p.status === 'Live').length} • Categories: {Array.from(new Set(filteredProjects.map(p => p.category))).length}
                  <br />
                  <span className="text-green-500">{` * `}</span>
                  Technologies: {Array.from(new Set(filteredProjects.flatMap(p => p.techStack))).join(', ')}
                  <br />
                  <span className="text-green-500">{` * `}</span>
                  Each project represents a unique solution to real-world problems
                  <br />
                  <span className="text-green-500">{` */`}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
