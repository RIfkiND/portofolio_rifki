import { motion } from "framer-motion";

interface ProjectFiltersProps {
  categories: string[];
  statuses: string[];
  selectedCategory: string;
  selectedStatus: string;
  onCategoryChange: (category: string) => void;
  onStatusChange: (status: string) => void;
}

export default function ProjectFilters({
  categories,
  statuses,
  selectedCategory,
  selectedStatus,
  onCategoryChange,
  onStatusChange
}: ProjectFiltersProps) {
  return (
    <motion.div 
      className="mb-12"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <div className="flex flex-col md:flex-row gap-6 items-center justify-center">
        {/* Category Filter */}
        <div className="flex flex-wrap gap-2">
          <span className="text-sm text-gray-400 mr-2 self-center">Category:</span>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => onCategoryChange(category)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-neutral-800 text-gray-300 hover:bg-neutral-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Status Filter */}
        <div className="flex flex-wrap gap-2">
          <span className="text-sm text-gray-400 mr-2 self-center">Status:</span>
          {statuses.map((status) => (
            <button
              key={status}
              onClick={() => onStatusChange(status)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                selectedStatus === status
                  ? 'bg-purple-600 text-white'
                  : 'bg-neutral-800 text-gray-300 hover:bg-neutral-700'
              }`}
            >
              {status}
            </button>
          ))}
        </div>
      </div>
    </motion.div>
  );
}