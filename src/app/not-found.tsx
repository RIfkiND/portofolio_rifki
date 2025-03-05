"use client";
import Sidebar from "@/components/SideBar/Sidebar";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import TabSection from "@/components/Header/TabSection";
import NotFound from "@/components/Body/NotFound";

export default function NotFoundPage() {
    
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      {/* Header */}
      <Header />

      {/* Main Layout */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content Area */}
        <div className="flex flex-col flex-1">
          {/* Tab Section Below Header */}
          <TabSection />

          {/* 404 Content */}
          <NotFound />
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
