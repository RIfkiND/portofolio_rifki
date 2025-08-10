"use client";
import { SkillBody } from "@/components/Body/SkillBody";
import ResponsiveLayout from "@/components/Layout/ResponsiveLayout";
import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

export default function Skill() {
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