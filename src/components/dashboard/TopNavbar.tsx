'use client';

import React from 'react';
import { Bell, Wallet, PieChart, LayoutGrid } from 'lucide-react';

export function TopNavbar() {
  return (
    <nav className="h-20 border-b border-gray-200 dark:border-border-dark bg-white dark:bg-surface-darker flex items-center justify-between px-6 lg:px-8 z-40 sticky top-0 shadow-lg">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center text-primary font-bold text-2xl tracking-tighter">
          G11
        </div>
        <div className="flex flex-col">
          <span className="text-lg font-bold tracking-wide text-gray-900 dark:text-white leading-none">
            GADO11
          </span>
          <span className="text-[0.6rem] font-bold text-primary tracking-widest uppercase">
            Agronegócio
          </span>
        </div>
      </div>

      <div className="hidden xl:flex items-center gap-8 mx-auto">
        <div className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-surface-dark transition-colors border border-transparent hover:border-border-dark cursor-default">
          <div className="p-2 bg-primary/10 rounded-full text-primary">
            <LayoutGrid size={20} />
          </div>
          <div>
            <p className="text-xs text-gray-500 font-medium uppercase tracking-wide">
              Lotes sob Custódia
            </p>
            <p className="text-lg font-bold text-white">
              12 Lotes{' '}
              <span className="text-xs font-normal text-gray-400">
                (4.200 cabeças)
              </span>
            </p>
          </div>
        </div>
        <div className="h-8 w-px bg-border-dark"></div>
        <div className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-surface-dark transition-colors border border-transparent hover:border-border-dark cursor-default">
          <div className="p-2 bg-primary/10 rounded-full text-primary">
            <Wallet size={20} />
          </div>
          <div>
            <p className="text-xs text-gray-500 font-medium uppercase tracking-wide">
              Saldo Escrow
            </p>
            <p className="text-lg font-bold text-white">R$ 1.450.000,00</p>
          </div>
        </div>
        <div className="h-8 w-px bg-border-dark"></div>
        <div className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-surface-dark transition-colors border border-transparent hover:border-border-dark cursor-default">
          <div className="p-2 bg-primary/10 rounded-full text-primary">
            <PieChart size={20} />
          </div>
          <div>
            <p className="text-xs text-gray-500 font-medium uppercase tracking-wide">
              Capacidade Ocupada
            </p>
            <div className="flex items-center gap-2">
              <p className="text-lg font-bold text-white">82%</p>
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-6">
        <button className="relative p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
          <Bell size={20} className="text-gray-600 dark:text-gray-300" />
          <span className="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full animate-pulse"></span>
        </button>
        <div className="flex items-center gap-3 pl-4 border-l border-gray-200 dark:border-border-dark">
          <div className="text-right hidden sm:block">
            <div className="text-sm font-bold text-gray-900 dark:text-white">
              Confinamento Sta. Fé
            </div>
            <div className="text-xs text-primary">Parceiro Ouro</div>
          </div>
          <div className="h-10 w-10 rounded-full bg-linear-to-br from-gray-700 to-gray-900 border-2 border-primary/30 overflow-hidden shadow-md">
            <img
              alt="Foto do perfil do gestor"
              className="h-full w-full object-cover opacity-90 hover:opacity-100 transition-opacity"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAzhTAV0OJIbGtZ4mtquhGkqE1byOi-b1nWW6GdTdfLZBk-w8yPWa-NvUI8Woj_9uVUO20ZLpg5EU2UJy8OrTXwkJOYcyoIagwH2-skvfh31-GZdZhpvp_LfvHDBi0379VQJY3yy667nKI8R0inp7eYcaXvQMSENyXhLlUZLqfBpL5GkXArt4VoVfm7dXQ8jz5iu6nXdVqYncufsaAAc5nu-My04NCLcsrn-zT-LtfsYAi7IcN8ZHnccprFw7Qy4EHPLynDVDlGmfk5"
            />
          </div>
        </div>
      </div>
    </nav>
  );
}
