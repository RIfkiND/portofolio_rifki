"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "ERP System - PT. Hasil Bumi",
    description: "Comprehensive Enterprise Resource Planning system designed for PT. Hasil Bumi to streamline business operations, manage inventory, financial data, and generate detailed reports. The system includes modules for procurement, sales, inventory management, and financial reporting with role-based access control.",
    longDescription: "This ERP system was built to handle complex business processes including multi-branch inventory management, automated purchase orders, sales tracking, and comprehensive financial reporting. Features include real-time dashboard, automated notifications, document management, and integration with existing accounting systems.",
    image: "/images/projects/hasilbumi.png",
    technologies: [
      { name: "Laravel", icon: "🔥", color: "text-red-500" },
      { name: "Vue.js", icon: "💚", color: "text-green-500" },
      { name: "MySQL", icon: "🐬", color: "text-blue-500" },
      { name: "PHP", icon: "🐘", color: "text-purple-500" },
      { name: "Bootstrap", icon: "🎨", color: "text-purple-600" },
      { name: "jQuery", icon: "💛", color: "text-yellow-500" }
    ],
    github: "https://github.com/rifki/erp-system",
    demo: null,
    category: "Enterprise",
    status: "Completed",
    duration: "6 months",
    features: [
      "Multi-branch inventory management",
      "Automated purchase order system",
      "Real-time financial reporting",
      "Role-based access control",
      "Document management system",
      "API integration capabilities"
    ]
  },
  {
    id: 2,
    title: "E-Learning Platform - DIKLAT",
    description: "Modern learning management system (LMS) for DIKLAT training programs with comprehensive course management, progress tracking, interactive learning modules, and assessment tools. Built with modern web technologies for optimal performance.",
    longDescription: "A full-featured LMS that supports multimedia content delivery, interactive quizzes, real-time progress tracking, and certification management. The platform includes features like discussion forums, live streaming integration, assignment submission, and detailed analytics for instructors and administrators.",
    image: "/images/projects/diklat.png",
    technologies: [
      { name: "React", icon: "⚛️", color: "text-cyan-500" },
      { name: "Node.js", icon: "🟢", color: "text-green-600" },
      { name: "MongoDB", icon: "🍃", color: "text-green-500" },
      { name: "TypeScript", icon: "💙", color: "text-blue-600" },
      { name: "Express.js", icon: "⚡", color: "text-yellow-500" },
      { name: "Socket.io", icon: "🔌", color: "text-white" }
    ],
    github: "https://github.com/rifki/diklat-platform",
    demo: "https://diklat-demo.vercel.app",
    category: "Education",
    status: "In Development",
    duration: "4 months",
    features: [
      "Interactive course content",
      "Real-time progress tracking",
      "Online assessments & quizzes",
      "Discussion forums",
      "Certificate generation",
      "Mobile-responsive design"
    ]
  },
  {
    id: 3,
    title: "Healthcare Management - SINDARA",
    description: "Comprehensive patient management system for healthcare facilities with appointment scheduling, electronic medical records, billing integration, and staff management. Designed with healthcare compliance and security in mind.",
    longDescription: "SINDARA is a complete healthcare management solution that digitizes patient records, streamlines appointment scheduling, manages billing processes, and provides analytics for healthcare administrators. The system ensures HIPAA compliance and includes features for telemedicine integration.",
    image: "/images/projects/sindara.png",
    technologies: [
      { name: "NestJS", icon: "🦅", color: "text-red-600" },
      { name: "PostgreSQL", icon: "🐘", color: "text-blue-700" },
      { name: "Docker", icon: "🐳", color: "text-blue-500" },
      { name: "Redis", icon: "🔴", color: "text-red-500" },
      { name: "JWT", icon: "🔐", color: "text-gray-400" },
      { name: "Swagger", icon: "📚", color: "text-green-600" }
    ],
    github: "https://github.com/rifki/sindara-health",
    demo: null,
    category: "Healthcare",
    status: "Completed",
    duration: "8 months",
    features: [
      "Electronic medical records",
      "Appointment scheduling system",
      "Billing & insurance integration",
      "Staff management portal",
      "Patient portal access",
      "Compliance & security features"
    ]
  },
  {
    id: 4,
    title: "E-Commerce Platform",
    description: "Modern e-commerce solution with advanced product management, order processing, payment integration, and customer management. Built with microservices architecture for scalability.",
    longDescription: "A scalable e-commerce platform featuring advanced product catalog management, intelligent recommendation system, multiple payment gateways, inventory tracking, and comprehensive analytics. The platform supports multi-vendor marketplace functionality and includes mobile applications.",
    image: "/images/projects/hasilbumi.png", // Placeholder
    technologies: [
      { name: "Next.js", icon: "▲", color: "text-white" },
      { name: "Node.js", icon: "🟢", color: "text-green-600" },
      { name: "PostgreSQL", icon: "🐘", color: "text-blue-700" },
      { name: "Stripe", icon: "💳", color: "text-purple-500" },
      { name: "AWS", icon: "☁️", color: "text-orange-500" },
      { name: "Redis", icon: "🔴", color: "text-red-500" }
    ],
    github: "https://github.com/rifki/ecommerce-platform",
    demo: "https://ecommerce-demo.vercel.app",
    category: "E-Commerce",
    status: "In Development",
    duration: "5 months",
    features: [
      "Multi-vendor marketplace",
      "Advanced product search",
      "Multiple payment gateways",
      "Order tracking system",
      "Inventory management",
      "Customer analytics"
    ]
  },
  {
    id: 5,
    title: "Real Estate Management",
    description: "Property management system for real estate agencies with listing management, client relationship tools, contract generation, and financial tracking capabilities.",
    longDescription: "A comprehensive real estate management platform that handles property listings, client management, appointment scheduling, contract generation, and commission tracking. Includes integration with mapping services and automated marketing tools.",
    image: "/images/projects/sindara.png", // Placeholder
    technologies: [
      { name: "Laravel", icon: "🔥", color: "text-red-500" },
      { name: "Vue.js", icon: "💚", color: "text-green-500" },
      { name: "MySQL", icon: "🐬", color: "text-blue-500" },
      { name: "Maps API", icon: "🗺️", color: "text-blue-400" },
      { name: "PDF.js", icon: "📄", color: "text-red-600" }
    ],
    github: "https://github.com/rifki/real-estate-mgmt",
    demo: null,
    category: "Business",
    status: "Planning",
    duration: "3 months",
    features: [
      "Property listing management",
      "Client relationship tools",
      "Contract generation",
      "Commission tracking",
      "Map integration",
      "Marketing automation"
    ]
  },
  {
    id: 6,
    title: "Task Management API",
    description: "RESTful API for task and project management with team collaboration features, real-time notifications, and comprehensive reporting capabilities.",
    longDescription: "A robust API service built with modern backend technologies providing comprehensive task management capabilities. Features include real-time collaboration, file attachments, time tracking, project analytics, and integration capabilities with third-party services.",
    image: "/images/projects/diklat.png", // Placeholder
    technologies: [
      { name: "Go", icon: "🚀", color: "text-cyan-500" },
      { name: "PostgreSQL", icon: "🐘", color: "text-blue-700" },
      { name: "Docker", icon: "🐳", color: "text-blue-500" },
      { name: "Redis", icon: "🔴", color: "text-red-500" },
      { name: "gRPC", icon: "⚡", color: "text-yellow-500" },
      { name: "Kubernetes", icon: "☸️", color: "text-blue-600" }
    ],
    github: "https://github.com/rifki/task-api",
    demo: "https://api-docs.rifki.dev",
    category: "API",
    status: "Completed",
    duration: "2 months",
    features: [
      "RESTful API design",
      "Real-time notifications",
      "Team collaboration tools",
      "File attachment system",
      "Time tracking",
      "Third-party integrations"
    ]
  }
];

const categories = ["All", "Enterprise", "Education", "Healthcare", "E-Commerce", "Business", "API"];
const statuses = ["All", "Completed", "In Development", "Planning"];

export default function ProjectPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = projects.filter(project => {
    const matchesCategory = selectedCategory === "All" || project.category === selectedCategory;
    const matchesStatus = selectedStatus === "All" || project.status === selectedStatus;
    return matchesCategory && matchesStatus;
  });

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      {/* Header */}
      <div className="bg-neutral-900/50 backdrop-blur-sm border-b border-neutral-800 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3 text-white hover:text-blue-400 transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">Back to Home</span>
            </Link>
            <div className="text-sm text-gray-400">
              {filteredProjects.length} Projects
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Page Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            My Projects
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A showcase of my development journey - from enterprise solutions to innovative web applications.
            Each project represents a unique challenge and learning experience.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="flex flex-col md:flex-row gap-6 items-center justify-center">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              <span className="text-sm text-gray-400 mr-2 self-center">Category:</span>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    selectedCategory === category
                      ? 'bg-blue-600 text-white'
                      : 'bg-neutral-800 text-gray-300 hover:bg-neutral-700'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
            
            {/* Status Filter */}
            <div className="flex flex-wrap gap-2">
              <span className="text-sm text-gray-400 mr-2 self-center">Status:</span>
              {statuses.map((status) => (
                <button
                  key={status}
                  onClick={() => setSelectedStatus(status)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    selectedStatus === status
                      ? 'bg-purple-600 text-white'
                      : 'bg-neutral-800 text-gray-300 hover:bg-neutral-700'
                  }`}
                >
                  {status}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="bg-neutral-900 rounded-2xl overflow-hidden border border-neutral-800 hover:border-neutral-700 transition-all duration-300 group"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              layout
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden bg-neutral-800">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-xs text-gray-300">{project.category}</span>
                </div>
                <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className={`text-xs ${
                    project.status === 'Completed' ? 'text-green-400' : 
                    project.status === 'In Development' ? 'text-yellow-400' : 'text-blue-400'
                  }`}>
                    {project.status}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {/* Duration */}
                <div className="mb-4">
                  <span className="text-xs text-gray-500 flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                    {project.duration}
                  </span>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-xs text-gray-500 uppercase tracking-wide mb-3">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 4).map((tech, techIndex) => (
                      <motion.div
                        key={techIndex}
                        className="flex items-center space-x-1 bg-neutral-800 px-2 py-1 rounded border border-neutral-700"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <span className="text-xs">{tech.icon}</span>
                        <span className={`text-xs font-medium ${tech.color}`}>
                          {tech.name}
                        </span>
                      </motion.div>
                    ))}
                    {project.technologies.length > 4 && (
                      <div className="flex items-center justify-center bg-neutral-800 px-2 py-1 rounded border border-neutral-700">
                        <span className="text-xs text-gray-400">+{project.technologies.length - 4}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <motion.button
                    onClick={() => setSelectedProject(project)}
                    className="flex items-center space-x-2 flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                      <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                    </svg>
                    <span>View Details</span>
                  </motion.button>
                  
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center bg-neutral-800 hover:bg-neutral-700 text-gray-300 px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                    </svg>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* No projects message */}
        {filteredProjects.length === 0 && (
          <motion.div 
            className="text-center py-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-white mb-2">No projects found</h3>
            <p className="text-gray-400">Try adjusting your filters to see more projects.</p>
          </motion.div>
        )}
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <motion.div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            className="bg-neutral-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-neutral-700"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-6 border-b border-neutral-800 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-white">{selectedProject.title}</h2>
              <button
                onClick={() => setSelectedProject(null)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              {/* Project Image */}
              <div className="relative h-64 mb-6 rounded-lg overflow-hidden bg-neutral-800">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Project Info */}
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">About This Project</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {selectedProject.longDescription}
                  </p>

                  {/* Project Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <div className="text-sm text-gray-500">Category</div>
                      <div className="text-white font-medium">{selectedProject.category}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Status</div>
                      <div className={`font-medium ${
                        selectedProject.status === 'Completed' ? 'text-green-400' : 
                        selectedProject.status === 'In Development' ? 'text-yellow-400' : 'text-blue-400'
                      }`}>
                        {selectedProject.status}
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Duration</div>
                      <div className="text-white font-medium">{selectedProject.duration}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Technologies</div>
                      <div className="text-white font-medium">{selectedProject.technologies.length} used</div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-4">
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 bg-neutral-800 hover:bg-neutral-700 text-gray-300 px-6 py-3 rounded-lg font-medium transition-colors"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                      </svg>
                      <span>View Code</span>
                    </a>
                    {selectedProject.demo && (
                      <a
                        href={selectedProject.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-all"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                        </svg>
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>

                <div>
                  {/* Technologies */}
                  <h3 className="text-xl font-bold text-white mb-4">Technologies Used</h3>
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {selectedProject.technologies.map((tech, index) => (
                      <div key={index} className="flex items-center space-x-3 bg-neutral-800 px-4 py-3 rounded-lg border border-neutral-700">
                        <span className="text-lg">{tech.icon}</span>
                        <span className={`font-medium ${tech.color}`}>{tech.name}</span>
                      </div>
                    ))}
                  </div>

                  {/* Features */}
                  <h3 className="text-xl font-bold text-white mb-4">Key Features</h3>
                  <ul className="space-y-2">
                    {selectedProject.features.map((feature, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <svg className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}