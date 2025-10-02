"use client";
import { motion } from "framer-motion";

export default function CallToAction() {
  return (
    <motion.div
      className="text-center mt-16"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-2xl p-8 border border-neutral-800">
        <h3 className="text-2xl font-bold text-white mb-4">
          Let&apos;s Collaborate and Build Together
        </h3>
        <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
          I&apos;m always open to collaborating on exciting projects, contributing to meaningful open source initiatives, 
          or sharing knowledge through technical writing and tutorials.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.a
            href="https://github.com/RifkiND"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-[0_0_24px_rgba(37,99,235,0.3)] hover:shadow-[0_0_32px_rgba(37,99,235,0.4)]"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View My GitHub
          </motion.a>
          <motion.a
            href="/blog"
            className="px-8 py-3 border border-neutral-600 text-white rounded-lg font-medium hover:border-neutral-500 hover:bg-neutral-800 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Read My Articles
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}