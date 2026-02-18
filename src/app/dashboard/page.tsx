'use client';

import React from 'react';
import {
  ShoppingCart,
  ArrowRight,
  DollarSign,
  AlertTriangle,
} from 'lucide-react';
import { GMDChart } from '@/components/dashboard/GMDChart';
import { ReceivablesTable } from '@/components/dashboard/ReceivablesTable';
import Image from 'next/image';

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      {/* Marketplace & Finance Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Marketplace Card */}
        <div className="relative overflow-hidden rounded-2xl group cursor-pointer border border-gray-200 dark:border-border-dark bg-white dark:bg-surface-dark hover:border-primary/50 transition-all duration-300 shadow-lg h-60">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBMc4zaEcV47HIKiyv1dJ96Il3jsUXq_vhmaBu_ZGmtDuIgsvKcLQn6kC4J23FezYqUdUW5R6XpuHD4FkopnIM4AIjuq9IFCZuAfOczyeuVWVH25kIDZgpFN6Ma8fBi5p8EccQPftC-4fATsrpxXeMzVWJgqx5l19suK3vnJLa5Jwq58AiC2_qpvT4lLOHtXUaY6VxZzy7nHS63PdQfFU1p5-QUsIM8eQ0Cu_LfEmN8B2hpe4YR7aRfKl11p7HJTaHb0lyjt6dh4ABe"
              alt="Background Marketplace"
              fill
              className="object-cover opacity-20 group-hover:scale-105 transition-transform duration-700"
              unoptimized
            />
            <div className="absolute inset-0 bg-linear-to-r from-gray-900 via-gray-900/90 to-transparent dark:from-surface-darker dark:via-surface-darker/90"></div>
          </div>
          <div className="relative z-10 p-6 flex items-center justify-between h-full">
            <div className="flex flex-col h-full justify-between">
              <div>
                <div className="inline-flex items-center gap-2 px-2 py-1 rounded bg-primary/20 text-primary text-xs font-bold mb-3 border border-primary/20 w-fit">
                  <ShoppingCart size={14} /> Compra Coletiva
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                  Marketplace de Insumos
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Aproveite descontos em nutrição e saúde.
                </p>
              </div>
              <span className="text-primary font-bold text-sm flex items-center gap-2 group-hover:translate-x-2 transition-transform cursor-pointer">
                Acessar Loja <ArrowRight size={14} />
              </span>
            </div>
          </div>
        </div>

        {/* Credit Card */}
        <div className="relative overflow-hidden rounded-2xl group cursor-pointer border border-gray-200 dark:border-border-dark bg-white dark:bg-surface-dark hover:border-blue-500/50 transition-all duration-300 shadow-lg h-60">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBBYz-pqq1ofiakjgMjkOxtG3yWTYVC1315HhL1nxuf8hDmY1Syu2JuD7BgvJ4JI2SvjxucLz5gGLehYAtoYUyBiZRlMSIRJU3mAfwTSq95dgRpMMApEEZcIUu9IIPG-k8uWAR9ezKAuyIvgywc2rpPBPcr9lr4aG_51zfdSS85deRqJhCWsuv74UK8tOkaI4En3VYX_uJUrkGRblC87bLH8o0cTeuuiDj0_ZRAVgjJkPjGLw1U9gtooOGFyTaS9gobffHi5nU8Jtnq"
              alt="Background Finance"
              fill
              className="object-cover opacity-20 group-hover:scale-105 transition-transform duration-700"
              unoptimized
            />
            <div className="absolute inset-0 bg-linear-to-r from-gray-900 via-gray-900/90 to-transparent dark:from-surface-darker dark:via-surface-darker/90"></div>
          </div>
          <div className="relative z-10 p-6 flex items-center justify-between h-full">
            <div className="flex flex-col h-full justify-between">
              <div>
                <div className="inline-flex items-center gap-2 px-2 py-1 rounded bg-blue-500/20 text-blue-500 text-xs font-bold mb-3 border border-blue-500/20 w-fit">
                  <DollarSign size={14} /> Crédito Pré-Aprovado
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                  Linhas de Crédito MADCAP
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Financie sua operação com arroba futura.
                </p>
              </div>
              <span className="text-blue-500 font-bold text-sm flex items-center gap-2 group-hover:translate-x-2 transition-transform cursor-pointer">
                Simular Crédito <ArrowRight size={14} />
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Chart & Status List Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* Chart (2/3) */}
        <div className="xl:col-span-2">
          <GMDChart />
        </div>

        {/* Lotes em Finalização (1/3) */}
        <div className="bg-white dark:bg-surface-dark rounded-2xl p-6 border border-gray-200 dark:border-border-dark shadow-lg flex flex-col h-[400px]">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
            <AlertTriangle className="text-yellow-500" size={20} />
            Lotes em Finalização
          </h3>
          <div className="flex-1 overflow-y-auto space-y-4 pr-2 custom-scrollbar">
            {/* Lote Item 1 */}
            <div className="bg-gray-50 dark:bg-surface-darker p-4 rounded-xl border-l-4 border-yellow-500">
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-bold text-gray-900 dark:text-white text-sm">
                  Lote #402 - Nelore
                </h4>
                <span className="text-[10px] font-bold bg-yellow-500/20 text-yellow-500 px-2 py-0.5 rounded uppercase">
                  Atenção
                </span>
              </div>
              <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mb-2">
                <span>Dias de Cocho: 98</span>
                <span>Peso Médio: 540kg</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-800 rounded-full h-1.5 mb-2">
                <div
                  className="bg-yellow-500 h-1.5 rounded-full"
                  style={{ width: '92%' }}
                ></div>
              </div>
              <p className="text-xs text-yellow-500 font-medium">
                Abate previsto em 5 dias.
              </p>
            </div>

            {/* Lote Item 2 */}
            <div className="bg-gray-50 dark:bg-surface-darker p-4 rounded-xl border-l-4 border-primary">
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-bold text-gray-900 dark:text-white text-sm">
                  Lote #389 - Angus
                </h4>
                <span className="text-[10px] font-bold bg-primary/20 text-primary px-2 py-0.5 rounded uppercase">
                  Programado
                </span>
              </div>
              <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mb-2">
                <span>Dias de Cocho: 110</span>
                <span>Peso Médio: 565kg</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-800 rounded-full h-1.5 mb-2">
                <div
                  className="bg-primary h-1.5 rounded-full"
                  style={{ width: '100%' }}
                ></div>
              </div>
              <p className="text-xs text-primary font-medium">
                Embarque agendado: Amanhã 06:00h.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Receivables Table */}
      <ReceivablesTable />
    </div>
  );
}
