"use client";
import { useEffect, useState } from 'react';

interface HydrationWrapperProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

export function HydrationWrapper({ children, fallback }: HydrationWrapperProps) {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) {
    return (
      fallback || (
        <div className="flex flex-col h-screen bg-neutral-900">
          <div className="flex-1 flex items-center justify-center">
            <div className="text-gray-300">Loading...</div>
          </div>
        </div>
      )
    );
  }

  return <>{children}</>;
}
