import { cn } from '../../lib/utils';

export function Card({ className, children }) {
  return (
    <div
      className={cn(
        'rounded-[1.75rem] bg-surface-container-lowest p-6 shadow-[0_12px_32px_rgba(37,25,19,0.08)]',
        className,
      )}
    >
      {children}
    </div>
  );
}
