import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { EmptyState } from '../components/ui/EmptyState';
import { PageHeader } from '../components/ui/PageHeader';
import { activityRepository, customerRepository, leadRepository } from '../services/repositories';
import { formatCurrency, formatRelativeDays } from '../lib/utils';
import { Icon } from '../lib/icons';

export function CustomerDetailPage() {
  const { customerId } = useParams();
  const [state, setState] = useState({ customer: null, leads: [], activities: [] });

  useEffect(() => {
    Promise.all([customerRepository.getById(customerId), leadRepository.list(), activityRepository.list()]).then(
      ([customer, leads, activities]) =>
        setState({
          customer,
          leads: leads.filter((item) => item.customer_id === customerId),
          activities: activities.filter((item) => item.customer_id === customerId),
        }),
    );
  }, [customerId]);

  if (state.customer === null) return <div className="py-20 text-sm text-on-surface-variant">Loading customer profile...</div>;
  if (!state.customer) return <EmptyState description="The requested customer could not be found in the mock repository." title="Customer not found" />;

  const customer = state.customer;

  return (
    <div>
      <PageHeader
        eyebrow="Customers / Detail"
        title={customer.name}
        description={`${customer.title} at ${customer.company}`}
        actions={
          <>
            <Button variant="secondary">Edit Profile</Button>
            <Button>Primary Action</Button>
          </>
        }
      />

      <Card className="mb-8 overflow-hidden p-0">
        <div className="bg-gradient-to-r from-primary/8 via-surface-container-lowest to-transparent px-6 py-8 sm:px-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
              <img alt={customer.name} className="h-28 w-28 rounded-[1.75rem] object-cover shadow-[0_12px_32px_rgba(37,25,19,0.12)]" src={customer.avatar} />
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <h2 className="font-display text-4xl font-extrabold tracking-[-0.04em]">{customer.name}</h2>
                  <Badge variant="info">{customer.tag}</Badge>
                </div>
                <p className="mt-2 text-lg text-on-surface-variant">{customer.email}</p>
                <div className="mt-4 flex flex-wrap gap-5 text-sm text-on-surface-variant">
                  <span className="inline-flex items-center gap-2">
                    <Icon className="h-4 w-4 text-primary" name="mail" />
                    {customer.email}
                  </span>
                  <span>{customer.phone}</span>
                  <span>{customer.location}</span>
                </div>
              </div>
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              {[
                ['Lifetime Value', formatCurrency(customer.lifetimeValue)],
                ['Active Projects', customer.activeProjects],
                ['Last Contact', formatRelativeDays(customer.lastContactAt)],
              ].map(([label, value]) => (
                <div key={label} className="rounded-[1.5rem] bg-surface-container-lowest p-4 shadow-[0_12px_32px_rgba(37,25,19,0.06)]">
                  <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-on-surface-variant">{label}</p>
                  <p className="mt-2 font-display text-2xl font-bold">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Card>

      <div className="grid gap-6 xl:grid-cols-[1.3fr_0.9fr]">
        <div className="space-y-6">
          <Card>
            <div className="mb-6 flex items-center justify-between">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-on-surface-variant">Associated Leads</p>
                <h3 className="mt-2 font-display text-2xl font-bold">Deals & opportunities</h3>
              </div>
              <Button variant="ghost">View all leads</Button>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {state.leads.map((lead) => (
                <div key={lead.id} className="rounded-[1.5rem] bg-surface-container p-5">
                  <Badge variant="primary">{lead.status}</Badge>
                  <h4 className="mt-4 font-display text-xl font-bold">{lead.title}</h4>
                  <p className="mt-2 text-sm leading-6 text-on-surface-variant">{lead.summary}</p>
                  <div className="mt-4 flex items-center justify-between text-sm">
                    <span className="text-on-surface-variant">{lead.company}</span>
                    <span className="font-bold text-primary">{formatCurrency(lead.value)}</span>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card className="bg-gradient-to-br from-secondary via-secondary/90 to-primary text-white">
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-white/70">Relationship Health</p>
            <h3 className="mt-3 font-display text-3xl font-extrabold tracking-[-0.04em]">Strong momentum</h3>
            <p className="mt-3 max-w-xl text-sm leading-6 text-white/80">
              The account is highly engaged, has multiple active opportunities and consistent collaboration touchpoints.
            </p>
          </Card>
        </div>

        <Card>
          <div className="mb-6 flex items-center justify-between">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-on-surface-variant">Timeline</p>
              <h3 className="mt-2 font-display text-2xl font-bold">Interaction log</h3>
            </div>
          </div>
          <div className="rounded-[1.5rem] bg-surface-container p-4">
            <textarea className="h-24 w-full resize-none bg-transparent text-sm outline-none placeholder:text-on-surface-variant/60" placeholder="Add a quick note..." />
            <div className="mt-3 flex justify-end">
              <Button className="px-4 py-2 text-xs">Post Note</Button>
            </div>
          </div>
          <div className="mt-6 space-y-4">
            {state.activities.map((activity) => (
              <div key={activity.id} className="rounded-[1.5rem] bg-surface-container p-4">
                <div className="flex items-center justify-between gap-3">
                  <Badge variant="info">{activity.type}</Badge>
                  <span className="text-xs text-on-surface-variant">{formatRelativeDays(activity.created_at)}</span>
                </div>
                <p className="mt-3 text-sm leading-6 text-on-surface">{activity.content}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
