import { Icon } from '../../lib/icons';

export function EmptyState({ title, description }) {
  return (
    <div className="rounded-[1.75rem] bg-surface-container p-8 text-center">
      <div className="mx-auto mb-4 grid h-14 w-14 place-items-center rounded-2xl bg-surface-container-lowest text-primary">
        <Icon name="note" />
      </div>
      <h3 className="font-display text-xl font-bold text-on-surface">{title}</h3>
      <p className="mx-auto mt-2 max-w-md text-sm text-on-surface-variant">{description}</p>
    </div>
  );
}
