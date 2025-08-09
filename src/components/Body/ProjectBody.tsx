"use client";
import { useState } from "react";
import Image from "next/image";
import { VscGithub, VscLinkExternal, VscCode, VscTerminal } from "react-icons/vsc";
import { SiLaravel, SiVuedotjs, SiStripe, SiReact, SiGithubactions, SiExpress, SiNodedotjs, SiGo } from "react-icons/si";
import Line from "../ui/line";

export function ProjectBody() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      name: "HasilBumi",
      techStack: ["Laravel", "Vue.js", "Stripe"],
      description: "A marketplace for farmers to sell raw materials, integrated with Stripe for payments.",
      image: "https://images.unsplash.com/photo-1574169208507-84376144848b?w=800&h=400&fit=crop&crop=center",
      github: "https://github.com",
      demo: "https://demo.com",
      icons: [<SiLaravel key="laravel" className="text-red-500" />, <SiVuedotjs key="vue" className="text-green-500" />, <SiStripe key="stripe" className="text-purple-500" />]
    },
    {
      name: "Diklat",
      techStack: ["Laravel", "React.js"],
      description: "An Web Application CMS for BMTI Bandung to manage teacher and student training from all over Indonesia",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&h=400&fit=crop&crop=center",
      github: "https://github.com",
      demo: "https://demo.com",
      icons: [<SiLaravel key="laravel" className="text-red-500" />, <SiReact key="react" className="text-blue-500" />]
    },
    {
      name: "CI/CD Pipeline",
      techStack: ["GitHub Actions"],
      description: "Automated deployment pipeline using GitHub Actions for seamless application updates.",
      image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=800&h=400&fit=crop&crop=center",
      github: "https://github.com",
      demo: "https://demo.com",
      icons: [<SiGithubactions key="actions" className="text-blue-600" />]
    },
    {
      name: "NickTopup",
      techStack: ["Laravel", "DigiFlazz", "Tripay"],
      description: "A digital top-up platform that integrates DigiFlazz and Tripay for payment handling.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=400&fit=crop&crop=center",
      github: "https://github.com",
      demo: "https://demo.com",
      icons: [<SiLaravel key="laravel" className="text-red-500" />, <VscTerminal key="api1" className="text-yellow-500" />, <VscTerminal key="api2" className="text-green-500" />]
    },
    {
      name: "Express API",
      techStack: ["Express.js", "Node.js"],
      description: "A RESTful API built with Express.js for handling user authentication and data processing.",
      image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=800&h=400&fit=crop&crop=center",
      github: "https://github.com",
      demo: "https://demo.com",
      icons: [<SiExpress key="express" className="text-gray-400" />, <SiNodedotjs key="node" className="text-green-600" />]
    },
    {
      name: "Web Scraping",
      techStack: ["Golang"],
      description: "A web scraper written in Go to extract and process data from various sources.",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=400&fit=crop&crop=center",
      github: "https://github.com",
      demo: "https://demo.com",
      icons: [<SiGo key="go" className="text-blue-400" />]
    }
  ];

  const lineCount = projects.length * 8 + 10; // Approximate line count for the "code"

  return (
    <div className="h-full flex flex-col relative bg-neutral-900 text-gray-300 font-mono overflow-hidden">
      {/* Sticky Header */}
      <div className="sticky top-0 left-0 w-full bg-neutral-900 px-4 py-2 flex items-center border-b border-neutral-700 z-50">
        <VscCode className="mr-2 text-blue-400" />
        <span className="text-sm">src &gt; projects.tsx</span>
        <span className="ml-auto text-xs text-gray-500">{projects.length} projects loaded</span>
      </div>

      {/* Layout - This section scrolls */}
      <div className="flex items-start flex-1 overflow-y-auto">
        {/* VS Code-like Line Numbers */}
        <div className="w-12 bg-neutral-900 sticky top-0">
          <Line line={lineCount} />
        </div>

        {/* Projects Grid */}
        <div className="flex-1 p-6 pb-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div
                key={project.name}
                className={`group relative bg-neutral-800 border border-neutral-700 rounded-lg overflow-hidden transition-all duration-300 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/20 ${
                  selectedProject === index ? 'border-blue-500 shadow-lg shadow-blue-500/20' : ''
                }`}
                onMouseEnter={() => setSelectedProject(index)}
                onMouseLeave={() => setSelectedProject(null)}
              >
                {/* Project Image with Code Overlay */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.name}
                    width={800}
                    height={400}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  {/* Code Editor Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/80 to-transparent">
                    <div className="absolute top-2 left-2 flex space-x-1">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="text-xs text-green-400 font-mono">
                        <span className="text-purple-400">const</span> {project.name.toLowerCase()} = <span className="text-yellow-400">new</span> <span className="text-blue-400">Project</span>();
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project Details */}
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-bold text-white">{project.name}</h3>
                    <div className="flex space-x-2">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        <VscGithub className="w-5 h-5" />
                      </a>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-blue-400 transition-colors"
                      >
                        <VscLinkExternal className="w-5 h-5" />
                      </a>
                    </div>
                  </div>

                  <p className="text-sm text-gray-300 mb-3 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      {project.icons}
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs bg-neutral-700 text-gray-300 rounded border border-neutral-600"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Code Preview */}
                  <div className="mt-3 p-2 bg-neutral-900 rounded border border-neutral-600 text-xs font-mono">
                    <span className="text-gray-500">{`// ${project.name.toLowerCase()}.deploy()`}</span>
                    <br />
                    <span className="text-blue-400">Status:</span> <span className="text-green-400">✓ Live</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Code Comment Footer */}
          <div className="mt-8 mb-40 p-4 bg-neutral-800 border border-neutral-700 rounded-lg">
            <div className="text-sm font-mono text-gray-400">
              <span className="text-green-500">{`// `}</span>
              End of projects array - Total: {projects.length} projects
              <br />
              <span className="text-green-500">{`// `}</span>
              Each project showcases different technologies and problem-solving approaches
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
