import {
  Building2,
  Wallet,
  TrendingUp,
  AlertTriangle,
  ArrowRight,
  ShoppingCart,
  Zap,
  Bell,
} from 'lucide-react';
import { GMDChart } from '@/components/dashboard/GMDChart';
import { ReceivablesTable } from '@/components/dashboard/ReceivablesTable';
import { Button } from '@/components/ui/Button';

export default function DashboardPage() {
  return (
    <div className="space-y-8 p-8 max-w-[1600px] mx-auto">
      {/* Header Metrics */}
      <header className="flex flex-col xl:flex-row items-start xl:items-center justify-between gap-6 bg-surface-light/30 border border-surface-light rounded-2xl p-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-6 hidden xl:block">
          <button className="relative text-gray-400 hover:text-white transition-colors">
            <Bell size={20} />
            <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full border-2 border-surface-dark"></span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full xl:w-auto xl:divide-x xl:divide-surface-light">
          <div className="flex items-center gap-4 px-4">
            <div className="bg-primary/20 p-3 rounded-xl text-primary">
              <Building2 size={24} />
            </div>
            <div>
              <p className="text-[10px] uppercase font-bold text-gray-500 tracking-wider">
                Lotes sob Custódia
              </p>
              <h2 className="text-2xl font-bold text-white">12 Lotes</h2>
              <p className="text-xs text-gray-400">4.200 cabeças</p>
            </div>
          </div>
          <div className="flex items-center gap-4 px-4">
            <div className="bg-green-500/20 p-3 rounded-xl text-green-500">
              <Wallet size={24} />
            </div>
            <div>
              <p className="text-[10px] uppercase font-bold text-gray-500 tracking-wider">
                Saldo Escrow
              </p>
              <h2 className="text-2xl font-bold text-white">R$ 1.450.000,00</h2>
            </div>
          </div>
          <div className="flex items-center gap-4 px-4">
            <div className="bg-blue-500/20 p-3 rounded-xl text-blue-500">
              <TrendingUp size={24} />
            </div>
            <div>
              <p className="text-[10px] uppercase font-bold text-gray-500 tracking-wider">
                Capacidade Ocupada
              </p>
              <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                82%{' '}
                <span className="text-[10px] bg-green-500/20 text-green-500 px-1.5 py-0.5 rounded-full">
                  🟢
                </span>
              </h2>
            </div>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        {/* Main Column */}
        <div className="xl:col-span-2 space-y-8">
          {/* Action Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Marketplace Card */}
            <div className="bg-surface-light/30 border border-surface-light rounded-2xl p-6 relative overflow-hidden group hover:border-primary/50 transition-colors">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
              <div className="relative z-10">
                <div className="bg-primary/20 w-fit p-2 rounded-lg text-primary mb-4">
                  <ShoppingCart size={20} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Marketplace de Insumos
                </h3>
                <p className="text-sm text-gray-400 mb-6">
                  Aproveite descontos em nutrição e saúde.
                </p>
                <Button variant="primary" className="h-10 text-sm px-4">
                  Acessar Loja <ArrowRight size={16} className="ml-2" />
                </Button>
              </div>
            </div>

            {/* Credit Card */}
            <div className="bg-surface-light/30 border border-surface-light rounded-2xl p-6 relative overflow-hidden group hover:border-blue-500/50 transition-colors">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
              <div className="relative z-10">
                <div className="bg-blue-500/20 w-fit p-2 rounded-lg text-blue-500 mb-4">
                  <Zap size={20} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Linhas de Crédito MADCAP
                </h3>
                <p className="text-sm text-gray-400 mb-6">
                  Financie sua operação com arroba futura.
                </p>
                <Button className="h-10 text-sm px-4 bg-blue-600 hover:bg-blue-500 text-white shadow-blue-500/20">
                  Simular Crédito <ArrowRight size={16} className="ml-2" />
                </Button>
              </div>
            </div>
          </div>

          <GMDChart />

          <ReceivablesTable />
        </div>

        {/* Right Column - Status Lists */}
        <div className="space-y-6">
          <div className="bg-surface-light/30 border border-surface-light rounded-2xl p-6 h-full">
            <h3 className="text-lg font-bold text-white flex items-center gap-2 mb-6">
              <span className="text-yellow-500">
                <AlertTriangle size={20} />
              </span>{' '}
              Lotes em Finalização
            </h3>

            <div className="space-y-4">
              {/* Lote Item 1 */}
              <div className="bg-surface-dark border-l-4 border-yellow-500 rounded-r-xl p-4 relative group hover:bg-surface-light/50 transition-colors">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="font-bold text-white">Lote #402 - Nelore</h4>
                    <p className="text-[10px] text-gray-400 mt-1">
                      Dias de Cocho: 98 • Peso Médio: 540kg
                    </p>
                  </div>
                  <span className="bg-yellow-500/20 text-yellow-500 text-[10px] font-bold uppercase px-2 py-0.5 rounded">
                    Atenção
                  </span>
                </div>
                <div className="w-full bg-gray-700 h-1.5 rounded-full mt-3 overflow-hidden">
                  <div className="bg-yellow-500 h-full w-[90%]"></div>
                </div>
                <p className="text-[10px] text-yellow-500 font-bold mt-2">
                  Abate previsto em 5 dias.
                </p>
              </div>

              {/* Lote Item 2 */}
              <div className="bg-surface-dark border-l-4 border-primary rounded-r-xl p-4 relative group hover:bg-surface-light/50 transition-colors">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="font-bold text-white">Lote #389 - Angus</h4>
                    <p className="text-[10px] text-gray-400 mt-1">
                      Dias de Cocho: 110 • Peso Médio: 565kg
                    </p>
                  </div>
                  <span className="bg-primary/20 text-primary text-[10px] font-bold uppercase px-2 py-0.5 rounded">
                    Programado
                  </span>
                </div>
                <div className="w-full bg-gray-700 h-1.5 rounded-full mt-3 overflow-hidden">
                  <div className="bg-primary h-full w-[100%]"></div>
                </div>
                <p className="text-[10px] text-primary font-bold mt-2">
                  Embarque agendado: Amanhã 06:00h.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
