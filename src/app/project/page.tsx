"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { projects, categories, statuses, type Project } from "@/components/project/projectData";
import ProjectFilters from "@/components/project/ProjectFilters";
import ProjectGrid from "@/components/project/ProjectGrid";
import ProjectModal from "@/components/project/ProjectModal";

export default function ProjectPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = projects.filter(project => {
    const matchesCategory = selectedCategory === "All" || project.category === selectedCategory;
    const matchesStatus = selectedStatus === "All" || project.status === selectedStatus;
    return matchesCategory && matchesStatus;
  });

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
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
        <ProjectFilters
          categories={categories}
          statuses={statuses}
          selectedCategory={selectedCategory}
          selectedStatus={selectedStatus}
          onCategoryChange={setSelectedCategory}
          onStatusChange={setSelectedStatus}
        />

        {/* Projects Grid */}
        <ProjectGrid
          projects={filteredProjects}
          onViewDetails={setSelectedProject}
        />
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
}