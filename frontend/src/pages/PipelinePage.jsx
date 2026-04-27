import { useEffect, useState } from 'react';
import { PipelineBoard } from '../components/crm/PipelineBoard';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { PageHeader } from '../components/ui/PageHeader';
import { customerRepository, leadRepository } from '../services/repositories';

const usersById = {
  'u-1': { name: 'Alex Sterling' },
  'u-2': { name: 'Maya Chen' },
};

export function PipelinePage() {
  const [state, setState] = useState({ customers: [], leads: [] });

  useEffect(() => {
    Promise.all([customerRepository.list(), leadRepository.list()]).then(([customers, leads]) => setState({ customers, leads }));
  }, []);

  const customersById = Object.fromEntries(state.customers.map((item) => [item.id, item]));
  const won = state.leads.filter((item) => item.status === 'Won').length;
  const open = state.leads.filter((item) => !['Won', 'Lost'].includes(item.status)).length;

  return (
    <div>
      <PageHeader
        eyebrow="Workspace / Pipeline"
        title="Sales Pipeline"
        description="Kanban-first pipeline inspired by the static spec, but organized as reusable React slices and ready for future API updates."
        actions={
          <>
            <Button icon="filter" variant="secondary">
              Filter
            </Button>
            <Button icon="plus">Add Lead</Button>
          </>
        }
      />

      <div className="mb-6 flex flex-wrap items-center gap-3">
        <Badge variant="primary">{open} active leads</Badge>
        <Badge variant="active">{won} won</Badge>
        <Badge variant="info">Board view</Badge>
      </div>

      <PipelineBoard customersById={customersById} leads={state.leads} usersById={usersById} />

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {[
          ['Open opportunities', open],
          ['Won this cycle', won],
          ['Average stage velocity', '5.6 days'],
        ].map(([label, value]) => (
          <Card key={label} className="p-5">
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-on-surface-variant">{label}</p>
            <p className="mt-3 font-display text-3xl font-extrabold tracking-[-0.03em]">{value}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}
