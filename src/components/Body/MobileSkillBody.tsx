"use client";
import { useRouteSync } from "@/hooks/useRouteSync";
import { useState, useEffect } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

interface MobileSkillBodyProps {
  searchTerm?: string | null;
}

export function MobileSkillBody({ searchTerm }: MobileSkillBodyProps) {
  useRouteSync();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const skillsCode = `package main

import (
    "fmt"
    "time"
    "strings"
)

// Developer represents my skill set
type Developer struct {
    Name        string
    Skills      map[string][]string
    Focus       string
    Experience  string
    Passion     string
}

func main() {
    me := Developer{
        Name: "Rifki Nauval Dzaki",
        Skills: map[string][]string{
            "🎨 Frontend Tech": {
                "HTML5", "CSS3", "Vue.js", "React", "Next.js", "Tailwind CSS",
            },
            "⚡ Backend Tech": {
                "Nest.js", "Express.js", "Laravel", "Golang", "Node.js", 
                "Bun", "Gin", "Python", "Django", "Flask",
            },
            "🗄️ Databases": {
                "PostgreSQL", "MySQL", "SQLite", "MongoDB",
            },
            "🚀 DevOps & Cloud": {
                "Docker", "Kubernetes", "GitHub Actions", "Jenkins", 
                "ArgoCD", "AWS", "Microsoft Azure", "Heroku", "Digital Ocean",
            },
            "💻 Operating Systems": {
                "Linux (Ubuntu, CentOS)", "Windows",
            },
            "🎯 Other Skills": {
                "Git & GitHub", "RESTful APIs", "Microservices",
                "Problem Solving", "Team Collaboration",
            },
        },
        Experience: "1+ years in backend development",
        Focus:      "Backend Development & AI/ML",
        Passion:    "Building scalable solutions & continuous learning",
    }

    fmt.Println("🚀 Initializing Developer Profile...")
    time.Sleep(1 * time.Second)
    
    fmt.Printf("👋 Hi, I'm %s\\n", me.Name)
    fmt.Printf("💼 Experience: %s\\n", me.Experience)
    fmt.Printf("🎯 Current Focus: %s\\n", me.Focus)
    fmt.Printf("❤️ Passion: %s\\n\\n", me.Passion)
    
    fmt.Println("📚 My Technical Skills:")
    fmt.Println("========================")
    
    for category, skills := range me.Skills {
        fmt.Printf("\\n%s\\n", category)
        fmt.Println(strings.Repeat("-", len(category)))
        for _, skill := range skills {
            fmt.Printf("  ✓ %s\\n", skill)
        }
    }
    
    fmt.Println("\\n🔥 Status: Ready to build amazing things!")
    fmt.Println("📧 Let's collaborate: rifkinauvaldzaki08@gmail.com")
}`;

  // Filter skills based on search term
  const filteredCode = searchTerm 
    ? skillsCode.split('\n').filter(line => 
        line.toLowerCase().includes(searchTerm.toLowerCase())
      ).join('\n')
    : skillsCode;

  // Prevent hydration mismatch by only rendering syntax highlighting on client
  if (!isClient) {
    return (
      <div className="bg-neutral-900 text-gray-300 h-full overflow-y-auto font-mono">
        {/* Code Editor Header */}
        <div className="border-b border-gray-700 p-3">
          <div className="flex items-center space-x-2">
            <div className="flex space-x-1">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <span className="text-sm text-gray-400">skills.go</span>
          </div>
        </div>
        
        {/* Simple code content without syntax highlighting for SSR */}
        <div className="p-4 text-xs leading-5">
          <pre className="text-gray-300 whitespace-pre-wrap break-words">
            {filteredCode}
          </pre>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-neutral-900 text-gray-300 h-full overflow-y-auto font-mono">
      {/* Code Editor Header */}
      <div className="border-b border-gray-700 p-3">
        <div className="flex items-center space-x-2">
          <div className="flex space-x-1">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <span className="text-sm text-gray-400">skills.go</span>
        </div>
      </div>

      {/* Code Content with Prism Syntax Highlighting */}
      <div className="relative">
        <SyntaxHighlighter
          language="go"
          style={atomDark}
          showLineNumbers={true}
          wrapLines={true}
          customStyle={{
            background: "transparent",
            padding: "16px",
            margin: "0px",
            fontSize: "0.75rem",
            lineHeight: "1.25rem",
          }}
          lineNumberStyle={{
            minWidth: "2.5rem",
            paddingRight: "1rem",
            color: "#6b7280",
            textAlign: "right"
          }}
        >
          {filteredCode}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}
