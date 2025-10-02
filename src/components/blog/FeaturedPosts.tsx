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

interface FeaturedPostsProps {
  posts: BlogPost[];
}

export default function FeaturedPosts({ posts }: FeaturedPostsProps) {
  return (
    <motion.section
      className="mb-16"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <h2 className="text-3xl font-bold text-white mb-8">Featured Articles</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {posts.map((post, index) => (
          <motion.article
            key={post.id}
            className="bg-neutral-900 rounded-2xl overflow-hidden border border-neutral-800 hover:border-neutral-700 transition-all duration-300 group"
            whileHover={{ y: -5 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
          >
            <div className="p-6">
              <div className="flex items-center space-x-4 mb-4 text-sm text-gray-400">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 px-3 py-1 rounded-full text-white text-xs font-medium">Featured</span>
                <span className="bg-neutral-800 px-3 py-1 rounded-full">{post.category}</span>
                <span>{post.readTime}</span>
                <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                <Link href={`/blog/${post.slug}`}>
                  {post.title}
                </Link>
              </h3>
              
              <p className="text-gray-400 mb-4 leading-relaxed">
                {post.excerpt}
              </p>
              
              <div className="flex items-center justify-between">
                <div className="flex flex-wrap gap-2">
                  {post.tags.slice(0, 3).map((tag, tagIndex) => (
                    <span key={tagIndex} className="text-xs bg-neutral-800 text-gray-400 px-2 py-1 rounded">
                      #{tag}
                    </span>
                  ))}
                </div>
                
                <Link 
                  href={`/blog/${post.slug}`}
                  className="text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium"
                >
                  Read More →
                </Link>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
}