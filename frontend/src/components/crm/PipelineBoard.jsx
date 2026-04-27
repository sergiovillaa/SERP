import { leadStages } from '../../contracts/entities';
import { formatCompactCurrency } from '../../lib/utils';
import { Badge } from '../ui/Badge';
import { Card } from '../ui/Card';

const stageDot = {
  New: 'bg-sky-500',
  Contacted: 'bg-amber-500',
  Negotiation: 'bg-primary',
  Won: 'bg-emerald-500',
  Lost: 'bg-slate-400',
};

export function PipelineBoard({ leads, customersById, usersById }) {
  return (
    <div className="flex gap-5 overflow-x-auto pb-4">
      {leadStages.map((stage) => {
        const stageLeads = leads.filter((lead) => lead.status === stage);
        const total = stageLeads.reduce((sum, lead) => sum + lead.value, 0);

        return (
          <div key={stage} className="min-w-[19rem] flex-1">
            <div className="mb-3 flex items-center justify-between px-2">
              <div className="flex items-center gap-2">
                <span className={`h-2.5 w-2.5 rounded-full ${stageDot[stage]}`} />
                <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-on-surface">{stage}</h3>
                <Badge variant="info">{stageLeads.length}</Badge>
              </div>
              <span className="text-xs font-semibold text-on-surface-variant">{formatCompactCurrency(total)}</span>
            </div>
            <div className="space-y-4">
              {stageLeads.map((lead) => (
                <Card key={lead.id} className="p-4">
                  <div className="flex items-start justify-between gap-3">
                    <Badge variant="primary">{lead.source}</Badge>
                    <span className="text-sm font-bold text-primary">{formatCompactCurrency(lead.value)}</span>
                  </div>
                  <h4 className="mt-4 font-display text-lg font-bold">{lead.title}</h4>
                  <p className="text-sm text-on-surface-variant">{lead.company}</p>
                  <p className="mt-3 text-sm leading-6 text-on-surface-variant">{lead.summary}</p>
                  <div className="mt-4 rounded-2xl bg-surface-container p-3 text-xs text-on-surface-variant">
                    <p>{customersById[lead.customer_id]?.name}</p>
                    <p className="mt-1">{usersById[lead.assigned_user_id]?.name}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
