import { formatDate } from '../../lib/utils';
import { Badge } from '../ui/Badge';
import { Card } from '../ui/Card';

export function ActivityFeed({ items, usersById, customersById }) {
  return (
    <Card className="h-full">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-on-surface-variant">Live Feed</p>
          <h2 className="mt-2 font-display text-2xl font-bold">Recent Activity</h2>
        </div>
        <Badge variant="primary">{items.length} entries</Badge>
      </div>
      <div className="space-y-4">
        {items.map((item) => (
          <div key={item.id} className="rounded-2xl bg-surface-container p-4">
            <div className="flex items-center justify-between gap-3">
              <Badge variant="info">{item.type}</Badge>
              <span className="text-xs text-on-surface-variant">{formatDate(item.created_at)}</span>
            </div>
            <p className="mt-3 text-sm leading-6 text-on-surface">{item.content}</p>
            <p className="mt-3 text-xs text-on-surface-variant">
              {usersById[item.user_id]?.name} · {customersById[item.customer_id]?.company ?? 'General activity'}
            </p>
          </div>
        ))}
      </div>
    </Card>
  );
}
