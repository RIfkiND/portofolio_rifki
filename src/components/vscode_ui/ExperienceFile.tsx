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
            <div className="text-[#6a9955]"># Backend Developer & Software Engineer</div>
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
                <span className="text-[#ce9178] ml-1">&quot;BMTI Bandung&quot;</span>
                <span className="text-white">,</span>
              </div>
              <div className="flex items-center">
                <span className="text-[#ce9178]">&quot;position&quot;</span>
                <span className="text-white">:</span>
                <span className="text-[#ce9178] ml-1">&quot;Backend Developer Intern&quot;</span>
                <span className="text-white">,</span>
              </div>
              <div className="flex items-center">
                <span className="text-[#ce9178]">&quot;duration&quot;</span>
                <span className="text-white">:</span>
                <span className="text-[#ce9178] ml-1">&quot;2024&quot;</span>
                <span className="text-white">,</span>
              </div>
              <div className="flex items-center">
                <span className="text-[#ce9178]">&quot;location&quot;</span>
                <span className="text-white">:</span>
                <span className="text-[#ce9178] ml-1">&quot;Bandung, Indonesia&quot;</span>
                <span className="text-white">,</span>
              </div>
              <div className="flex items-center">
                <span className="text-[#ce9178]">&quot;description&quot;</span>
                <span className="text-white">:</span>
                <span className="text-white ml-1">[</span>
              </div>
              <div className="ml-4 space-y-1">
                <div className="text-[#ce9178]">&quot;Developed backend applications&quot;,</div>
                <div className="text-[#ce9178]">&quot;Worked on training management systems&quot;,</div>
                <div className="text-[#ce9178]">&quot;Gained experience in professional development&quot;</div>
              </div>
              <div className="text-white">]</div>
            </div>
            
            <div className="ml-12 text-white">{"}"}</div>
            <div className="ml-12 text-white">,</div>
            
            {/* PT Minilemon Experience */}
            <div className="ml-12 text-white">{""}</div>
            
            <div className="ml-16 space-y-1">
              <div className="flex items-center">
                <span className="text-[#ce9178]">&quot;company&quot;</span>
                <span className="text-white">:</span>
                <span className="text-[#ce9178] ml-1">&quot;PT Minilemon&quot;</span>
                <span className="text-white">,</span>
              </div>
              <div className="flex items-center">
                <span className="text-[#ce9178]">&quot;position&quot;</span>
                <span className="text-white">:</span>
                <span className="text-[#ce9178] ml-1">&quot;Backend Developer Intern&quot;</span>
                <span className="text-white">,</span>
              </div>
              <div className="flex items-center">
                <span className="text-[#ce9178]">&quot;duration&quot;</span>
                <span className="text-white">:</span>
                <span className="text-[#ce9178] ml-1">&quot;2024&quot;</span>
                <span className="text-white">,</span>
              </div>
              <div className="flex items-center">
                <span className="text-[#ce9178]">&quot;location&quot;</span>
                <span className="text-white">:</span>
                <span className="text-[#ce9178] ml-1">&quot;Indonesia&quot;</span>
                <span className="text-white">,</span>
              </div>
              <div className="flex items-center">
                <span className="text-[#ce9178]">&quot;description&quot;</span>
                <span className="text-white">:</span>
                <span className="text-white ml-1">[</span>
              </div>
              <div className="ml-4 space-y-1">
                <div className="text-[#ce9178]">&quot;Developed backend APIs and services&quot;,</div>
                <div className="text-[#ce9178]">&quot;Worked with database design and optimization&quot;,</div>
                <div className="text-[#ce9178]">&quot;Learned modern backend development practices&quot;</div>
              </div>
              <div className="text-white">]</div>
            </div>
            
            <div className="ml-12 text-white">{""}</div>
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
                <span className="text-[#ce9178] ml-1">&quot;rifkinauvaldzaki08@gmail.com&quot;</span>
                <span className="text-white">,</span>
              </div>
              <div className="flex items-center">
                <span className="text-[#ce9178]">&quot;linkedin&quot;</span>
                <span className="text-white">:</span>
                <span className="text-[#ce9178] ml-1">&quot;linkedin.com/in/rifkinauvaldzaki&quot;</span>
                <span className="text-white">,</span>
              </div>
              <div className="flex items-center">
                <span className="text-[#ce9178]">&quot;github&quot;</span>
                <span className="text-white">:</span>
                <span className="text-[#ce9178] ml-1">&quot;github.com/RIfkiND&quot;</span>
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