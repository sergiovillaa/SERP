/**
 * Shared frontend-facing entity contracts.
 * These shapes are intentionally aligned with PRODUCT_SPEC.md so
 * mocks can be swapped for API responses with minimal refactor.
 */

export const customerStatuses = ['Active', 'Inactive', 'At Risk'];
export const leadStages = ['New', 'Contacted', 'Negotiation', 'Won', 'Lost'];
export const roles = ['admin', 'user'];
