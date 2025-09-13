import { supabase } from './supabase';
import type { FormData } from '../types/form.types';

export const submitForm = async (data: FormData) => {
  const { error } = await supabase
    .from('leads')
    .insert([{
      full_name: data.full_name,
      email: data.email,
      phone: data.phone,
      message: data.message || null,
      selected_options: data.selected_options || [],
      status: 'new'
    }]);

  if (error) {
    console.error('Error submitting form:', error);
    throw new Error('Failed to submit form. Please try again.');
  }
};