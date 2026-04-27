import { Card } from '../ui/Card';

export function StatCard({ label, value, hint, icon, accent = 'from-primary/20 to-primary/5' }) {
  return (
    <Card className="p-5">
      <div className="mb-4 flex items-start justify-between">
        <div className={`grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br ${accent} text-primary`}>
          {icon}
        </div>
        {hint ? <span className="rounded-full bg-surface-container px-3 py-1 text-[11px] font-bold text-on-surface-variant">{hint}</span> : null}
      </div>
      <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-on-surface-variant">{label}</p>
      <p className="mt-2 font-display text-3xl font-extrabold tracking-[-0.03em] text-on-surface">{value}</p>
    </Card>
  );
}
