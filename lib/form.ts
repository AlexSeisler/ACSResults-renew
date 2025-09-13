import type { FormData } from '../types/form.types';

/**
 * Stubbed form submission handler.
 * - Replaces Supabase insert call
 * - Ensures Netlify build works with no backend dependency
 * - Logs to console for visibility during demo
 */
export const submitForm = async (data: FormData): Promise<void> => {
  console.log('Stubbed submitForm called with:', data);

  // Simulate async latency (to mimic real request)
  await new Promise((resolve) => setTimeout(resolve, 500));

  // Always succeed (no errors thrown)
  return Promise.resolve();
};
