import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FormField } from './FormField';
import { TextArea } from './TextArea';
import { submitForm } from '../../lib/form';
import type { FormData } from '../../types/form.types';

export const OnboardingForm = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const handleMultiSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const options = Array.from(e.target.selectedOptions).map((option) => option.value);
    setSelectedOptions(options);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const formData = new FormData(e.currentTarget);
      const data: FormData = {
        full_name: formData.get('fullName') as string,
        email: formData.get('email') as string,
        phone: formData.get('phone') as string,
        message: formData.get('message') as string || undefined,
        selected_options: selectedOptions,
      };

      await submitForm(data);
      navigate('/success');
    } catch (err) {
      console.error('Error submitting form:', err);
      setError(err instanceof Error ? err.message : 'There was an error submitting your form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {error && (
        <div className="p-4 bg-red-100 border border-red-400 text-red-700 rounded-md">
          {error}
        </div>
      )}

      <FormField
        label="Full Name"
        type="text"
        name="fullName"
        required
        placeholder="John Doe"
        autoComplete="name"
      />

      <FormField
        label="Email Address"
        type="email"
        name="email"
        required
        placeholder="john@example.com"
        autoComplete="email"
      />

      <FormField
        label="Phone Number"
        type="tel"
        name="phone"
        required
        placeholder="(123) 456-7890"
        autoComplete="tel"
      />

      <div>
        <label htmlFor="options" className="block text-sm font-medium text-gray-200 mb-2">
          Select Service
        </label>
        <select
          id="options"
          name="options"
          multiple
          value={selectedOptions}
          onChange={handleMultiSelectChange}
          className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white shadow-sm focus:border-primary focus:ring-primary px-4 py-3"
          size={4}
        >
          <option value="basic_portfolio">Basic Portfolio</option>
          <option value="advanced_portfolio">Advanced Portfolio</option>
          <option value="company_website">Company Website</option>
          <option value="other">Other</option>
        </select>
      </div>

      <TextArea
        label="Additional Notes (Optional)"
        name="message"
        rows={4}
        placeholder="Tell us about your project..."
      />

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full flex justify-center py-4 px-6 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
      >
        {isSubmitting ? 'Submitting...' : 'Get Started'}
      </button>
    </form>
  );
};