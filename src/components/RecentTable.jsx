function RecentTable() {
  const rows = [
    { id: 'INV-1047', customer: 'Acme Corp', amount: '$4,280', status: 'Paid', date: 'Oct 15' },
    { id: 'INV-1046', customer: 'Pine LLC', amount: '$1,120', status: 'Due', date: 'Oct 14' },
    { id: 'INV-1045', customer: 'Nova Inc', amount: '$980', status: 'Paid', date: 'Oct 13' },
    { id: 'INV-1044', customer: 'Vector Labs', amount: '$2,340', status: 'Overdue', date: 'Oct 13' },
  ];

  const badge = (status) => {
    const map = {
      Paid: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      Due: 'bg-amber-50 text-amber-700 border-amber-200',
      Overdue: 'bg-rose-50 text-rose-700 border-rose-200',
    };
    return (
      <span className={`inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-medium ${map[status]}`}>
        {status}
      </span>
    );
  };

  return (
    <div className="overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm">
      <div className="border-b border-neutral-200 p-4 text-sm font-semibold text-neutral-900">Recent Invoices</div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-neutral-200">
          <thead className="bg-neutral-50">
            <tr>
              <th className="px-4 py-2 text-left text-xs font-semibold uppercase tracking-wide text-neutral-600">ID</th>
              <th className="px-4 py-2 text-left text-xs font-semibold uppercase tracking-wide text-neutral-600">Customer</th>
              <th className="px-4 py-2 text-left text-xs font-semibold uppercase tracking-wide text-neutral-600">Amount</th>
              <th className="px-4 py-2 text-left text-xs font-semibold uppercase tracking-wide text-neutral-600">Status</th>
              <th className="px-4 py-2 text-left text-xs font-semibold uppercase tracking-wide text-neutral-600">Date</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-neutral-200 bg-white">
            {rows.map((r) => (
              <tr key={r.id} className="hover:bg-neutral-50">
                <td className="whitespace-nowrap px-4 py-3 text-sm font-medium text-neutral-900">{r.id}</td>
                <td className="whitespace-nowrap px-4 py-3 text-sm text-neutral-700">{r.customer}</td>
                <td className="whitespace-nowrap px-4 py-3 text-sm text-neutral-700">{r.amount}</td>
                <td className="whitespace-nowrap px-4 py-3 text-sm">{badge(r.status)}</td>
                <td className="whitespace-nowrap px-4 py-3 text-sm text-neutral-500">{r.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default RecentTable;
