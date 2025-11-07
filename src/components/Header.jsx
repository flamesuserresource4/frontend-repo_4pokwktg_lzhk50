import { useState } from 'react';
import { Bell, Menu, Search, Settings, User } from 'lucide-react';

function Header({ onToggleSidebar }) {
  const [query, setQuery] = useState('');

  return (
    <header className="sticky top-0 z-20 border-b border-neutral-200 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3">
        <div className="flex items-center gap-3">
          <button
            aria-label="Toggle sidebar"
            onClick={onToggleSidebar}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-neutral-200 bg-white text-neutral-700 hover:bg-neutral-50 lg:hidden"
          >
            <Menu className="h-5 w-5" />
          </button>
          <div className="hidden items-center gap-2 rounded-md border border-neutral-200 bg-white px-3 py-2 text-neutral-600 focus-within:ring-2 focus-within:ring-neutral-200 md:flex">
            <Search className="h-4 w-4" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search..."
              className="w-56 bg-transparent text-sm outline-none placeholder:text-neutral-400"
            />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-neutral-200 bg-white text-neutral-700 hover:bg-neutral-50">
            <Bell className="h-5 w-5" />
          </button>
          <button className="hidden h-10 items-center gap-2 rounded-md border border-neutral-200 bg-white px-3 text-neutral-700 hover:bg-neutral-50 md:inline-flex">
            <Settings className="h-4 w-4" />
            <span className="text-sm">Settings</span>
          </button>
          <div className="ml-2 flex items-center gap-3 rounded-full border border-neutral-200 bg-white px-3 py-1">
            <User className="h-5 w-5 text-neutral-700" />
            <div className="hidden text-sm leading-tight md:block">
              <div className="font-medium text-neutral-900">Alex Johnson</div>
              <div className="text-neutral-500">Admin</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
