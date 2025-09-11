"use client";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { SiPython } from "react-icons/si";
import { useRouteSync } from "@/hooks/useRouteSync";
import { MobileExperienceBody } from "@/components/Mobile/MobileExperienceBody";
import Line from "../ui/line";

interface ExperienceBodyProps {
  searchTerm?: string | null;
}

export function ExperienceBody({ searchTerm }: ExperienceBodyProps) {
  useRouteSync(); // This will sync the current route with the tab store
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
        "Backend Developer Intern at BBPPMVP BMTI Bandung (Nov 2024 - Jan 2025)",
        "Backend Developer Intern at PT Minilemon Nusantara (Nov 2024 - Jan 2025)",
        "Backend Developer Lead (partnership) at PT Minilemon Nusantara (Feb 2025 - Now)"
    ]
)

me.display_experience()`;

  return (
    <>
      {/* Mobile Experience Body - Show on mobile screens only via CSS */}
      <div className="mobile-only">
        <MobileExperienceBody searchTerm={searchTerm} />
      </div>

      {/* Desktop Experience Body - Show on desktop screens only via CSS */}
      <div className="desktop-only h-full flex flex-col relative bg-neutral-900 text-gray-300 font-mono overflow-hidden">
      {/* Sticky Header */}
      <div className="sticky top-0 left-0 w-full bg-neutral-900 px-4 md:px-6 py-2 flex items-center border-b border-neutral-700 z-50">
        <SiPython className="mr-2 text-yellow-400" />
        <span className="text-xs md:text-sm">src &gt; experience.py</span>
        <span className="ml-auto text-xs text-gray-500">Python • {experienceCode.split("\n").length} lines</span>
      </div>

      {/* Layout - This section scrolls */}
      <div className="flex items-start flex-1 overflow-y-auto min-h-0">
        {/* VS Code-like Line Numbers */}
        <div className="w-10 md:w-12 bg-neutral-900/50 border-r border-neutral-800">
          <Line line={experienceCode.split("\n").length} />
        </div>

        {/* Code Block */}
        <div className="flex-1 pb-32 md:pb-96">
          <SyntaxHighlighter
            language="python"
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
            {experienceCode}
          </SyntaxHighlighter>
        </div>
      </div>
      </div>
    </>
  );
}
