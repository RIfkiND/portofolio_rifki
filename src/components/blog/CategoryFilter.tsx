"use client";
import { motion } from "framer-motion";

interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function CategoryFilter({ categories, selectedCategory, onCategoryChange }: CategoryFilterProps) {
  return (
    <motion.div
      className="mb-12"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
    >
      <div className="flex flex-wrap gap-3 justify-center">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            className={`px-6 py-3 rounded-xl text-sm font-medium transition-all ${
              selectedCategory === category
                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                : 'bg-neutral-800 text-gray-300 hover:bg-neutral-700'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </motion.div>
  );
}