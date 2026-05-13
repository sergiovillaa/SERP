import { Outlet } from 'react-router-dom';
import { Sidebar } from '../components/layout/Sidebar';
import { Topbar } from '../components/layout/Topbar';

export function AppLayout() {
  return (
    <div className="min-h-screen bg-surface text-on-surface">
      <Sidebar />
      <div className="lg:pl-72">
        <Topbar />
        <main className="px-4 pb-10 pt-24 sm:px-6 lg:px-10">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
