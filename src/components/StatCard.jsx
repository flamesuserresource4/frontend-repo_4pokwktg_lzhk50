function StatCard({ title, value, change, trend = 'up' }) {
  const positive = trend === 'up';
  return (
    <div className="rounded-xl border border-neutral-200 bg-white p-4 shadow-sm">
      <div className="text-sm text-neutral-500">{title}</div>
      <div className="mt-1 flex items-end justify-between">
        <div className="text-2xl font-semibold tracking-tight text-neutral-900">{value}</div>
        <div
          className={`text-xs font-medium ${
            positive ? 'text-emerald-600' : 'text-rose-600'
          }`}
        >
          {positive ? '▲' : '▼'} {change}
        </div>
      </div>
    </div>
  );
}

export default StatCard;
