"use client";
import { MainBody } from "@/components/Body/MainBody";
import ResponsiveLayout from "@/components/Layout/ResponsiveLayout";
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
    <ResponsiveLayout>
      <MainBody searchTerm={search} />
    </ResponsiveLayout>
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
