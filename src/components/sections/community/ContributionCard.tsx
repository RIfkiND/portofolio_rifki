"use client";
import { motion } from "framer-motion";
import { IconType } from "react-icons";

interface ContributionCardProps {
  contribution: {
    id: number;
    title: string;
    description: string;
    icon: IconType;
    category: string;
    type: string;
    tech: string[];
    link: string;
  };
  index: number;
}

export default function ContributionCard({ contribution, index }: ContributionCardProps) {
  const IconComponent = contribution.icon;

  return (
    <motion.div
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
        <div className="text-2xl text-blue-400">
          <IconComponent />
        </div>
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
  );
}