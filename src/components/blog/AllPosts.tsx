"use client";
import { motion } from "framer-motion";
import Link from "next/link";

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

interface AllPostsProps {
  posts: BlogPost[];
}

export default function AllPosts({ posts }: AllPostsProps) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.6 }}
    >
      <h2 className="text-3xl font-bold text-white mb-8">All Articles</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post, index) => (
          <motion.article
            key={post.id}
            className="bg-neutral-900 rounded-2xl overflow-hidden border border-neutral-800 hover:border-neutral-700 transition-all duration-300 group"
            whileHover={{ y: -5 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            layout
          >
            <div className="p-5">
              <div className="flex items-center justify-between mb-3 text-xs text-gray-400">
                {post.featured && (
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 px-2 py-1 rounded text-white font-medium">Featured</span>
                )}
                <span className="bg-neutral-800 px-2 py-1 rounded">{post.category}</span>
                <span>{post.readTime}</span>
              </div>
              
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors line-clamp-2">
                <Link href={`/blog/${post.slug}`}>
                  {post.title}
                </Link>
              </h3>
              
              <p className="text-gray-400 text-sm mb-4 leading-relaxed line-clamp-3">
                {post.excerpt}
              </p>
              
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500">
                  {new Date(post.publishedAt).toLocaleDateString()}
                </span>
                
                <Link 
                  href={`/blog/${post.slug}`}
                  className="text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium"
                >
                  Read →
                </Link>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
}