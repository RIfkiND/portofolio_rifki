import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { Project } from "./projectData";

interface ProjectGridProps {
  projects: Project[];
  onViewDetails: (project: Project) => void;
}

export default function ProjectGrid({ projects, onViewDetails }: ProjectGridProps) {
  if (projects.length === 0) {
    return (
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
    );
  }

  return (
    <motion.div 
      className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.4 }}
    >
      {projects.map((project, index) => (
        <ProjectCard
          key={project.id}
          project={project}
          index={index}
          onViewDetails={onViewDetails}
        />
      ))}
    </motion.div>
  );
}