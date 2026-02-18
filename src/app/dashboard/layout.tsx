import { Sidebar } from '@/components/dashboard/Sidebar';
import { TopNavbar } from '@/components/dashboard/TopNavbar';
import React from 'react';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark font-manrope">
      <TopNavbar />
      <div className="flex flex-1 h-[calc(100vh-80px)] overflow-hidden">
        <Sidebar />
        <main className="flex-1 overflow-y-auto p-4 lg:p-8 relative bg-background-light dark:bg-background-dark">
          {children}
        </main>
      </div>
    </div>
  );
}
