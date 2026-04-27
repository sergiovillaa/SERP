import { cn } from '../../lib/utils';

const variants = {
  active: 'bg-emerald-100 text-emerald-700',
  inactive: 'bg-slate-200 text-slate-600',
  risk: 'bg-amber-100 text-amber-700',
  info: 'bg-secondary-container text-secondary',
  primary: 'bg-primary/10 text-primary',
};

export function Badge({ children, variant = 'info', className }) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em]',
        variants[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}
