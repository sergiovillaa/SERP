import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../features/auth/useAuth';
import { Icon } from '../../lib/icons';
import { Input } from '../ui/Input';
import { Button } from '../ui/Button';

const titles = {
  '/dashboard': 'Sales Performance Dashboard',
  '/customers': 'Customer Directory',
  '/leads': 'Lead Workspace',
  '/pipeline': 'Sales Pipeline',
  '/activities': 'Activity Timeline',
  '/settings': 'Workspace Settings',
};

export function Topbar() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  return (
    <header className="fixed inset-x-0 top-0 z-30 border-none bg-surface/80 px-4 py-4 backdrop-blur lg:left-72 lg:px-10">
      <div className="flex flex-col gap-4 rounded-[1.75rem] bg-surface-container-lowest/90 px-4 py-4 shadow-[0_12px_32px_rgba(37,25,19,0.08)] sm:px-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="min-w-0 flex-1">
          <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-on-surface-variant">Workspace</p>
          <p className="truncate font-display text-xl font-extrabold tracking-[-0.03em] text-on-surface">
            {titles[pathname] ?? 'Architect CRM'}
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <div className="relative min-w-[18rem] max-w-xl flex-1">
            <Icon className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-on-surface-variant" name="search" />
            <Input className="pl-11" placeholder="Search records, customers or notes..." />
          </div>
          <div className="flex items-center gap-3">
            <Link className="rounded-full bg-surface-container p-3 text-on-surface-variant transition hover:bg-surface-container-highest" to="/settings">
              <Icon className="h-4 w-4" name="settings" />
            </Link>
            <Button
              className="px-3 py-2"
              icon="arrowRight"
              variant="ghost"
              onClick={() => {
                logout();
                navigate('/login');
              }}
            >
              <span className="hidden sm:inline">{user?.name}</span>
              <span className="text-on-surface-variant">Sign out</span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
