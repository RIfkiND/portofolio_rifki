"use client";
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { VscTerminal, VscSearch, VscClose } from "react-icons/vsc";
import { useTabStore } from "@/components/store/useTabStore";
import { useTerminalStore } from "@/components/store/useTerminalStore";

export default function MobileHeader() {
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const { selectedFile } = useTabStore();
  const { open: openTerminal } = useTerminalStore();
  const searchInputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  // Live search function
  const performLiveSearch = (query: string) => {
    if (!query.trim()) {
      setSearchResults([]);
      return;
    }

    const results: any[] = [];
    const searchTerm = query.toLowerCase();

    // Search in skills
    const skills = [
      { name: "Laravel", category: "Backend Framework", level: "Expert" },
      { name: "React", category: "Frontend Framework", level: "Advanced" },
      { name: "Next.js", category: "React Framework", level: "Advanced" },
      { name: "Vue.js", category: "Frontend Framework", level: "Intermediate" },
      { name: "Docker", category: "DevOps Tool", level: "Advanced" },
      {
        name: "Kubernetes",
        category: "Container Orchestration",
        level: "Advanced",
      },
      { name: "PostgreSQL", category: "Database", level: "Advanced" },
      { name: "MongoDB", category: "Database", level: "Intermediate" },
      {
        name: "Python",
        category: "Programming Language",
        level: "Intermediate",
      },
      {
        name: "TypeScript",
        category: "Programming Language",
        level: "Advanced",
      },
      { name: "JavaScript", category: "Programming Language", level: "Expert" },
      { name: "PHP", category: "Programming Language", level: "Expert" },
      { name: "CI/CD", category: "DevOps", level: "Advanced" },
      { name: "GitHub Actions", category: "CI/CD Tool", level: "Advanced" },
      { name: "HTML", category: "Markup Language", level: "Expert" },
      { name: "CSS", category: "Styling", level: "Expert" },
      { name: "Tailwind CSS", category: "CSS Framework", level: "Expert" },
      {
        name: "AI Tools",
        category: "Artificial Intelligence",
        level: "Intermediate",
      },
    ];

    skills.forEach((skill) => {
      if (
        skill.name.toLowerCase().includes(searchTerm) ||
        skill.category.toLowerCase().includes(searchTerm)
      ) {
        results.push({
          type: "skill",
          title: skill.name,
          subtitle: `${skill.category} • ${skill.level}`,
          icon: "⚡",
        });
      }
    });

    // Search in experience
    const experiences = [
      {
        title: "Full Stack Developer Intern",
        company: "Tech Company",
        period: "2023-2024",
      },
      { title: "Backend Developer", company: "Startup", period: "2024" },
      {
        title: "Freelance Developer",
        company: "Various Clients",
        period: "2022-Present",
      },
    ];

    experiences.forEach((exp) => {
      if (
        exp.title.toLowerCase().includes(searchTerm) ||
        exp.company.toLowerCase().includes(searchTerm)
      ) {
        results.push({
          type: "experience",
          title: exp.title,
          subtitle: `${exp.company} • ${exp.period}`,
          icon: "💼",
        });
      }
    });

    // Search in projects
    const projects = [
      {
        name: "SINDARA",
        description: "Government System for Population Data",
        tech: "Laravel, React",
      },
      {
        name: "Portfolio Website",
        description: "Personal portfolio with VSCode theme",
        tech: "Next.js, TypeScript",
      },
      {
        name: "E-commerce Platform",
        description: "Full-stack e-commerce solution",
        tech: "Laravel, Vue.js",
      },
    ];

    projects.forEach((project) => {
      if (
        project.name.toLowerCase().includes(searchTerm) ||
        project.description.toLowerCase().includes(searchTerm) ||
        project.tech.toLowerCase().includes(searchTerm)
      ) {
        results.push({
          type: "project",
          title: project.name,
          subtitle: project.description,
          icon: "🚀",
        });
      }
    });

    // Search in blog topics
    const blogTopics = [
      { title: "Building Scalable APIs", category: "Backend Development" },
      { title: "React Best Practices", category: "Frontend Development" },
      { title: "Docker in Development", category: "DevOps" },
      { title: "Government System Architecture", category: "System Design" },
    ];

    blogTopics.forEach((blog) => {
      if (
        blog.title.toLowerCase().includes(searchTerm) ||
        blog.category.toLowerCase().includes(searchTerm)
      ) {
        results.push({
          type: "blog",
          title: blog.title,
          subtitle: blog.category,
          icon: "📝",
        });
      }
    });

    setSearchResults(results.slice(0, 8)); // Limit to 8 results
  };

  const handleSearch = () => {
    setShowSearch(!showSearch);
    if (!showSearch) {
      setSearchQuery("");
      setSearchResults([]);
    }
  };

  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
  };

  // Debounced live search
  useEffect(() => {
    const timer = setTimeout(() => {
      performLiveSearch(searchQuery);
    }, 200);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  const handleResultClick = (result: any) => {
    // Route based on result type
    let route = "/";
    const searchParam = encodeURIComponent(result.title);

    switch (result.type) {
      case "skill":
        route = `/skill?search=${searchParam}`;
        break;
      case "experience":
        route = `/experience?search=${searchParam}`;
        break;
      case "project":
        route = `/project?search=${searchParam}`;
        break;
      case "blog":
        route = `/blog?search=${searchParam}`;
        break;
      default:
        route = `/?search=${searchParam}`;
    }

    router.push(route);
    setShowSearch(false);
    setSearchQuery("");
    setSearchResults([]);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Navigate to general search with query
      const searchParam = encodeURIComponent(searchQuery.trim());
      router.push(`/?search=${searchParam}`);
      setShowSearch(false);
      setSearchQuery("");
      setSearchResults([]);
    }
  };

  const handleSearchClose = () => {
    setShowSearch(false);
    setSearchQuery("");
    setSearchResults([]);
  };

  // Focus input when search dropdown opens
  useEffect(() => {
    if (showSearch && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [showSearch]);

  // Close search dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        showSearch &&
        searchInputRef.current &&
        !searchInputRef.current
          .closest(".search-container")
          ?.contains(event.target as Node)
      ) {
        setShowSearch(false);
        setSearchQuery("");
        setSearchResults([]);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && showSearch) {
        setShowSearch(false);
        setSearchQuery("");
        setSearchResults([]);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [showSearch]);

  return (
    <>
      {/* Mobile Header */}
      <div className="bg-neutral-800 border-b border-neutral-700 p-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          {selectedFile && (
            <div className="flex items-center space-x-2">
              {selectedFile.icon}
              <span className="text-sm text-white truncate max-w-32">
                {selectedFile.name}
              </span>
            </div>
          )}
        </div>

        <div className="flex items-center space-x-3">
          <button
            onClick={handleSearch}
            className="text-gray-400 hover:text-white"
          >
            <VscSearch className="w-5 h-5" />
          </button>

          <button
            onClick={openTerminal}
            className="text-gray-400 hover:text-white"
          >
            <VscTerminal className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Search Dropdown */}
      {showSearch && (
        <div className="bg-neutral-800 border-b border-neutral-700 p-4 search-container">
          <form onSubmit={handleSearchSubmit} className="relative">
            <div className="flex items-center bg-neutral-900 rounded-lg border border-neutral-600 focus-within:border-blue-500">
              <VscSearch className="w-5 h-5 text-gray-400 ml-3" />
              <input
                ref={searchInputRef}
                type="text"
                value={searchQuery}
                onChange={handleSearchInputChange}
                placeholder="Search skills, experience, projects, blog..."
                className="flex-1 bg-transparent text-white placeholder-gray-400 px-3 py-2 outline-none"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={handleSearchClose}
                  className="text-gray-400 hover:text-white p-2"
                >
                  <VscClose className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Search suggestions/hints */}
            {searchQuery === "" && (
              <div className="mt-2 text-xs text-gray-400">
                Try: React, Laravel, Docker, Experience, Projects
              </div>
            )}

            {/* Live search results */}
            {searchResults.length > 0 && (
              <div className="mt-3 bg-neutral-900 rounded-lg border border-neutral-600 max-h-64 overflow-y-auto">
                {searchResults.map((result, index) => (
                  <button
                    key={index}
                    onClick={() => handleResultClick(result)}
                    className="w-full p-3 text-left hover:bg-neutral-800 border-b border-neutral-700 last:border-b-0 flex items-center space-x-3"
                  >
                    <span className="text-lg">{result.icon}</span>
                    <div className="flex-1 min-w-0">
                      <div className="text-white text-sm font-medium truncate">
                        {result.title}
                      </div>
                      <div className="text-gray-400 text-xs truncate">
                        {result.subtitle}
                      </div>
                    </div>
                    <div className="text-xs text-gray-500 bg-neutral-800 px-2 py-1 rounded">
                      {result.type}
                    </div>
                  </button>
                ))}
              </div>
            )}

            {/* No results found */}
            {searchQuery !== "" && searchResults.length === 0 && (
              <div className="mt-3 p-3 text-center text-gray-400 text-sm">
                No results found for &quot;{searchQuery}&quot;
              </div>
            )}
          </form>
        </div>
      )}
    </>
  );
}
