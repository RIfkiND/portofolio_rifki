"use client";
import Sidebar from "@/components/SideBar/Sidebar";
import { ExperienceBody } from "@/components/Body/ExperienceBody";
import TabSection from "@/components/Header/TabSection";

export default function Skill() {
  return (
    <div className="flex flex-col h-screen overflow-hidden">

      {/* Main Layout */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content Area */}
        <div className="flex flex-col flex-1">
          {/* Tab Section Below Header */}
          <TabSection />

          {/* Main Content */}
          <div className="flex-1 overflow-auto bg-neutral-900">
            <ExperienceBody />
          </div>
        </div>
      </div>
    </div>
  );
}
