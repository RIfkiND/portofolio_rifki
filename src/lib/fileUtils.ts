import { ComponentType } from "react";
import { FaCode } from "react-icons/fa";
import { SiGo, SiPython, SiTypescript } from "react-icons/si";
import { VscJson } from "react-icons/vsc";

export interface FileInfo {
  name: string;
  icon: ComponentType<{ className?: string }>;
  iconColor: string;
  language: string;
  description: string;
}

export function getFileInfo(pathname: string): FileInfo {
  console.log('getFileInfo called with pathname:', pathname);
  
  const fileMap: Record<string, FileInfo> = {
    "/": {
      name: "rifki.md",
      icon: FaCode,
      iconColor: "text-blue-400",
      language: "Markdown",
      description: "Portfolio"
    },
    "/experience": {
      name: "experience.py",
      icon: SiPython,
      iconColor: "text-yellow-400",
      language: "Python",
      description: "Experience"
    },
    "/skill": {
      name: "skills.go",
      icon: SiGo,
      iconColor: "text-blue-400",
      language: "Go",
      description: "Skills"
    },
    "/project": {
      name: "projects.tsx",
      icon: SiTypescript,
      iconColor: "text-blue-500",
      language: "TypeScript",
      description: "Projects"
    },
    "/contact": {
      name: "contact.json",
      icon: VscJson,
      iconColor: "text-yellow-500",
      language: "JSON",
      description: "Contact"
    }
  };

  const result = fileMap[pathname] || {
    name: "rifki.md",
    icon: FaCode,
    iconColor: "text-blue-400",
    language: "Markdown", 
    description: "Portfolio"
  };
  
  console.log('getFileInfo returning:', result);
  return result;
}
