import React from 'react';
import { Check, X } from 'lucide-react';
import { Feature } from './types';

export const PricingFeature = ({ text, included }: Feature) => {
  return (
    <div className="flex items-center gap-3 py-2">
      {included ? (
        <div className="rounded-full p-1 bg-primary/10">
          <Check className="w-4 h-4 text-primary" />
        </div>
      ) : (
        <div className="rounded-full p-1 bg-gray-100">
          <X className="w-4 h-4 text-gray-400" />
        </div>
      )}
      <span className="text-gray-600">{text}</span>
    </div>
  );
};