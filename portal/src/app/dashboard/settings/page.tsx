import {
  Users,
  CreditCard,
  Cpu,
  MapPin,
  CheckCircle2,
  MoreVertical,
  Plus,
  ToggleLeft,
  ToggleRight,
  Pencil,
  Trash2,
  FileBadge,
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';
import Image from 'next/image';

export default function SettingsPage() {
  return (
    <div className="p-8 max-w-[1600px] mx-auto space-y-8 font-manrope">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">
            Configurações do Parceiro
          </h1>
          <p className="text-gray-400 text-sm">
            Gerencie as informações do Confinamento Santa Fé
          </p>
        </div>

        <div className="flex items-center gap-4">
          <button className="text-gray-400 hover:text-white text-sm font-bold">
            Cancelar
          </button>
          <Button className="h-10 text-sm">Salvar Alterações</Button>
        </div>
      </div>

      {/* Dados da Propriedade - Top Card */}
      <div className="bg-surface-light/20 border border-surface-light rounded-2xl p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-bold text-white flex items-center gap-2">
            <div className="bg-green-500/20 p-1.5 rounded text-green-500">
              <MapPin size={18} />
            </div>
            Dados da Propriedade
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
          <div>
            <label className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-2 block">
              Capacidade (CAP)
            </label>
            <div className="bg-surface-dark border border-surface-light rounded-lg px-4 py-3 flex justify-between items-center text-white font-medium">
              15000 <span className="text-gray-500 text-xs">cabeças</span>
            </div>
          </div>
          <div className="md:col-span-2">
            <label className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-2 block">
              Localização GPS
            </label>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-surface-dark border border-surface-light rounded-lg px-4 py-3 text-white font-mono text-sm flex items-center gap-2">
                <MapPin size={14} className="text-primary" /> -15.7975
              </div>
              <div className="bg-surface-dark border border-surface-light rounded-lg px-4 py-3 text-white font-mono text-sm flex items-center gap-2">
                <MapPin size={14} className="text-primary" /> -47.8919
              </div>
            </div>
          </div>
        </div>

        {/* License Upload Box */}
        <div className="mt-6 border-2 border-dashed border-surface-light rounded-xl p-6 text-center hover:border-primary/30 transition-colors group cursor-pointer relative overflow-hidden bg-surface-dark/50">
          <div className="relative z-10 flex flex-col items-center">
            <div className="bg-primary/20 p-3 rounded-full text-primary mb-3 group-hover:scale-110 transition-transform">
              <FileBadge size={24} />
            </div>
            <h4 className="text-sm font-bold text-white mb-1">
              Licença Ambiental de Operação (LAO)
            </h4>
            <p className="text-[10px] text-gray-500 mb-4">
              Arraste o arquivo PDF aqui ou clique para selecionar
            </p>
            <span className="bg-green-500/20 text-green-500 text-[10px] uppercase font-bold px-3 py-1 rounded-full flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>{' '}
              Documento Atual Validado (Vence em 12/2024)
            </span>
          </div>
        </div>
      </div>

      {/* Grid Row 2 */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        {/* Gestão de Equipe (Wide) */}
        <div className="xl:col-span-2 bg-surface-light/20 border border-surface-light rounded-2xl overflow-hidden flex flex-col">
          <div className="p-6 border-b border-surface-light flex items-center justify-between bg-surface-light/30">
            <div>
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <div className="bg-primary/20 p-1.5 rounded text-primary">
                  <Users size={18} />
                </div>
                Gestão de Equipe
              </h3>
              <p className="text-[10px] text-gray-400 mt-1">
                Controle de acesso e permissões dos usuários.
              </p>
            </div>
            <Button
              variant="outline"
              className="text-xs h-8 gap-2 bg-transparent hover:bg-surface-light/50 border-primary/30 text-primary hover:text-white"
            >
              <Plus size={14} /> Adicionar Membro
            </Button>
          </div>

          <div className="flex-1 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="text-[10px] uppercase text-gray-500 font-bold bg-surface-light/20">
                <tr>
                  <th className="px-6 py-4">Usuário</th>
                  <th className="px-6 py-4">Função</th>
                  <th className="px-6 py-4">Acesso</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4 text-right">Ações</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-surface-light/20">
                {/* Row 1 */}
                <tr className="group hover:bg-surface-light/10">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-green-900 text-green-300 flex items-center justify-center font-bold text-xs ring-2 ring-surface-dark">
                        RM
                      </div>
                      <div>
                        <div className="font-bold text-white">
                          Roberto Mendes
                        </div>
                        <div className="text-[10px] text-gray-500">
                          roberto@santafe.com
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="bg-green-500/10 text-green-500 text-[10px] font-bold uppercase px-2 py-1 rounded border border-green-500/20">
                      Gerente Geral
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex -space-x-1">
                      <div
                        className="w-6 h-6 rounded-full bg-surface-light border border-surface-dark flex items-center justify-center text-[10px] text-gray-400"
                        title="Financeiro"
                      >
                        💲
                      </div>
                      <div
                        className="w-6 h-6 rounded-full bg-surface-light border border-surface-dark flex items-center justify-center text-[10px] text-gray-400"
                        title="Configurações"
                      >
                        ⚙️
                      </div>
                      <div
                        className="w-6 h-6 rounded-full bg-surface-light border border-surface-dark flex items-center justify-center text-[10px] text-gray-400"
                        title="Equipe"
                      >
                        👥
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-[10px] font-bold text-green-500 flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>{' '}
                    Ativo
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="p-1 hover:text-white text-gray-500">
                        <Pencil size={14} />
                      </button>
                      <button className="p-1 hover:text-red-500 text-gray-500">
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </td>
                </tr>

                {/* Row 2 */}
                <tr className="group hover:bg-surface-light/10">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <img
                        src="https://ui-avatars.com/api/?name=Ana+Costa"
                        className="w-9 h-9 rounded-full ring-2 ring-surface-dark"
                        alt=""
                      />
                      <div>
                        <div className="font-bold text-white">
                          Dra. Ana Costa
                        </div>
                        <div className="text-[10px] text-gray-500">
                          ana.vet@santafe.com
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="bg-blue-500/10 text-blue-500 text-[10px] font-bold uppercase px-2 py-1 rounded border border-blue-500/20">
                      Veterinário Chefe
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex -space-x-1">
                      <div className="w-6 h-6 rounded-full bg-surface-light border border-surface-dark flex items-center justify-center text-[10px] text-gray-400">
                        ⚕️
                      </div>
                      <div className="w-6 h-6 rounded-full bg-surface-light border border-surface-dark flex items-center justify-center text-[10px] text-gray-400">
                        📊
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-[10px] font-bold text-green-500 flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>{' '}
                    Ativo
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="p-1 hover:text-white text-gray-500">
                        <Pencil size={14} />
                      </button>
                      <button className="p-1 hover:text-red-500 text-gray-500">
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </td>
                </tr>

                {/* Row 3 */}
                <tr className="group hover:bg-surface-light/10">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-surface-light text-gray-400 flex items-center justify-center font-bold text-xs ring-2 ring-surface-dark">
                        JS
                      </div>
                      <div>
                        <div className="font-bold text-white">João Silva</div>
                        <div className="text-[10px] text-gray-500">
                          joao.op@santafe.com
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="bg-gray-700/50 text-gray-400 text-[10px] font-bold uppercase px-2 py-1 rounded border border-gray-600/30">
                      Operador
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex -space-x-1">
                      <div className="w-6 h-6 rounded-full bg-surface-light border border-surface-dark flex items-center justify-center text-[10px] text-gray-400">
                        ⚙️
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-[10px] font-bold text-yellow-500 flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-yellow-500"></div>{' '}
                    Pendente
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="p-1 hover:text-white text-gray-500">
                        <Pencil size={14} />
                      </button>
                      <button className="p-1 hover:text-red-500 text-gray-500">
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Right Column: Telemetry & Bank (Vertical Stack) */}
        <div className="space-y-6">
          {/* Telemetry Card */}
          <div className="bg-surface-light/20 border border-surface-light rounded-2xl p-6">
            <h3 className="text-lg font-bold text-white flex items-center gap-2 mb-1">
              <div className="bg-primary/20 p-1.5 rounded text-primary">
                <Cpu size={18} />
              </div>
              Integrações de Telemetria
            </h3>
            <p className="text-[10px] text-gray-400 mb-6">
              Conecte balanças e sensores IoT.
            </p>

            <div className="space-y-4">
              <div className="bg-surface-dark border border-surface-light rounded-xl p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="bg-white p-1.5 rounded">
                    {/* Mock Logo */}
                    <div className="w-4 h-4 bg-black rounded-full"></div>
                  </div>
                  <div>
                    <div className="font-bold text-white text-sm">
                      Balança Eletrônica Tru-Test
                    </div>
                    <div className="text-[10px] text-green-500 flex items-center gap-1 mt-0.5">
                      ● CONECTADO - ÚLTIMO SYNC 5MIN ATRÁS
                    </div>
                  </div>
                </div>
                <div className="text-primary">
                  <ToggleRight size={24} className="fill-primary/20" />
                </div>
              </div>

              <div className="bg-surface-dark border border-surface-light rounded-xl p-4 flex items-center justify-between opacity-60">
                <div className="flex items-center gap-3">
                  <div className="bg-gray-200 p-1.5 rounded">
                    <div className="w-4 h-4 bg-gray-500 rounded-full"></div>
                  </div>
                  <div>
                    <div className="font-bold text-white text-sm">
                      Sensores de Cocho IoT
                    </div>
                    <div className="text-[10px] text-green-500 flex items-center gap-1 mt-0.5 pointer-events-none opacity-0">
                      ● CONECTADO
                    </div>
                    <div className="text-[10px] text-primary hover:underline cursor-pointer">
                      Configurar Nova Conexão
                    </div>
                  </div>
                </div>
                <div className="text-gray-500">
                  <ToggleLeft size={24} />
                </div>
              </div>
            </div>
          </div>

          {/* Bank Details Card */}
          <div className="bg-surface-light/20 border border-surface-light rounded-2xl p-6 relative overflow-hidden">
            <h3 className="text-lg font-bold text-white flex items-center gap-2 mb-1">
              <div className="bg-green-700/20 p-1.5 rounded text-green-500">
                <CreditCard size={18} />
              </div>
              Dados Bancários/Escrow
            </h3>
            <p className="text-[10px] text-gray-400 mb-6">
              Conta para repasse financeiro.
            </p>

            <div className="bg-surface-dark/80 rounded-xl p-5 border border-surface-light relative">
              <div className="absolute top-4 right-4 bg-green-900/40 text-green-500 text-[10px] font-bold px-2 py-0.5 rounded border border-green-500/20">
                Conta Verificada
              </div>

              <div className="mb-4">
                <p className="text-[10px] text-gray-500 uppercase font-bold tracking-wider">
                  Titular da Conta
                </p>
                <p className="font-bold text-white text-base">
                  Confinamento Santa Fé LTDA
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-[10px] text-gray-500 uppercase font-bold tracking-wider">
                    Banco
                  </p>
                  <p className="font-bold text-white text-sm">
                    Banco do Brasil (001)
                  </p>
                </div>
                <div>
                  <p className="text-[10px] text-gray-500 uppercase font-bold tracking-wider">
                    CNPJ
                  </p>
                  <p className="font-bold text-white text-sm">
                    12.345.678/0001-90
                  </p>
                </div>
                <div>
                  <p className="text-[10px] text-gray-500 uppercase font-bold tracking-wider">
                    Agência
                  </p>
                  <p className="font-bold text-white text-sm">3210-X</p>
                </div>
                <div>
                  <p className="text-[10px] text-gray-500 uppercase font-bold tracking-wider">
                    Conta Corrente
                  </p>
                  <p className="font-bold text-white text-sm">98765-4</p>
                </div>
              </div>

              <Button
                variant="outline"
                className="w-full h-8 text-xs border-surface-light hover:bg-surface-light"
              >
                Solicitar Alteração de Conta
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
