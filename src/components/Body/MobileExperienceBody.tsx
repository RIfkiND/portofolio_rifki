"use client";
import { useRouteSync } from "@/hooks/useRouteSync";
import { VscCalendar, VscBriefcase, VscMortarBoard } from "react-icons/vsc";
import { FaMapMarkerAlt, FaBuilding } from "react-icons/fa";

interface MobileExperienceBodyProps {
  searchTerm?: string | null;
}

export function MobileExperienceBody({ searchTerm }: MobileExperienceBodyProps) {
  useRouteSync();

  const experiences = [
    {
      title: "Backend Developer Lead (Partnership)",
      company: "PT Minilemon Nusantara",
      period: "Feb 2025 - Now",
      location: "Remote",
      type: "Partnership",
      description: "Leading backend development initiatives and API integrations for e-commerce solutions.",
      highlights: ["Team Leadership", "API Architecture", "Payment Integration"]
    },
    {
      title: "Backend Developer Intern",
      company: "PT Minilemon Nusantara",
      period: "Nov 2024 - Jan 2025",
      location: "Remote", 
      type: "Internship",
      description: "Developed backend APIs and integrated payment gateways for e-commerce platform.",
      highlights: ["Laravel Development", "Payment APIs", "Database Design"]
    },
    {
      title: "Backend Developer Intern",
      company: "BBPPMVP BMTI Bandung",
      period: "Sep 2024 - Jan 2025",
      location: "Bandung",
      type: "Internship",
      description: "Worked on government education platform backend development and API integration.",
      highlights: ["Government Projects", "Large Scale Systems", "Security Implementation"]
    },
    {
      title: "Freelance Backend Developer",
      company: "Self-employed",
      period: "June 2024 - Now",
      location: "Remote",
      type: "Freelance",
      description: "Developing custom backend solutions for various clients including web scraping and API development.",
      highlights: ["Custom Solutions", "Web Scraping", "API Development"]
    }
  ];

  const education = {
    school: "SMKN 1 Ciamis",
    degree: "Software Engineering",
    period: "2022 - 2025",
    location: "Ciamis, West Java"
  };

  // Filter experiences based on search term
  const filteredExperiences = searchTerm 
    ? experiences.filter(exp => 
        exp.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        exp.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
        exp.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        exp.highlights.some(highlight => highlight.toLowerCase().includes(searchTerm.toLowerCase()))
      )
    : experiences;

  // Check if education matches search term
  const educationMatches = searchTerm && (
    education.school.toLowerCase().includes(searchTerm.toLowerCase()) ||
    education.degree.toLowerCase().includes(searchTerm.toLowerCase()) ||
    education.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Highlight search term in text
  const highlightText = (text: string, searchTerm: string) => {
    if (!searchTerm) return text;
    
    const regex = new RegExp(`(${searchTerm})`, 'gi');
    const parts = text.split(regex);
    
    return parts.map((part, index) => 
      regex.test(part) ? (
        <span key={index} className="bg-yellow-500 bg-opacity-30 text-yellow-300 font-medium">
          {part}
        </span>
      ) : part
    );
  };

  return (
    <div className="bg-neutral-900 text-gray-300 h-full overflow-y-auto">
      {/* Mobile Header */}
      <div className="sticky top-0 bg-neutral-900 border-b border-neutral-700 p-4 z-10">
        <h1 className="text-xl font-bold text-white">👨‍💼 Experience & Education</h1>
        <p className="text-sm text-gray-400">
          {searchTerm 
            ? `${filteredExperiences.length} of ${experiences.length} experiences matching "${searchTerm}"`
            : "My professional journey"
          }
        </p>
        {searchTerm && (
          <div className="mt-2 text-xs text-yellow-400 bg-yellow-900 bg-opacity-30 px-2 py-1 rounded">
            🔍 Searching for: &quot;{searchTerm}&quot;
          </div>
        )}
      </div>

      {/* Mobile Education */}
      {(!searchTerm || educationMatches) && (
        <div className="p-4 border-b border-neutral-700">
          <h2 className="text-lg font-bold text-white mb-4 flex items-center">
            <VscMortarBoard className="mr-2 text-blue-400" />
            Education
          </h2>
          <div className="bg-neutral-800 border border-neutral-700 rounded-lg p-4">
            <h3 className="text-white font-bold">
              {searchTerm ? highlightText(education.degree, searchTerm) : education.degree}
            </h3>
            <p className="text-blue-400 text-sm mb-2">
              {searchTerm ? highlightText(education.school, searchTerm) : education.school}
            </p>
            <div className="flex items-center space-x-4 text-xs text-gray-400">
              <div className="flex items-center space-x-1">
                <VscCalendar className="w-3 h-3" />
                <span>{education.period}</span>
              </div>
              <div className="flex items-center space-x-1">
                <FaMapMarkerAlt className="w-3 h-3" />
                <span>
                  {searchTerm ? highlightText(education.location, searchTerm) : education.location}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Experience */}
      <div className="p-4">
        <h2 className="text-lg font-bold text-white mb-4 flex items-center">
          <VscBriefcase className="mr-2 text-green-400" />
          Work Experience
        </h2>
        
        {filteredExperiences.length > 0 ? (
          <div className="space-y-4">
            {filteredExperiences.map((exp, index) => (
              <div key={index} className="bg-neutral-800 border border-neutral-700 rounded-lg p-4">
                {/* Experience Header */}
                <div className="mb-3">
                  <h3 className="text-white font-bold text-sm leading-tight">
                    {searchTerm ? highlightText(exp.title, searchTerm) : exp.title}
                  </h3>
                  <div className="flex items-center space-x-2 mt-1">
                    <FaBuilding className="w-3 h-3 text-blue-400" />
                    <span className="text-blue-400 text-sm">
                      {searchTerm ? highlightText(exp.company, searchTerm) : exp.company}
                    </span>
                  </div>
                </div>

                {/* Experience Meta */}
                <div className="grid grid-cols-2 gap-2 mb-3 text-xs text-gray-400">
                  <div className="flex items-center space-x-1">
                    <VscCalendar className="w-3 h-3" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <FaMapMarkerAlt className="w-3 h-3" />
                    <span>{exp.location}</span>
                  </div>
                </div>

                {/* Type Badge */}
                <div className="mb-3">
                  <span className={`px-2 py-1 text-xs rounded ${
                    exp.type === 'Partnership' ? 'bg-purple-900 text-purple-400' :
                    exp.type === 'Internship' ? 'bg-blue-900 text-blue-400' :
                    'bg-green-900 text-green-400'
                  }`}>
                    {exp.type}
                  </span>
                </div>

                {/* Description */}
                <p className="text-gray-300 text-sm leading-relaxed mb-3">
                  {searchTerm ? highlightText(exp.description, searchTerm) : exp.description}
                </p>

                {/* Highlights */}
                <div className="space-y-1">
                  <span className="text-xs text-gray-400">Key highlights:</span>
                  <div className="flex flex-wrap gap-1">
                    {exp.highlights.map((highlight, hIndex) => (
                      <span 
                        key={hIndex}
                        className={`px-2 py-1 text-xs rounded ${
                          searchTerm && highlight.toLowerCase().includes(searchTerm.toLowerCase())
                            ? 'bg-yellow-600 bg-opacity-30 text-yellow-300 border border-yellow-500'
                            : 'bg-neutral-700 text-gray-300'
                        }`}
                      >
                        {searchTerm ? highlightText(highlight, searchTerm) : highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-lg font-bold text-white mb-2">No experience found</h3>
            <p className="text-gray-400 text-sm">
              No work experience matches your search for &quot;{searchTerm}&quot;
            </p>
            <p className="text-gray-500 text-xs mt-2">
              Try searching with different keywords
            </p>
          </div>
        )}
      </div>

      {/* Mobile Summary */}
      <div className="p-4 border-t border-neutral-700">
        <div className="bg-neutral-800 border border-neutral-700 rounded-lg p-4">
          <h3 className="text-lg font-bold text-white mb-3">📊 Career Summary</h3>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-400">1+</div>
              <div className="text-gray-400">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-400">4</div>
              <div className="text-gray-400">Companies</div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Footer */}
      <div className="p-4 text-center text-gray-500 text-sm border-t border-neutral-700">
        <p>🚀 Growing and learning every day</p>
        <p className="mt-1">Open for new opportunities</p>
      </div>
    </div>
  );
}
