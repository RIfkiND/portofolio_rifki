"use client";
import React from "react";

export default function MainFile() {
  return (
    <div className="h-full bg-[#1e1e1e] text-[#d4d4d4] font-mono text-sm overflow-auto">
      {/* VSCode Line Numbers */}
      <div className="flex">
        <div className="bg-[#1e1e1e] text-[#858585] text-right pr-4 pl-2 py-2 select-none min-w-[60px] border-r border-[#3e3e3e]">
          {Array.from({ length: 30 }, (_, i) => (
            <div key={i + 1} className="leading-6">
              {i + 1}
            </div>
          ))}
        </div>
        
        {/* Code Content */}
        <div className="flex-1 p-4">
          <div className="leading-6 space-y-2">
            <div className="text-[#569cd6]"># Welcome to My Portfolio</div>
            <div className="text-[#6a9955]">## Rifki Noviandra - Full Stack Developer</div>
            <div className="h-4"></div>
            
            <div className="text-[#e6edf3]">
              👋 Hello! I&apos;m a passionate full-stack developer with expertise in modern web technologies.
            </div>
            <div className="h-2"></div>
            
            <div className="text-[#4ec9b0]">### What I Do</div>
            <div className="ml-4 space-y-1">
              <div className="flex items-center">
                <span className="text-[#f85149]">🚀</span>
                <span className="text-[#e6edf3] ml-2">Build scalable web applications</span>
              </div>
              <div className="flex items-center">
                <span className="text-[#a5f3fc]">⚡</span>
                <span className="text-[#e6edf3] ml-2">Optimize performance and user experience</span>
              </div>
              <div className="flex items-center">
                <span className="text-[#7dd3fc]">🛠️</span>
                <span className="text-[#e6edf3] ml-2">Work with modern frameworks and tools</span>
              </div>
              <div className="flex items-center">
                <span className="text-[#84cc16]">💡</span>
                <span className="text-[#e6edf3] ml-2">Solve complex technical challenges</span>
              </div>
            </div>
            
            <div className="h-4"></div>
            <div className="text-[#4ec9b0]">### Quick Stats</div>
            <div className="ml-4 space-y-1 text-[#e6edf3]">
              <div>📍 Location: Jakarta, Indonesia</div>
              <div>💼 Experience: 3+ years in web development</div>
              <div>🎯 Focus: Full-stack development, ERP systems</div>
              <div>🌟 Specialties: Laravel, React, Vue.js, TypeScript</div>
            </div>
            
            <div className="h-4"></div>
            <div className="text-[#4ec9b0]">### Current Role</div>
            <div className="bg-[#0d1117] border border-[#21262d] p-4 rounded">
              <div className="text-[#58a6ff] font-bold">Full Stack Developer</div>
              <div className="text-[#f85149]">PT. Hasil Bumi Indonesia</div>
              <div className="text-[#8b949e] text-sm mt-1">2023 - Present</div>
              <div className="text-[#e6edf3] text-sm mt-2">
                Leading development of enterprise ERP systems, improving business processes 
                and system performance for agricultural industry operations.
              </div>
            </div>
            
            <div className="h-4"></div>
            <div className="text-[#6a9955]">---</div>
            <div className="text-[#8b949e] text-sm">
              🔍 Explore the sidebar to learn more about my:
            </div>
            <div className="ml-4 text-[#8b949e] text-sm space-y-1">
              <div>• 🐍 Work Experience (experience.py)</div>
              <div>• 🔧 Technical Skills (skill.go)</div>
              <div>• 💼 Featured Projects (projects.tsx)</div>
              <div>• 📝 Blog Posts (blog.md)</div>
            </div>
            
            <div className="h-4"></div>
            <div className="text-[#58a6ff]">
              Let&apos;s build something amazing together! 🚀
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}