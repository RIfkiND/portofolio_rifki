"use client";
import { ReactNode } from 'react';
import Sidebar from '@/components/SideBar/Sidebar';
import TabSection from '@/components/Header/TabSection';
import MobileHeader from '@/components/Layout/MobileHeader';
import MobileNavigation from '@/components/Layout/MobileNavigation';
import GlobalTerminal from '@/components/Terminal/GlobalTerminal';

interface ResponsiveLayoutProps {
  children: ReactNode;
}

export default function ResponsiveLayout({ children }: ResponsiveLayoutProps) {
  return (
    <>
      {/* Mobile Layout - Show on mobile screens only via CSS */}
      <div className="mobile-only flex-col h-screen bg-neutral-900 relative">
        <MobileHeader />
        <div className="flex-1 overflow-y-auto">
          {children}
        </div>
        <MobileNavigation />
        <GlobalTerminal />
      </div>

      {/* Desktop Layout - Show on desktop screens only via CSS */}
      <div className="desktop-only flex-col h-screen" style={{ overflow: 'hidden' }}>
        <div className="flex flex-1" style={{ overflow: 'hidden' }}>
          <Sidebar />
          <div className="flex flex-col flex-1" style={{ overflow: 'hidden' }}>
            <TabSection />
            <div className="flex-1 bg-neutral-900" style={{ height: '100%' }}>
              {children}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
