"use client";
import { SkillBody } from "@/components/Body/SkillBody";
import ResponsiveLayout from "@/components/Layout/ResponsiveLayout";
import { useSearchParams } from 'next/navigation';
import { useEffect, Suspense } from 'react';

function SkillContent() {
  const searchParams = useSearchParams();
  const search = searchParams.get('search');

  useEffect(() => {
    if (search) {
      // Scroll to or highlight the searched skill
      console.log('Searching for skill:', search);
      // You can implement highlighting logic here
    }
  }, [search]);

  return (
    <ResponsiveLayout>
      <SkillBody searchTerm={search} />
    </ResponsiveLayout>
  );
}

export default function Skill() {
  return (
    <Suspense fallback={
      <div className="flex items-center justify-center min-h-screen bg-neutral-900">
        <div className="text-gray-300">Loading skills...</div>
      </div>
    }>
      <SkillContent />
    </Suspense>
  );
}