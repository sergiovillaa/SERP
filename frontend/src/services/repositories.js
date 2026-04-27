import { activities } from '../mocks/activities';
import { apiClient } from './apiClient';
import { customers } from '../mocks/customers';
import { dashboardMetrics } from '../mocks/dashboard';
import { leads } from '../mocks/leads';
import { users } from '../mocks/users';

const wait = (ms = 120) => new Promise((resolve) => setTimeout(resolve, ms));
const ensureMockMode = () => {
  if (apiClient.mode !== 'mock') {
    throw new Error(`Repository not wired for live API mode yet: ${apiClient.baseUrl}`);
  }
};

export const authRepository = {
  async login({ email, password }) {
    ensureMockMode();
    await wait();
    const user = users.find((item) => item.email === email && item.password === password);
    if (!user) throw new Error('Invalid credentials');
    const { password: _password, ...safeUser } = user;
    return { user: safeUser, token: `mock-token-${safeUser.id}` };
  },
  async register({ name, email, password }) {
    ensureMockMode();
    await wait();
    return {
      user: {
        id: `u-${users.length + 1}`,
        name,
        email,
        password,
        role: 'user',
        title: 'New Team Member',
        avatar:
          'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80',
      },
      token: 'mock-token-new-user',
    };
  },
};

export const dashboardRepository = {
  async getSummary() {
    ensureMockMode();
    await wait();
    return dashboardMetrics;
  },
};

export const customerRepository = {
  async list() {
    ensureMockMode();
    await wait();
    return customers;
  },
  async getById(customerId) {
    ensureMockMode();
    await wait();
    return customers.find((item) => item.id === customerId) ?? null;
  },
};

export const leadRepository = {
  async list() {
    ensureMockMode();
    await wait();
    return leads;
  },
};

export const activityRepository = {
  async list() {
    ensureMockMode();
    await wait();
    return activities;
  },
};
