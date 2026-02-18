'use client';

import React, { useState } from 'react';
import {
  TrendingUp,
  Zap,
  Shield,
  Sun,
  Bike,
  ArrowRight,
  MessageCircle,
  BookOpen,
  ChevronRight,
  Lock,
} from 'lucide-react';

const creditCards = [
  {
    id: 1,
    badge: 'PRÉ-APROVADO',
    badgeColor: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
    icon: <Bike size={22} className="text-primary" />,
    title: 'Custeio Pecuário',
    value: 'R$ 7.5M',
    growth: '+12%',
    description: 'Para aquisição de insumos, ração e despesas operacionais.',
    cta: 'Solicitar Custeio',
    ctaStyle: 'border border-primary/50 text-primary hover:bg-primary/10',
  },
  {
    id: 2,
    badge: 'PRÉ-APROVADO',
    badgeColor: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
    icon: <Sun size={22} className="text-primary" />,
    title: 'Infraestrutura (Capex)',
    value: 'R$ 2.8M',
    growth: null,
    description: 'Financiamento para painéis solares, maquinário e reformas.',
    cta: 'Expandir Infra',
    ctaStyle: 'border border-primary/50 text-primary hover:bg-primary/10',
  },
  {
    id: 3,
    badge: 'IMEDIATO',
    badgeColor: 'bg-primary/20 text-primary border-primary/30',
    icon: <Zap size={22} className="text-primary" />,
    title: 'Capital de Giro',
    value: 'R$ 1.2M',
    growth: null,
    subLabel: 'Disp. Hoje',
    description:
      'Antecipação de diárias e fluxo de caixa rápido para o parceiro.',
    cta: 'Resgatar Agora',
    ctaStyle:
      'bg-primary text-surface-darker hover:bg-primary-hover shadow-[0_0_15px_rgba(19,236,91,0.3)]',
  },
];

const productCategories = [
  {
    id: 1,
    title: 'Custeio Pecuário',
    description:
      'Linha rotativa para compra de ração, medicamentos e CPR Física.',
    detail: 'Taxas a partir de CDI + 2%',
    image:
      'https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=400&h=200&fit=crop',
    icon: <Bike size={18} className="text-primary" />,
  },
  {
    id: 2,
    title: 'Infra & Energia',
    description:
      'Financiamento de usinas solares e maquinário pesado para o confinamento.',
    detail: 'Carência de até 12 meses',
    image:
      'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400&h=200&fit=crop',
    icon: <Sun size={18} className="text-primary" />,
  },
  {
    id: 3,
    title: 'Antecipação',
    description: 'Receba suas diárias de engorda à vista. Liquidez imediata.',
    detail: 'Sem burocracia',
    image:
      'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=200&fit=crop',
    icon: <Zap size={18} className="text-primary" />,
  },
  {
    id: 4,
    title: 'Seguros & Hedge',
    description:
      'Proteção contra mortalidade e trava de preços da arroba futura.',
    detail: 'Parceria com seguradoras',
    image:
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400&h=200&fit=crop',
    icon: <Shield size={18} className="text-primary" />,
  },
];

export default function FinanceiroPage() {
  const [sliderValue, setSliderValue] = useState(5000);

  return (
    <div className="space-y-8 pb-12">
      {/* Simulador de Crédito */}
      <section className="bg-white dark:bg-surface-dark rounded-2xl border border-gray-200 dark:border-border-dark shadow-lg p-6 lg:p-8">
        <div className="flex items-start justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              Simulador de Crédito Dinâmico
            </h1>
            <p className="text-sm text-gray-500 mt-1">
              Arraste o slider para estimar seu potencial de crédito baseado no
              volume de gado.
            </p>
          </div>
          <span className="flex items-center gap-2 px-3 py-1.5 bg-primary/10 border border-primary/20 rounded-full text-xs font-bold text-primary">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            Análise em Tempo Real
          </span>
        </div>

        {/* Slider */}
        <div className="bg-gray-50 dark:bg-surface-darker rounded-xl p-6 border border-gray-200 dark:border-border-dark mb-6">
          <div className="flex items-center justify-between mb-4">
            <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">
              Quantidade de Cabeças Gado 11 em Engorda
            </p>
            <p className="text-xl font-bold text-primary">
              {sliderValue.toLocaleString('pt-BR')} cabeças
            </p>
          </div>
          <input
            type="range"
            min="0"
            max="10000"
            value={sliderValue}
            onChange={(e) => setSliderValue(Number(e.target.value))}
            className="w-full accent-primary h-2 cursor-pointer"
          />
          <div className="flex justify-between text-xs text-gray-500 mt-2">
            <span>0</span>
            <span>2.500</span>
            <span>5.000</span>
            <span>7.500</span>
            <span>10.000+</span>
          </div>
        </div>

        {/* Credit Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {creditCards.map((card) => (
            <div
              key={card.id}
              className="bg-gray-50 dark:bg-surface-darker rounded-xl p-5 border border-gray-200 dark:border-border-dark hover:border-primary/30 transition-colors"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                  {card.icon}
                </div>
                <span
                  className={`text-[10px] font-bold px-2 py-0.5 rounded border ${card.badgeColor}`}
                >
                  {card.badge}
                </span>
              </div>
              <p className="text-xs text-gray-500 mb-1">{card.title}</p>
              <div className="flex items-baseline gap-2 mb-1">
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {card.value}
                </p>
                {card.growth && (
                  <span className="text-xs font-bold text-primary flex items-center gap-0.5">
                    <TrendingUp size={12} /> {card.growth}
                  </span>
                )}
                {card.subLabel && (
                  <span className="text-xs text-gray-500">{card.subLabel}</span>
                )}
              </div>
              <p className="text-xs text-gray-500 mb-4 leading-relaxed">
                {card.description}
              </p>
              <button
                className={`w-full py-2.5 rounded-xl text-sm font-bold transition-colors ${card.ctaStyle}`}
              >
                {card.cta}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Categorias de Produtos */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
            <span className="w-1 h-6 bg-primary rounded-full inline-block"></span>
            Categorias de Produtos
          </h2>
          <button className="text-sm text-primary font-bold hover:underline flex items-center gap-1">
            Ver todos os produtos <ArrowRight size={14} />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
          {productCategories.map((cat) => (
            <div
              key={cat.id}
              className="bg-white dark:bg-surface-dark rounded-2xl border border-gray-200 dark:border-border-dark shadow-lg overflow-hidden hover:border-primary/50 transition-all duration-300 group cursor-pointer"
            >
              <div className="relative h-36 overflow-hidden">
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
                />
                <div className="absolute bottom-3 left-3">
                  <div className="w-8 h-8 bg-surface-darker/80 backdrop-blur-sm rounded-lg flex items-center justify-center border border-primary/20">
                    {cat.icon}
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-gray-900 dark:text-white mb-1">
                  {cat.title}
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed mb-3">
                  {cat.description}
                </p>
                <p className="text-xs text-gray-400">{cat.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-surface-dark rounded-2xl border border-gray-200 dark:border-border-dark shadow-lg p-6 flex items-start gap-4">
          <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
            <BookOpen size={22} className="text-primary" />
          </div>
          <div>
            <h3 className="font-bold text-gray-900 dark:text-white mb-1">
              Dúvidas sobre o CPR?
            </h3>
            <p className="text-sm text-gray-500 mb-3">
              Entenda como funciona a Cédula de Produto Rural Digital.
            </p>
            <button className="text-sm font-bold text-primary hover:underline flex items-center gap-1">
              Ler Guia Completo <ChevronRight size={14} />
            </button>
          </div>
        </div>

        <div className="bg-white dark:bg-surface-dark rounded-2xl border border-gray-200 dark:border-border-dark shadow-lg p-6 flex items-start gap-4">
          <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
            <MessageCircle size={22} className="text-primary" />
          </div>
          <div>
            <h3 className="font-bold text-gray-900 dark:text-white mb-1">
              Suporte Financeiro
            </h3>
            <p className="text-sm text-gray-500 mb-3">
              Nossa mesa de operações está disponível das 08h às 18h.
            </p>
            <button className="text-sm font-bold text-primary hover:underline flex items-center gap-1">
              Chamar no WhatsApp <ChevronRight size={14} />
            </button>
          </div>
        </div>
      </div>

      {/* Limite Global */}
      <div className="bg-white dark:bg-surface-dark rounded-2xl border border-gray-200 dark:border-border-dark shadow-lg p-6">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <Lock size={16} className="text-primary" />
            <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">
              Seu Limite Global
            </span>
          </div>
          <span className="text-xs text-gray-500">/ R$ 10M</span>
        </div>
        <p className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          R$ 4.2M
        </p>
        <div className="w-full bg-gray-200 dark:bg-gray-800 rounded-full h-2 mb-2">
          <div
            className="bg-primary h-2 rounded-full"
            style={{ width: '42%' }}
          ></div>
        </div>
        <p className="text-xs text-gray-500">
          Você utilizou 42% do seu limite pré-aprovado baseado em 12.000
          cabeças.
        </p>
      </div>
    </div>
  );
}
