'use client';

import { useState } from 'react';
import Image from 'next/image';
import {
  CheckCircle2,
  MapPin,
  Calendar,
  Droplets,
  ArrowRight,
  Save,
  Info,
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { cn } from '@/lib/utils';

export default function OnboardingPage() {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <div className="flex min-h-screen bg-surface-dark font-manrope">
      {/* Onboarding Sidebar */}
      <aside className="w-80 border-r border-surface-light p-8 flex flex-col fixed left-0 top-0 h-screen z-20 bg-surface-dark">
        <div className="flex items-center gap-2 mb-12">
          <div className="bg-primary/20 p-1.5 rounded-lg text-primary">
            <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center font-bold text-xs ring-1 ring-primary/50">
              G11
            </div>
          </div>
          <div className="leading-tight">
            <span className="font-bold text-lg text-white block">GADO11</span>
            <span className="text-[10px] text-primary font-bold uppercase tracking-widest px-1 rounded-sm">
              ONBOARDING
            </span>
          </div>
        </div>

        <div className="space-y-8 flex-1">
          <div>
            <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4 flex items-center gap-2">
              <Info size={14} /> Status do Processo
            </h3>

            <div className="space-y-6 relative ml-3 border-l border-surface-light pl-6">
              {/* Step 0 - Started */}
              <div className="relative">
                <span className="absolute -left-[31px] w-2.5 h-2.5 rounded-full bg-primary ring-4 ring-surface-dark"></span>
                <h4 className="font-bold text-white text-sm">Iniciado</h4>
                <p className="text-[10px] text-gray-500 mt-1 leading-relaxed">
                  Você iniciou o processo de homologação.
                </p>
              </div>

              {/* Step 1 */}
              <div className="relative">
                <span
                  className={cn(
                    'absolute -left-[31px] w-2.5 h-2.5 rounded-full ring-4 ring-surface-dark',
                    activeStep >= 1 ? 'bg-primary' : 'bg-gray-600',
                  )}
                ></span>
                <h4
                  className={cn(
                    'font-bold text-sm',
                    activeStep >= 1 ? 'text-primary' : 'text-gray-400',
                  )}
                >
                  1. Dados da Propriedade
                </h4>
                <p className="text-[10px] text-gray-500 mt-1">
                  Informações básicas e geolocalização.
                </p>
              </div>

              {/* Step 2 */}
              <div className="relative">
                <span
                  className={cn(
                    'absolute -left-[31px] w-2.5 h-2.5 rounded-full ring-4 ring-surface-dark',
                    activeStep >= 2 ? 'bg-primary' : 'bg-gray-600',
                  )}
                ></span>
                <h4
                  className={cn(
                    'font-bold text-sm',
                    activeStep >= 2 ? 'text-primary' : 'text-gray-400',
                  )}
                >
                  2. Documentação Legal
                </h4>
                <p className="text-[10px] text-gray-500 mt-1">
                  Licenças e contratos.
                </p>
              </div>

              {/* Step 3 */}
              <div className="relative">
                <span
                  className={cn(
                    'absolute -left-[31px] w-2.5 h-2.5 rounded-full ring-4 ring-surface-dark',
                    activeStep >= 3 ? 'bg-primary' : 'bg-gray-600',
                  )}
                ></span>
                <h4
                  className={cn(
                    'font-bold text-sm',
                    activeStep >= 3 ? 'text-primary' : 'text-gray-400',
                  )}
                >
                  3. Capacidade Técnica
                </h4>
                <p className="text-[10px] text-gray-500 mt-1">
                  Volume e estrutura.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Box */}
        <div className="bg-surface-light/30 rounded-xl p-4 border border-surface-light/50">
          <h4 className="text-white text-xs font-bold mb-3 flex items-center gap-2">
            <CheckCircle2 size={14} className="text-primary" /> Benefícios G11
          </h4>
          <ul className="space-y-2">
            <li className="text-[10px] text-gray-400 flex items-center gap-2">
              <span className="text-primary">✓</span> Acesso a crédito barato
            </li>
            <li className="text-[10px] text-gray-400 flex items-center gap-2">
              <span className="text-primary">✓</span> Compra coletiva de insumos
            </li>
            <li className="text-[10px] text-gray-400 flex items-center gap-2">
              <span className="text-primary">✓</span> Venda antecipada (Arroba
              Futura)
            </li>
          </ul>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-80 p-12 max-w-5xl">
        {/* Top Header */}
        <div className="flex items-center justify-between mb-8 border-b border-surface-light pb-6">
          {/* Progress Stepper Top */}
          <div className="flex items-center gap-4 w-full max-w-2xl">
            {/* Creating the visual top stepper from image 3 would be redundant with sidebar, but let's just put breadcrumbs/title */}
            <div className="flex items-center gap-2 text-sm text-gray-500 font-bold uppercase tracking-wider">
              <span className="text-primary">Dados da Propriedade</span>
              <span className="text-gray-700">/</span>
              <span>Documentação</span>
              <span className="text-gray-700">/</span>
              <span>Capacidade</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-xs font-bold text-gray-500">Suporte</span>
            <div className="flex items-center gap-2 pl-4 border-l border-surface-light">
              <div className="text-right">
                <p className="text-xs font-bold text-white">
                  Confinamento Sta. Fé
                </p>
                <p className="text-[10px] text-yellow-500">Em Homologação</p>
              </div>
              <div className="w-8 h-8 rounded-full bg-gray-700 overflow-hidden">
                <img src="https://ui-avatars.com/api/?name=Sta+Fe" alt="User" />
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-2 mb-8">
          <h1 className="text-3xl font-bold text-white">
            Dados da Propriedade
          </h1>
          <p className="text-gray-400 text-sm">
            Precisamos entender onde sua operação está localizada para conectar
            com os fornecedores regionais.
          </p>
        </div>

        <div className="space-y-6">
          {/* Localização e Estrutura Card */}
          <div className="bg-surface-light/20 border border-surface-light rounded-2xl p-8">
            <h2 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <MapPin className="text-primary" size={20} /> Localização e
              Estrutura
            </h2>

            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  label="Nome da Fazenda / Confinamento"
                  placeholder="Confinamento Santa Fé"
                  defaultValue="Confinamento Santa Fé"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input label="Área Total (Hectares)" placeholder="0 ha" />
                <Input
                  label="Capacidade Estática (Cabeças)"
                  placeholder="0 cab"
                />
              </div>
              <Input
                label="Endereço Completo"
                placeholder="Rodovia, KM, Cidade, Estado"
              />

              {/* Map Placeholder */}
              <div className="w-full h-48 rounded-xl bg-surface-dark border-2 border-dashed border-surface-light flex flex-col items-center justify-center text-gray-500 gap-2 hover:border-primary/50 hover:text-primary transition-colors cursor-pointer group">
                <div className="bg-surface-light p-3 rounded-full group-hover:bg-primary/20 transition-colors">
                  <MapPin size={24} />
                </div>
                <span className="text-xs font-bold">Confirmar Pin no Mapa</span>
              </div>
            </div>
          </div>

          {/* Regularidade Ambiental Card */}
          <div className="bg-surface-light/20 border border-surface-light rounded-2xl p-8">
            <h2 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <span className="text-primary">🌿</span> Regularidade Ambiental
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <Input
                label="Número CAR (Cadastro Ambiental Rural)"
                placeholder="XX-0000000-0000..."
              />
              <div className="relative">
                <Input
                  label="Licença de Operação (Vigência)"
                  placeholder="mm/dd/yyyy"
                  rightIcon={<Calendar size={16} />}
                />
              </div>
            </div>
            <p className="text-[10px] text-primary font-bold flex items-center gap-1.5 mt-[-10px]">
              <CheckCircle2 size={12} /> Validação automática na base do Sicar
            </p>

            <div className="mt-8">
              <label className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-4 block">
                Infraestrutura Hídrica
              </label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {['Outorga de Água', 'Poço Artesiano', 'Represa / Açude'].map(
                  (item) => (
                    <label
                      key={item}
                      className="flex items-center gap-3 p-4 bg-surface-dark border border-surface-light rounded-xl cursor-pointer hover:border-primary/50 transition-colors group"
                    >
                      <div className="w-5 h-5 rounded border border-gray-600 bg-surface-light group-hover:border-primary flex items-center justify-center">
                        {/* Checkbox simulated state */}
                      </div>
                      <span className="text-sm text-gray-300 font-medium group-hover:text-white">
                        {item}
                      </span>
                    </label>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Actions Footer */}
        <div className="flex items-center justify-between mt-12 pt-8 border-t border-surface-light">
          <Button variant="outline" className="gap-2">
            <Save size={16} /> Salvar Rascunho
          </Button>
          <Button variant="primary" className="gap-2">
            Próximo: Documentos <ArrowRight size={16} />
          </Button>
        </div>
      </main>
    </div>
  );
}
