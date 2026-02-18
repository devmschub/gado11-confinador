interface StatCardProps {
  value: string;
  label: string;
}

export function StatCard({ value, label }: StatCardProps) {
  return (
    <div>
      <h3 className="text-3xl font-bold text-white tracking-tight">{value}</h3>
      <p className="text-[10px] text-gray-400 mt-1 font-bold uppercase tracking-wide leading-tight">
        {label}
      </p>
    </div>
  );
}
