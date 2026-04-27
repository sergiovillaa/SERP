import { Badge } from '../components/ui/Badge';
import { Card } from '../components/ui/Card';
import { PageHeader } from '../components/ui/PageHeader';

export function SettingsPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Workspace / Settings"
        title="Settings"
        description="This MVP keeps settings simple but reserves space for auth, profile, environment flags and future service integrations."
      />
      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <Badge variant="primary">Environment</Badge>
          <h2 className="mt-4 font-display text-2xl font-bold">Frontend integration mode</h2>
          <p className="mt-3 text-sm leading-6 text-on-surface-variant">
            Mock repositories are currently active. The services layer is isolated so we can switch to API calls later without rewriting the views.
          </p>
        </Card>
        <Card>
          <Badge variant="info">Container-ready</Badge>
          <h2 className="mt-4 font-display text-2xl font-bold">Service separation</h2>
          <p className="mt-3 text-sm leading-6 text-on-surface-variant">
            The repository keeps `frontend/` decoupled from `backend/`, which fits a future Docker or serverless split cleanly.
          </p>
        </Card>
      </div>
    </div>
  );
}
