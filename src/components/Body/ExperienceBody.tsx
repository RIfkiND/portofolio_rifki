"use client";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import Line from "../ui/line";

export function ExperienceBody() {
  const experienceCode = `class Experience:
    def __init__(self, education, jobs):
        self.education = education
        self.jobs = jobs

    def display_experience(self):
        print("Education:")
        for edu in self.education:
            print(f"  - {edu}")

        print("\\nWork Experience:")
        for job in self.jobs:
            print(f"  - {job}")

me = Experience(
    education=[
        "SMKN 1 Ciamis (2022 - 2025)"
    ],
    jobs=[
        "Freelance Backend Developer (June 2024 - Now)",
        "Backend Developer Intern at BBPPMVP BMTI Bandung (Sept 2024 - Jan 2025)",
        "Backend Developer Intern at PT Minilemon Nusantara (Nov 2024 - Jan 2025)",
        "Backend Developer Lead (partnership) at PT Minilemon Nusantara (Feb 2025 - Now)"
    ]
)

me.display_experience()`;

  return (
    <div className="flex-1 flex flex-col relative bg-neutral-900 text-gray-300 font-mono">
      {/* Sticky Header */}
      <div className="sticky top-0 left-0 w-full bg-neutral-900 px-4 py-2 flex items-center">
        <span className="text-sm">src &gt; experience.py</span>
      </div>

      {/* Layout */}
      <div className="flex items-start">
        {/* VS Code-like Line Numbers */}
        <div className="w-12">
          <Line line={experienceCode.split("\n").length} />
        </div>

        {/* Code Block */}
        <div className="flex-1">
          <SyntaxHighlighter
            language="python"
            style={atomDark}
            showLineNumbers={false}
            wrapLines={true}
            customStyle={{
              background: "transparent",
              padding: "0px",
              paddingLeft: "30px",
              margin: "0px",
              fontSize: "1rem",
              lineHeight: "1.5rem",
            }}
          >
            {experienceCode}
          </SyntaxHighlighter>
        </div>
      </div>
    </div>
  );
}
