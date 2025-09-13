import React from 'react';
import { PricingCard } from './PricingCard';
import { pricingTiers } from './pricingData';

const Pricing = () => {
  return (
    <section className="relative py-32 px-4 bg-gradient-to-b from-gray-50 to-white" id="pricing">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage: `radial-gradient(#16498b 0.5px, transparent 0.5px)`,
          backgroundSize: '24px 24px'
        }}
      />

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-ubuntu text-gray-900 mb-6">
            Create Your{' '}
            <span className="relative inline-block">
              Online Presence
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-primary rounded-full" />
            </span>
          </h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
            Choose the perfect plan to showcase your skills and achievements
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pricingTiers.map((tier) => (
            <PricingCard key={tier.id} {...tier} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;