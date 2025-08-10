"use client";
import { ProjectBody } from "@/components/Body/ProjectBody";
import ResponsiveLayout from "@/components/Layout/ResponsiveLayout";
import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

export default function Project() {
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
