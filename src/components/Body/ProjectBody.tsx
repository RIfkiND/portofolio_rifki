"use client";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import Line from "../ui/line";

export function ProjectBody() {
  const projectsCode = `type Project = {
    name: string;
    techStack: string[];
    description: string;
};

class Portfolio {
    projects: Project[];

    constructor() {
        this.projects = [
            { 
                name: "HasilBumi", 
                techStack: ["Laravel", "Vue.js", "Stripe"],
                description: "A marketplace for farmers to sell raw materials, integrated with Stripe for payments."
            },
            { 
                name: "Diklat", 
                techStack: ["Laravel", "React.js"],
                description: "An Web Application Cms for BMTI bandung to manage teacher and student training from all over Indonesia"
            },
            { 
                name: "CI/CD Pipeline", 
                techStack: ["GitHub Actions"],
                description: "Automated deployment pipeline using GitHub Actions for seamless application updates."
            },
            { 
                name: "NickTopup", 
                techStack: ["Laravel", "DigiFlazz", "Tripay"],
                description: "A digital top-up platform that integrates DigiFlazz and Tripay for payment handling."
            },
            { 
                name: "Express API", 
                techStack: ["Express.js", "Node.js"],
                description: "A RESTful API built with Express.js for handling user authentication and data processing."
            },
            { 
                name: "Web Scraping", 
                techStack: ["Golang"],
                description: "A web scraper written in Go to extract and process data from various sources."
            }
        ];
    }

    displayProjects() {
        console.log("My Projects:");
        this.projects.forEach(project => {
            console.log(\`- \${project.name} (Tech Stack: \${project.techStack.join(", ")})\`);
            console.log("  Description:", project.description);
        });
    }
}

const me = new Portfolio();
me.displayProjects();`;

  return (
    <div className="flex-1 flex flex-col relative bg-neutral-900 text-gray-300 font-mono">
      {/* Sticky Header */}
      <div className="sticky top-0 left-0 w-full bg-neutral-900 px-4 py-2 flex items-center">
        <span className="text-sm">src &gt; projects.ts</span>
      </div>

      {/* Layout */}
      <div className="flex items-start">
        {/* VS Code-like Line Numbers */}
        <div className="w-12">
          <Line line={projectsCode.split("\n").length} />
        </div>

        {/* Code Block */}
        <div className="flex-1">
          <SyntaxHighlighter
            language="typescript"
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
            {projectsCode}
          </SyntaxHighlighter>
        </div>
      </div>
    </div>
  );
}
