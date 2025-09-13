import React from 'react';
import { ExternalLink } from 'lucide-react';
import { PricingCardProps } from './types';
import { PricingFeature } from './PricingFeature';
import { Link } from 'react-router-dom';

export const PricingCard = ({ 
  title, 
  price, 
  description,
  subtitle,
  features,
  exampleUrl,
  isPopular
}: PricingCardProps) => {
  return (
    <div className={`
      relative bg-white rounded-2xl p-8
      ${isPopular ? 'lg:-translate-y-4' : ''}
      transition-all duration-500
    `}>
      {/* Card Shadow and Border */}
      <div className="absolute inset-0 rounded-2xl shadow-[0_4px_24px_-8px_rgba(0,0,0,0.2)]" />
      <div className="absolute inset-0 rounded-2xl border border-gray-200" />
      
      {/* Popular Badge */}
      {isPopular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
          <div className="px-6 py-1.5 bg-primary text-white text-sm font-semibold rounded-full shadow-lg">
            Most Popular
          </div>
        </div>
      )}

      {/* Content Container */}
      <div className="relative">
        {/* Pricing Header */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-ubuntu text-gray-800 mb-4">{title}</h3>
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="text-gray-600">{description}</span>
          </div>
          {subtitle && (
            <p className="text-gray-600">{subtitle}</p>
          )}
        </div>

        {/* Features List */}
        <div className="space-y-3 mb-8">
          {features.map((feature, index) => (
            <PricingFeature key={index} {...feature} />
          ))}
        </div>

        {/* Action Buttons */}
        <div className="space-y-4">
          <a
            href={exampleUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-gray-100 text-gray-800 hover:bg-gray-200 transition-colors duration-300"
          >
            View Example
            <ExternalLink className="w-4 h-4 opacity-70" />
          </a>
          <Link
            to="/onboarding"
            className="block w-full py-3 px-4 rounded-xl text-center bg-primary text-white shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 hover:bg-primary/90 transition-all duration-300"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};