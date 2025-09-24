"use client";
import { motion } from "framer-motion";

const contributions = [
  {
    title: "Open Source Projects",
    description: "Contributing to various open-source projects and maintaining libraries that help developers build better applications.",
    icon: "🚀",
    stats: "15+ Projects",
    highlights: [
      "Next.js components library",
      "TypeScript utilities",
      "React hooks collection",
      "Development tools"
    ]
  },
  {
    title: "Knowledge Sharing",
    description: "Writing technical articles, creating tutorials, and sharing insights about modern web development practices.",
    icon: "📚",
    stats: "50+ Articles",
    highlights: [
      "Backend development guides",
      "Frontend best practices",
      "Database optimization tips",
      "DevOps workflows"
    ]
  },
  {
    title: "Mentoring & Teaching",
    description: "Helping aspiring developers learn programming through mentorship, code reviews, and educational content.",
    icon: "🎓",
    stats: "100+ Developers",
    highlights: [
      "One-on-one mentoring",
      "Code review sessions",
      "Technical workshops",
      "Career guidance"
    ]
  },
  {
    title: "Community Building",
    description: "Building and fostering tech communities, organizing meetups, and connecting developers worldwide.",
    icon: "🌍",
    stats: "500+ Members",
    highlights: [
      "Developer meetups",
      "Online communities",
      "Tech discussions",
      "Networking events"
    ]
  }
];

export default function CommunitySection() {
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
            What I Bring to the{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
              Community
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Passionate about giving back to the developer community through open source contributions, 
            knowledge sharing, and helping others grow in their technical journey.
          </p>
        </motion.div>

        {/* Contributions Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {contributions.map((contribution, index) => (
            <motion.div
              key={index}
              className="bg-neutral-900/50 rounded-2xl p-8 border border-neutral-800 hover:border-neutral-700 transition-all duration-300 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-start space-x-4 mb-6">
                <div className="text-4xl">{contribution.icon}</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {contribution.title}
                  </h3>
                  <div className="text-sm text-blue-400 font-semibold mb-3">
                    {contribution.stats}
                  </div>
                </div>
              </div>
              
              <p className="text-gray-400 mb-6 leading-relaxed">
                {contribution.description}
              </p>
              
              <div className="space-y-2">
                <h4 className="text-sm font-semibold text-gray-300 mb-3">Key Highlights:</h4>
                <div className="grid grid-cols-2 gap-2">
                  {contribution.highlights.map((highlight, hIndex) => (
                    <div
                      key={hIndex}
                      className="flex items-center space-x-2 text-sm text-gray-400"
                    >
                      <div className="w-1 h-1 bg-blue-400 rounded-full"></div>
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

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