"use client";
import { motion } from "framer-motion";

interface BlogPostContentProps {
  content: string;
}

export default function BlogPostContent({ content }: BlogPostContentProps) {
  const formatContent = (content: string) => {
    return content
      .replace(/\n/g, '<br />')
      .replace(/#{3}\s(.+)/g, '<h3 class="text-xl font-bold text-white mt-8 mb-4">$1</h3>')
      .replace(/#{2}\s(.+)/g, '<h2 class="text-2xl font-bold text-white mt-10 mb-6">$1</h2>')
      .replace(/#{1}\s(.+)/g, '<h1 class="text-3xl font-bold text-white mt-12 mb-8">$1</h1>')
      .replace(/\*\*(.+?)\*\*/g, '<strong class="text-white font-semibold">$1</strong>')
      .replace(/```(\w+)?\n([\s\S]*?)```/g, '<pre class="bg-neutral-900 border border-neutral-700 rounded-lg p-4 overflow-x-auto my-6"><code class="text-sm text-gray-300">$2</code></pre>')
      .replace(/`([^`]+)`/g, '<code class="bg-neutral-800 px-2 py-1 rounded text-sm text-blue-400">$1</code>')
      .replace(/^- (.+)/gm, '<li class="mb-2">$1</li>')
      .replace(/((<li.*<\/li>\s*)+)/g, '<ul class="list-disc list-inside space-y-2 my-4 text-gray-300">$1</ul>');
  };

  return (
    <motion.div
      className="prose prose-lg prose-invert max-w-none mb-12"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <div 
        className="text-gray-300 leading-relaxed"
        style={{ 
          lineHeight: '1.7',
          fontSize: '1.1rem'
        }}
        dangerouslySetInnerHTML={{ 
          __html: formatContent(content)
        }} 
      />
    </motion.div>
  );
}