"use client";
import { motion } from "framer-motion";
// React Icons imports
import { 
  SiLaravel, SiNestjs, SiNodedotjs, SiExpress,
  SiPostgresql, SiMysql, SiRedis, SiMongodb,
  SiDocker, SiGit, SiLinux,
  SiTypescript, SiJavascript, SiPhp, SiPython, SiGo
} from "react-icons/si";
import { 
  FaRocket, FaDatabase, FaTools, FaCode, FaPaperPlane
} from "react-icons/fa";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-neutral-900">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">
              Passionate Backend Developer & Software Engineering Student
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed text-lg">
              I&apos;m a dedicated backend developer with over 1 year of
              hands-on experience in building scalable web applications and
              APIs. Currently pursuing Software Engineering, I combine academic
              knowledge with practical skills to create robust solutions.
            </p>
            <p className="text-gray-300 mb-8 leading-relaxed text-lg">
              My passion lies in crafting efficient backend systems, working
              with modern technologies, and constantly learning new approaches
              to solve complex problems. I enjoy the challenge of optimizing
              performance and ensuring system reliability.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">1+</div>
                <div className="text-gray-400 text-sm">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">
                  10+
                </div>
                <div className="text-gray-400 text-sm">Projects Built</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">5+</div>
                <div className="text-gray-400 text-sm">Technologies</div>
              </div>
            </div>

            {/* CTA */}
            <motion.a
              href="/cv/CV_Rifki.pdf"
              download
              className="inline-flex items-center space-x-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Download My Resume</span>
            </motion.a>
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h4 className="text-xl font-bold text-white mb-6">
              Core Technologies
            </h4>

            {/* Backend Technologies */}
            <div className="space-y-4">
              <h5 className="text-blue-400 font-medium flex items-center">
                <FaRocket className="mr-2" />
                Backend Development
              </h5>
              <div className="flex flex-wrap gap-3">
                {[
                  {
                    name: "Laravel",
                    icon: <SiLaravel />,
                    color: "border-red-500/30 hover:border-red-500",
                  },
                  {
                    name: "NestJS",
                    icon: <SiNestjs />,
                    color: "border-red-600/30 hover:border-red-600",
                  },
                  {
                    name: "Node.js",
                    icon: <SiNodedotjs />,
                    color: "border-green-500/30 hover:border-green-500",
                  },
                  {
                    name: "Express.js",
                    icon: <SiExpress />,
                    color: "border-yellow-500/30 hover:border-yellow-500",
                  },
                ].map((tech) => (
                  <motion.span
                    key={tech.name}
                    className={`bg-neutral-800 text-gray-300 px-4 py-2 rounded-lg text-sm border transition-all duration-300 hover:scale-105 ${tech.color} flex items-center space-x-2`}
                    whileHover={{ y: -2 }}
                  >
                    <span>{tech.icon}</span>
                    <span>{tech.name}</span>
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Database Technologies */}
            <div className="space-y-4">
              <h5 className="text-purple-400 font-medium flex items-center">
                <FaDatabase className="mr-2" />
                Database & Storage
              </h5>
              <div className="flex flex-wrap gap-3">
                {[
                  {
                    name: "PostgreSQL",
                    icon: <SiPostgresql />,
                    color: "border-blue-500/30 hover:border-blue-500",
                  },
                  {
                    name: "MySQL",
                    icon: <SiMysql />,
                    color: "border-blue-400/30 hover:border-blue-400",
                  },
                  {
                    name: "Redis",
                    icon: <SiRedis />,
                    color: "border-red-500/30 hover:border-red-500",
                  },
                  {
                    name: "MongoDB",
                    icon: <SiMongodb />,
                    color: "border-green-500/30 hover:border-green-500",
                  },
                ].map((tech) => (
                  <motion.span
                    key={tech.name}
                    className={`bg-neutral-800 text-gray-300 px-4 py-2 rounded-lg text-sm border transition-all duration-300 hover:scale-105 ${tech.color} flex items-center space-x-2`}
                    whileHover={{ y: -2 }}
                  >
                    <span>{tech.icon}</span>
                    <span>{tech.name}</span>
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Tools & DevOps */}
            <div className="space-y-4">
              <h5 className="text-cyan-400 font-medium flex items-center">
                <FaTools className="mr-2" />
                Tools & DevOps
              </h5>
              <div className="flex flex-wrap gap-3">
                {[
                  {
                    name: "Docker",
                    icon: <SiDocker />,
                    color: "border-blue-500/30 hover:border-blue-500",
                  },
                  {
                    name: "Git",
                    icon: <SiGit />,
                    color: "border-orange-500/30 hover:border-orange-500",
                  },
                  {
                    name: "Linux",
                    icon: <SiLinux />,
                    color: "border-gray-500/30 hover:border-gray-400",
                  },
                  {
                    name: "Postman",
                    icon: <FaPaperPlane />,
                    color: "border-orange-400/30 hover:border-orange-400",
                  },
                 
                ].map((tech) => (
                  <motion.span
                    key={tech.name}
                    className={`bg-neutral-800 text-gray-300 px-4 py-2 rounded-lg text-sm border transition-all duration-300 hover:scale-105 ${tech.color} flex items-center space-x-2`}
                    whileHover={{ y: -2 }}
                  >
                    <span>{tech.icon}</span>
                    <span>{tech.name}</span>
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Programming Languages */}
            <div className="space-y-4">
              <h5 className="text-green-400 font-medium flex items-center">
                <FaCode className="mr-2" />
                Programming Languages
              </h5>
              <div className="flex flex-wrap gap-3">
                {[
                  {
                    name: "TypeScript",
                    icon: <SiTypescript />,
                    color: "border-blue-600/30 hover:border-blue-600",
                  },
                  {
                    name: "JavaScript",
                    icon: <SiJavascript />,
                    color: "border-yellow-500/30 hover:border-yellow-500",
                  },
                  {
                    name: "PHP",
                    icon: <SiPhp />,
                    color: "border-purple-500/30 hover:border-purple-500",
                  },
                  {
                    name: "Python",
                    icon: <SiPython />,
                    color: "border-green-600/30 hover:border-green-600",
                  },
                  {
                    name: "Go",
                    icon: <SiGo />,
                    color: "border-cyan-500/30 hover:border-cyan-500",
                  },
                ].map((tech) => (
                  <motion.span
                    key={tech.name}
                    className={`bg-neutral-800 text-gray-300 px-4 py-2 rounded-lg text-sm border transition-all duration-300 hover:scale-105 ${tech.color} flex items-center space-x-2`}
                    whileHover={{ y: -2 }}
                  >
                    <span>{tech.icon}</span>
                    <span>{tech.name}</span>
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}