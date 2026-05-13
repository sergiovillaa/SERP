import { useEffect, useState } from 'react';
import { ActivityFeed } from '../components/crm/ActivityFeed';
import { StatCard } from '../components/crm/StatCard';
import { Card } from '../components/ui/Card';
import { PageHeader } from '../components/ui/PageHeader';
import { activityRepository, customerRepository, dashboardRepository, leadRepository } from '../services/repositories';
import { Icon } from '../lib/icons';
import { formatCompactCurrency } from '../lib/utils';

export function DashboardPage() {
  const [state, setState] = useState({ metrics: null, leads: [], activities: [], customers: [] });

  useEffect(() => {
    Promise.all([
      dashboardRepository.getSummary(),
      leadRepository.list(),
      activityRepository.list(),
      customerRepository.list(),
    ]).then(([metrics, leads, activities, customers]) => setState({ metrics, leads, activities, customers }));
  }, []);

  if (!state.metrics) return <div className="py-20 text-sm text-on-surface-variant">Loading dashboard...</div>;

  const customersById = Object.fromEntries(state.customers.map((item) => [item.id, item]));
  const usersById = {
    'u-1': { name: 'Sergio Villa' },
    'u-2': { name: 'Santiago Villa' },
  };

  return (
    <div>
      <PageHeader
        eyebrow="Overview"
        title="Sales Performance Dashboard"
        description="A fast snapshot of customers, active deals, pipeline value and latest activity across the CRM."
      />

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        <StatCard accent="from-primary/20 to-primary/5" hint="+12%" icon={<Icon name="group" />} label="Total Customers" value={state.metrics.totalCustomers} />
        <StatCard accent="from-secondary/20 to-secondary/5" hint="+5.2%" icon={<Icon name="spark" />} label="Active Leads" value={state.metrics.activeLeads} />
        <StatCard accent="from-primary-bright/20 to-primary/5" hint="Stable" icon={<Icon name="dashboard" />} label="Pipeline Value" value={formatCompactCurrency(state.metrics.pipelineValue)} />
        <StatCard accent="from-tertiary/15 to-surface-container" hint="Monthly" icon={<Icon name="activity" />} label="Conversion Rate" value={`${state.metrics.conversionRate}%`} />
      </div>

      <div className="mt-8 grid gap-6 xl:grid-cols-[1.35fr_0.9fr]">
        <Card>
          <div className="mb-8 flex items-center justify-between gap-4">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-on-surface-variant">Pipeline Blueprint</p>
              <h2 className="mt-2 font-display text-2xl font-bold">Leads by Stage</h2>
            </div>
            <div className="rounded-full bg-surface-container p-1">
              <button className="rounded-full px-4 py-2 text-xs font-semibold text-on-surface-variant">Weekly</button>
              <button className="rounded-full bg-surface-container-lowest px-4 py-2 text-xs font-bold text-primary">Monthly</button>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-5">
            {state.metrics.monthlyGrowth.map((item) => (
              <div key={item.stage} className="rounded-[1.5rem] bg-surface-container p-4">
                <div className="flex h-40 items-end">
                  <div className={`${item.accent} w-full rounded-t-[1.2rem]`} style={{ height: `${item.value}%` }} />
                </div>
                <p className="mt-4 text-xs font-bold uppercase tracking-[0.16em] text-on-surface-variant">{item.stage}</p>
                <p className="mt-1 font-display text-2xl font-bold">{item.value}</p>
              </div>
            ))}
          </div>
        </Card>

        <ActivityFeed customersById={customersById} items={state.activities.slice(0, 4)} usersById={usersById} />
      </div>

      <div className="mt-8">
        <Card>
          <div className="mb-6 flex items-center justify-between">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-on-surface-variant">Priority Deals</p>
              <h2 className="mt-2 font-display text-2xl font-bold">Top Opportunities</h2>
            </div>
          </div>
          <div className="grid gap-4 lg:grid-cols-3">
            {state.leads.slice(0, 3).map((lead) => (
              <div key={lead.id} className="rounded-[1.5rem] bg-surface-container p-5">
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary">{lead.status}</p>
                <h3 className="mt-3 font-display text-xl font-bold">{lead.title}</h3>
                <p className="mt-2 text-sm text-on-surface-variant">{lead.summary}</p>
                <p className="mt-4 text-sm font-semibold text-on-surface">{customersById[lead.customer_id]?.company}</p>
                <p className="mt-1 text-lg font-bold text-primary">{formatCompactCurrency(lead.value)}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
