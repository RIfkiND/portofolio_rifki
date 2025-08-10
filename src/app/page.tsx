"use client";
import { MainBody } from "@/components/Body/MainBody";
import ResponsiveLayout from "@/components/Layout/ResponsiveLayout";
import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

export default function Home() {
  const searchParams = useSearchParams();
  const search = searchParams.get('search');

  useEffect(() => {
    if (search) {
      console.log('General search:', search);
    }
  }, [search]);

  return (
    <ResponsiveLayout>
      <MainBody searchTerm={search} />
    </ResponsiveLayout>
  );
}
