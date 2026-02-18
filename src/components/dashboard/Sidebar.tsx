'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, Box, Store, Wallet, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Sidebar() {
  const pathname = usePathname();

  const isActive = (path: string) =>
    pathname === path || pathname?.startsWith(path + '/');

  return (
    <aside className="w-64 bg-white dark:bg-surface-darker border-r border-gray-200 dark:border-border-dark hidden lg:flex flex-col py-6 h-full">
      <div className="px-6 mb-8">
        <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4">
          Principal
        </p>
        <nav className="space-y-1">
          <NavItem
            href="/dashboard"
            icon={<LayoutDashboard size={20} />}
            label="Dashboard"
            active={pathname === '/dashboard'}
          />
          <NavItem
            href="/dashboard/lotes"
            icon={<Box size={20} />}
            label="Meus Lotes"
            active={isActive('/dashboard/lotes')}
          />
          <NavItem
            href="/dashboard/marketplace"
            icon={<Store size={20} />}
            label="Marketplace"
            active={isActive('/dashboard/marketplace')}
          />
          <NavItem
            href="/dashboard/financeiro"
            icon={<Wallet size={20} />}
            label="Financeiro"
            active={isActive('/dashboard/financeiro')}
          />
        </nav>
      </div>

      <div className="px-6 mt-auto">
        <div className="p-4 bg-surface-dark rounded-xl border border-border-dark relative overflow-hidden group cursor-pointer">
          <div className="absolute inset-0 bg-linear-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <h4 className="font-bold text-white mb-1 relative z-10">
            Precisa de Ajuda?
          </h4>
          <p className="text-xs text-gray-400 mb-3 relative z-10">
            Fale com seu gerente de conta Gado 11.
          </p>
          <button className="text-xs font-bold text-primary flex items-center gap-1 hover:gap-2 transition-all">
            Contatar Suporte <ArrowRight size={12} />
          </button>
        </div>
      </div>
    </aside>
  );
}

function NavItem({
  href,
  icon,
  label,
  active,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
  active: boolean;
}) {
  return (
    <Link
      href={href}
      className={cn(
        'flex items-center gap-3 px-4 py-3 rounded-xl transition-colors duration-200',
        active
          ? 'bg-primary/10 text-primary font-bold'
          : 'text-gray-400 hover:text-white hover:bg-surface-dark',
      )}
    >
      {icon}
      {label}
    </Link>
  );
}
