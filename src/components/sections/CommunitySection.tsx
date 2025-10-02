"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { contributions, categories, types } from "./community/contributionsData";
import ContributionCard from "./community/ContributionCard";
import FilterSection from "./community/FilterSection";
import EmptyState from "./community/EmptyState";
import CallToAction from "./community/CallToAction";

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
            Passionate about giving back to the developer community through open source contributions 
            and knowledge sharing through technical writing.
          </p>
        </motion.div>

        {/* Filter Section */}
        <FilterSection
          categories={categories}
          types={types}
          activeCategory={activeCategory}
          activeType={activeType}
          setActiveCategory={setActiveCategory}
          setActiveType={setActiveType}
        />

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
            <ContributionCard
              key={contribution.id}
              contribution={contribution}
              index={index}
            />
          ))}
        </motion.div>

        {/* Empty State */}
        {filteredContributions.length === 0 && <EmptyState />}

        {/* Call to Action */}
        <CallToAction />
      </div>
    </section>
  );
}