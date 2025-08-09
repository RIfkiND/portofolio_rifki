"use client";
import Sidebar from "@/components/SideBar/Sidebar";
import { MainBody } from "@/components/Body/MainBody";
import TabSection from "@/components/Header/TabSection";

export default function Home() {
  return (
    <div className="flex flex-col h-screen" style={{ overflow: 'hidden' }}>

      {/* Main Layout */}
      <div className="flex flex-1" style={{ overflow: 'hidden' }}>
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content Area */}
        <div className="flex flex-col flex-1" style={{ overflow: 'hidden' }}>
          {/* Tab Section Below Header */}
          <TabSection />

          {/* Main Content - Only the body component handles scrolling */}
          <div className="flex-1 bg-neutral-900" style={{ height: '100%' }}>
            <MainBody />
          </div>
        </div>
      </div>
    </div>
  );
}
