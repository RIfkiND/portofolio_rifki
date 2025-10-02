"use client";
import React from "react";
import { motion } from "framer-motion";
import { TracingBeam } from "@/components/ui/tracing-beam";

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-neutral-900">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            My professional journey as a backend developer and software engineering student.
          </p>
        </motion.div>

        <TracingBeam className="px-6">
          <div className="max-w-2xl mx-auto antialiased pt-4 relative">
            {experienceContent.map((item, index) => (
              <div
                key={`content-${index}`}
                className="mb-20"
              >
                <h2 className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-sm w-fit px-4 py-1 mb-4 font-medium">
                  {item.badge}
                </h2>

                <p className="text-xl mb-4 font-bold text-white">
                  {item.title}
                </p>

                <p className="text-blue-400 mb-6 font-medium">
                  {item.company} • {item.duration}
                </p>

                <div className="text-sm prose prose-sm dark:prose-invert">
                  <div className="text-gray-300 leading-relaxed mb-6">
                    {item.description}
                  </div>
                  
                  {item.technologies && (
                    <div className="mb-6">
                      <h4 className="text-white font-medium mb-3">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {item.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="bg-neutral-800 text-blue-300 px-3 py-1 rounded-full text-xs font-medium border border-neutral-700"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {item.achievements && (
                    <div className="mb-6">
                      <h4 className="text-white font-medium mb-3">Key Achievements:</h4>
                      <ul className="list-disc list-inside space-y-2 text-gray-300">
                        {item.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="text-sm leading-relaxed">{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </TracingBeam>
      </div>
    </section>
  );
}

const experienceContent = [
  {
    title: "Backend Developer Intern",
    company: "PT Minilemon",
    duration: "6 months",
    description: (
      <>
        <p>
          Worked as a backend developer intern focusing on API development and database optimization. 
          Contributed to building scalable web applications and learned industry best practices for 
          backend development.
        </p>
        <p>
          Gained hands-on experience with modern backend technologies and collaborative development 
          workflows. Participated in code reviews and agile development processes.
        </p>
      </>
    ),
    badge: "Internship",
    technologies: ["Node.js", "Express.js", "PostgreSQL", "REST API", "Git", "Docker"],
    achievements: [
      "Developed and maintained RESTful APIs",
      "Optimized database queries for better performance",
      "Collaborated with frontend team for seamless integration",
      "Participated in daily standup meetings and sprint planning"
    ]
  },
  {
    title: "Backend Developer Intern", 
    company: "BMTI Bandung",
    duration: "4 months",
    description: (
      <>
        <p>
          Interned at BMTI (Balai Besar Pengembangan Manajemen dan Teknologi Informasi) where I 
          worked on government technology projects and training management systems.
        </p>
        <p>
          Developed backend solutions for educational and training platforms, focusing on 
          data management and system integration. Learned about enterprise-level software 
          development and government project requirements.
        </p>
      </>
    ),
    badge: "Government Internship",
    technologies: ["Laravel", "PHP", "MySQL", "REST API", "Git", "Linux"],
    achievements: [
      "Built training management system backend",
      "Implemented user authentication and authorization",
      "Created data export and reporting features",
      "Worked with government data standards and security requirements"
    ]
  },
  {
    title: "Software Engineering Student",
    company: "Telkom University Purwokerto",
    duration: "2025 - Present",
    description: (
      <>
        <p>
          Currently pursuing a degree in Software Engineering with focus on backend development, 
          system design, and artificial intelligence. Maintaining strong academic performance 
          while gaining practical experience through internships and personal projects.
        </p>
        <p>
          Active in coursework covering data structures, algorithms, database systems, software 
          architecture, and AI/ML fundamentals. Participating in coding competitions and 
          tech communities to enhance skills.
        </p>
      </>
    ),
    badge: "Education",
    technologies: ["Java", "Python", "C++", "Data Structures", "Algorithms", "AI/ML", "Software Architecture"],
    achievements: [
      "Maintaining excellent academic performance",
      "Completed advanced coursework in backend technologies",
      "Participated in programming competitions",
      "Led study groups and peer learning sessions",
      "Exploring AI and machine learning applications"
    ]
  }
];