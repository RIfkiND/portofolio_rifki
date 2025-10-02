"use client";
import { notFound } from 'next/navigation';
import { useState, useEffect } from "react";
import { blogPostsData } from "@/components/blog/blogData";
import BlogHeader from "@/components/blog/BlogHeader";
import BlogPostHeader from "@/components/blog/BlogPostHeader";
import BlogPostContent from "@/components/blog/BlogPostContent";
import RelatedPosts from "@/components/blog/RelatedPosts";
import { BlogPost1Content } from "@/components/blog/posts/BlogPost1";
import { BlogPost2Content } from "@/components/blog/posts/BlogPost2";
import { BlogPost3Content } from "@/components/blog/posts/BlogPost3";
import { BlogPost4Content } from "@/components/blog/posts/BlogPost4";
import { BlogPost5Content } from "@/components/blog/posts/BlogPost5";

// Content mapping based on slug
const blogPostContentMap: Record<string, string> = {
  'building-scalable-backend-nestjs-postgresql': BlogPost1Content,
  'modern-frontend-react-typescript': BlogPost2Content,
  'database-design-patterns-modern-applications': BlogPost3Content,
  'api-design-best-practices-restful-services': BlogPost4Content,
  'devops-essentials-docker-cicd-deployment': BlogPost5Content,
};

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [slug, setSlug] = useState<string>('');
  
  useEffect(() => {
    params.then((resolvedParams) => {
      setSlug(resolvedParams.slug);
      setIsLoading(false);
    });
  }, [params]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-neutral-950 flex items-center justify-center">
        <div className="text-white">Loading...</div>
      </div>
    );
  }

  // Find the blog post data
  const post = blogPostsData.find(p => p.slug === slug);
  
  if (!post) {
    notFound();
  }

  // Get related posts
  const relatedPosts = blogPostsData
    .filter(p => p.id !== post.id && (p.category === post.category || p.tags.some(tag => post.tags.includes(tag))))
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      {/* Blog Header */}
      <BlogHeader />

      <article className="max-w-4xl mx-auto px-4 py-8">
        {/* Blog Post Header */}
        <BlogPostHeader post={post} />
        
        {/* Blog Post Content */}
        <BlogPostContent content={blogPostContentMap[slug] || ''} />
        
        {/* Related Posts */}
        <RelatedPosts posts={relatedPosts} />
      </article>
    </div>
  );
}