"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { blogPostsData, categories } from "@/components/blog/blogData";
import FeaturedPosts from "@/components/blog/FeaturedPosts";
import CategoryFilter from "@/components/blog/CategoryFilter";
import AllPosts from "@/components/blog/AllPosts";
import NewsletterCTA from "@/components/blog/NewsletterCTA";

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  
  const filteredPosts = blogPostsData.filter(post => 
    selectedCategory === "All" || post.category === selectedCategory
  );

  const featuredPosts = blogPostsData.filter(post => post.featured);

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Hero Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Tech Blog
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Insights, tutorials, and thoughts on modern software development. 
            Sharing my journey as a backend developer and the lessons learned along the way.
          </p>
        </motion.div>

        {/* Featured Posts */}
        <FeaturedPosts posts={featuredPosts} />

        {/* Category Filter */}
        <CategoryFilter 
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />

        {/* All Posts */}
        <AllPosts posts={filteredPosts} />

        {/* Newsletter CTA */}
        <NewsletterCTA />
      </div>
    </div>
  );
}