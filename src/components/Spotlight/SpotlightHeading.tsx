import React from 'react';

export const SpotlightHeading = () => (
  <div className="text-center mb-16 relative">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
    
    <h2 className="relative text-4xl md:text-5xl font-ubuntu font-light text-white mb-6">
      Step into the{' '}
      <span className="relative">
        spotlight
        <span className="absolute -bottom-2 left-0 w-full h-1 bg-primary rounded-full" />
      </span>
    </h2>
    
    <p className="relative text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
    Create a website that showcases your expertise and leaves a lasting impression.
    </p>
  </div>
);