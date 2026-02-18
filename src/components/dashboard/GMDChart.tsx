'use client';

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
} from 'recharts';

const data = [
  { name: 'Mai', realizado: 1.42, meta: 1.45 },
  { name: 'Jun', realizado: 1.48, meta: 1.48 },
  { name: 'Jul', realizado: 1.55, meta: 1.52 },
  { name: 'Ago', realizado: 1.62, meta: 1.58 },
  { name: 'Set', realizado: 1.6, meta: 1.62 },
  { name: 'Out', realizado: 1.78, meta: 1.65 },
];

export function GMDChart() {
  return (
    <div className="bg-white dark:bg-surface-dark border border-gray-200 dark:border-border-dark rounded-2xl p-6 h-[400px] flex flex-col shadow-lg">
      <div className="flex items-start justify-between mb-6">
        <div>
          <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2">
            <span className="text-primary">📈</span> Evolução do GMD Médio
          </h3>
          <p className="text-xs text-gray-500">
            Comparativo Confinamento vs Meta Gado 11 (últimos 6 meses)
          </p>
        </div>
        <div className="flex gap-4 text-[10px] font-bold uppercase tracking-wider">
          <div className="flex items-center gap-1.5 text-gray-900 dark:text-white">
            <div className="w-2 h-2 rounded-full bg-primary"></div>Realizado
          </div>
          <div className="flex items-center gap-1.5 text-gray-500">
            <div className="w-2 h-2 rounded-full bg-gray-600"></div>Meta G11
          </div>
        </div>
      </div>

      <div className="flex-1 w-full min-h-0">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 5, right: 30, left: -20, bottom: 5 }}
          >
            <CartesianGrid
              vertical={false}
              stroke="#2d3831"
              strokeDasharray="3 3"
            />
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#6b7280', fontSize: 12 }}
              padding={{ left: 20, right: 20 }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#6b7280', fontSize: 12 }}
              domain={[1.2, 1.9]}
              tickFormatter={(value) => `${value.toFixed(1)}kg`}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: '#16201a',
                borderColor: '#2d3831',
                borderRadius: '8px',
              }}
              itemStyle={{ color: '#fff', fontSize: '12px' }}
              labelStyle={{ color: '#9ca3af', marginBottom: '4px' }}
            />
            <Line
              type="monotone"
              dataKey="realizado"
              stroke="#13ec5b"
              strokeWidth={3}
              dot={{ r: 4, stroke: '#13ec5b', fill: '#16201a', strokeWidth: 2 }}
              activeDot={{ r: 6, stroke: '#fff', strokeWidth: 0 }}
            />
            <Line
              type="monotone"
              dataKey="meta"
              stroke="#4b5563"
              strokeWidth={1}
              strokeDasharray="5 5"
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Floating Label Mockup - Hard to do exactly in Recharts, simulating overlay */}
      <div className="absolute top-[180px] right-[100px] bg-surface-dark border border-primary/30 p-2 rounded-lg pointer-events-none hidden xl:block shadow-lg shadow-primary/5">
        <div className="text-primary font-bold text-lg leading-none">
          1.78 kg/dia
        </div>
        <div className="text-[10px] text-gray-400 mt-0.5">Atual</div>
      </div>
    </div>
  );
}
