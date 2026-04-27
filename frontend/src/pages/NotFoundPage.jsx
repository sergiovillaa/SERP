import { Link } from 'react-router-dom';
import { EmptyState } from '../components/ui/EmptyState';

export function NotFoundPage() {
  return (
    <div className="grid min-h-screen place-items-center px-6">
      <div className="w-full max-w-xl">
        <EmptyState description="The route you requested does not exist in this CRM workspace." title="Page not found" />
        <p className="mt-6 text-center text-sm text-on-surface-variant">
          <Link className="font-semibold text-primary" to="/dashboard">
            Return to dashboard
          </Link>
        </p>
      </div>
    </div>
  );
}
