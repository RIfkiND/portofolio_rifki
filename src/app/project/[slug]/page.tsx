import { ProjectDetailBody } from "@/components/Body/ProjectDetailBody";
import ResponsiveLayout from "@/components/Layout/ResponsiveLayout";
import { Suspense } from 'react';

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

function ProjectDetailContent({ slug }: { slug: string }) {
  return (
    <ResponsiveLayout>
      <ProjectDetailBody slug={slug} />
    </ResponsiveLayout>
  );
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  
  return (
    <Suspense fallback={
      <div className="flex items-center justify-center min-h-screen bg-neutral-900">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-400 mx-auto mb-4"></div>
          <div className="text-gray-300">Loading project details...</div>
        </div>
      </div>
    }>
      <ProjectDetailContent slug={slug} />
    </Suspense>
  );
}

// Generate static params for all projects (optional, for better SEO)
export async function generateStaticParams() {
  // You can fetch project slugs from your data source
  const projects = [
    'hasilbumi',
    'portfolio',
    'sindara', 
    'diklat',
    'nicktopup',
    'express-api',
    'web-scraping'
  ];

  return projects.map((slug) => ({
    slug: slug,
  }));
}
