import React from 'react';
import { SpotlightHeading } from './SpotlightHeading';
import { SpotlightGrid } from './SpotlightGrid';

const Spotlight = () => {
  return (
    <section className="relative py-32 px-4 overflow-hidden">
      {/* Modern gradient background */}
      <div className="absolute inset-0 bg-[#0e0e0c]" />
      
      {/* Radial gradient overlay */}
      <div 
        className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent"
        style={{
          maskImage: 'radial-gradient(circle at 50% 0%, black, transparent 70%)',
          WebkitMaskImage: 'radial-gradient(circle at 50% 0%, black, transparent 70%)'
        }}
      />
      
      {/* Animated line pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #16498b 1px, transparent 1px),
            linear-gradient(to bottom, #16498b 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          transform: 'perspective(1000px) rotateX(60deg) scale(2)',
          transformOrigin: 'center top'
        }}
      />
      
      {/* Content */}
      <div className="relative max-w-7xl mx-auto">
        <SpotlightHeading />
        <SpotlightGrid />
      </div>
    </section>
  );
};

export default Spotlight;