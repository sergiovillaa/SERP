import { cn } from '../../lib/utils';
import { Icon } from '../../lib/icons';

const variants = {
  primary:
    'bg-gradient-to-br from-primary-deep to-primary text-white shadow-[0_12px_32px_rgba(37,25,19,0.12)] hover:-translate-y-1 hover:from-primary hover:to-primary-bright',
  secondary:
    'bg-surface-container-lowest text-secondary ring-1 ring-secondary/15 hover:bg-surface-container-highest',
  ghost: 'bg-transparent text-on-surface-variant hover:bg-surface-container-high',
};

export function Button({ className, children, icon, variant = 'primary', ...props }) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-2xl px-4 py-3 text-sm font-semibold transition duration-200 active:scale-[0.99]',
        variants[variant],
        className,
      )}
      {...props}
    >
      {icon ? <Icon className="h-4 w-4" name={icon} /> : null}
      {children}
    </button>
  );
}
