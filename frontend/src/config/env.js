export const env = {
  appName: 'Architect CRM',
  apiBaseUrl: import.meta.env.VITE_API_BASE_URL ?? 'http://localhost:3000',
  dataMode: import.meta.env.VITE_DATA_MODE ?? 'mock',
};
