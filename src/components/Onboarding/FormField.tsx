import React from 'react';
import { FormFieldProps } from './types';

export const FormField: React.FC<FormFieldProps & React.InputHTMLAttributes<HTMLInputElement>> = ({
  label,
  error,
  className = '',
  ...props
}) => {
  return (
    <div>
      <label htmlFor={props.id} className="block text-sm font-medium text-gray-200 mb-2">
        {label}
      </label>
      <input
        {...props}
        className={`mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white shadow-sm focus:border-primary focus:ring-primary px-4 py-3 ${className}`}
      />
      {error && (
        <p className="mt-2 text-sm text-red-500">{error}</p>
      )}
    </div>
  );
};