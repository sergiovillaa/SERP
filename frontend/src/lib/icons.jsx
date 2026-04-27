const iconPaths = {
  activity: 'M5 12h4l2-5 4 10 2-5h6',
  arrowRight: 'M5 12h14m-5-5 5 5-5 5',
  dashboard: 'M4 4h7v7H4zm9 0h7v4h-7zM4 13h4v7H4zm6 2h10v5H10z',
  download: 'M12 3v10m0 0 4-4m-4 4-4-4M5 19h14',
  filter: 'M4 6h16M7 12h10m-7 6h4',
  group: 'M7 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm10 1a2.5 2.5 0 1 0-2.5-2.5A2.5 2.5 0 0 0 17 12Zm-10 2c-2.8 0-5 1.4-5 3.2V20h10v-2.8C12 15.4 9.8 14 7 14Zm10-.5c-.9 0-1.7.1-2.4.4 1 .7 1.6 1.7 1.8 2.9H22v-.5c0-1.6-2.1-2.8-5-2.8Z',
  help: 'M12 18h.01M9.1 9a3 3 0 1 1 5.8 1c-.4 1.1-1.6 1.6-2.4 2.4-.6.5-.8 1-.8 1.6',
  kanban: 'M5 5h4v14H5zm5 0h4v8h-4zm5 0h4v11h-4z',
  mail: 'M4 6h16v12H4zm0 1 8 6 8-6',
  menu: 'M4 7h16M4 12h16M4 17h16',
  note: 'M6 4h12v16H6zm3 4h6m-6 4h6m-6 4h4',
  plus: 'M12 5v14M5 12h14',
  search: 'm21 21-4.35-4.35M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15Z',
  settings:
    'M12 3.5l1.2 2.4 2.7.4-2 1.9.5 2.7-2.4-1.2-2.4 1.2.5-2.7-2-1.9 2.7-.4L12 3.5Zm0 6.5a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0-6.5v2m0 13v2m8.5-8.5h-2M5.5 12H3m15.4 5.4-1.4-1.4M7 7 5.6 5.6m12.8 0L17 7M7 17l-1.4 1.4',
  spark: 'M12 3l2.2 5.8L20 11l-5.8 2.2L12 19l-2.2-5.8L4 11l5.8-2.2Z',
  userPlus: 'M15 19v-1c0-1.9-2.7-3.5-6-3.5S3 16.1 3 18v1m6-9a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm8-1v6m3-3h-6',
};

export function Icon({ name, className = 'h-5 w-5', strokeWidth = 1.8 }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={strokeWidth}
      viewBox="0 0 24 24"
    >
      <path d={iconPaths[name] ?? iconPaths.dashboard} />
    </svg>
  );
}
