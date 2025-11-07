import { useState } from 'react';
import Header from './components/Header.jsx';
import Sidebar from './components/Sidebar.jsx';
import StatCard from './components/StatCard.jsx';
import RecentTable from './components/RecentTable.jsx';
import ActivityChart from './components/ActivityChart.jsx';

function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      <Header onToggleSidebar={() => setOpen((v) => !v)} />

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 py-6 lg:grid-cols-[16rem_1fr]">
        <Sidebar open={open} />

        <main className="space-y-6">
          <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
            <StatCard title="Revenue" value="$24,800" change="+12.4%" trend="up" />
            <StatCard title="Active Users" value="2,340" change="+5.8%" trend="up" />
            <StatCard title="New Orders" value="182" change="-3.1%" trend="down" />
            <StatCard title="Conversion" value="3.4%" change="+0.6%" trend="up" />
          </section>

          <section className="grid grid-cols-1 gap-4 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <ActivityChart />
            </div>
            <div className="rounded-xl border border-neutral-200 bg-white p-4 shadow-sm">
              <div className="text-sm font-semibold">Quick Actions</div>
              <div className="mt-3 space-y-2">
                <button className="w-full rounded-md border border-neutral-200 bg-white px-3 py-2 text-left text-sm hover:bg-neutral-50">Create Report</button>
                <button className="w-full rounded-md border border-neutral-200 bg-white px-3 py-2 text-left text-sm hover:bg-neutral-50">Add Member</button>
                <button className="w-full rounded-md border border-neutral-200 bg-white px-3 py-2 text-left text-sm hover:bg-neutral-50">Schedule Meeting</button>
              </div>
            </div>
          </section>

          <section>
            <RecentTable />
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
