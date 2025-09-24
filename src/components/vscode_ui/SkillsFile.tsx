"use client";
import React from "react";

export default function SkillsFile() {
  return (
    <div className="h-full bg-[#1e1e1e] text-[#d4d4d4] font-mono text-sm overflow-auto">
      {/* VSCode Line Numbers */}
      <div className="flex">
        <div className="bg-[#1e1e1e] text-[#858585] text-right pr-4 pl-2 py-2 select-none min-w-[60px] border-r border-[#3e3e3e]">
          {Array.from({ length: 35 }, (_, i) => (
            <div key={i + 1} className="leading-6">
              {i + 1}
            </div>
          ))}
        </div>
        
        {/* Code Content */}
        <div className="flex-1 p-4">
          <div className="leading-6 space-y-2">
            <div className="text-[#6a9955]">{"// Skills & Technologies - Rifki Noviandra"}</div>
            <div className="text-[#6a9955]">{"// Go Developer & Tech Enthusiast"}</div>
            <div className="h-4"></div>
            
            <div className="text-[#569cd6]">package main</div>
            <div className="h-2"></div>
            
            <div className="text-[#569cd6]">import</div>
            <div className="ml-4 space-y-1">
              <div className="text-[#ce9178]">&quot;fmt&quot;</div>
              <div className="text-[#ce9178]">&quot;time&quot;</div>
            </div>
            
            <div className="h-4"></div>
            
            <div className="text-[#569cd6]">type Developer struct</div>
            <div className="ml-4 space-y-1">
              <div className="flex items-center">
                <span className="text-[#9cdcfe]">Name</span>
                <span className="text-white ml-8">string</span>
              </div>
              <div className="flex items-center">
                <span className="text-[#9cdcfe]">Role</span>
                <span className="text-white ml-8">string</span>
              </div>
              <div className="flex items-center">
                <span className="text-[#9cdcfe]">Experience</span>
                <span className="text-white ml-2">int</span>
              </div>
            </div>
            
            <div className="h-4"></div>
            
            <div className="text-[#6a9955]">{"// Backend Technologies"}</div>
            <div className="bg-[#0d1117] border border-[#21262d] p-3 rounded space-y-2">
              <div className="text-[#f85149] font-bold">🚀 Backend Skills</div>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div className="flex items-center">
                  <span className="text-[#84cc16]">●</span>
                  <span className="text-[#e6edf3] ml-2">Go (Golang)</span>
                </div>
                <div className="flex items-center">
                  <span className="text-[#ef4444]">●</span>
                  <span className="text-[#e6edf3] ml-2">Laravel (PHP)</span>
                </div>
                <div className="flex items-center">
                  <span className="text-[#84cc16]">●</span>
                  <span className="text-[#e6edf3] ml-2">Node.js</span>
                </div>
                <div className="flex items-center">
                  <span className="text-[#3b82f6]">●</span>
                  <span className="text-[#e6edf3] ml-2">Python</span>
                </div>
              </div>
            </div>
            
            <div className="text-[#6a9955]">{"// Frontend Technologies"}</div>
            <div className="bg-[#0d1117] border border-[#21262d] p-3 rounded space-y-2">
              <div className="text-[#58a6ff] font-bold">⚡ Frontend Skills</div>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div className="flex items-center">
                  <span className="text-[#61dafb]">●</span>
                  <span className="text-[#e6edf3] ml-2">React</span>
                </div>
                <div className="flex items-center">
                  <span className="text-[#4fc08d]">●</span>
                  <span className="text-[#e6edf3] ml-2">Vue.js</span>
                </div>
                <div className="flex items-center">
                  <span className="text-[#3178c6]">●</span>
                  <span className="text-[#e6edf3] ml-2">TypeScript</span>
                </div>
                <div className="flex items-center">
                  <span className="text-[#000000]">●</span>
                  <span className="text-[#e6edf3] ml-2">Next.js</span>
                </div>
              </div>
            </div>
            
            <div className="text-[#6a9955]">{"// Database & DevOps"}</div>
            <div className="bg-[#0d1117] border border-[#21262d] p-3 rounded space-y-2">
              <div className="text-[#a5f3fc] font-bold">🛠️ Tools & Database</div>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div className="flex items-center">
                  <span className="text-[#f29111]">●</span>
                  <span className="text-[#e6edf3] ml-2">MySQL</span>
                </div>
                <div className="flex items-center">
                  <span className="text-[#336791]">●</span>
                  <span className="text-[#e6edf3] ml-2">PostgreSQL</span>
                </div>
                <div className="flex items-center">
                  <span className="text-[#2496ed]">●</span>
                  <span className="text-[#e6edf3] ml-2">Docker</span>
                </div>
                <div className="flex items-center">
                  <span className="text-[#f05032]">●</span>
                  <span className="text-[#e6edf3] ml-2">Git</span>
                </div>
              </div>
            </div>
            
            <div className="h-4"></div>
            <div className="text-[#6a9955]">{"// Current learning path"}</div>
            <div className="text-[#dcdcaa]">func</div>
            <div className="ml-4">
              <div className="text-[#e6edf3]">Learning: Microservices, GraphQL, AWS</div>
              <div className="text-[#8b949e] text-xs">Always exploring new technologies! 🚀</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}