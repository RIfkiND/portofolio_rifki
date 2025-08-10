"use client";
import { ReactNode } from 'react';
import { useDevice } from '@/hooks/useDevice';
import Sidebar from '@/components/SideBar/Sidebar';
import TabSection from '@/components/Header/TabSection';
import MobileHeader from '@/components/Layout/MobileHeader';
import MobileNavigation from '@/components/Layout/MobileNavigation';
import GlobalTerminal from '@/components/Terminal/GlobalTerminal';

interface ResponsiveLayoutProps {
  children: ReactNode;
}

export default function ResponsiveLayout({ children }: ResponsiveLayoutProps) {
  const { isMobile, isTablet } = useDevice();

  if (isMobile) {
    return (
      <div className="flex flex-col h-screen bg-neutral-900 relative">
        {/* Mobile Header */}
        <MobileHeader />
        
        {/* Mobile Content */}
        <div className="flex-1 overflow-hidden">
          {children}
        </div>
        
        {/* Mobile Bottom Navigation */}
        <MobileNavigation />
        
        {/* Mobile Terminal */}
        <GlobalTerminal />
      </div>
    );
  }

  if (isTablet) {
    return (
      <div className="flex flex-col h-screen relative" style={{ overflow: 'hidden' }}>
        {/* Tablet Layout - Simplified desktop */}
        <div className="flex flex-1" style={{ overflow: 'hidden' }}>
          {/* Collapsible Sidebar */}
          <Sidebar />
          
          <div className="flex flex-col flex-1" style={{ overflow: 'hidden' }}>
            {/* Horizontal Scrollable Tabs */}
            <TabSection />
            
            {/* Content */}
            <div className="flex-1 bg-neutral-900" style={{ height: '100%' }}>
              {children}
            </div>
          </div>
        </div>
        
        {/* Tablet Terminal */}
        <GlobalTerminal />
      </div>
    );
  }

  // Desktop Layout (Original)
  return (
    <div className="flex flex-col h-screen" style={{ overflow: 'hidden' }}>
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
  );
}
