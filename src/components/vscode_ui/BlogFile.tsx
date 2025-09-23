"use client";
import React from "react";

export default function BlogFile() {
  return (
    <div className="h-full bg-[#1e1e1e] text-[#d4d4d4] font-mono text-sm overflow-auto">
      {/* VSCode Line Numbers */}
      <div className="flex">
        <div className="bg-[#1e1e1e] text-[#858585] text-right pr-4 pl-2 py-2 select-none min-w-[60px] border-r border-[#3e3e3e]">
          {Array.from({ length: 25 }, (_, i) => (
            <div key={i + 1} className="leading-6">
              {i + 1}
            </div>
          ))}
        </div>
        
        {/* Code Content */}
        <div className="flex-1 p-4">
          <div className="leading-6 space-y-2">
            <div className="text-[#569cd6]"># Blog Posts - Rifki Noviandra</div>
            <div className="text-[#6a9955]">## Latest articles and tech insights</div>
            <div className="h-4"></div>
            
            <div className="text-[#4ec9b0]">### Recent Posts</div>
            <div className="h-2"></div>
            
            <div className="ml-4 space-y-3">
              <div className="border-l-4 border-[#569cd6] pl-4 py-2 bg-[#0d1117]">
                <div className="text-[#58a6ff] font-bold">Building Modern Web Apps with Next.js</div>
                <div className="text-[#8b949e] text-xs mt-1">Published: March 2024</div>
                <div className="text-[#e6edf3] mt-2 text-sm">
                  Exploring the power of React Server Components and the App Router in Next.js 14. 
                  Learn how to build performant, SEO-friendly applications.
                </div>
                <div className="flex gap-2 mt-2">
                  <span className="bg-[#21262d] text-[#7c3aed] px-2 py-1 rounded text-xs">Next.js</span>
                  <span className="bg-[#21262d] text-[#10b981] px-2 py-1 rounded text-xs">React</span>
                  <span className="bg-[#21262d] text-[#f59e0b] px-2 py-1 rounded text-xs">TypeScript</span>
                </div>
              </div>
              
              <div className="border-l-4 border-[#f85149] pl-4 py-2 bg-[#0d1117]">
                <div className="text-[#ff7b72] font-bold">Laravel Best Practices for Enterprise Apps</div>
                <div className="text-[#8b949e] text-xs mt-1">Published: February 2024</div>
                <div className="text-[#e6edf3] mt-2 text-sm">
                  Lessons learned from building scalable ERP systems. Architecture patterns, 
                  performance optimization, and security considerations.
                </div>
                <div className="flex gap-2 mt-2">
                  <span className="bg-[#21262d] text-[#ef4444] px-2 py-1 rounded text-xs">Laravel</span>
                  <span className="bg-[#21262d] text-[#3b82f6] px-2 py-1 rounded text-xs">PHP</span>
                  <span className="bg-[#21262d] text-[#06b6d4] px-2 py-1 rounded text-xs">MySQL</span>
                </div>
              </div>
              
              <div className="border-l-4 border-[#a5f3fc] pl-4 py-2 bg-[#0d1117]">
                <div className="text-[#7dd3fc] font-bold">Docker for Development Workflows</div>
                <div className="text-[#8b949e] text-xs mt-1">Published: January 2024</div>
                <div className="text-[#e6edf3] mt-2 text-sm">
                  Streamline your development process with Docker containers. 
                  From local development to production deployment.
                </div>
                <div className="flex gap-2 mt-2">
                  <span className="bg-[#21262d] text-[#0ea5e9] px-2 py-1 rounded text-xs">Docker</span>
                  <span className="bg-[#21262d] text-[#84cc16] px-2 py-1 rounded text-xs">DevOps</span>
                  <span className="bg-[#21262d] text-[#a855f7] px-2 py-1 rounded text-xs">Containers</span>
                </div>
              </div>
            </div>
            
            <div className="h-4"></div>
            <div className="text-[#6a9955]">---</div>
            <div className="text-[#8b949e] text-sm">
              💡 Want to read more? Check out my full blog at 
              <span className="text-[#58a6ff] ml-1">rifki.dev/blog</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}