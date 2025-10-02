import React from "react";
import { 
  SiLaravel, SiVuedotjs, SiMysql, SiPhp, SiBootstrap, SiJquery,
  SiReact, SiNodedotjs, SiMongodb, SiTypescript, SiExpress, SiSocketdotio,
  SiPostgresql, SiDocker, SiRedis,
  SiNextdotjs, SiTailwindcss, SiGo, SiSupabase
} from "react-icons/si";
import { FaMoneyBillWave, FaServer, FaRobot, FaIndustry } from "react-icons/fa";

export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  icon?: React.ReactNode;
  technologies: Array<{
    name: string;
    icon: React.ReactNode;
    color: string;
  }>;
  github: string;
  demo: string | null;
  category: string;
  status: string;
  duration: string;
  features: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Hasil Bumi - E-Commerce Platform",
    description: "E-commerce platform designed to help farmers sell their agricultural products directly to consumers and businesses. The platform connects farmers with buyers, eliminating middlemen and ensuring fair prices for quality agricultural goods.",
    longDescription: "Hasil Bumi is a comprehensive e-commerce solution that empowers farmers to sell their products directly online. The platform features product listings with quality certifications, order management, secure payment processing, logistics coordination, and farmer profile management. It includes tools for inventory tracking, seasonal planning, and market price analysis to help farmers maximize their profits.",
    image: "/images/projects/hasilbumi.png",
    technologies: [
      { name: "Laravel", icon: React.createElement(SiLaravel), color: "text-red-500" },
      { name: "Vue.js", icon: React.createElement(SiVuedotjs), color: "text-green-500" },
      { name: "MySQL", icon: React.createElement(SiMysql), color: "text-blue-500" },
      { name: "PHP", icon: React.createElement(SiPhp), color: "text-purple-500" },
      { name: "Bootstrap", icon: React.createElement(SiBootstrap), color: "text-purple-600" },
      { name: "jQuery", icon: React.createElement(SiJquery), color: "text-yellow-500" }
    ],
    github: "https://github.com/rifki/hasil-bumi-ecommerce",
    demo: null,
    category: "E-Commerce",
    status: "Completed",
    duration: "6 months",
    features: [
      "Direct farmer-to-consumer sales",
      "Product quality certification",
      "Secure payment processing",
      "Logistics coordination system",
      "Farmer profile management",
      "Market price analysis tools"
    ]
  },
  {
    id: 2,
    title: "DIKLAT - Training Management System",
    description: "Comprehensive training management application for BMTI (Balai Besar Pengembangan Manajemen dan Teknologi Informasi) to organize and manage professional training programs (pelatihan). The system handles course scheduling, participant registration, and training administration.",
    longDescription: "DIKLAT is a specialized management system built for BMTI to streamline their training operations. It manages the complete training lifecycle from course planning and participant registration to certification delivery. Features include trainer assignment, resource allocation, attendance tracking, evaluation systems, and comprehensive reporting for training effectiveness analysis.",
    image: "/images/projects/diklat.png",
    technologies: [
      { name: "React", icon: React.createElement(SiReact), color: "text-cyan-500" },
      { name: "Node.js", icon: React.createElement(SiNodedotjs), color: "text-green-600" },
      { name: "MongoDB", icon: React.createElement(SiMongodb), color: "text-green-500" },
      { name: "TypeScript", icon: React.createElement(SiTypescript), color: "text-blue-600" },
      { name: "Express.js", icon: React.createElement(SiExpress), color: "text-yellow-500" },
      { name: "Socket.io", icon: React.createElement(SiSocketdotio), color: "text-white" }
    ],
    github: "https://github.com/rifki/diklat-bmti",
    demo: "https://diklat-bmti.vercel.app",
    category: "Education",
    status: "In Development",
    duration: "4 months",
    features: [
      "Training course scheduling",
      "Participant registration system",
      "Trainer assignment management",
      "Attendance tracking",
      "Certification delivery",
      "Training effectiveness analytics"
    ]
  },
  {
    id: 3,
    title: "SINDARA - Government Portal Integration",
    description: "Unified portal application designed to connect and integrate various applications under Kemendikdasmen (Kementerian Pendidikan Dasar dan Menengah). SINDARA serves as a central hub for accessing multiple educational management systems and services.",
    longDescription: "SINDARA functions as a comprehensive integration portal for the Ministry of Primary and Secondary Education. It provides single sign-on access to various educational applications, centralizes user management, and ensures seamless data flow between different systems. The platform includes dashboard analytics, user role management, system monitoring, and API gateway services for connected applications.",
    image: "/images/projects/sindara.png",
    technologies: [
      { name: "Next.js", icon: React.createElement(SiNextdotjs), color: "text-white" },
      { name: "Laravel", icon: React.createElement(SiLaravel), color: "text-red-500" },
      { name: "MySQL", icon: React.createElement(SiMysql), color: "text-blue-500" },
      { name: "TypeScript", icon: React.createElement(SiTypescript), color: "text-blue-600" },
      { name: "PHP", icon: React.createElement(SiPhp), color: "text-purple-500" },
      { name: "Tailwind CSS", icon: React.createElement(SiTailwindcss), color: "text-cyan-400" }
    ],
    github: "https://github.com/rifki/sindara-portal",
    demo: null,
    category: "Government",
    status: "Completed",
    duration: "8 months",
    features: [
      "Single sign-on integration",
      "Multi-application connectivity",
      "Centralized user management",
      "Dashboard analytics",
      "API gateway services",
      "System monitoring tools"
    ]
  },
  {
    id: 4,
    title: "Bengkel Kejuruan - Workshop Management System",
    description: "Workshop management system for vocational education institutions to manage equipment, maintenance schedules, student assignments, and workshop operations. Built with Laravel and MySQL for reliable data management.",
    longDescription: "Bengkel Kejuruan is a comprehensive workshop management solution designed for vocational schools and training centers. The system handles equipment inventory, maintenance scheduling, student project assignments, safety protocols, and operational reports. It includes features for tracking tool usage, managing workshop schedules, monitoring equipment conditions, and generating maintenance reports.",
    image: "icon",
    icon: React.createElement(FaIndustry),
    technologies: [
      { name: "Laravel", icon: React.createElement(SiLaravel), color: "text-red-500" },
      { name: "MySQL", icon: React.createElement(SiMysql), color: "text-blue-500" },
      { name: "PHP", icon: React.createElement(SiPhp), color: "text-purple-500" },
      { name: "Bootstrap", icon: React.createElement(SiBootstrap), color: "text-purple-600" },
      { name: "jQuery", icon: React.createElement(SiJquery), color: "text-yellow-500" }
    ],
    github: "https://github.com/rifki/bengkel-kejuruan",
    demo: null,
    category: "Education",
    status: "Completed",
    duration: "3 months",
    features: [
      "Equipment inventory management",
      "Maintenance scheduling",
      "Student assignment tracking",
      "Workshop operation reports",
      "Safety protocol monitoring",
      "Tool usage analytics"
    ]
  },
  {
    id: 5,
    title: "Keuangan Mahasiswa - Student Finance Manager",
    description: "Modern financial management application designed specifically for students to track expenses, manage budgets, and monitor financial goals. Built with Next.js frontend, Go backend, and PostgreSQL with Supabase for scalable data management.",
    longDescription: "Keuangan Mahasiswa is a comprehensive financial management platform tailored for student needs. It helps students track daily expenses, categorize spending, set monthly budgets, and achieve savings goals. The application features expense analytics, financial reports, budget alerts, and peer comparison tools to promote healthy financial habits among students. The modern tech stack ensures fast performance and real-time updates.",
    image: "icon",
    icon: React.createElement(FaMoneyBillWave),
    technologies: [
      { name: "Next.js", icon: React.createElement(SiNextdotjs), color: "text-white" },
      { name: "Go", icon: React.createElement(SiGo), color: "text-cyan-500" },
      { name: "PostgreSQL", icon: React.createElement(SiPostgresql), color: "text-blue-700" },
      { name: "Supabase", icon: React.createElement(SiSupabase), color: "text-green-500" },
      { name: "TypeScript", icon: React.createElement(SiTypescript), color: "text-blue-600" },
      { name: "Tailwind CSS", icon: React.createElement(SiTailwindcss), color: "text-cyan-400" }
    ],
    github: "https://github.com/rifki/keuangan-mahasiswa",
    demo: "https://keuangan-mahasiswa.vercel.app",
    category: "Finance",
    status: "Completed",
    duration: "3 months",
    features: [
      "Expense tracking & categorization",
      "Budget planning & monitoring",
      "Financial goal setting",
      "Real-time analytics & reporting",
      "Budget alerts & notifications",
      "Student-friendly interface"
    ]
  },
  {
    id: 6,
    title: "Go REST API Template",
    description: "Production-ready REST API template built with Go, featuring clean architecture, middleware integration, database connectivity, and comprehensive documentation. Perfect for quickly bootstrapping new backend projects.",
    longDescription: "A robust and scalable REST API template built with Go following clean architecture principles. The template includes JWT authentication, database integration with PostgreSQL, middleware for logging and CORS, input validation, error handling, and comprehensive API documentation. It's designed to be a solid foundation for building production-grade backend services with best practices built-in.",
    image: "icon",
    icon: React.createElement(FaServer),
    technologies: [
      { name: "Go", icon: React.createElement(SiGo), color: "text-cyan-500" },
      { name: "PostgreSQL", icon: React.createElement(SiPostgresql), color: "text-blue-700" },
      { name: "Docker", icon: React.createElement(SiDocker), color: "text-blue-500" },
      { name: "Redis", icon: React.createElement(SiRedis), color: "text-red-500" }
    ],
    github: "https://github.com/rifki/go-rest-api-template",
    demo: "https://api-docs.rifki.dev",
    category: "API",
    status: "Completed",
    duration: "1 month",
    features: [
      "Clean architecture design",
      "JWT authentication system",
      "Database integration",
      "Middleware implementation",
      "Input validation & error handling",
      "Comprehensive documentation"
    ]
  },
  {
    id: 7,
    title: "Web Scraper - Data Extraction Tool",
    description: "High-performance web scraping application built with Go for extracting and processing data from various websites. Features concurrent scraping, intelligent rate limiting, and data export capabilities for research and analytics purposes.",
    longDescription: "A robust web scraping solution designed for efficient data extraction from multiple sources. The application supports concurrent scraping operations, intelligent rate limiting, data cleaning and validation, and multiple export formats. Built with Go for maximum performance and reliability, it includes features like proxy rotation, user agent management, automated scheduling, and comprehensive logging for monitoring scraping operations.",
    image: "icon",
    icon: React.createElement(FaRobot),
    technologies: [
      { name: "Go", icon: React.createElement(SiGo), color: "text-cyan-500" },
      { name: "PostgreSQL", icon: React.createElement(SiPostgresql), color: "text-blue-700" },
      { name: "Redis", icon: React.createElement(SiRedis), color: "text-red-500" },
      { name: "Docker", icon: React.createElement(SiDocker), color: "text-blue-500" }
    ],
    github: "https://github.com/rifki/go-web-scraper",
    demo: null,
    category: "Automation",
    status: "In Development",
    duration: "2 months",
    features: [
      "Concurrent scraping operations",
      "Intelligent rate limiting",
      "Data validation & cleaning",
      "Multiple export formats",
      "Proxy rotation support",
      "Automated scheduling & monitoring"
    ]
  }
];

export const categories = ["All", "E-Commerce", "Education", "Government", "Finance", "API", "Automation"];
export const statuses = ["All", "Completed", "In Development", "Planning"];