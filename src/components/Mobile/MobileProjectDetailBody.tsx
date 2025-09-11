"use client";
import Image from "next/image";
import Link from "next/link";
import { VscGithub, VscLinkExternal, VscArrowLeft } from "react-icons/vsc";
import { FaStar } from "react-icons/fa";

interface MobileProjectDetailBodyProps {
  project: any;
}

export function MobileProjectDetailBody({ project }: MobileProjectDetailBodyProps) {
  return (
    <div className="bg-neutral-900 text-gray-300 h-full overflow-y-auto">
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
      <div className="relative">
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

      {/* Content */}
      <div className="p-4 space-y-6">
        {/* Description */}
        <div>
          <p className="text-gray-300 leading-relaxed">
            {project.description}
          </p>
        </div>

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

        {/* Project Info */}
        <div className="bg-neutral-800/50 border border-neutral-700 rounded-lg p-4">
          <h3 className="text-lg font-bold text-white mb-3">Project Info</h3>
          <div className="space-y-2 text-sm">
            <div className="flex items-center justify-between">
              <span className="text-gray-400">Category:</span>
              <span className="text-white">{project.category}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-400">Year:</span>
              <span className="text-white">{project.year}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-400">Status:</span>
              <span className={project.status === 'Live' ? 'text-green-400' : 'text-red-400'}>
                {project.status}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-400">Technologies:</span>
              <span className="text-white">{project.techStack.length}</span>
            </div>
          </div>
        </div>

        {/* About */}
        <div>
          <h3 className="text-lg font-bold text-white mb-3">About This Project</h3>
          <p className="text-gray-300 leading-relaxed">
            {project.longDescription}
          </p>
        </div>

        {/* Tech Stack */}
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

        {/* Features */}
        <div>
          <h3 className="text-lg font-bold text-white mb-3">Key Features</h3>
          <div className="space-y-2">
            {project.features.slice(0, 6).map((feature: string, index: number) => (
              <div key={index} className="flex items-center space-x-2">
                <FaStar className="text-yellow-400 flex-shrink-0 w-4 h-4" />
                <span className="text-gray-300 text-sm">{feature}</span>
              </div>
            ))}
            {project.features.length > 6 && (
              <p className="text-xs text-gray-500 mt-2">
                +{project.features.length - 6} more features
              </p>
            )}
          </div>
        </div>

        {/* Challenges */}
        <div>
          <h3 className="text-lg font-bold text-white mb-3">Key Challenges</h3>
          <div className="space-y-2">
            {project.challenges.map((challenge: string, index: number) => (
              <div key={index} className="flex items-start space-x-2">
                <div className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-300 text-sm">{challenge}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Learnings */}
        <div>
          <h3 className="text-lg font-bold text-white mb-3">What I Learned</h3>
          <div className="space-y-2">
            {project.learnings.map((learning: string, index: number) => (
              <div key={index} className="flex items-start space-x-2">
                <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-300 text-sm">{learning}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Gallery */}
        {project.gallery && project.gallery.length > 1 && (
          <div>
            <h3 className="text-lg font-bold text-white mb-3">Gallery</h3>
            <div className="grid grid-cols-2 gap-3">
              {project.gallery.slice(0, 4).map((image: string, index: number) => (
                <div key={index} className="relative rounded-lg overflow-hidden bg-neutral-800 border border-neutral-700">
                  <Image
                    src={image}
                    alt={`${project.name} screenshot ${index + 1}`}
                    width={200}
                    height={150}
                    className="w-full h-24 object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

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
