"use client";
import { VscCalendar, VscWatch, VscTag } from "react-icons/vsc";
import { useRouteSync } from "@/hooks/useRouteSync";
import { useRouter } from "next/navigation";
import { useDevice } from "@/hooks/useDevice";

interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  slug: string;
  status: string;
}

interface MobileBlogBodyProps {
  posts: BlogPost[];
  searchTerm?: string | null;
}

export function MobileBlogBody({ posts, searchTerm }: MobileBlogBodyProps) {
  useRouteSync();
  const router = useRouter();
  const { isMobile } = useDevice();

  if (!isMobile) return null;

  // Filter posts based on search term
  const filteredPosts = searchTerm 
    ? posts.filter(post => 
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      )
    : posts;

  // Highlight search term in text
  const highlightText = (text: string, searchTerm: string) => {
    if (!searchTerm) return text;
    
    const regex = new RegExp(`(${searchTerm})`, 'gi');
    const parts = text.split(regex);
    
    return parts.map((part, index) => 
      regex.test(part) ? (
        <span key={index} className="bg-yellow-500 bg-opacity-30 text-yellow-300 font-medium">
          {part}
        </span>
      ) : part
    );
  };

  return (
    <div className="bg-neutral-900 text-gray-300 h-full overflow-y-auto">
      {/* Mobile Header */}
      <div className="sticky top-0 bg-neutral-900 border-b border-neutral-700 p-4 z-10">
        <h1 className="text-xl font-bold text-white">📝 Blog Posts</h1>
        <p className="text-sm text-gray-400">
          {searchTerm 
            ? `${filteredPosts.length} of ${posts.length} articles matching "${searchTerm}"`
            : `${posts.length} articles available`
          }
        </p>
        {searchTerm && (
          <div className="mt-2 text-xs text-yellow-400 bg-yellow-900 bg-opacity-30 px-2 py-1 rounded">
            🔍 Searching for: &quot;{searchTerm}&quot;
          </div>
        )}
      </div>

      {/* Mobile Blog Posts */}
      <div className="p-4 space-y-4">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => (
            <article
              key={post.slug}
              className={`bg-neutral-800 border border-neutral-700 rounded-lg p-4 transition-all duration-300 ${
                post.status === 'Published' 
                  ? 'active:bg-neutral-700 touch-manipulation' 
                  : 'opacity-75'
              }`}
              onClick={() => {
                if (post.status === 'Published') {
                  router.push(`/blog/${post.slug}`);
                }
              }}
            >
              {/* Mobile Post Header */}
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <h2 className="text-lg font-bold text-white leading-tight mb-2">
                    {searchTerm ? highlightText(post.title, searchTerm) : post.title}
                  </h2>
                
                {/* Mobile Meta */}
                <div className="flex items-center space-x-4 text-xs text-gray-400 mb-2">
                  <div className="flex items-center space-x-1">
                    <VscCalendar className="w-3 h-3" />
                    <span>{new Date(post.date).toLocaleDateString('en-US', { 
                      month: 'short', 
                      day: 'numeric' 
                    })}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <VscWatch className="w-3 h-3" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </div>
              
              <span className={`px-2 py-1 text-xs rounded shrink-0 ${
                post.status === 'Published' 
                  ? 'bg-green-900 text-green-400' 
                  : 'bg-yellow-900 text-yellow-400'
              }`}>
                {post.status}
              </span>
            </div>

            {/* Mobile Excerpt */}
            <p className="text-gray-300 text-sm leading-relaxed mb-3 line-clamp-3">
              {searchTerm ? highlightText(post.excerpt, searchTerm) : post.excerpt}
            </p>

            {/* Mobile Tags */}
            <div className="flex items-center space-x-2 mb-3">
              <VscTag className="w-3 h-3 text-gray-400 shrink-0" />
              <div className="flex flex-wrap gap-1 overflow-hidden">
                {post.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className={`px-2 py-1 text-xs rounded ${
                      searchTerm && tag.toLowerCase().includes(searchTerm.toLowerCase())
                        ? 'bg-yellow-600 bg-opacity-30 text-yellow-300 border border-yellow-500'
                        : 'bg-neutral-700 text-blue-400'
                    }`}
                  >
                    {searchTerm ? highlightText(tag, searchTerm) : tag}
                  </span>
                ))}
                {post.tags.length > 3 && (
                  <span className="text-xs text-gray-500">
                    +{post.tags.length - 3} more
                  </span>
                )}
              </div>
            </div>

            {/* Mobile Read Button */}
            {post.status === 'Published' && (
              <div className="flex justify-end">
                <span className="text-blue-400 text-sm font-medium">
                  Read Article →
                </span>
              </div>
            )}
          </article>
        ))
        ) : (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-lg font-bold text-white mb-2">No articles found</h3>
            <p className="text-gray-400 text-sm">
              No blog posts match your search for &quot;{searchTerm}&quot;
            </p>
            <p className="text-gray-500 text-xs mt-2">
              Try searching with different keywords
            </p>
          </div>
        )}
      </div>

      {/* Mobile Footer */}
      <div className="p-4 text-center text-gray-500 text-sm border-t border-neutral-700 mt-8">
        <p>📚 Sharing knowledge and experiences</p>
        <p className="mt-1">in web development</p>
      </div>
    </div>
  );
}
