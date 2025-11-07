import { Home, BarChart3, CheckSquare, Users, Settings } from 'lucide-react';

const navItems = [
  { icon: Home, label: 'Overview' },
  { icon: BarChart3, label: 'Analytics' },
  { icon: CheckSquare, label: 'Tasks' },
  { icon: Users, label: 'Team' },
  { icon: Settings, label: 'Settings' },
];

function Sidebar({ open }) {
  return (
    <aside
      className={`fixed inset-y-0 left-0 z-30 w-64 transform border-r border-neutral-200 bg-white/90 p-4 backdrop-blur transition-transform duration-300 ease-out supports-[backdrop-filter]:bg-white/70 lg:static lg:translate-x-0 ${
        open ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
      }`}
      aria-label="Sidebar"
    >
      <div className="mb-6 px-2">
        <div className="text-xl font-semibold tracking-tight">Vibe Dashboard</div>
        <div className="text-sm text-neutral-500">by Flames</div>
      </div>

      <nav className="space-y-1">
        {navItems.map(({ icon: Icon, label }) => (
          <button
            key={label}
            className="flex w-full items-center gap-3 rounded-md px-3 py-2 text-left text-neutral-700 hover:bg-neutral-100"
          >
            <Icon className="h-4 w-4" />
            <span className="text-sm">{label}</span>
          </button>
        ))}
      </nav>

      <div className="mt-6 rounded-lg border border-neutral-200 bg-gradient-to-br from-neutral-50 to-white p-3">
        <div className="text-sm font-medium text-neutral-900">Upgrade</div>
        <p className="mt-1 text-xs text-neutral-600">
          Unlock pro components and premium analytics.
        </p>
        <button className="mt-3 w-full rounded-md bg-neutral-900 px-3 py-2 text-sm font-medium text-white hover:bg-neutral-800">
          Try Pro
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;
