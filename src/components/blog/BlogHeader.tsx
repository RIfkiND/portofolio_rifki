"use client";
import Link from "next/link";

export default function BlogHeader() {
  return (
    <div className="bg-neutral-900/50 backdrop-blur-sm border-b border-neutral-800 sticky top-0 z-40">
      <div className="max-w-4xl mx-auto px-4 py-4">
        <Link href="/blog" className="flex items-center space-x-3 text-white hover:text-blue-400 transition-colors">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          <span className="font-medium">Back to Blog</span>
        </Link>
      </div>
    </div>
  );
}