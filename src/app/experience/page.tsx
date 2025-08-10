"use client";
import { ExperienceBody } from "@/components/Body/ExperienceBody";
import ResponsiveLayout from "@/components/Layout/ResponsiveLayout";
import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

export default function Experience() {
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
