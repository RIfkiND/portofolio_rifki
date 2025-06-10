
import React, { useState, useRef, useEffect } from "react";

const initialOutput = [
  "Welcome to the Portfolio Terminal! Type 'help' to get started.",
];

const Terminal: React.FC = () => {
  const [output, setOutput] = useState<string[]>(initialOutput);
  const [input, setInput] = useState("");
  const outputRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    outputRef.current?.scrollTo(0, outputRef.current.scrollHeight);
  }, [output]);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && input.trim() !== "") {
      handleCommand(input);
      setInput("");
    }
  };

  const handleCommand = (cmd: string) => {
    let response = "";
    switch (cmd.trim().toLowerCase()) {
      case "help":
        response = "Available commands: help, about, clear";
        break;
      case "about":
        response = "This is a VSCode-inspired terminal for my portfolio!";
        break;
      case "clear":
        setOutput([]);
        return;
      default:
        response = `Command not found: ${cmd}`;
    }
    setOutput((prev) => [...prev, `> ${cmd}`, response]);
  };

  return (
    <div className="fixed bottom-0 left-0 w-full md:w-2/3 mx-auto md:left-1/6 bg-neutral-900 text-green-400 rounded-t-lg shadow-lg z-50 border-t border-neutral-800">
      <div className="flex items-center justify-between px-4 py-2 bg-neutral-950 border-b border-neutral-800 rounded-t-lg">
        <span className="font-mono text-sm text-white">Terminal</span>
        <span className="text-xs text-neutral-400">VSCode Style</span>
      </div>
      <div
        className="p-4 h-60 overflow-y-auto font-mono text-sm"
        ref={outputRef}
      >
        {output.map((line, idx) => (
          <div key={idx}>{line}</div>
        ))}
      </div>
      <div className="px-4 pb-4">
        <input
          type="text"
          className="w-full bg-neutral-800 text-green-400 font-mono p-2 rounded outline-none"
          placeholder="Type a command..."
          value={input}
          onChange={handleInput}
          onKeyDown={handleKeyDown}
          autoFocus
          autoComplete="off"
        />
      </div>
    </div>
  );
};

export default Terminal;
