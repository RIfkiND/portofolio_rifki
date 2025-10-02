"use client";
import React from "react";

export default function ProjectsFile() {
  return (
    <div className="h-full bg-[#1e1e1e] text-[#d4d4d4] font-mono text-sm overflow-auto">
      {/* VSCode Line Numbers */}
      <div className="flex">
        <div className="bg-[#1e1e1e] text-[#858585] text-right pr-4 pl-2 py-2 select-none min-w-[60px] border-r border-[#3e3e3e]">
          {Array.from({ length: 50 }, (_, i) => (
            <div key={i + 1} className="leading-6">
              {i + 1}
            </div>
          ))}
        </div>
        
        {/* Code Content */}
        <div className="flex-1 p-4">
          <div className="leading-6 space-y-1">
            <div className="text-[#6a9955]">{"// Portfolio Projects - Rifki Noviandra"}</div>
            <div className="text-[#6a9955]">{"// Backend Developer & Software Engineer"}</div>
            <div className="h-4"></div>
            
            <div className="flex items-center">
              <span className="text-[#569cd6]">import</span>
              <span className="text-white ml-1">React</span>
              <span className="text-[#569cd6] ml-1">from</span>
              <span className="text-[#ce9178] ml-1">&apos;react&apos;</span>
            </div>
            
            <div className="h-4"></div>
            
            <div className="flex items-center">
              <span className="text-[#569cd6]">interface</span>
              <span className="text-[#4ec9b0] ml-1">Project</span>
              <span className="text-white ml-1">{'{'}</span>
            </div>
            
            <div className="ml-4 space-y-1">
              <div className="flex items-center">
                <span className="text-[#9cdcfe]">id</span>
                <span className="text-white">:</span>
                <span className="text-[#569cd6] ml-1">number</span>
              </div>
              <div className="flex items-center">
                <span className="text-[#9cdcfe]">title</span>
                <span className="text-white">:</span>
                <span className="text-[#569cd6] ml-1">string</span>
              </div>
              <div className="flex items-center">
                <span className="text-[#9cdcfe]">description</span>
                <span className="text-white">:</span>
                <span className="text-[#569cd6] ml-1">string</span>
              </div>
              <div className="flex items-center">
                <span className="text-[#9cdcfe]">technologies</span>
                <span className="text-white">:</span>
                <span className="text-[#569cd6] ml-1">string[]</span>
              </div>
              <div className="flex items-center">
                <span className="text-[#9cdcfe]">github</span>
                <span className="text-white">:</span>
                <span className="text-[#569cd6] ml-1">string</span>
              </div>
              <div className="flex items-center">
                <span className="text-[#9cdcfe]">demo</span>
                <span className="text-white">?:</span>
                <span className="text-[#569cd6] ml-1">string</span>
              </div>
            </div>
            <div className="text-white">{'}'}</div>
            
            <div className="h-4"></div>
            
            <div className="flex items-center">
              <span className="text-[#569cd6]">const</span>
              <span className="text-[#9cdcfe] ml-1">projects</span>
              <span className="text-white">:</span>
              <span className="text-[#4ec9b0] ml-1">Project[]</span>
              <span className="text-white ml-1">=</span>
              <span className="text-white ml-1">[</span>
            </div>
            
            <div className="ml-4 space-y-2">
              <div className="text-white">{'{'}</div>
              <div className="ml-4 space-y-1">
                <div className="flex items-center">
                  <span className="text-[#9cdcfe]">id</span>
                  <span className="text-white">:</span>
                  <span className="text-[#b5cea8] ml-1">1</span>
                  <span className="text-white">,</span>
                </div>
                <div className="flex items-center">
                  <span className="text-[#9cdcfe]">title</span>
                  <span className="text-white">:</span>
                  <span className="text-[#ce9178] ml-1">&quot;Hasil Bumi - E-Commerce Platform&quot;</span>
                  <span className="text-white">,</span>
                </div>
                <div className="flex items-center">
                  <span className="text-[#9cdcfe]">description</span>
                  <span className="text-white">:</span>
                  <span className="text-[#ce9178] ml-1">&quot;E-commerce platform for farmers to sell directly&quot;</span>
                  <span className="text-white">,</span>
                </div>
                <div className="flex items-center">
                  <span className="text-[#9cdcfe]">technologies</span>
                  <span className="text-white">:</span>
                  <span className="text-white ml-1">[</span>
                  <span className="text-[#ce9178]">&quot;Laravel&quot;</span>
                  <span className="text-white">,</span>
                  <span className="text-[#ce9178] ml-1">&quot;Vue.js&quot;</span>
                  <span className="text-white">,</span>
                  <span className="text-[#ce9178] ml-1">&quot;MySQL&quot;</span>
                  <span className="text-white">,</span>
                  <span className="text-[#ce9178] ml-1">&quot;PHP&quot;</span>
                  <span className="text-white">]</span>
                  <span className="text-white">,</span>
                </div>
                <div className="flex items-center">
                  <span className="text-[#9cdcfe]">github</span>
                  <span className="text-white">:</span>
                  <span className="text-[#ce9178] ml-1">&quot;github.com/RIfkiND/HasilBumi&quot;</span>
                </div>
              </div>
              <div className="text-white">{'}'},</div>
              
              <div className="text-white">{'{'}</div>
              <div className="ml-4 space-y-1">
                <div className="flex items-center">
                  <span className="text-[#9cdcfe]">id</span>
                  <span className="text-white">:</span>
                  <span className="text-[#b5cea8] ml-1">2</span>
                  <span className="text-white">,</span>
                </div>
                <div className="flex items-center">
                  <span className="text-[#9cdcfe]">title</span>
                  <span className="text-white">:</span>
                  <span className="text-[#ce9178] ml-1">&quot;SINDARA - Government Portal&quot;</span>
                  <span className="text-white">,</span>
                </div>
                <div className="flex items-center">
                  <span className="text-[#9cdcfe]">description</span>
                  <span className="text-white">:</span>
                  <span className="text-[#ce9178] ml-1">&quot;Unified portal for Kemendikdasmen integration&quot;</span>
                  <span className="text-white">,</span>
                </div>
                <div className="flex items-center">
                  <span className="text-[#9cdcfe]">technologies</span>
                  <span className="text-white">:</span>
                  <span className="text-white ml-1">[</span>
                  <span className="text-[#ce9178]">&quot;Next.js&quot;</span>
                  <span className="text-white">,</span>
                  <span className="text-[#ce9178] ml-1">&quot;Laravel&quot;</span>
                  <span className="text-white">,</span>
                  <span className="text-[#ce9178] ml-1">&quot;MySQL&quot;</span>
                  <span className="text-white">,</span>
                  <span className="text-[#ce9178] ml-1">&quot;TypeScript&quot;</span>
                  <span className="text-white">]</span>
                  <span className="text-white">,</span>
                </div>
                <div className="flex items-center">
                  <span className="text-[#9cdcfe]">github</span>
                  <span className="text-white">:</span>
                  <span className="text-[#ce9178] ml-1">&quot;Confendential&quot;</span>
                </div>
              </div>
              <div className="text-white">{"}"}</div>
              <div className="text-white">,</div>
              
              <div className="text-white">{'{'}</div>
              <div className="ml-4 space-y-1">
                <div className="flex items-center">
                  <span className="text-[#9cdcfe]">id</span>
                  <span className="text-white">:</span>
                  <span className="text-[#b5cea8] ml-1">3</span>
                  <span className="text-white">,</span>
                </div>
                <div className="flex items-center">
                  <span className="text-[#9cdcfe]">title</span>
                  <span className="text-white">:</span>
                  <span className="text-[#ce9178] ml-1">&quot;EDP Kejuruan - Education Platform&quot;</span>
                  <span className="text-white">,</span>
                </div>
                <div className="flex items-center">
                  <span className="text-[#9cdcfe]">description</span>
                  <span className="text-white">:</span>
                  <span className="text-[#ce9178] ml-1">&quot;Vocational education management system&quot;</span>
                  <span className="text-white">,</span>
                </div>
                <div className="flex items-center">
                  <span className="text-[#9cdcfe]">technologies</span>
                  <span className="text-white">:</span>
                  <span className="text-white ml-1">[</span>
                  <span className="text-[#ce9178]">&quot;Laravel&quot;</span>
                  <span className="text-white">,</span>
                  <span className="text-[#ce9178] ml-1">&quot;PHP&quot;</span>
                  <span className="text-white">,</span>
                  <span className="text-[#ce9178] ml-1">&quot;MySQL&quot;</span>
                  <span className="text-white">,</span>
                  <span className="text-[#ce9178] ml-1">&quot;Bootstrap&quot;</span>
                  <span className="text-white">]</span>
                  <span className="text-white">,</span>
                </div>
                <div className="flex items-center">
                  <span className="text-[#9cdcfe]">github</span>
                  <span className="text-white">:</span>
                  <span className="text-[#ce9178] ml-1">&quot;github.com/RIfkiND/edp-kejuruan&quot;</span>
                </div>
              </div>
              <div className="text-white">{'}'}</div>
            </div>
            
            <div className="text-white">]</div>
            
            <div className="h-4"></div>
            
            <div className="flex items-center">
              <span className="text-[#6a9955]">{"// Export for portfolio showcase"}</span>
            </div>
            <div className="flex items-center">
              <span className="text-[#569cd6]">export</span>
              <span className="text-[#569cd6] ml-1">default</span>
              <span className="text-white ml-1">projects</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}