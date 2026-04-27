import { cn } from '../../lib/utils';

export function Input({ className, ...props }) {
  return (
    <input
      className={cn(
        'w-full rounded-2xl bg-surface-container-low px-4 py-3 text-sm text-on-surface placeholder:text-on-surface-variant/60 outline-none transition focus:bg-surface-container-lowest focus:shadow-[inset_0_-2px_0_0_var(--color-primary)]',
        className,
      )}
      {...props}
    />
  );
}
