"use client";
import { ProjectBody } from "@/components/Body/ProjectBody";
import ResponsiveLayout from "@/components/Layout/ResponsiveLayout";
import { useSearchParams } from 'next/navigation';
import { useEffect, Suspense } from 'react';

function ProjectContent() {
  const searchParams = useSearchParams();
  const search = searchParams.get('search');

  useEffect(() => {
    if (search) {
      console.log('Searching for project:', search);
    }
  }, [search]);

  return (
    <ResponsiveLayout>
      <ProjectBody searchTerm={search} />
    </ResponsiveLayout>
  );
}

export default function Project() {
  return (
    <Suspense fallback={
      <div className="flex items-center justify-center min-h-screen bg-neutral-900">
        <div className="text-gray-300">Loading projects...</div>
      </div>
    }>
      <ProjectContent />
    </Suspense>
  );
}
