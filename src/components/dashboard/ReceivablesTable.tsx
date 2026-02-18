import { BadgeCheck, Clock, FileWarning } from 'lucide-react';
import { cn } from '@/lib/utils';

type Status = 'Liberado' | 'Em Análise' | 'Agendado';

interface Receivables {
  id: string;
  description: string;
  reference: string;
  date: string;
  status: Status;
  value: string;
}

const data: Receivables[] = [
  {
    id: '1',
    description: 'Serviço de Diária/Engorda',
    reference: 'Lote #389 (Fechamento)',
    date: '15 Nov 2023',
    status: 'Liberado',
    value: 'R$ 48.250,00',
  },
  {
    id: '2',
    description: 'Adiantamento Sanitário',
    reference: 'Lote #402 (Vacinação)',
    date: '20 Nov 2023',
    status: 'Em Análise',
    value: 'R$ 12.400,00',
  },
  {
    id: '3',
    description: 'Serviço de Diária/Engorda',
    reference: 'Mensalidade Outubro',
    date: '05 Dez 2023',
    status: 'Agendado',
    value: 'R$ 105.800,00',
  },
];

const statusStyles: Record<Status, string> = {
  Liberado: 'bg-primary/20 text-primary border-primary/20',
  'Em Análise': 'bg-yellow-500/20 text-yellow-500 border-yellow-500/20',
  Agendado: 'bg-blue-500/20 text-blue-500 border-blue-500/20',
};

const statusIcon: Record<Status, any> = {
  Liberado: BadgeCheck,
  'Em Análise': FileWarning,
  Agendado: Clock,
};

export function ReceivablesTable() {
  return (
    <div className="bg-white dark:bg-surface-dark border border-gray-200 dark:border-border-dark rounded-2xl overflow-hidden shadow-lg">
      <div className="p-6 border-b border-gray-200 dark:border-border-dark flex items-center justify-between">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2">
          <span className="text-primary">💸</span> Próximos Recebimentos
        </h3>
        <button className="text-xs text-primary font-bold hover:underline">
          Ver Extrato Completo
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead className="bg-gray-50 dark:bg-surface-darker text-gray-500 font-bold uppercase tracking-wider text-[10px]">
            <tr>
              <th className="px-6 py-4">Descrição</th>
              <th className="px-6 py-4">Referência</th>
              <th className="px-6 py-4">Data Prevista</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4 text-right">Valor</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
            {data.map((item) => {
              const Icon = statusIcon[item.status];
              return (
                <tr
                  key={item.id}
                  className="hover:bg-gray-50 dark:hover:bg-surface-darker/50 transition-colors"
                >
                  <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                    {item.description}
                  </td>
                  <td className="px-6 py-4 text-gray-400">{item.reference}</td>
                  <td className="px-6 py-4 text-gray-400">{item.date}</td>
                  <td className="px-6 py-4">
                    <span
                      className={cn(
                        'inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wide border',
                        statusStyles[item.status],
                      )}
                    >
                      <Icon size={12} />
                      {item.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right font-bold text-gray-900 dark:text-white">
                    {item.value}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
