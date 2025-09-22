"use client";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { SiGo } from "react-icons/si";
import { useRouteSync } from "@/hooks/useRouteSync";
import { useVSCodeContext } from "@/contexts/VSCodeContext";
import { MobileSkillBody } from "./MobileSkillBody";
import Line from "../ui/line";

interface SkillBodyProps {
  searchTerm?: string | null;
}

export function SkillBody({ searchTerm }: SkillBodyProps) {
  const { isInVSCodeMode } = useVSCodeContext();
  useRouteSync(isInVSCodeMode); // Skip route sync when in VSCode mode
  const skillCode = `package main

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

  return (
    <>
      {/* Mobile Skill Body - Show on mobile screens only via CSS */}
      <div className="mobile-only">
        <MobileSkillBody searchTerm={searchTerm} />
      </div>

      {/* Desktop Skill Body - Show on desktop screens only via CSS */}
      <div className="desktop-only h-full flex flex-col relative bg-neutral-900 text-gray-300 font-mono overflow-hidden">
      {/* Enhanced Header */}
      <div className="sticky top-0 left-0 w-full bg-neutral-900 px-4 md:px-6 py-2 flex items-center border-b border-neutral-700 z-50">
        <SiGo className="mr-2 text-blue-400 text-lg" />
        <span className="text-xs md:text-sm ml-1">src &gt; skills.go</span>
        <span className="ml-auto text-xs text-gray-500">Go • {skillCode.split("\n").length} lines</span>
      </div>

      {/* Layout - Single column code view */}
      <div className="flex-1 overflow-y-auto min-h-0">
        <div className="flex items-start h-full">
          {/* VS Code-like Line Numbers */}
          <div className="w-10 md:w-12 bg-neutral-900 sticky top-0 border-r border-neutral-800">
            <Line line={skillCode.split("\n").length} />
          </div>

          {/* Code Block */}
          <div className="flex-1 pb-32 md:pb-96">
            <SyntaxHighlighter
              language="go"
              style={atomDark}
              showLineNumbers={false}
              wrapLines={true}
              customStyle={{
                background: "transparent",
                padding: "0px",
                paddingLeft: "16px",
                margin: "0px",
                fontSize: "0.7rem",
                lineHeight: "1.2rem",
              }}
              className="text-xs md:text-base"
            >
              {skillCode}
            </SyntaxHighlighter>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
