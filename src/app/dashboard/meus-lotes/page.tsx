'use client';

import React, { useState } from 'react';
import {
  Package,
  MapPin,
  Scale,
  Calendar,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  Clock,
  Eye,
  Filter,
  ChevronDown,
  BarChart3,
} from 'lucide-react';

type Status = 'Em Engorda' | 'Finalização' | 'Aguardando Abate';

const lots = [
  {
    id: 'L-389',
    breed: 'Angus',
    heads: 450,
    entryDate: '15 Mar 2023',
    days: 110,
    avgWeight: 565,
    gmd: 1.82,
    gmdTarget: 1.6,
    status: 'Finalização' as Status,
    progress: 100,
    origin: 'MS - Campo Grande',
  },
  {
    id: 'L-402',
    breed: 'Nelore',
    heads: 380,
    entryDate: '02 Mai 2023',
    days: 98,
    avgWeight: 540,
    gmd: 1.65,
    gmdTarget: 1.6,
    status: 'Finalização' as Status,
    progress: 92,
    origin: 'GO - Goiânia',
  },
  {
    id: 'L-415',
    breed: 'Brangus',
    heads: 520,
    entryDate: '10 Jun 2023',
    days: 59,
    avgWeight: 480,
    gmd: 1.71,
    gmdTarget: 1.6,
    status: 'Em Engorda' as Status,
    progress: 55,
    origin: 'MT - Cuiabá',
  },
  {
    id: 'L-428',
    breed: 'Nelore',
    heads: 290,
    entryDate: '25 Jul 2023',
    days: 14,
    avgWeight: 390,
    gmd: 1.45,
    gmdTarget: 1.6,
    status: 'Em Engorda' as Status,
    progress: 13,
    origin: 'MG - Uberlândia',
  },
];

const statusStyles: Record<Status, string> = {
  'Em Engorda': 'bg-blue-500/20 text-blue-400 border-blue-500/30',
  Finalização: 'bg-yellow-500/20 text-yellow-500 border-yellow-500/30',
  'Aguardando Abate': 'bg-primary/20 text-primary border-primary/30',
};

const statusIcons: Record<Status, React.ReactNode> = {
  'Em Engorda': <TrendingUp size={12} />,
  Finalização: <AlertTriangle size={12} />,
  'Aguardando Abate': <CheckCircle size={12} />,
};

export default function MeusLotesPage() {
  const [view, setView] = useState<'grid' | 'list'>('grid');

  return (
    <div className="space-y-8 pb-12">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Meus Lotes
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Acompanhe o desempenho de todos os seus lotes em tempo real.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 rounded-xl border border-gray-200 dark:border-border-dark text-sm font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-surface-dark transition-colors">
            <Filter size={14} /> Filtrar
          </button>
          <div className="flex items-center bg-gray-100 dark:bg-surface-darker rounded-xl p-1 border border-gray-200 dark:border-border-dark">
            <button
              onClick={() => setView('grid')}
              className={`p-2 rounded-lg transition-colors ${view === 'grid' ? 'bg-white dark:bg-surface-dark shadow text-primary' : 'text-gray-400 hover:text-gray-600'}`}
            >
              <BarChart3 size={16} />
            </button>
            <button
              onClick={() => setView('list')}
              className={`p-2 rounded-lg transition-colors ${view === 'list' ? 'bg-white dark:bg-surface-dark shadow text-primary' : 'text-gray-400 hover:text-gray-600'}`}
            >
              <Package size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          {
            label: 'Total de Lotes',
            value: '12',
            sub: 'ativos',
            icon: <Package size={18} />,
            color: 'text-primary',
          },
          {
            label: 'Total de Cabeças',
            value: '4.200',
            sub: 'em confinamento',
            icon: <Scale size={18} />,
            color: 'text-blue-400',
          },
          {
            label: 'GMD Médio',
            value: '1.78 kg',
            sub: 'vs meta 1.6kg',
            icon: <TrendingUp size={18} />,
            color: 'text-primary',
          },
          {
            label: 'Em Finalização',
            value: '2 Lotes',
            sub: 'próximos ao abate',
            icon: <AlertTriangle size={18} />,
            color: 'text-yellow-500',
          },
        ].map((item, i) => (
          <div
            key={i}
            className="bg-white dark:bg-surface-dark rounded-2xl border border-gray-200 dark:border-border-dark shadow-lg p-5"
          >
            <div className={`${item.color} mb-3`}>{item.icon}</div>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">
              {item.value}
            </p>
            <p className="text-xs text-gray-500 mt-0.5">{item.label}</p>
            <p className="text-[10px] text-gray-400 mt-1">{item.sub}</p>
          </div>
        ))}
      </div>

      {/* Lots Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {lots.map((lot) => (
          <div
            key={lot.id}
            className="bg-white dark:bg-surface-dark rounded-2xl border border-gray-200 dark:border-border-dark shadow-lg p-6 hover:border-primary/30 transition-all duration-300 group"
          >
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                    Lote {lot.id}
                  </h3>
                  <span className="text-sm text-gray-500">— {lot.breed}</span>
                </div>
                <div className="flex items-center gap-1 text-xs text-gray-500">
                  <MapPin size={11} /> {lot.origin}
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span
                  className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-[10px] font-bold border ${statusStyles[lot.status]}`}
                >
                  {statusIcons[lot.status]}
                  {lot.status}
                </span>
                <button className="p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-surface-darker text-gray-400 hover:text-primary transition-colors">
                  <Eye size={14} />
                </button>
              </div>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-3 gap-3 mb-4">
              <div className="bg-gray-50 dark:bg-surface-darker rounded-xl p-3 text-center">
                <p className="text-[10px] text-gray-500 uppercase tracking-wide mb-1">
                  Cabeças
                </p>
                <p className="text-lg font-bold text-gray-900 dark:text-white">
                  {lot.heads}
                </p>
              </div>
              <div className="bg-gray-50 dark:bg-surface-darker rounded-xl p-3 text-center">
                <p className="text-[10px] text-gray-500 uppercase tracking-wide mb-1">
                  Dias Cocho
                </p>
                <p className="text-lg font-bold text-gray-900 dark:text-white">
                  {lot.days}
                </p>
              </div>
              <div className="bg-gray-50 dark:bg-surface-darker rounded-xl p-3 text-center">
                <p className="text-[10px] text-gray-500 uppercase tracking-wide mb-1">
                  Peso Médio
                </p>
                <p className="text-lg font-bold text-gray-900 dark:text-white">
                  {lot.avgWeight}kg
                </p>
              </div>
            </div>

            {/* GMD */}
            <div className="mb-4">
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-xs text-gray-500">GMD Atual</span>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-primary">
                    {lot.gmd} kg/dia
                  </span>
                  <span className="text-[10px] text-gray-500">
                    (Meta: {lot.gmdTarget} kg/dia)
                  </span>
                </div>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-800 rounded-full h-2">
                <div
                  className={`h-2 rounded-full ${lot.gmd >= lot.gmdTarget ? 'bg-primary' : 'bg-yellow-500'}`}
                  style={{ width: `${Math.min((lot.gmd / 2) * 100, 100)}%` }}
                ></div>
              </div>
            </div>

            {/* Progress */}
            <div className="mb-4">
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-xs text-gray-500">
                  Progresso do Ciclo
                </span>
                <span className="text-xs font-bold text-gray-900 dark:text-white">
                  {lot.progress}%
                </span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-800 rounded-full h-1.5">
                <div
                  className={`h-1.5 rounded-full ${
                    lot.progress >= 90
                      ? 'bg-yellow-500'
                      : lot.progress >= 50
                        ? 'bg-primary'
                        : 'bg-blue-500'
                  }`}
                  style={{ width: `${lot.progress}%` }}
                ></div>
              </div>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between pt-3 border-t border-gray-100 dark:border-gray-800">
              <div className="flex items-center gap-1 text-xs text-gray-500">
                <Calendar size={11} /> Entrada: {lot.entryDate}
              </div>
              <button className="text-xs font-bold text-primary hover:underline flex items-center gap-1">
                Ver Detalhes <ChevronDown size={12} className="-rotate-90" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
