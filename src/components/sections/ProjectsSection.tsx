"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
// React Icons imports
import { 
  SiLaravel, SiVuedotjs, SiMysql, SiPhp, SiReact, SiNodedotjs, 
  SiMongodb, SiTypescript, SiNextdotjs
} from "react-icons/si";

const projects = [
  {
    id: 1,
    title: "Hasil Bumi - E-Commerce Platform",
    description: "E-commerce platform designed to help farmers sell their agricultural products directly to consumers and businesses, eliminating middlemen.",
    image: "/images/projects/hasilbumi.png",
    technologies: [
      { name: "Laravel", icon: <SiLaravel />, color: "text-red-500" },
      { name: "Vue.js", icon: <SiVuedotjs />, color: "text-green-500" },
      { name: "MySQL", icon: <SiMysql />, color: "text-blue-500" },
      { name: "PHP", icon: <SiPhp />, color: "text-purple-500" }
    ],
    github: "https://github.com/rifki/hasil-bumi-ecommerce",
    demo: null,
    category: "E-Commerce"
  },
  {
    id: 2,
    title: "DIKLAT - Training Management System",
    description: "Training management application for BMTI to organize and manage professional training programs (pelatihan) with course scheduling and participant registration.",
    image: "/images/projects/diklat.png",
    technologies: [
      { name: "React", icon: <SiReact />, color: "text-cyan-500" },
      { name: "Node.js", icon: <SiNodedotjs />, color: "text-green-600" },
      { name: "MongoDB", icon: <SiMongodb />, color: "text-green-500" },
      { name: "TypeScript", icon: <SiTypescript />, color: "text-blue-600" }
    ],
    github: "https://github.com/rifki/diklat-bmti",
    demo: "https://diklat-bmti.vercel.app",
    category: "Education"
  },
  {
    id: 3,
    title: "SINDARA - Government Portal Integration",
    description: "Unified portal application designed to connect and integrate various applications under Kemendikdasmen, serving as a central hub for educational management systems.",
    image: "/images/projects/sindara.png",
    technologies: [
      { name: "Next.js", icon: <SiNextdotjs />, color: "text-white" },
      { name: "Laravel", icon: <SiLaravel />, color: "text-red-500" },
      { name: "MySQL", icon: <SiMysql />, color: "text-blue-500" },
      { name: "TypeScript", icon: <SiTypescript />, color: "text-blue-600" }
    ],
    github: "https://github.com/rifki/sindara-portal",
    demo: null,
    category: "Government"
  }
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-neutral-950">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills in backend development, 
            system architecture, and full-stack solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="bg-neutral-900 rounded-2xl overflow-hidden border border-neutral-800 hover:border-neutral-700 transition-all duration-300 group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden bg-neutral-800">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-xs text-gray-300">{project.category}</span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-xs text-gray-500 uppercase tracking-wide mb-3">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <motion.div
                        key={techIndex}
                        className="flex items-center space-x-1 bg-neutral-800 px-3 py-1 rounded-lg border border-neutral-700"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <span className="text-sm">{tech.icon}</span>
                        <span className={`text-xs font-medium ${tech.color}`}>
                          {tech.name}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 flex-1 bg-neutral-800 hover:bg-neutral-700 text-gray-300 px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                    </svg>
                    <span>Code</span>
                  </motion.a>
                  
                  {project.demo && (
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                      </svg>
                      <span>Demo</span>
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <Link href="/project">
            <motion.button
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              View All Projects →
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}