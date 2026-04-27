export function PageHeader({ eyebrow, title, description, actions }) {
  return (
    <div className="mb-8 flex flex-col gap-5 lg:mb-10 lg:flex-row lg:items-end lg:justify-between">
      <div className="max-w-2xl">
        {eyebrow ? (
          <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.24em] text-on-surface-variant">{eyebrow}</p>
        ) : null}
        <h1 className="font-display text-3xl font-extrabold tracking-[-0.03em] text-on-surface sm:text-4xl">{title}</h1>
        {description ? <p className="mt-2 text-sm leading-6 text-on-surface-variant">{description}</p> : null}
      </div>
      {actions ? <div className="flex flex-wrap items-center gap-3">{actions}</div> : null}
    </div>
  );
}
