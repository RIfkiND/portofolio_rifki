"use client";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import Line from "../ui/line";

export function SkillBody() {
  const skillCode = `package main

import (
    "fmt"
)

// Developer represents my skill set
type Developer struct {
    Name   string
    Skills map[string][]string
    Focus  string
}

func main() {
    me := Developer{
        Name: "Rifki Nauval Dzaki",
        Skills: map[string][]string{
            "Frontend Tech": {
                 "HTML", "CSS", "Vue.js", "React", "Next.js", "Tailwind Css",
            },
            "Backend Tech": {
                "Nest.js", "Express.js", "Laravel", "Golang", "Node.js", "Bun", "Gin", "Python", "Django" , "Flask"
            },
            "Databases": {
                "PostgreSQL", "MySQL", "SQLite", "MongoDB",
            },
            "DevOps": {
                "Docker", "Kubernetes", "GitHub Actions", "Jenkins", "ArgoCD",
            },
            "Cloud Providers": {
                "AWS", "Microsoft Azure", "Heroku", "Digital Ocean",
            },
            "Operating Systems": {
                "Linux", "Windows",
            },
            "Other": {
                "English TOEIC (800)",
            },
        },
        Focus: "Backend & AI",
    }

    fmt.Println("Hi, I’m", me.Name)
    fmt.Println("My Skills:")
    for category, skills := range me.Skills {
        fmt.Println(category + ":")
        for _, skill := range skills {
            fmt.Println("  -", skill)
        }
    }
    fmt.Println("Currently focusing on:", me.Focus)
}`;

  return (
    <div className="flex-1 flex flex-col relative bg-neutral-900 text-gray-300 font-mono">
      {/* Sticky Header */}
      <div className="sticky top-0 left-0 w-full bg-neutral-900 px-4 py-2 flex items-center">
        <span className="text-sm">src &gt; skill.go</span>
      </div>

      {/* Layout */}
      <div className="flex items-start">
        {/* VS Code-like Line Numbers */}
        <div className="w-12">
          <Line line={skillCode.split("\n").length} />
        </div>

        {/* Code Block */}
        <div className="flex-1">
          <SyntaxHighlighter
            language="go"
            style={atomDark}
            showLineNumbers={false}
            wrapLines={true}
            customStyle={{
              background: "transparent",
              padding: "0px",
              paddingLeft:"30px",
              margin: "0px",
              fontSize: "1rem",
              lineHeight: "1.5rem",
            }}
          >
            {skillCode}
          </SyntaxHighlighter>
        </div>
      </div>
    </div>
  );
}
