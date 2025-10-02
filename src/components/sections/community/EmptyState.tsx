"use client";
import { motion } from "framer-motion";

export default function EmptyState() {
  return (
    <motion.div
      className="text-center py-16"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="text-gray-500 text-6xl mb-4">🔍</div>
      <h3 className="text-xl font-semibold text-gray-400 mb-2">No contributions found</h3>
      <p className="text-gray-500">Try adjusting your filters to see more results.</p>
    </motion.div>
  );
}