"use client";
import { motion } from "framer-motion";

interface FilterSectionProps {
  categories: string[];
  types: string[];
  activeCategory: string;
  activeType: string;
  setActiveCategory: (category: string) => void;
  setActiveType: (type: string) => void;
}

export default function FilterSection({
  categories,
  types,
  activeCategory,
  activeType,
  setActiveCategory,
  setActiveType
}: FilterSectionProps) {
  return (
    <>
      {/* Category Filters */}
      <motion.div
        className="flex flex-wrap justify-center gap-4 mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
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
        className="flex flex-wrap justify-center gap-2 mb-8"
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
    </>
  );
}