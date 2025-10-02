"use client";

import HeroSection from "@/components/Hero/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import VSCodeSection from "@/components/sections/VSCodeSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import CommunitySection from "@/components/sections/CommunitySection";
import ContactSection from "@/components/sections/ContactSection";
import { useSearchParams } from 'next/navigation';
import { useEffect, Suspense } from 'react';

function HomeContent() {
  const searchParams = useSearchParams();
  const search = searchParams.get('search');

  useEffect(() => {
    if (search) {
      console.log('General search:', search);
    }
  }, [search]);

  return (
    <div className="min-h-screen bg-neutral-950">

      {/* Hero Section */}
      <HeroSection />
      
      {/* About Section */}
      <AboutSection />
      
      {/* Experience Section */}
      <ExperienceSection />
      
      {/* Interactive VSCode Section */}
      <VSCodeSection />
      
      {/* Projects Section */}
      <ProjectsSection />
      
      {/* Community Contributions Section */}
      <CommunitySection />
      
      {/* Contact Section */}
      <ContactSection />
    </div>
  );
}

export default function Home() {
  return (
    <Suspense fallback={
      <div className="flex items-center justify-center min-h-screen bg-neutral-900">
        <div className="text-gray-300">Loading...</div>
      </div>
    }>
      <HomeContent />
    </Suspense>
  );
}
