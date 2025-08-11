"use client";
import { BlogBody } from "@/components/Body/BlogBody";
import ResponsiveLayout from "@/components/Layout/ResponsiveLayout";
import { useSearchParams } from 'next/navigation';
import { useEffect, Suspense } from 'react';
import { useTabStore } from '@/components/store/useTabStore';

function BlogContent() {
  const searchParams = useSearchParams();
  const search = searchParams.get('search');
  const { isHydrated, hydrate } = useTabStore();

  useEffect(() => {
    if (!isHydrated) {
      hydrate();
    }
  }, [isHydrated, hydrate]);

  useEffect(() => {
    if (search) {
      console.log('Searching for blog:', search);
    }
  }, [search]);

  if (!isHydrated) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-neutral-900">
        <div className="text-gray-300">Loading blog...</div>
      </div>
    );
  }

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
