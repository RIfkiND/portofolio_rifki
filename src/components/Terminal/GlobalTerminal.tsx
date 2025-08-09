"use client";
import { useState, useRef, useEffect } from "react";
import { VscTerminal, VscClose, VscClearAll } from "react-icons/vsc";
import { useTerminalStore } from "@/components/store/useTerminalStore";
import { useTabStore } from "@/components/store/useTabStore";

interface TerminalOutput {
  id: string;
  command: string;
  output: string[];
  timestamp: Date;
}

export default function GlobalTerminal() {
  const { isOpen, close } = useTerminalStore();
  const { selectedFile } = useTabStore();
  const [mounted, setMounted] = useState(false);
  const [command, setCommand] = useState("");
  const [history, setHistory] = useState<TerminalOutput[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  // Prevent hydration issues
  useEffect(() => {
    setMounted(true);
  }, []);

  // Debug log
  console.log("🔍 GlobalTerminal render - mounted:", mounted, "isOpen:", isOpen, "selectedFile:", selectedFile?.name);

  // Auto-focus input when terminal opens
  useEffect(() => {
    if (mounted && isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [mounted, isOpen]);

  // Scroll to bottom when new output is added
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  const executeCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim();
    if (!trimmedCmd) return;

    const output: string[] = [];
    const timestamp = new Date();

    // Command processing
    if (trimmedCmd === "clear") {
      setHistory([]);
      return;
    } else if (trimmedCmd === "help") {
      output.push("Available commands:");
      output.push("  help           - Show this help message");
      output.push("  clear          - Clear terminal");
      output.push("  ls             - List files");
      output.push("  pwd            - Print working directory");
      output.push("  run            - Run current file");
      output.push("  python <file>  - Run Python file");
      output.push("  node <file>    - Run Node.js file");
      output.push("  go run <file>  - Run Go file");
    } else if (trimmedCmd === "ls") {
      output.push("Rifki.md");
      output.push("skill.go");
      output.push("Experience.py");
      output.push("Project.ts");
    } else if (trimmedCmd === "pwd") {
      output.push("/home/rifki/portfolio/src");
    } else if (trimmedCmd === "run") {
      if (selectedFile) {
        executeFileCommand(selectedFile.name, output);
      } else {
        output.push("No file selected");
      }
    } else if (trimmedCmd.startsWith("python ")) {
      const fileName = trimmedCmd.substring(7);
      executeFileCommand(fileName, output);
    } else if (trimmedCmd.startsWith("node ")) {
      const fileName = trimmedCmd.substring(5);
      executeFileCommand(fileName, output);
    } else if (trimmedCmd.startsWith("go run ")) {
      const fileName = trimmedCmd.substring(7);
      executeFileCommand(fileName, output);
    } else {
      output.push(`Command not found: ${trimmedCmd}`);
      output.push("Type 'help' for available commands");
    }

    const newOutput: TerminalOutput = {
      id: Date.now().toString(),
      command: trimmedCmd,
      output,
      timestamp,
    };

    setHistory(prev => [...prev, newOutput]);
  };

  const executeFileCommand = (fileName: string, output: string[]) => {
    switch (fileName) {
      case "Experience.py":
        output.push("Education:");
        output.push("  - SMKN 1 Ciamis (2022 - 2025)");
        output.push("");
        output.push("Work Experience:");
        output.push("  - Freelance Backend Developer (June 2024 - Now)");
        output.push("  - Backend Developer Intern at BBPPMVP BMTI Bandung (Nov 2024 - Jan 2025)");
        output.push("  - Backend Developer Intern at PT Minilemon Nusantara (Nov 2024 - Jan 2025)");
        output.push("  - Backend Developer Lead (partnership) at PT Minilemon Nusantara (Feb 2025 - Now)");
        break;
      case "skill.go":
        output.push("=== Tech Skills ===");
        output.push("Backend: Laravel, Node.js, Express.js");
        output.push("Databases: MySQL, PostgreSQL, MongoDB");
        output.push("Languages: PHP, JavaScript, Python, Go");
        output.push("Tools: Docker, Git, VS Code");
        break;
      case "Project.ts":
        output.push("Loading projects...");
        output.push("✓ HasilBumi - Laravel + Vue.js + Stripe");
        output.push("✓ Diklat - Laravel + React.js");
        output.push("✓ NickTopup - Laravel + Payment APIs");
        output.push("✓ Express API - Node.js + Express");
        output.push("✓ Web Scraping - Golang");
        break;
      case "Rifki.md":
        output.push("# Rifki Nauval Dzaki");
        output.push("Backend Developer | Student at SMKN 1 Ciamis");
        output.push("");
        output.push("Welcome to my portfolio!");
        output.push("I'm passionate about backend development and API integration.");
        break;
      default:
        output.push(`File not found: ${fileName}`);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      executeCommand(command);
      setCommand("");
      setHistoryIndex(-1);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (history.length > 0) {
        const newIndex = historyIndex === -1 ? history.length - 1 : Math.max(0, historyIndex - 1);
        setHistoryIndex(newIndex);
        setCommand(history[newIndex].command);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex !== -1) {
        const newIndex = historyIndex + 1;
        if (newIndex >= history.length) {
          setHistoryIndex(-1);
          setCommand("");
        } else {
          setHistoryIndex(newIndex);
          setCommand(history[newIndex].command);
        }
      }
    }
  };

  if (!mounted || !isOpen) {
    console.log("❌ Terminal not rendering - mounted:", mounted, "isOpen:", isOpen);
    return null;
  }

  console.log("✅ Terminal IS RENDERING NOW!");

  // Calculate left position - always start from file explorer area (64px from left)
  const leftPosition = '64px'; // Start from after icon sidebar, cover file explorer when open

  return (
    <div 
      className="absolute bottom-8 right-0 bg-black border-t border-l border-neutral-600 z-40 transition-all duration-300" 
      style={{left: leftPosition}}
    >
      {/* Terminal Header */}
      <div className="bg-neutral-800 px-4 py-2 flex items-center justify-between border-b border-neutral-600">
        <div className="flex items-center space-x-2">
          <VscTerminal className="text-gray-400" />
          <span className="text-sm text-gray-300">Terminal</span>
          <span className="text-xs text-gray-500">rifki@portfolio:~/src$</span>
        </div>
        <div className="flex items-center space-x-2">
          <VscClearAll 
            className="text-gray-400 hover:text-white cursor-pointer" 
            title="Clear Terminal"
            onClick={() => setHistory([])}
          />
          <VscClose 
            className="text-gray-400 hover:text-white cursor-pointer" 
            title="Close Terminal"
            onClick={close}
          />
        </div>
      </div>

      {/* Terminal Content */}
      <div className="h-64 flex flex-col">
        {/* Output Area */}
        <div 
          ref={terminalRef}
          className="flex-1 p-4 font-mono text-sm overflow-y-auto"
        >
          {history.map((item) => (
            <div key={item.id} className="mb-2">
              <div className="text-green-400">
                $ {item.command}
              </div>
              {item.output.map((line, index) => (
                <div key={index} className="text-gray-300">
                  {line}
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Input Area */}
        <div className="border-t border-neutral-700 p-4 flex items-center space-x-2">
          <span className="text-green-400 font-mono text-sm">$</span>
          <input
            ref={inputRef}
            type="text"
            value={command}
            onChange={(e) => setCommand(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 bg-transparent text-white font-mono text-sm outline-none"
            placeholder="Type a command... (try 'help')"
          />
        </div>
      </div>
    </div>
  );
}
