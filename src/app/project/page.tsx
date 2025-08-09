"use client";
import Sidebar from "@/components/SideBar/Sidebar";
import { ProjectBody } from "@/components/Body/ProjectBody";
import TabSection from "@/components/Header/TabSection";

export default function Skill() {
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
            <ProjectBody />
          </div>
        </div>
      </div>
    </div>
  );
}
