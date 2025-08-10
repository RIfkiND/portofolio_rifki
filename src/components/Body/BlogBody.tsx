"use client";
import { useState } from "react";
import { VscCalendar, VscWatch, VscTag, VscLinkExternal } from "react-icons/vsc";
import { SiMarkdown } from "react-icons/si";
import { useRouteSync } from "@/hooks/useRouteSync";
import { useRouter } from "next/navigation";
import Line from "../ui/line";

export function BlogBody() {
  useRouteSync(); // This will sync the current route with the tab store
  const router = useRouter();
  const [selectedPost, setSelectedPost] = useState<number | null>(null);

  const blogPosts = [
    {
      title: "Building a VSCode-Inspired Portfolio with Next.js",
      excerpt: "How I created this portfolio website using Next.js, TypeScript, and Tailwind CSS with a VSCode-like interface including interactive terminal.",
      date: "2025-01-15",
      readTime: "5 min",
      tags: ["Next.js", "TypeScript", "Portfolio", "VSCode"],
      slug: "vscode-portfolio-nextjs",
      status: "Published"
    },
    {
      title: "Backend Development Best Practices with Laravel",
      excerpt: "Essential practices for building scalable and maintainable backend APIs using Laravel framework, covering security, performance, and code organization.",
      date: "2024-12-20",
      readTime: "8 min",
      tags: ["Laravel", "PHP", "Backend", "API"],
      slug: "laravel-backend-best-practices",
      status: "Published"
    },
    {
      title: "Working on Government Projects: SINDARA Experience",
      excerpt: "Insights and lessons learned from developing a national education platform for Indonesia's Ministry of Education.",
      date: "2024-11-30",
      readTime: "6 min",
      tags: ["Government", "Education", "Indonesia", "Backend"],
      slug: "government-project-sindara",
      status: "Published"
    },
    {
      title: "Integrating Payment Gateways in PHP Applications",
      excerpt: "Complete guide to implementing Stripe, Tripay, and DigiFlazz payment systems in Laravel applications with security considerations.",
      date: "2024-10-15",
      readTime: "10 min",
      tags: ["PHP", "Laravel", "Payments", "Integration"],
      slug: "payment-gateway-integration",
      status: "Published"
    },
    {
      title: "From Student to Professional Developer",
      excerpt: "My journey from SMKN 1 Ciamis student to working on national-level projects and internships at tech companies.",
      date: "2024-09-10",
      readTime: "7 min",
      tags: ["Career", "Student", "Journey", "Indonesia"],
      slug: "student-to-developer-journey",
      status: "Published"
    },
    {
      title: "Modern API Development with Go",
      excerpt: "Exploring Go's potential for building high-performance web scrapers and APIs. Coming soon...",
      date: "2025-02-01",
      readTime: "12 min",
      tags: ["Go", "API", "Performance", "Web Scraping"],
      slug: "modern-api-development-go",
      status: "Draft"
    }
  ];

  const lineCount = blogPosts.length * 6 + 15; // Approximate line count for the "code"

  return (
    <div className="h-full flex flex-col relative bg-neutral-900 text-gray-300 font-mono overflow-hidden">
      {/* Sticky Header */}
      <div className="sticky top-0 left-0 w-full bg-neutral-900 px-4 py-2 flex items-center z-50">
        <SiMarkdown className="mr-2 text-blue-400" />
        <span className="text-sm">src &gt; blog.md</span>
        <span className="ml-auto text-xs text-gray-500">{blogPosts.length} posts loaded</span>
      </div>

      {/* Layout - This section scrolls */}
      <div className="flex items-start flex-1 overflow-y-auto">
        {/* VS Code-like Line Numbers */}
        <div className="w-12 bg-neutral-900 sticky top-0">
          <Line line={lineCount} />
        </div>

        {/* Blog Posts */}
        <div className="flex-1 p-6 pb-32">
          <div className="space-y-6">
            {blogPosts.map((post, index) => (
              <article
                key={post.slug}
                className={`group relative bg-neutral-800 border border-neutral-700 rounded-lg p-6 transition-all duration-300 ${
                  post.status === 'Published' 
                    ? 'hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/20 cursor-pointer' 
                    : 'opacity-75 cursor-not-allowed'
                } ${
                  selectedPost === index ? 'border-blue-500 shadow-lg shadow-blue-500/20' : ''
                }`}
                onMouseEnter={() => setSelectedPost(index)}
                onMouseLeave={() => setSelectedPost(null)}
                onClick={() => {
                  if (post.status === 'Published') {
                    router.push(`/blog/${post.slug}`);
                  }
                }}
              >
                {/* Code Editor Header */}
                <div className="flex items-center justify-between mb-4 pb-2 border-b border-neutral-700">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="ml-2 text-xs text-gray-500">{post.slug}.md</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 py-1 text-xs rounded ${
                      post.status === 'Published' 
                        ? 'bg-green-900 text-green-400 border border-green-600' 
                        : 'bg-yellow-900 text-yellow-400 border border-yellow-600'
                    }`}>
                      {post.status}
                    </span>
                    {post.status === 'Published' && (
                      <VscLinkExternal 
                        className="w-4 h-4 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" 
                        onClick={(e) => {
                          e.stopPropagation();
                          router.push(`/blog/${post.slug}`);
                        }}
                        title="Read full article"
                      />
                    )}
                  </div>
                </div>

                {/* Post Content */}
                <div className="space-y-3">
                  {/* Title */}
                  <h2 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                    <span className="text-purple-400"># </span>
                    {post.title}
                  </h2>

                  {/* Meta Info */}
                  <div className="flex items-center space-x-4 text-sm text-gray-400">
                    <div className="flex items-center space-x-1">
                      <VscCalendar className="w-4 h-4" />
                      <span>{new Date(post.date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'short', 
                        day: 'numeric' 
                      })}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <VscWatch className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  {/* Excerpt */}
                  <p className="text-gray-300 leading-relaxed">
                    <span className="text-green-500">{`// `}</span>
                    {post.excerpt}
                  </p>

                  {/* Tags */}
                  <div className="flex items-center space-x-2">
                    <VscTag className="w-4 h-4 text-gray-400" />
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 text-xs bg-neutral-700 text-blue-400 rounded border border-neutral-600 hover:border-blue-500 transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Code Preview */}
                  <div className="mt-4 p-3 bg-neutral-900 rounded border border-neutral-600 text-xs font-mono">
                    <span className="text-gray-500">{`// ${post.slug}.readMore()`}</span>
                    <br />
                    <span className="text-blue-400">Published:</span> 
                    <span className="text-green-400 ml-1">
                      {post.status === 'Published' ? '✓' : '⚠'} {post.date}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Code Comment Footer */}
          <div className="mt-8 mb-40 p-4 bg-neutral-800 border border-neutral-700 rounded-lg">
            <div className="text-sm font-mono text-gray-400">
              <span className="text-green-500">{`// `}</span>
              End of blog posts - Total: {blogPosts.filter(p => p.status === 'Published').length} published, {blogPosts.filter(p => p.status === 'Draft').length} drafts
              <br />
              <span className="text-green-500">{`// `}</span>
              Sharing knowledge and experiences in web development
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
