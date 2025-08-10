"use client";
import { useRouter, usePathname } from 'next/navigation';
import { FaMarkdown } from 'react-icons/fa';
import { SiGo, SiReact } from 'react-icons/si';
import PythonLogo from '@/components/icons/PythonLogo';

export default function MobileNavigation() {
  const router = useRouter();
  const pathname = usePathname();

  const navItems = [
    {
      name: "Home",
      icon: <FaMarkdown className="text-blue-400" />,
      route: "/",
      file: "rifki.md"
    },
    {
      name: "Skills",
      icon: <SiGo className="text-cyan-400" />,
      route: "/skill",
      file: "skill.go"
    },
    {
      name: "Experience",
      icon: <PythonLogo size={16} />,
      route: "/experience",
      file: "experience.py"
    },
    {
      name: "Projects",
      icon: <SiReact className="text-blue-500" />,
      route: "/project",
      file: "projects.tsx"
    },
    {
      name: "Blog",
      icon: <FaMarkdown className="text-purple-400" />,
      route: "/blog",
      file: "blog.md"
    }
  ];

  return (
    <div className="bg-neutral-800 border-t border-neutral-700 px-2 py-2">
      <div className="flex justify-around">
        {navItems.map((item) => (
          <button
            key={item.route}
            onClick={() => router.push(item.route)}
            className={`flex flex-col items-center space-y-1 px-3 py-2 rounded-lg transition-colors ${
              pathname === item.route
                ? 'bg-neutral-700 text-blue-400'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            <div className="w-5 h-5 flex items-center justify-center">
              {item.icon}
            </div>
            <span className="text-xs font-medium truncate">
              {item.name}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
