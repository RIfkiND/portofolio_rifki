"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from 'next/navigation';
import { motion } from "framer-motion";
import { VscGithub, VscLinkExternal, VscTerminal, VscArrowLeft, VscCode, VscCalendar, VscTag, VscEye } from "react-icons/vsc";
import { SiLaravel, SiVuedotjs, SiStripe, SiReact, SiExpress, SiNodedotjs, SiGo, SiTypescript } from "react-icons/si";
import { useRouteSync } from "@/hooks/useRouteSync";
import { MobileProjectDetailBody } from "../Mobile/MobileProjectDetailBody";
import Line from "@/components/ui/line";

interface ProjectDetailBodyProps {
  slug: string;
}

const projects = [
  {
    name: "HasilBumi",
    slug: "hasilbumi",
    techStack: ["Laravel", "Vue.js", "Stripe", "MySQL", "Bootstrap"],
    description: "A comprehensive marketplace platform connecting farmers directly with consumers. Features secure payment processing with Stripe integration, real-time inventory management, and farmer verification system.",
    longDescription: "HasilBumi is an innovative e-commerce platform designed to bridge the gap between farmers and consumers. The platform enables farmers to sell their products directly to customers, eliminating middlemen and ensuring fair prices. Built with Laravel backend and Vue.js frontend, it features a robust payment system using Stripe, real-time inventory management, user authentication, and a comprehensive admin dashboard for managing products, orders, and users.",
    image: "/images/projects/hasilbumi.png",
    gallery: [
      "/images/projects/hasilbumi.png",
      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=400&fit=crop",
      "https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&h=400&fit=crop"
    ],
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
    features: [
      "User Registration & Authentication",
      "Product Catalog Management", 
      "Shopping Cart & Checkout",
      "Stripe Payment Integration",
      "Order Tracking System",
      "Admin Dashboard",
      "Responsive Design",
      "Search & Filter Products"
    ],
    challenges: [
      "Implementing secure payment processing",
      "Managing real-time inventory updates",
      "Creating responsive design for mobile users",
      "Optimizing database queries for performance"
    ],
    learnings: [
      "Advanced Laravel backend development",
      "Vue.js frontend integration", 
      "Payment gateway integration",
      "E-commerce best practices"
    ]
  },
  {
    name: "Portfolio",
    slug: "portfolio",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Zustand"],
    description: "My personal portfolio website built with Next.js, featuring a VSCode-inspired design with interactive terminal, responsive layout, and modern animations.",
    longDescription: "This portfolio website showcases my development skills through a unique VSCode-inspired interface. Built with Next.js 14 and TypeScript, it features a responsive design that adapts seamlessly between mobile and desktop views. The site includes an interactive terminal, project showcases, skill demonstrations, and smooth animations powered by Framer Motion. The state management is handled by Zustand, and the styling uses Tailwind CSS for a modern, clean aesthetic.",
    image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=800&h=400&fit=crop&crop=center",
    gallery: [
      "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=800&h=400&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=400&fit=crop",
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=400&fit=crop"
    ],
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
    features: [
      "VSCode-inspired Interface",
      "Interactive Terminal",
      "Responsive Design", 
      "Smooth Animations",
      "Project Showcase",
      "Skills Display",
      "Contact Integration",
      "Modern UI/UX"
    ],
    challenges: [
      "Creating VSCode-like interface",
      "Implementing responsive terminal",
      "Managing complex state",
      "Optimizing animations performance"
    ],
    learnings: [
      "Advanced Next.js patterns",
      "TypeScript best practices",
      "Animation with Framer Motion",
      "State management with Zustand"
    ]
  },
  {
    name: "SINDARA",
    slug: "sindara",
    techStack: ["Confidential"],
    description: "SINDARA (Sistem Informasi dan Integrasi Data Guru Pendidikan Dasar) is a centralized platform for elementary and junior high school teachers across Indonesia.",
    longDescription: "SINDARA is a comprehensive government system designed to centralize and manage data for elementary and junior high school teachers throughout Indonesia. As a Backend Developer on this project, I contributed to building a robust platform that streamlines teacher data access, visit planning, and consultation scheduling on a national scale. The system handles sensitive government data and requires high security, scalability, and reliability to serve thousands of teachers and administrative staff across the country.",
    image: "/images/projects/sindara.png",
    gallery: [
      "/images/projects/sindara.png",
      "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=400&fit=crop",
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=400&fit=crop"
    ],
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
    features: [
      "Teacher Data Management",
      "Visit Planning System",
      "Consultation Scheduling",
      "Secure Authentication",
      "Role-based Access Control",
      "Data Analytics Dashboard",
      "Report Generation",
      "Integration APIs"
    ],
    challenges: [
      "Handling large-scale data",
      "Government security requirements",
      "Multi-region deployment",
      "Complex user permissions"
    ],
    learnings: [
      "Government system architecture",
      "High-security implementations",
      "Large-scale data management",
      "Compliance requirements"
    ]
  },
  {
    name: "Diklat",
    slug: "diklat",
    techStack: ["Laravel", "React.js", "MySQL", "Bootstrap"],
    description: "A comprehensive Content Management System for BMTI Bandung to manage teacher and student training programs from all over Indonesia.",
    longDescription: "Diklat is a sophisticated Content Management System developed for BMTI (Balai Besar Pengembangan dan Peningkatan Mutu Tenaga Kependidikan) Bandung. The system manages comprehensive training programs for teachers and students from across Indonesia. It features course management, certification tracking, progress monitoring, and administrative tools. The platform handles registration, course delivery, assessment, and certification processes for thousands of participants in various educational training programs.",
    image: "/images/projects/diklat.png",
    gallery: [
      "/images/projects/diklat.png",
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=400&fit=crop",
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=400&fit=crop"
    ],
    github: "https://github.com",
    demo: "https://edp.kejuruan.id/",
    icons: [
      <SiLaravel key="laravel" className="text-red-500" />,
      <SiReact key="react" className="text-blue-500" />,
    ],
    status: "Live",
    category: "Education",
    year: "2024",
    features: [
      "Course Management",
      "User Registration",
      "Progress Tracking",
      "Certification System",
      "Assessment Tools",
      "Administrative Dashboard",
      "Reporting System",
      "Participant Management"
    ],
    challenges: [
      "Managing large participant numbers",
      "Complex certification workflows",
      "Multi-level administrative access",
      "Integration with existing systems"
    ],
    learnings: [
      "Educational system design",
      "Laravel advanced features",
      "React.js integration",
      "Certification workflows"
    ]
  },
  {
    name: "NickTopup",
    slug: "nicktopup",
    techStack: ["Laravel", "DigiFlazz API", "Tripay API", "MySQL", "Bootstrap"],
    description: "A modern digital top-up platform that integrates DigiFlazz and Tripay APIs for seamless payment handling and automated processing.",
    longDescription: "NickTopup is a comprehensive digital top-up platform designed to provide seamless mobile credit, game vouchers, and digital product purchases. The system integrates with DigiFlazz API for product catalog and order processing, and Tripay API for secure payment handling. Features include automated processing, real-time balance updates, comprehensive transaction history, and multi-payment method support. The platform is built with Laravel backend, ensuring robust security and scalability for high-volume transactions.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=400&fit=crop&crop=center",
    gallery: [
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=400&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=400&fit=crop",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop"
    ],
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
    features: [
      "Digital Product Catalog",
      "Automated Order Processing",
      "Multiple Payment Methods",
      "Real-time Balance Updates",
      "Transaction History",
      "API Integration",
      "Admin Dashboard",
      "Customer Support System"
    ],
    challenges: [
      "Third-party API integration",
      "Payment security implementation",
      "Real-time transaction processing",
      "Error handling and retry logic"
    ],
    learnings: [
      "Payment gateway integration",
      "API consumption best practices",
      "Financial transaction security",
      "Automated processing systems"
    ]
  },
  {
    name: "Express API",
    slug: "express-api",
    techStack: ["Express.js", "Node.js", "MongoDB", "JWT", "Swagger"],
    description: "A robust RESTful API built with Express.js for handling user authentication, data processing, and third-party integrations.",
    longDescription: "This Express.js API serves as a comprehensive backend solution for modern web applications. Built with Node.js and Express.js, it provides robust RESTful endpoints for user authentication, data management, and third-party service integrations. The API features JWT-based authentication, rate limiting, comprehensive error handling, input validation, and extensive logging. It includes Swagger documentation for easy API exploration and testing, making it developer-friendly and production-ready.",
    image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=800&h=400&fit=crop&crop=center",
    gallery: [
      "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=800&h=400&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop",
      "https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?w=800&h=400&fit=crop"
    ],
    github: "https://github.com",
    demo: "https://api.example.com",
    icons: [
      <SiExpress key="express" className="text-gray-400" />,
      <SiNodedotjs key="node" className="text-green-600" />,
    ],
    status: "Live",
    category: "API",
    year: "2023",
    features: [
      "RESTful API Design",
      "JWT Authentication",
      "Rate Limiting",
      "Input Validation",
      "Error Handling",
      "API Documentation",
      "Database Integration",
      "Third-party APIs"
    ],
    challenges: [
      "Scalable architecture design",
      "Security implementation",
      "Performance optimization",
      "Comprehensive testing"
    ],
    learnings: [
      "Express.js best practices",
      "Node.js backend development",
      "API security patterns",
      "Database optimization"
    ]
  },
  {
    name: "Web Scraping",
    slug: "web-scraping",
    techStack: ["Golang", "Colly", "PostgreSQL", "Docker", "Redis"],
    description: "A high-performance web scraper written in Go to extract and process data from various sources with concurrent processing and rate limiting.",
    longDescription: "This high-performance web scraping solution is built with Golang to efficiently extract and process data from multiple web sources. The system uses Colly framework for web scraping, implements concurrent processing for maximum throughput, and includes intelligent rate limiting to respect website policies. Features include data validation, export to multiple formats (JSON, CSV, XML), caching with Redis, and containerized deployment with Docker. The scraper is designed to handle large-scale data extraction while maintaining excellent performance and reliability.",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=400&fit=crop&crop=center",
    gallery: [
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=400&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop"
    ],
    github: "https://github.com",
    demo: "https://scraper.example.com",
    icons: [<SiGo key="go" className="text-blue-400" />],
    status: "Live",
    category: "Data Processing",
    year: "2023",
    features: [
      "High-performance Scraping",
      "Concurrent Processing",
      "Rate Limiting",
      "Data Validation",
      "Multiple Export Formats",
      "Caching System",
      "Docker Deployment",
      "Monitoring & Logging"
    ],
    challenges: [
      "Handling anti-scraping measures",
      "Managing concurrent requests",
      "Data quality assurance",
      "Performance optimization"
    ],
    learnings: [
      "Go programming language",
      "Concurrent programming",
      "Web scraping ethics",
      "Data processing pipelines"
    ]
  }
];

export function ProjectDetailBody({ slug }: ProjectDetailBodyProps) {
  useRouteSync();
  const [project, setProject] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const foundProject = projects.find(p => p.slug === slug);
    if (!foundProject) {
      notFound();
      return;
    }
    setProject(foundProject);
    setLoading(false);
  }, [slug]); // Only depend on slug, not projects array

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-neutral-900">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-400 mx-auto mb-4"></div>
          <div className="text-gray-300">Loading project details...</div>
        </div>
      </div>
    );
  }

  if (!project) {
    return notFound();
  }

  const lineCount = 200; // Approximate line count for the "code"

  return (
    <>
      {/* Mobile Project Detail Body */}
      <div className="mobile-only">
        <MobileProjectDetailBody project={project} />
      </div>

      {/* Desktop Project Detail Body */}
      <div className="desktop-only h-full flex flex-col relative bg-neutral-900 text-gray-300 font-mono overflow-hidden">
        {/* Enhanced Header */}
        <div className="sticky top-0 left-0 w-full bg-neutral-900/95 backdrop-blur-sm px-6 py-3 flex items-center justify-between border-b border-neutral-700 z-50">
          <div className="flex items-center">
            <Link 
              href="/project" 
              className="mr-4 p-2 hover:bg-neutral-800 rounded-lg transition-colors text-blue-400 hover:text-blue-300"
            >
              <VscArrowLeft className="w-5 h-5" />
            </Link>
            <SiTypescript className="mr-3 text-blue-400 text-lg" />
            <div>
              <span className="text-base font-semibold text-white">{project.slug}.tsx</span>
              <span className="ml-2 text-sm text-gray-500">Project Details</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className={`px-3 py-1 rounded-lg text-sm font-medium ${
              project.status === 'Live' 
                ? 'bg-green-900/50 text-green-400 border border-green-600' 
                : 'bg-red-900/50 text-red-400 border border-red-600'
            }`}>
              {project.status === 'Live' ? '✓' : '✗'} {project.status}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex items-start flex-1 min-h-0">
          {/* Line Numbers */}
          <div className="w-16 bg-neutral-900/50 border-r border-neutral-700 flex-shrink-0">
            <Line line={lineCount} />
          </div>

          {/* Project Detail Content */}
          <div className="flex-1 overflow-y-auto p-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-6xl mx-auto pb-32"
            >
              {/* Project Hero */}
              <div className="mb-12">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="flex flex-col lg:flex-row gap-8 items-start"
                >
                  {/* Project Image */}
                  <div className="lg:w-1/2">
                    <div className="relative rounded-2xl overflow-hidden bg-neutral-800 border border-neutral-700">
                      {project.isConfidential && (
                        <div className="absolute top-4 right-4 z-20 bg-orange-600/90 text-white px-3 py-1 rounded-lg text-sm font-semibold">
                          🔒 Confidential
                        </div>
                      )}
                      <Image
                        src={project.image}
                        alt={project.name}
                        width={600}
                        height={400}
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="lg:w-1/2">
                    <h1 className="text-4xl font-bold text-white mb-4">{project.name}</h1>
                    <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Project Meta */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center space-x-2 text-sm">
                        <VscCalendar className="text-blue-400" />
                        <span className="text-gray-400">Year:</span>
                        <span className="text-white">{project.year}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm">
                        <VscTag className="text-green-400" />
                        <span className="text-gray-400">Category:</span>
                        <span className="text-white">{project.category}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm">
                        <VscEye className="text-purple-400" />
                        <span className="text-gray-400">Status:</span>
                        <span className={project.status === 'Live' ? 'text-green-400' : 'text-red-400'}>
                          {project.status}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm">
                        <VscCode className="text-cyan-400" />
                        <span className="text-gray-400">Tech:</span>
                        <span className="text-white">{project.techStack.length} technologies</span>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex space-x-4">
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors font-medium"
                      >
                        <VscLinkExternal className="w-4 h-4" />
                        <span>Live Demo</span>
                      </a>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 bg-neutral-700 hover:bg-neutral-600 text-white px-6 py-3 rounded-lg transition-colors font-medium"
                      >
                        <VscGithub className="w-4 h-4" />
                        <span>View Code</span>
                      </a>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Long Description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="mb-12"
              >
                <h2 className="text-2xl font-bold text-white mb-4">About This Project</h2>
                <p className="text-gray-300 leading-relaxed text-lg">
                  {project.longDescription}
                </p>
              </motion.div>

              {/* Tech Stack */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="mb-12"
              >
                <h2 className="text-2xl font-bold text-white mb-6">Technology Stack</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {project.techStack.map((tech: string, index: number) => (
                    <div
                      key={index}
                      className="flex items-center space-x-3 bg-neutral-800/50 border border-neutral-700 rounded-lg p-4 hover:border-blue-500/50 transition-colors"
                    >
                      {project.icons[index] && (
                        <div className="text-xl">{project.icons[index]}</div>
                      )}
                      <span className="text-white font-medium">{tech}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Back to Projects */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="text-center"
              >
                <Link
                  href="/project"
                  className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors font-medium"
                >
                  <VscArrowLeft className="w-4 h-4" />
                  <span>Back to All Projects</span>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}
