"use client";
import { BlogBody } from "@/components/Body/BlogBody";
import ResponsiveLayout from "@/components/Layout/ResponsiveLayout";
import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

export default function BlogPage() {
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
