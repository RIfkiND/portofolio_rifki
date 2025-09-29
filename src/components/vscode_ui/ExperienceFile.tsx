"use client";
import React from "react";

export default function ExperienceFile() {
  return (
    <div className="h-full bg-[#1e1e1e] text-[#d4d4d4] font-mono text-sm overflow-auto">
      {/* VSCode Line Numbers */}
      <div className="flex">
        <div className="bg-[#1e1e1e] text-[#858585] text-right pr-4 pl-2 py-2 select-none min-w-[60px] border-r border-[#3e3e3e]">
          {Array.from({ length: 40 }, (_, i) => (
            <div key={i + 1} className="leading-6">
              {i + 1}
            </div>
          ))}
        </div>
        
        {/* Code Content */}
        <div className="flex-1 p-4">
          <div className="leading-6 space-y-1">
            <div className="text-[#6a9955]"># Work Experience - Rifki Noviandra</div>
            <div className="text-[#6a9955]"># Python Developer & Full Stack Engineer</div>
            <div className="h-4"></div>
            
            <div className="flex items-center">
              <span className="text-[#569cd6]">class</span>
              <span className="text-white ml-1">WorkExperience:</span>
            </div>
            
            <div className="ml-4 flex items-center">
              <span className="text-[#569cd6]">def</span>
              <span className="text-[#dcdcaa] ml-1">__init__</span>
              <span className="text-white">(</span>
              <span className="text-[#9cdcfe]">self</span>
              <span className="text-white">):</span>
            </div>
            
            <div className="ml-8 flex items-center">
              <span className="text-[#9cdcfe]">self</span>
              <span className="text-white">.experiences = [</span>
            </div>
            
            <div className="ml-12 text-white">{"{"}</div>
            
            <div className="ml-16 space-y-1">
              <div className="flex items-center">
                <span className="text-[#ce9178]">&quot;company&quot;</span>
                <span className="text-white">:</span>
                <span className="text-[#ce9178] ml-1">&quot;PT. Hasil Bumi Indonesia&quot;</span>
                <span className="text-white">,</span>
              </div>
              <div className="flex items-center">
                <span className="text-[#ce9178]">&quot;position&quot;</span>
                <span className="text-white">:</span>
                <span className="text-[#ce9178] ml-1">&quot;Full Stack Developer&quot;</span>
                <span className="text-white">,</span>
              </div>
              <div className="flex items-center">
                <span className="text-[#ce9178]">&quot;duration&quot;</span>
                <span className="text-white">:</span>
                <span className="text-[#ce9178] ml-1">&quot;2023 - Present&quot;</span>
                <span className="text-white">,</span>
              </div>
              <div className="flex items-center">
                <span className="text-[#ce9178]">&quot;location&quot;</span>
                <span className="text-white">:</span>
                <span className="text-[#ce9178] ml-1">&quot;Jakarta, Indonesia&quot;</span>
                <span className="text-white">,</span>
              </div>
              <div className="flex items-center">
                <span className="text-[#ce9178]">&quot;tech_stack&quot;</span>
                <span className="text-white">:</span>
                <span className="text-white ml-1">[</span>
              </div>
              <div className="ml-4 space-y-1">
                <div className="flex items-center">
                  <span className="text-[#ce9178]">&quot;Laravel&quot;</span>
                  <span className="text-white">,</span>
                  <span className="text-[#ce9178] ml-1">&quot;Vue.js&quot;</span>
                  <span className="text-white">,</span>
                  <span className="text-[#ce9178] ml-1">&quot;MySQL&quot;</span>
                  <span className="text-white">,</span>
                </div>
                <div className="flex items-center">
                  <span className="text-[#ce9178]">&quot;Docker&quot;</span>
                  <span className="text-white">,</span>
                  <span className="text-[#ce9178] ml-1">&quot;Redis&quot;</span>
                  <span className="text-white">,</span>
                  <span className="text-[#ce9178] ml-1">&quot;Git&quot;</span>
                </div>
              </div>
              <div className="text-white">],</div>
              <div className="flex items-center">
                <span className="text-[#ce9178]">&quot;achievements&quot;</span>
                <span className="text-white">:</span>
                <span className="text-white ml-1">[</span>
              </div>
              <div className="ml-4 space-y-1">
                <div className="text-[#ce9178]">&quot;Developed enterprise ERP system&quot;,</div>
                <div className="text-[#ce9178]">&quot;Improved system performance by 40%&quot;,</div>
                <div className="text-[#ce9178]">&quot;Led team of 3 developers&quot;</div>
              </div>
              <div className="text-white">]</div>
            </div>
            
            <div className="ml-12 text-white">{"}"}</div>
            <div className="ml-8 text-white">]</div>
            
            <div className="h-4"></div>
            
            <div className="ml-4 flex items-center">
              <span className="text-[#569cd6]">def</span>
              <span className="text-[#dcdcaa] ml-1">get_contact_info</span>
              <span className="text-white">(</span>
              <span className="text-[#9cdcfe]">self</span>
              <span className="text-white">):</span>
            </div>
            
            <div className="ml-8 flex items-center">
              <span className="text-[#569cd6]">return</span>
              <span className="text-white ml-1">{"{"}</span>
            </div>
            
            <div className="ml-12 space-y-1">
              <div className="flex items-center">
                <span className="text-[#ce9178]">&quot;email&quot;</span>
                <span className="text-white">:</span>
                <span className="text-[#ce9178] ml-1">&quot;rifki@example.com&quot;</span>
                <span className="text-white">,</span>
              </div>
              <div className="flex items-center">
                <span className="text-[#ce9178]">&quot;linkedin&quot;</span>
                <span className="text-white">:</span>
                <span className="text-[#ce9178] ml-1">&quot;linkedin.com/in/rifki&quot;</span>
                <span className="text-white">,</span>
              </div>
              <div className="flex items-center">
                <span className="text-[#ce9178]">&quot;github&quot;</span>
                <span className="text-white">:</span>
                <span className="text-[#ce9178] ml-1">&quot;github.com/rifki&quot;</span>
              </div>
            </div>
            
            <div className="ml-8 text-white">{"}"}</div>
            
            <div className="h-4"></div>
            <div className="text-[#6a9955]"># Ready for new opportunities!</div>
            <div className="flex items-center">
              <span className="text-[#9cdcfe]">portfolio_owner</span>
              <span className="text-white ml-1">=</span>
              <span className="text-[#4ec9b0] ml-1">WorkExperience</span>
              <span className="text-white">()</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}