"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { 
  SiGithub, SiMedium, SiHashnode, SiYoutube, SiDiscord
} from "react-icons/si";
import { 
  FaCode, FaPenFancy, FaUsers, FaChalkboardTeacher,
  FaMicrophone, FaHandsHelping
} from "react-icons/fa";

const contributions = [
  // Open Source
  {
    id: 1,
    title: "Next.js Component Library",
    description: "A comprehensive collection of reusable React components built with TypeScript and Tailwind CSS for modern web applications.",
    icon: <SiGithub />,
    category: "Open Source",
    type: "Library",
    stats: "200+ Stars",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    link: "https://github.com/RifkiND/nextjs-components"
  },
  {
    id: 2,
    title: "Laravel API Boilerplate",
    description: "A production-ready Laravel API boilerplate with authentication, rate limiting, and comprehensive documentation.",
    icon: <FaCode />,
    category: "Open Source",
    type: "Boilerplate",
    stats: "150+ Stars",
    tech: ["Laravel", "PHP", "MySQL"],
    link: "https://github.com/RifkiND/laravel-api-boilerplate"
  },
  {
    id: 3,
    title: "React Hooks Collection",
    description: "Custom React hooks for common use cases including form handling, API calls, and state management.",
    icon: <SiGithub />,
    category: "Open Source",
    type: "Library",
    stats: "300+ Downloads",
    tech: ["React", "TypeScript", "NPM"],
    link: "https://github.com/RifkiND/react-hooks-collection"
  },

  // Blog Posts
  {
    id: 4,
    title: "Building Scalable APIs with Laravel",
    description: "A comprehensive guide on designing and implementing scalable REST APIs using Laravel best practices.",
    icon: <FaPenFancy />,
    category: "Blog",
    type: "Tutorial",
    stats: "5K+ Views",
    tech: ["Laravel", "API Design", "Best Practices"],
    link: "https://medium.com/@rifki/building-scalable-apis-laravel"
  },
  {
    id: 5,
    title: "Next.js Performance Optimization",
    description: "Deep dive into Next.js performance optimization techniques including SSR, SSG, and image optimization.",
    icon: <SiMedium />,
    category: "Blog",
    type: "Guide",
    stats: "3K+ Views",
    tech: ["Next.js", "Performance", "Optimization"],
    link: "https://medium.com/@rifki/nextjs-performance-optimization"
  },
  {
    id: 6,
    title: "Database Design Patterns",
    description: "Exploring common database design patterns and their applications in modern web applications.",
    icon: <SiHashnode />,
    category: "Blog",
    type: "Article",
    stats: "2K+ Views",
    tech: ["Database", "MySQL", "PostgreSQL"],
    link: "https://hashnode.com/@rifki/database-design-patterns"
  },

  // Mentoring
  {
    id: 7,
    title: "Code Review Sessions",
    description: "Regular code review sessions helping junior developers improve their coding skills and best practices.",
    icon: <FaChalkboardTeacher />,
    category: "Mentoring",
    type: "1-on-1",
    stats: "50+ Sessions",
    tech: ["Code Review", "Best Practices", "Mentoring"],
    link: "https://calendly.com/rifki/code-review"
  },
  {
    id: 8,
    title: "Career Guidance Program",
    description: "Helping aspiring developers navigate their career path in tech with personalized guidance and roadmaps.",
    icon: <FaHandsHelping />,
    category: "Mentoring",
    type: "Program",
    stats: "30+ Mentees",
    tech: ["Career", "Guidance", "Tech Industry"],
    link: "mailto:rifkinauvaldzaki08@gmail.com"
  },

  // Community
  {
    id: 9,
    title: "Jakarta Dev Meetup",
    description: "Co-organizing monthly developer meetups in Jakarta focusing on modern web development technologies.",
    icon: <FaUsers />,
    category: "Community",
    type: "Event",
    stats: "200+ Attendees",
    tech: ["Networking", "Web Development", "Community"],
    link: "https://meetup.com/jakarta-dev"
  },
  {
    id: 10,
    title: "Tech Discord Community",
    description: "Managing a Discord server for Indonesian developers to share knowledge and collaborate on projects.",
    icon: <SiDiscord />,
    category: "Community",
    type: "Online",
    stats: "500+ Members",
    tech: ["Discord", "Community", "Collaboration"],
    link: "https://discord.gg/indonesia-dev"
  },

  // Speaking
  {
    id: 11,
    title: "Tech Talk: Modern Backend Architecture",
    description: "Speaking at tech conferences about modern backend architecture patterns and microservices design.",
    icon: <FaMicrophone />,
    category: "Speaking",
    type: "Conference",
    stats: "300+ Audience",
    tech: ["Backend", "Architecture", "Microservices"],
    link: "https://youtube.com/watch?v=example"
  },
  {
    id: 12,
    title: "YouTube Tech Tutorials",
    description: "Creating educational video content about web development, from beginner tutorials to advanced concepts.",
    icon: <SiYoutube />,
    category: "Speaking",
    type: "Video",
    stats: "10K+ Views",
    tech: ["Education", "Tutorials", "Web Development"],
    link: "https://youtube.com/@rifkiND"
  }
];

const categories = ["All", "Open Source", "Blog", "Mentoring", "Community", "Speaking"];
const types = ["All", "Library", "Tutorial", "Event", "Program", "Conference"];

export default function CommunitySection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeType, setActiveType] = useState("All");

  const filteredContributions = contributions.filter(contribution => {
    const categoryMatch = activeCategory === "All" || contribution.category === activeCategory;
    const typeMatch = activeType === "All" || contribution.type === activeType;
    return categoryMatch && typeMatch;
  });

  return (
    <section id="community" className="py-20 px-4 bg-neutral-950">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Community{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
              Contributions
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Passionate about giving back to the developer community through open source contributions, 
            knowledge sharing, and helping others grow in their technical journey.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Category Filters */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                    : "bg-neutral-800 text-gray-400 hover:bg-neutral-700 hover:text-white"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Type Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          {types.map((type) => (
            <motion.button
              key={type}
              onClick={() => setActiveType(type)}
              className={`px-4 py-2 rounded-lg text-xs font-medium transition-all duration-300 ${
                activeType === type
                  ? "bg-blue-600/20 text-blue-400 border border-blue-600/30"
                  : "bg-neutral-800/50 text-gray-500 hover:bg-neutral-700 hover:text-gray-400 border border-neutral-700"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {type}
            </motion.button>
          ))}
        </motion.div>

        {/* Results Count */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400 text-sm">
            Showing {filteredContributions.length} contribution{filteredContributions.length !== 1 ? 's' : ''}
          </p>
        </motion.div>

        {/* Contributions Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          layout
        >
          {filteredContributions.map((contribution, index) => (
            <motion.div
              key={contribution.id}
              className="bg-neutral-900/50 rounded-2xl p-6 border border-neutral-800 hover:border-neutral-700 transition-all duration-300 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              layout
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="text-2xl text-blue-400">{contribution.icon}</div>
                <div className="flex flex-col items-end">
                  <span className="text-xs text-gray-500 bg-neutral-800 px-2 py-1 rounded-full">
                    {contribution.category}
                  </span>
                  <span className="text-xs text-blue-400 mt-1">
                    {contribution.type}
                  </span>
                </div>
              </div>

              {/* Content */}
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                {contribution.title}
              </h3>
              
              <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                {contribution.description}
              </p>

              {/* Stats */}
              <div className="text-sm text-blue-400 font-semibold mb-4">
                {contribution.stats}
              </div>

              {/* Technologies */}
              <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                  {contribution.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-xs bg-neutral-800 text-gray-400 px-2 py-1 rounded border border-neutral-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <motion.a
                href={contribution.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm text-blue-400 hover:text-blue-300 transition-colors"
                whileHover={{ x: 5 }}
              >
                <span>View Details</span>
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.a>
            </motion.div>
          ))}
        </motion.div>

        {/* Empty State */}
        {filteredContributions.length === 0 && (
          <motion.div
            className="text-center py-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-gray-500 text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-400 mb-2">No contributions found</h3>
            <p className="text-gray-500">Try adjusting your filters to see more results.</p>
          </motion.div>
        )}

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-2xl p-8 border border-neutral-800">
            <h3 className="text-2xl font-bold text-white mb-4">
              Let&apos;s Collaborate and Build Together
            </h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              I&apos;m always open to collaborating on exciting projects, contributing to meaningful open source initiatives, 
              or mentoring developers who are eager to learn and grow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="https://github.com/RifkiND"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-[0_0_24px_rgba(37,99,235,0.3)] hover:shadow-[0_0_32px_rgba(37,99,235,0.4)]"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View My GitHub
              </motion.a>
              <motion.a
                href="/blog"
                className="px-8 py-3 border border-neutral-600 text-white rounded-lg font-medium hover:border-neutral-500 hover:bg-neutral-800 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Read My Articles
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}