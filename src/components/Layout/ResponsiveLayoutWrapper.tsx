"use client";
import React from "react";
import MainHeader from "@/components/Header/HeaderMain";
export default function ResponsiveLayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full">
      <MainHeader />
      {children}
    </div>
  );
}
