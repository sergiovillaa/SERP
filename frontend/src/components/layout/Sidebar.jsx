import { NavLink } from 'react-router-dom';
import { navigation } from '../../config/navigation';
import { useAuth } from '../../features/auth/useAuth';
import { Icon } from '../../lib/icons';
import { cn } from '../../lib/utils';
import { Button } from '../ui/Button';

export function Sidebar() {
  const { user } = useAuth();

  return (
    <aside className="fixed inset-y-0 left-0 z-40 hidden w-72 flex-col bg-surface-container-low px-5 py-6 lg:flex">
      <div className="mb-10 flex items-center gap-3 px-3">
        <div className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-primary-deep to-primary text-white">
          <Icon name="dashboard" />
        </div>
        <div>
          <p className="font-display text-lg font-extrabold tracking-[-0.03em]">SERP</p>
          <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-on-surface-variant">Premium Workspace</p>
        </div>
      </div>

      <nav className="space-y-2">
        {navigation.map((item) => (
          <NavLink
            key={item.to}
            className={({ isActive }) =>
              cn(
                'flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold transition',
                isActive
                  ? 'bg-surface-container-lowest text-primary shadow-[0_12px_32px_rgba(37,25,19,0.06)]'
                  : 'text-on-surface-variant hover:translate-x-1 hover:bg-surface-container',
              )
            }
            to={item.to}
          >
            <Icon className="h-5 w-5" name={item.icon} />
            {item.label}
          </NavLink>
        ))}
      </nav>

      <div className="mt-auto space-y-4 pt-8">
        <Button className="w-full" icon="plus">
          New Record
        </Button>
        <div className="rounded-[1.5rem] bg-surface-container p-4">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-on-surface-variant">Session</p>
          <p className="mt-2 font-display text-lg font-bold text-on-surface">{user?.name}</p>
          <p className="text-sm text-on-surface-variant">{user?.title}</p>
        </div>
      </div>
    </aside>
  );
}
