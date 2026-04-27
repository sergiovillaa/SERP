import { env } from '../config/env';

export const apiClient = {
  baseUrl: env.apiBaseUrl,
  mode: env.dataMode,
};
