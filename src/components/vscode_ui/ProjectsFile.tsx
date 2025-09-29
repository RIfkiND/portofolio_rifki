"use client";
import React from "react";

export default function ProjectsFile() {
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
          <div className="leading-6 space-y-1">
            <div className="text-[#6a9955]">{"// Portfolio Projects - Rifki Noviandra"}</div>
            <div className="text-[#6a9955]">{"// React & TypeScript Developer"}</div>
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
                  <span className="text-[#ce9178] ml-1">&quot;ERP System - PT. Hasil Bumi&quot;</span>
                  <span className="text-white">,</span>
                </div>
                <div className="flex items-center">
                  <span className="text-[#9cdcfe]">description</span>
                  <span className="text-white">:</span>
                  <span className="text-[#ce9178] ml-1">&quot;Enterprise Resource Planning system&quot;</span>
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
                  <span className="text-white">]</span>
                  <span className="text-white">,</span>
                </div>
                <div className="flex items-center">
                  <span className="text-[#9cdcfe]">github</span>
                  <span className="text-white">:</span>
                  <span className="text-[#ce9178] ml-1">&quot;github.com/rifki/erp-system&quot;</span>
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
                  <span className="text-[#ce9178] ml-1">&quot;E-commerce Platform&quot;</span>
                  <span className="text-white">,</span>
                </div>
                <div className="flex items-center">
                  <span className="text-[#9cdcfe]">description</span>
                  <span className="text-white">:</span>
                  <span className="text-[#ce9178] ml-1">&quot;Modern online shopping platform&quot;</span>
                  <span className="text-white">,</span>
                </div>
                <div className="flex items-center">
                  <span className="text-[#9cdcfe]">technologies</span>
                  <span className="text-white">:</span>
                  <span className="text-white ml-1">[</span>
                  <span className="text-[#ce9178]">&quot;React&quot;</span>
                  <span className="text-white">,</span>
                  <span className="text-[#ce9178] ml-1">&quot;Node.js&quot;</span>
                  <span className="text-white">,</span>
                  <span className="text-[#ce9178] ml-1">&quot;MongoDB&quot;</span>
                  <span className="text-white">]</span>
                  <span className="text-white">,</span>
                </div>
                <div className="flex items-center">
                  <span className="text-[#9cdcfe]">github</span>
                  <span className="text-white">:</span>
                  <span className="text-[#ce9178] ml-1">&quot;github.com/rifki/ecommerce&quot;</span>
                  <span className="text-white">,</span>
                </div>
                <div className="flex items-center">
                  <span className="text-[#9cdcfe]">demo</span>
                  <span className="text-white">:</span>
                  <span className="text-[#ce9178] ml-1">&quot;rifki-ecommerce.vercel.app&quot;</span>
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