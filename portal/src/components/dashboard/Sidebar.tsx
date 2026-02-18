'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  Package,
  Store,
  Receipt,
  Settings,
  Users,
  CreditCard,
  Cpu,
  MapPin,
  LogOut,
  HelpCircle,
} from 'lucide-react';
import { cn } from '@/lib/utils';

export function Sidebar() {
  const pathname = usePathname();

  const isActive = (path: string) =>
    pathname === path || pathname?.startsWith(path + '/');

  return (
    <aside className="w-64 h-screen bg-surface-dark border-r border-surface-light flex flex-col fixed left-0 top-0 z-50">
      {/* Logo */}
      <div className="p-6 flex items-center gap-2">
        <div className="bg-primary/20 p-1.5 rounded-lg text-primary">
          <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center font-bold text-xs ring-1 ring-primary/50 text-primary">
            G11
          </div>
        </div>
        <div className="leading-tight">
          <span className="font-bold text-lg text-white tracking-tight block">
            GADO11
          </span>
          <span className="text-[10px] text-gray-500 font-bold uppercase tracking-widest bg-surface-light px-1 rounded-sm">
            Agronegócio
          </span>
        </div>
      </div>

      <nav className="flex-1 px-4 space-y-8 overflow-y-auto py-4">
        {/* Principal Section */}
        <div className="space-y-2">
          <h3 className="px-4 text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-2">
            Principal
          </h3>
          <NavItem
            href="/dashboard"
            icon={<LayoutDashboard size={20} />}
            label="Dashboard"
            active={pathname === '/dashboard'}
          />
          <NavItem
            href="/dashboard/lotes"
            icon={<Package size={20} />}
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
            icon={<Receipt size={20} />}
            label="Financeiro"
            active={isActive('/dashboard/financeiro')}
          />
        </div>

        {/* Configurações Section */}
        <div className="space-y-2">
          <h3 className="px-4 text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-2">
            Configurações
          </h3>
          <NavItem
            href="/dashboard/settings/property"
            icon={<MapPin size={20} />}
            label="Dados da Propriedade"
            active={isActive('/dashboard/settings/property')}
          />
          <NavItem
            href="/dashboard/settings"
            icon={<Users size={20} />}
            label="Gestão de Equipe"
            active={pathname === '/dashboard/settings'}
          />
          <NavItem
            href="/dashboard/settings/bank"
            icon={<CreditCard size={20} />}
            label="Dados Bancários/Escrow"
            active={isActive('/dashboard/settings/bank')}
          />
          <NavItem
            href="/dashboard/settings/integrations"
            icon={<Cpu size={20} />}
            label="Integrações Telemetria"
            active={isActive('/dashboard/settings/integrations')}
          />
        </div>
      </nav>

      {/* Footer / Profile */}
      <div className="p-4 border-t border-surface-light space-y-4">
        {/* Help Card */}
        <div className="bg-surface-light/50 rounded-xl p-4 border border-surface-light">
          <h4 className="text-white text-sm font-bold flex items-center gap-2">
            Precisa de Ajuda? <HelpCircle size={14} className="text-gray-500" />
          </h4>
          <p className="text-[10px] text-gray-400 mt-1 mb-3 leading-relaxed">
            Fale com seu gerente de conta Gado 11.
          </p>
          <button className="text-xs text-primary font-bold flex items-center hover:underline">
            Contatar Suporte →
          </button>
        </div>

        <div className="flex items-center gap-3 pt-2">
          <div className="w-10 h-10 rounded-full bg-gray-700 overflow-hidden border border-gray-600">
            <img
              src="https://ui-avatars.com/api/?name=Roberto+Mendes&background=random"
              alt="User"
            />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-bold text-white truncate">
              Roberto Mendes
            </p>
            <p className="text-[10px] text-gray-500 truncate">
              Confinamento Sta. Fé
            </p>
          </div>
          <button className="text-gray-500 hover:text-white transition-colors">
            <LogOut size={16} />
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
        'flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group text-sm font-medium',
        active
          ? 'bg-primary text-surface-dark font-bold shadow-[0_0_15px_rgba(19,236,91,0.2)]'
          : 'text-gray-400 hover:text-white hover:bg-surface-light/50',
      )}
    >
      <span
        className={cn(
          active ? 'text-surface-dark' : 'text-gray-500 group-hover:text-white',
        )}
      >
        {icon}
      </span>
      {label}
    </Link>
  );
}
