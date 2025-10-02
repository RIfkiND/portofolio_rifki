"use client";
import { motion } from "framer-motion";

export default function NewsletterCTA() {
  return (
    <motion.section
      className="mt-20 text-center"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.8 }}
    >
      <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 rounded-2xl p-8 border border-neutral-800">
        <h3 className="text-2xl font-bold text-white mb-4">
          Stay Updated
        </h3>
        <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
          Get notified when I publish new articles about backend development, 
          system design, and modern web technologies.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
          />
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-all">
            Subscribe
          </button>
        </div>
      </div>
    </motion.section>
  );
}