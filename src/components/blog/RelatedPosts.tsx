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

interface RelatedPostsProps {
  posts: BlogPost[];
}

export default function RelatedPosts({ posts }: RelatedPostsProps) {
  if (posts.length === 0) return null;

  return (
    <motion.section
      className="mt-16"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.6 }}
    >
      <h3 className="text-2xl font-bold text-white mb-8">Related Articles</h3>
      <div className="grid md:grid-cols-3 gap-6">
        {posts.map((relatedPost, index) => (
          <motion.article
            key={relatedPost.id}
            className="bg-neutral-900 rounded-xl overflow-hidden border border-neutral-800 hover:border-neutral-700 transition-all duration-300 group"
            whileHover={{ y: -5 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
          >
            <div className="p-4">
              <div className="flex items-center space-x-2 mb-2 text-xs text-gray-400">
                <span className="bg-neutral-800 px-2 py-1 rounded">{relatedPost.category}</span>
                <span>{relatedPost.readTime}</span>
              </div>
              
              <h4 className="text-sm font-bold text-white mb-2 group-hover:text-blue-400 transition-colors line-clamp-2">
                <Link href={`/blog/${relatedPost.slug}`}>
                  {relatedPost.title}
                </Link>
              </h4>
              
              <p className="text-gray-400 text-xs leading-relaxed line-clamp-3">
                {relatedPost.excerpt}
              </p>
            </div>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
}