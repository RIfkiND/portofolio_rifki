"use client";
import { BlogBody } from "@/components/Body/BlogBody";
import ResponsiveLayout from "@/components/Layout/ResponsiveLayout";
import { useSearchParams } from 'next/navigation';
import { useEffect, Suspense } from 'react';

function BlogContent() {
  const searchParams = useSearchParams();
  const search = searchParams.get('search');

  useEffect(() => {
    if (search) {
      console.log('Searching for blog:', search);
    }
  }, [search]);

  return (
    <ResponsiveLayout>
      <BlogBody searchTerm={search} />
    </ResponsiveLayout>
  );
}

export default function BlogPage() {
  return (
    <Suspense fallback={
      <div className="flex items-center justify-center min-h-screen bg-neutral-900">
        <div className="text-gray-300">Loading blog...</div>
      </div>
    }>
      <BlogContent />
    </Suspense>
  );
}
