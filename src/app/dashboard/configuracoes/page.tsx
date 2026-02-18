'use client';

import React, { useState } from 'react';
import {
  Save,
  X,
  MapPin,
  Upload,
  CheckCircle,
  Users,
  Plus,
  Edit,
  Trash2,
  Wifi,
  WifiOff,
  Eye,
  EyeOff,
  Building2,
  Shield,
} from 'lucide-react';

const teamMembers = [
  {
    id: 1,
    initials: 'RM',
    name: 'Roberto Mendes',
    email: 'roberto@santafe.com',
    role: 'Gerente Geral',
    roleColor: 'bg-primary/20 text-primary border-primary/30',
    status: 'Ativo',
    permissions: ['admin', 'finance', 'ops'],
  },
  {
    id: 2,
    name: 'Dra. Ana Costa',
    email: 'ana.vet@santafe.com',
    role: 'Veterinário Chefe',
    roleColor: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
    status: 'Ativo',
    permissions: ['ops', 'health'],
    avatar: 'https://i.pravatar.cc/40?img=5',
  },
  {
    id: 3,
    initials: 'JS',
    name: 'João Silva',
    email: 'joao.op@santafe.com',
    role: 'Operador',
    roleColor: 'bg-gray-500/20 text-gray-400 border-gray-500/30',
    status: 'Pendente',
    permissions: ['ops'],
  },
];

const permissionIcons: Record<string, string> = {
  admin: 'A',
  finance: 'F',
  ops: 'O',
  health: 'H',
};

export default function ConfiguracoesPage() {
  const [balancaEnabled, setBalancaEnabled] = useState(true);
  const [cochosEnabled, setCochosEnabled] = useState(false);
  const [showApiKey, setShowApiKey] = useState(false);

  return (
    <div className="space-y-8 pb-12">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Configurações do Parceiro
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Gerencie as informações do Confinamento Santa Fé
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 rounded-xl border border-gray-200 dark:border-border-dark text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-surface-dark transition-colors text-sm font-medium">
            <X size={16} /> Cancelar
          </button>
          <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-primary text-surface-darker font-bold hover:bg-primary-hover transition-colors text-sm shadow-[0_0_15px_rgba(19,236,91,0.2)]">
            <Save size={16} /> Salvar Alterações
          </button>
        </div>
      </div>

      {/* Dados da Propriedade */}
      <section className="bg-white dark:bg-surface-dark rounded-2xl border border-gray-200 dark:border-border-dark shadow-lg p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
            <MapPin size={20} />
          </div>
          <div>
            <h2 className="text-lg font-bold text-gray-900 dark:text-white">
              Dados da Propriedade
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div>
            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
              Capacidade (CAP)
            </label>
            <div className="relative">
              <input
                type="number"
                defaultValue="15000"
                className="w-full bg-gray-50 dark:bg-surface-darker border border-gray-200 dark:border-border-dark rounded-xl px-4 py-3 text-gray-900 dark:text-white font-medium focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-gray-500 font-medium">
                cabeças
              </span>
            </div>
          </div>
          <div>
            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
              Localização GPS — Latitude
            </label>
            <div className="relative">
              <MapPin
                size={16}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-primary"
              />
              <input
                type="text"
                defaultValue="-15.7975"
                className="w-full bg-gray-50 dark:bg-surface-darker border border-gray-200 dark:border-border-dark rounded-xl pl-9 pr-4 py-3 text-gray-900 dark:text-white font-medium focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
              />
            </div>
          </div>
          <div>
            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
              Localização GPS — Longitude
            </label>
            <div className="relative">
              <MapPin
                size={16}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-primary"
              />
              <input
                type="text"
                defaultValue="-47.8919"
                className="w-full bg-gray-50 dark:bg-surface-darker border border-gray-200 dark:border-border-dark rounded-xl pl-9 pr-4 py-3 text-gray-900 dark:text-white font-medium focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
              />
            </div>
          </div>
        </div>

        {/* Upload LAO */}
        <div className="border-2 border-dashed border-gray-200 dark:border-border-dark rounded-xl p-8 flex flex-col items-center justify-center gap-3 hover:border-primary/50 transition-colors cursor-pointer group">
          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors">
            <Upload size={22} />
          </div>
          <div className="text-center">
            <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">
              Licença Ambiental de Operação (LAO)
            </p>
            <p className="text-xs text-gray-500 mt-1">
              Arraste o arquivo PDF aqui ou clique para selecionar
            </p>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 bg-primary/10 border border-primary/20 rounded-full">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span className="text-xs font-bold text-primary">
              Documento Atual Validado (Vence em 12/2024)
            </span>
          </div>
        </div>
      </section>

      {/* Gestão de Equipe */}
      <section className="bg-white dark:bg-surface-dark rounded-2xl border border-gray-200 dark:border-border-dark shadow-lg overflow-hidden">
        <div className="p-6 border-b border-gray-200 dark:border-border-dark flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
              <Users size={20} />
            </div>
            <div>
              <h2 className="text-lg font-bold text-gray-900 dark:text-white">
                Gestão de Equipe
              </h2>
              <p className="text-xs text-gray-500">
                Controle de acesso e permissões dos usuários.
              </p>
            </div>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-primary text-surface-darker font-bold hover:bg-primary-hover transition-colors text-sm shadow-[0_0_15px_rgba(19,236,91,0.2)]">
            <Plus size={16} /> Adicionar Membro
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 dark:bg-surface-darker text-gray-500 uppercase text-xs">
              <tr>
                <th className="px-6 py-4 text-left font-semibold">Usuário</th>
                <th className="px-6 py-4 text-left font-semibold">Função</th>
                <th className="px-6 py-4 text-left font-semibold">Acesso</th>
                <th className="px-6 py-4 text-left font-semibold">Status</th>
                <th className="px-6 py-4 text-right font-semibold">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
              {teamMembers.map((member) => (
                <tr
                  key={member.id}
                  className="hover:bg-gray-50 dark:hover:bg-surface-darker/50 transition-colors"
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      {member.avatar ? (
                        <img
                          src={member.avatar}
                          alt={member.name}
                          className="w-9 h-9 rounded-full object-cover border-2 border-gray-200 dark:border-border-dark"
                        />
                      ) : (
                        <div className="w-9 h-9 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center text-primary text-xs font-bold">
                          {member.initials}
                        </div>
                      )}
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white">
                          {member.name}
                        </p>
                        <p className="text-xs text-gray-500">{member.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-bold border ${member.roleColor}`}
                    >
                      {member.role}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-1">
                      {member.permissions.map((p) => (
                        <span
                          key={p}
                          className="w-6 h-6 rounded-full bg-gray-100 dark:bg-surface-darker border border-gray-200 dark:border-border-dark flex items-center justify-center text-[10px] font-bold text-gray-600 dark:text-gray-400"
                        >
                          {permissionIcons[p]}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <span
                        className={`w-2 h-2 rounded-full ${
                          member.status === 'Ativo'
                            ? 'bg-primary'
                            : 'bg-yellow-500'
                        }`}
                      ></span>
                      <span
                        className={`text-xs font-medium ${
                          member.status === 'Ativo'
                            ? 'text-primary'
                            : 'text-yellow-500'
                        }`}
                      >
                        {member.status}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-end gap-2">
                      <button className="p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-surface-dark text-gray-400 hover:text-primary transition-colors">
                        <Edit size={14} />
                      </button>
                      <button className="p-1.5 rounded-lg hover:bg-red-500/10 text-gray-400 hover:text-red-400 transition-colors">
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Bottom Grid: Integrações + Dados Bancários */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Integrações de Telemetria */}
        <section className="bg-white dark:bg-surface-dark rounded-2xl border border-gray-200 dark:border-border-dark shadow-lg p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
              <Wifi size={20} />
            </div>
            <div>
              <h2 className="text-lg font-bold text-gray-900 dark:text-white">
                Integrações de Telemetria
              </h2>
              <p className="text-xs text-gray-500">
                Conecte balanças e sensores IoT.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {/* Balança */}
            <div className="bg-gray-50 dark:bg-surface-darker rounded-xl p-4 border border-gray-200 dark:border-border-dark">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Shield size={18} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white text-sm">
                      Balança Eletrônica Tru-Test
                    </p>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="flex gap-0.5">
                        {Array.from({ length: 14 }).map((_, i) => (
                          <span
                            key={i}
                            className="w-1.5 h-1.5 rounded-full bg-gray-300 dark:bg-gray-600"
                          ></span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setBalancaEnabled(!balancaEnabled)}
                  className={`relative w-11 h-6 rounded-full transition-colors ${
                    balancaEnabled
                      ? 'bg-primary'
                      : 'bg-gray-300 dark:bg-gray-600'
                  }`}
                >
                  <span
                    className={`absolute top-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform ${
                      balancaEnabled ? 'translate-x-5' : 'translate-x-0.5'
                    }`}
                  ></span>
                </button>
              </div>
              {balancaEnabled && (
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                  <span className="text-xs text-primary font-medium">
                    CONECTADO · ÚLTIMO SYNC 5MIN ATRÁS
                  </span>
                </div>
              )}
            </div>

            {/* Sensores de Cocho */}
            <div className="bg-gray-50 dark:bg-surface-darker rounded-xl p-4 border border-gray-200 dark:border-border-dark">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-200 dark:bg-surface-dark rounded-lg flex items-center justify-center">
                    <WifiOff size={18} className="text-gray-400" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white text-sm">
                      Sensores de Cocho IoT
                    </p>
                    <button className="text-xs text-primary font-medium hover:underline mt-0.5">
                      Configurar Nova Conexão
                    </button>
                  </div>
                </div>
                <button
                  onClick={() => setCochosEnabled(!cochosEnabled)}
                  className={`relative w-11 h-6 rounded-full transition-colors ${
                    cochosEnabled
                      ? 'bg-primary'
                      : 'bg-gray-300 dark:bg-gray-600'
                  }`}
                >
                  <span
                    className={`absolute top-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform ${
                      cochosEnabled ? 'translate-x-5' : 'translate-x-0.5'
                    }`}
                  ></span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Dados Bancários/Escrow */}
        <section className="bg-white dark:bg-surface-dark rounded-2xl border border-gray-200 dark:border-border-dark shadow-lg p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
              <Building2 size={20} />
            </div>
            <div>
              <h2 className="text-lg font-bold text-gray-900 dark:text-white">
                Dados Bancários/Escrow
              </h2>
              <p className="text-xs text-gray-500">
                Conta para repasse financeiro.
              </p>
            </div>
          </div>

          <div className="bg-gray-50 dark:bg-surface-darker rounded-xl p-5 border border-gray-200 dark:border-border-dark">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Building2 size={16} className="text-primary" />
                </div>
              </div>
              <span className="flex items-center gap-1.5 px-2.5 py-1 bg-primary/10 border border-primary/20 rounded-full text-xs font-bold text-primary">
                <CheckCircle size={12} /> Conta Verificada
              </span>
            </div>

            <p className="text-lg font-bold text-gray-900 dark:text-white mb-4">
              Confinamento Santa Fé LTDA
            </p>

            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-xs text-gray-500 mb-1">Banco</p>
                <p className="font-semibold text-gray-900 dark:text-white">
                  Banco do Brasil (001)
                </p>
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-1">CNPJ</p>
                <p className="font-semibold text-gray-900 dark:text-white">
                  12.345.678/0001-90
                </p>
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-1">Agência</p>
                <p className="font-semibold text-gray-900 dark:text-white">
                  3210-X
                </p>
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-1">Conta Corrente</p>
                <div className="flex items-center gap-2">
                  <p className="font-semibold text-gray-900 dark:text-white">
                    {showApiKey ? '98765-4' : '•••••-•'}
                  </p>
                  <button
                    onClick={() => setShowApiKey(!showApiKey)}
                    className="text-gray-400 hover:text-primary transition-colors"
                  >
                    {showApiKey ? <EyeOff size={14} /> : <Eye size={14} />}
                  </button>
                </div>
              </div>
            </div>

            <button className="w-full mt-4 py-2.5 rounded-xl border border-gray-200 dark:border-border-dark text-sm font-semibold text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-surface-dark transition-colors">
              Solicitar Alteração de Conta
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
