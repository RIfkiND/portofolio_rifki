"use client";
import Image from "next/image";
import Link from "next/link";
import { VscGithub, VscLinkExternal, VscArrowLeft } from "react-icons/vsc";

interface MobileProjectDetailBodyProps {
  project: any;
}

export function MobileProjectDetailBody({ project }: MobileProjectDetailBodyProps) {
  return (
    <div className="bg-neutral-900 text-gray-300">
      {/* Mobile Header */}
      <div className="sticky top-0 bg-neutral-900/95 backdrop-blur-sm border-b border-neutral-700 p-4 z-10">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link 
              href="/project" 
              className="mr-3 p-2 hover:bg-neutral-800 rounded-lg transition-colors text-blue-400"
            >
              <VscArrowLeft className="w-5 h-5" />
            </Link>
            <div>
              <h1 className="text-lg font-bold text-white">{project.name}</h1>
              <p className="text-xs text-gray-400">{project.category} • {project.year}</p>
            </div>
          </div>
          <div className={`px-2 py-1 rounded text-xs font-medium ${
            project.status === 'Live' 
              ? 'bg-green-900/50 text-green-400' 
              : 'bg-red-900/50 text-red-400'
          }`}>
            {project.status === 'Live' ? '✓' : '✗'} {project.status}
          </div>
        </div>
      </div>

      {/* Project Image */}
      <div className="relative flex-shrink-0">
        {project.isConfidential && (
          <div className="absolute top-4 right-4 z-10 bg-orange-600/90 text-white px-2 py-1 rounded text-xs font-semibold">
            🔒 Confidential
          </div>
        )}
        <Image
          src={project.image}
          alt={project.name}
          width={800}
          height={400}
          className="w-full h-48 object-cover"
        />
      </div>

      {/* Scrollable Content */}
      <div className="p-4 space-y-6 pb-32">
        {/* Action Buttons */}
        <div className="flex space-x-3">
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition-colors font-medium"
          >
            <VscLinkExternal className="w-4 h-4" />
            <span>Demo</span>
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center space-x-2 bg-neutral-700 hover:bg-neutral-600 text-white py-3 rounded-lg transition-colors font-medium"
          >
            <VscGithub className="w-4 h-4" />
            <span>Code</span>
          </a>
        </div>

        {/* About This Project */}
        <div>
          <h3 className="text-lg font-bold text-white mb-3">About This Project</h3>
          <p className="text-gray-300 leading-relaxed">
            {project.longDescription}
          </p>
        </div>

        {/* Technology Stack */}
        <div>
          <h3 className="text-lg font-bold text-white mb-3">Technology Stack</h3>
          <div className="grid grid-cols-2 gap-3">
            {project.techStack.map((tech: string, index: number) => (
              <div
                key={index}
                className="flex items-center space-x-2 bg-neutral-800/50 border border-neutral-700 rounded-lg p-3"
              >
                {project.icons[index] && (
                  <div className="text-lg">{project.icons[index]}</div>
                )}
                <span className="text-white text-sm font-medium">{tech}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Back Link */}
        <div className="pt-6 border-t border-neutral-700">
          <Link
            href="/project"
            className="flex items-center justify-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors font-medium"
          >
            <VscArrowLeft className="w-4 h-4" />
            <span>Back to All Projects</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
