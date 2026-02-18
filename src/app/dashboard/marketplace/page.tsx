'use client';

import React, { useState } from 'react';
import {
  Search,
  ShoppingCart,
  Filter,
  Star,
  Clock,
  Plus,
  ChevronDown,
  Zap,
} from 'lucide-react';

const categories = ['Nutrição', 'Saúde Animal', 'Infraestrutura', 'Máquinas'];
const suppliers = ['Tortuga (Homologado)', 'Premix (Homologado)', 'Zoetis'];

const products = [
  {
    id: 1,
    badge: 'HOMOLOGADO',
    badgeColor: 'bg-primary/20 text-primary border-primary/20',
    supplier: 'Tortuga',
    deliveryDays: 2,
    name: 'Fosbovi 30 - Núcleo Mineral Concentrado',
    protein: 'N/A',
    packaging: 'Saco 30kg',
    use: null,
    originalPrice: null,
    price: 'R$ 145,00',
    priceUnit: '',
    image:
      'https://images.unsplash.com/photo-1560493676-04071c5f467b?w=400&h=300&fit=crop',
  },
  {
    id: 2,
    badge: 'PROMOÇÃO',
    badgeColor: 'bg-yellow-500/20 text-yellow-500 border-yellow-500/20',
    supplier: 'Cargill',
    deliveryDays: 5,
    name: 'Ração Confinamento Pro Grão Inteiro',
    protein: '18%',
    packaging: 'Big Bag',
    use: null,
    originalPrice: 'R$ 2.100,00',
    price: 'R$ 1.950,00',
    priceUnit: '/ton',
    image:
      'https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=400&h=300&fit=crop',
  },
  {
    id: 3,
    badge: 'NOVO',
    badgeColor: 'bg-blue-500/20 text-blue-400 border-blue-500/20',
    supplier: 'DSM',
    deliveryDays: 10,
    name: 'Premix Vitamínico Master Beef',
    protein: null,
    packaging: 'Saco 25kg',
    use: 'Recria',
    originalPrice: null,
    price: 'R$ 89,90',
    priceUnit: '',
    image:
      'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=400&h=300&fit=crop',
  },
  {
    id: 4,
    badge: 'NOVO',
    badgeColor: 'bg-blue-500/20 text-blue-400 border-blue-500/20',
    supplier: 'John Deere',
    deliveryDays: 45,
    name: 'Kit Manutenção Preventiva Colheitadeira',
    protein: null,
    packaging: null,
    use: null,
    category: 'Peças',
    compatible: 'Série S',
    originalPrice: null,
    price: 'R$ 3.200,00',
    priceUnit: '',
    image:
      'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=400&h=300&fit=crop',
  },
];

export default function MarketplacePage() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([
    'Nutrição',
  ]);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleCategory = (cat: string) => {
    setSelectedCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat],
    );
  };

  return (
    <div className="flex gap-0 -m-4 lg:-m-8 min-h-full">
      {/* Sidebar Filtros */}
      <aside className="w-56 bg-white dark:bg-surface-darker border-r border-gray-200 dark:border-border-dark p-6 flex-shrink-0 hidden lg:block">
        <div className="flex items-center gap-2 mb-6">
          <Filter size={16} className="text-gray-500" />
          <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">
            Filtros
          </span>
        </div>

        {/* Categorias */}
        <div className="mb-6">
          <p className="text-xs font-bold text-gray-700 dark:text-gray-300 mb-3">
            Categorias
          </p>
          <div className="space-y-2">
            {categories.map((cat) => (
              <label
                key={cat}
                className="flex items-center gap-2 cursor-pointer group"
              >
                <input
                  type="checkbox"
                  checked={selectedCategories.includes(cat)}
                  onChange={() => toggleCategory(cat)}
                  className="w-4 h-4 rounded border-gray-300 dark:border-gray-600 text-primary focus:ring-primary"
                />
                <span className="text-sm text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                  {cat}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Fornecedor */}
        <div className="mb-6">
          <p className="text-xs font-bold text-gray-700 dark:text-gray-300 mb-3">
            Fornecedor
          </p>
          <div className="space-y-2">
            {suppliers.map((sup) => (
              <label
                key={sup}
                className="flex items-center gap-2 cursor-pointer group"
              >
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded border-gray-300 dark:border-gray-600 text-primary focus:ring-primary"
                />
                <span className="text-sm text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                  {sup}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Prazo Entrega */}
        <div className="mb-6">
          <p className="text-xs font-bold text-gray-700 dark:text-gray-300 mb-3">
            Prazo Entrega
          </p>
          <div className="flex justify-between text-xs text-gray-500 mb-2">
            <span>Hoje</span>
            <span>30 dias</span>
          </div>
          <input
            type="range"
            min="0"
            max="30"
            defaultValue="15"
            className="w-full accent-primary"
          />
        </div>

        {/* Suporte */}
        <div className="mt-auto pt-6 border-t border-gray-200 dark:border-border-dark">
          <div className="bg-primary/10 border border-primary/20 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <Zap size={14} className="text-primary" />
              <span className="text-xs font-bold text-primary">
                Suporte G11
              </span>
            </div>
            <p className="text-xs text-gray-500 mb-2">
              Dúvidas sobre insumos? Fale com nosso zootecnista.
            </p>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 p-4 lg:p-8 overflow-y-auto">
        {/* Top Bar */}
        <div className="flex items-center gap-4 mb-6">
          <div className="relative flex-1 max-w-xl">
            <Search
              size={16}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />
            <input
              type="text"
              placeholder="O que seu confinamento precisa hoje? (ex: Núcleo Mineral, Vacinas...)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white dark:bg-surface-darker border border-gray-200 dark:border-border-dark rounded-xl pl-9 pr-4 py-2.5 text-sm text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
            />
          </div>
          <button className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-gray-200 dark:border-border-dark text-sm font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-surface-dark transition-colors">
            Ajuda
          </button>
          <button className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-gray-200 dark:border-border-dark text-sm font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-surface-dark transition-colors">
            Pedidos
          </button>
        </div>

        {/* Pool Ativo Banner */}
        <div className="relative overflow-hidden rounded-2xl border border-border-dark bg-surface-dark mb-8 group cursor-pointer">
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=1200&h=400&fit=crop"
              alt="Pool Ativo"
              className="w-full h-full object-cover opacity-20 group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-linear-to-r from-surface-darker via-surface-darker/90 to-transparent"></div>
          </div>
          <div className="relative z-10 p-6 lg:p-8">
            <div className="flex items-center gap-3 mb-3">
              <span className="inline-flex items-center gap-2 px-3 py-1 bg-primary/20 border border-primary/30 rounded-full text-xs font-bold text-primary">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                POOL ATIVO
              </span>
              <span className="text-sm text-gray-400 flex items-center gap-1">
                <Clock size={14} /> Encerra em 04:23:12
              </span>
            </div>
            <h2 className="text-3xl font-bold text-white mb-2">
              Farelo de Milho 30%
            </h2>
            <p className="text-gray-400 mb-5 max-w-lg">
              Junte-se ao pool de parceiros Gado11 e garanta preço de atacado
              direto da indústria. Lote mínimo de 5 toneladas.
            </p>
            <div className="flex items-center gap-6">
              <div className="flex-1 max-w-sm">
                <div className="flex justify-between text-xs text-gray-400 mb-1.5">
                  <span>Volume Atual: 1.250 ton</span>
                  <span className="text-primary font-bold">
                    Meta: 2.000 ton
                  </span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-primary h-2 rounded-full"
                    style={{ width: '62%' }}
                  ></div>
                </div>
                <div className="flex justify-between text-xs mt-1.5">
                  <span className="text-gray-500">62% da meta atingida</span>
                  <span className="text-primary font-bold">
                    15% OFF Confirmado
                  </span>
                </div>
              </div>
              <button className="flex items-center gap-2 px-6 py-3 bg-primary text-surface-darker font-bold rounded-xl hover:bg-primary-hover transition-colors shadow-[0_0_20px_rgba(19,236,91,0.3)] whitespace-nowrap">
                Entrar no Pool →
              </button>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white">
            Destaques Nutrição{' '}
            <span className="text-sm font-normal text-gray-500">84 itens</span>
          </h3>
          <button className="flex items-center gap-1 text-sm text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors">
            Ordenar por:{' '}
            <span className="font-bold text-gray-900 dark:text-white ml-1">
              Relevância
            </span>
            <ChevronDown size={14} />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white dark:bg-surface-dark rounded-2xl border border-gray-200 dark:border-border-dark shadow-lg overflow-hidden hover:border-primary/50 transition-all duration-300 group cursor-pointer"
            >
              <div className="relative h-44 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                  <span
                    className={`inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold border ${product.badgeColor}`}
                  >
                    {product.badge}
                  </span>
                </div>
              </div>

              <div className="p-4">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs text-gray-500 font-medium">
                    {product.supplier}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-gray-500">
                    <Clock size={11} /> {product.deliveryDays} dias
                  </span>
                </div>
                <h4 className="font-bold text-gray-900 dark:text-white text-sm mb-3 leading-snug">
                  {product.name}
                </h4>

                <div className="flex gap-4 mb-3">
                  {product.protein && (
                    <div>
                      <p className="text-[10px] text-gray-500 uppercase tracking-wide">
                        Proteína
                      </p>
                      <p className="text-xs font-bold text-gray-900 dark:text-white">
                        {product.protein}
                      </p>
                    </div>
                  )}
                  {product.packaging && (
                    <div>
                      <p className="text-[10px] text-gray-500 uppercase tracking-wide">
                        Embalagem
                      </p>
                      <p className="text-xs font-bold text-gray-900 dark:text-white">
                        {product.packaging}
                      </p>
                    </div>
                  )}
                  {product.use && (
                    <div>
                      <p className="text-[10px] text-gray-500 uppercase tracking-wide">
                        Uso
                      </p>
                      <p className="text-xs font-bold text-gray-900 dark:text-white">
                        {product.use}
                      </p>
                    </div>
                  )}
                  {product.category && (
                    <div>
                      <p className="text-[10px] text-gray-500 uppercase tracking-wide">
                        Categoria
                      </p>
                      <p className="text-xs font-bold text-gray-900 dark:text-white">
                        {product.category}
                      </p>
                    </div>
                  )}
                  {product.compatible && (
                    <div>
                      <p className="text-[10px] text-gray-500 uppercase tracking-wide">
                        Compatível
                      </p>
                      <p className="text-xs font-bold text-gray-900 dark:text-white">
                        {product.compatible}
                      </p>
                    </div>
                  )}
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[10px] text-gray-500">Preço unitário</p>
                    {product.originalPrice && (
                      <p className="text-xs text-gray-400 line-through">
                        {product.originalPrice}
                      </p>
                    )}
                    <p className="text-base font-bold text-primary">
                      {product.price}
                      <span className="text-xs font-normal text-gray-500">
                        {product.priceUnit}
                      </span>
                    </p>
                  </div>
                  <button className="w-9 h-9 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-surface-darker transition-colors">
                    <ShoppingCart size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
