"use client";
import { motion } from "framer-motion";

interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  author: string;
  publishedAt: string;
  readTime: string;
  category: string;
  tags: string[];
  featured: boolean;
}

interface BlogPostHeaderProps {
  post: BlogPost;
}

export default function BlogPostHeader({ post }: BlogPostHeaderProps) {
  return (
    <motion.header
      className="mb-12"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="mb-6">
        <div className="flex items-center space-x-4 mb-4 text-sm text-gray-400">
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-1 rounded-full text-white">
            {post.category}
          </span>
          <span>{post.readTime}</span>
          <span>{new Date(post.publishedAt).toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          })}</span>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
          {post.title}
        </h1>
        
        <p className="text-xl text-gray-400 leading-relaxed mb-6">
          {post.excerpt}
        </p>
        
        <div className="flex items-center space-x-4 text-sm">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
              R
            </div>
            <span className="text-gray-300">By {post.author}</span>
          </div>
        </div>
      </div>
    </motion.header>
  );
}