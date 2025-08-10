"use client";
import { ExperienceBody } from "@/components/Body/ExperienceBody";
import ResponsiveLayout from "@/components/Layout/ResponsiveLayout";
import { useSearchParams } from 'next/navigation';
import { useEffect, Suspense } from 'react';

function ExperienceContent() {
  const searchParams = useSearchParams();
  const search = searchParams.get('search');

  useEffect(() => {
    if (search) {
      console.log('Searching for experience:', search);
    }
  }, [search]);

  return (
    <ResponsiveLayout>
      <ExperienceBody searchTerm={search} />
    </ResponsiveLayout>
  );
}

export default function Experience() {
  return (
    <Suspense fallback={
      <div className="flex items-center justify-center min-h-screen bg-neutral-900">
        <div className="text-gray-300">Loading experience...</div>
      </div>
    }>
      <ExperienceContent />
    </Suspense>
  );
}
