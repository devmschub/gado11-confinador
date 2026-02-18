import { Sidebar } from '@/components/dashboard/Sidebar';
import React from 'react';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex bg-surface-dark min-h-screen font-manrope">
      <Sidebar />
      <main className="flex-1 ml-64 min-h-screen relative overflow-y-auto">
        {children}
      </main>
    </div>
  );
}
