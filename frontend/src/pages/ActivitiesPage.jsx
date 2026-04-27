import { useEffect, useState } from 'react';
import { ActivityFeed } from '../components/crm/ActivityFeed';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { PageHeader } from '../components/ui/PageHeader';
import { activityRepository, customerRepository } from '../services/repositories';

const usersById = {
  'u-1': { name: 'Alex Sterling' },
  'u-2': { name: 'Maya Chen' },
};

export function ActivitiesPage() {
  const [state, setState] = useState({ activities: [], customers: [] });

  useEffect(() => {
    Promise.all([activityRepository.list(), customerRepository.list()]).then(([activities, customers]) =>
      setState({ activities, customers }),
    );
  }, []);

  const customersById = Object.fromEntries(state.customers.map((item) => [item.id, item]));

  return (
    <div>
      <PageHeader
        eyebrow="Workspace / Activities"
        title="Activity Timeline"
        description="Low-friction logging for notes, calls, proposal updates and risk signals across customers and leads."
        actions={<Button>Log activity</Button>}
      />

      <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <ActivityFeed customersById={customersById} items={state.activities} usersById={usersById} />
        <Card>
          <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-on-surface-variant">Quick Add</p>
          <h2 className="mt-2 font-display text-2xl font-bold">Capture a note</h2>
          <div className="mt-6 rounded-[1.5rem] bg-surface-container p-4">
            <input className="mb-3 w-full rounded-2xl bg-surface-container-low px-4 py-3 text-sm outline-none" placeholder="Customer or lead context" />
            <textarea className="h-40 w-full resize-none rounded-2xl bg-surface-container-low px-4 py-3 text-sm outline-none" placeholder="What happened, what changed, what needs follow-up?" />
            <div className="mt-4 flex justify-end">
              <Button className="px-4 py-2 text-xs">Save mock note</Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
