"use client";
import { useRouter, usePathname } from 'next/navigation';
import { VscHome, VscTools, VscAccount, VscProject, VscNote } from 'react-icons/vsc';

export default function MobileNavigation() {
  const router = useRouter();
  const pathname = usePathname();

  const navItems = [
    {
      name: "Home",
      icon: <VscHome className="text-blue-400" />,
      route: "/",
      file: "rifki.md",
      color: "blue"
    },
    {
      name: "Skills",
      icon: <VscTools className="text-cyan-400" />,
      route: "/skill",
      file: "skill.go",
      color: "cyan"
    },
    {
      name: "Experience",
      icon: <VscAccount className="text-green-400" />,
      route: "/experience",
      file: "experience.py",
      color: "green"
    },
    {
      name: "Projects",
      icon: <VscProject className="text-purple-400" />,
      route: "/project",
      file: "projects.tsx",
      color: "purple"
    },
    {
      name: "Blog",
      icon: <VscNote className="text-orange-400" />,
      route: "/blog",
      file: "blog.md",
      color: "orange"
    }
  ];

  const getActiveStyles = (color: string, isActive: boolean) => {
    if (!isActive) return 'text-gray-400 hover:text-white hover:bg-neutral-700/50';
    
    const colorMap = {
      blue: 'bg-blue-500/20 text-blue-400 border border-blue-500/30',
      cyan: 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30',
      green: 'bg-green-500/20 text-green-400 border border-green-500/30',
      purple: 'bg-purple-500/20 text-purple-400 border border-purple-500/30',
      orange: 'bg-orange-500/20 text-orange-400 border border-orange-500/30'
    };
    
    return colorMap[color as keyof typeof colorMap] || 'bg-neutral-700 text-blue-400';
  };

  return (
    <div className="bg-neutral-900 border-t border-neutral-700 px-2 py-3 shadow-lg">
      {/* VS Code style file tabs indicator */}
      <div className="flex justify-center mb-2">
        <div className="flex space-x-1">
          {navItems.map((item) => (
            pathname === item.route && (
              <div key={item.route} className="bg-neutral-700 px-2 py-1 rounded-md">
                <span className="text-xs text-gray-300">{item.file}</span>
              </div>
            )
          ))}
        </div>
      </div>
      
      <div className="flex justify-around items-center">
        {navItems.map((item) => {
          const isActive = pathname === item.route;
          return (
            <button
              key={item.route}
              onClick={() => router.push(item.route)}
              className={`relative flex flex-col items-center space-y-1 px-3 py-2 rounded-xl transition-all duration-300 transform hover:scale-105 ${
                getActiveStyles(item.color, isActive)
              }`}
            >
              {/* Active indicator dot */}
              {isActive && (
                <div className="absolute -top-1 w-1 h-1 bg-current rounded-full animate-pulse"></div>
              )}
              
              <div className="w-6 h-6 flex items-center justify-center relative">
                {item.icon}
                {/* Subtle glow effect for active item */}
                {isActive && (
                  <div className="absolute inset-0 bg-current opacity-20 rounded-full blur-md"></div>
                )}
              </div>
              
              <span className={`text-xs font-medium transition-all duration-300 ${
                isActive ? 'font-bold tracking-wide' : 'tracking-normal'
              }`}>
                {item.name}
              </span>
              
              {/* Bottom indicator line */}
              {isActive && (
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-current rounded-full"></div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
