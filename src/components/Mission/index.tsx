import React from 'react';
import { MissionVideo } from './MissionVideo';
import { MissionContent } from './MissionContent';

const Mission = () => {
  return (
    <section className="relative py-32 px-4" id="Mission">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[#0e0e0c]" />
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
      
      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-ubuntu text-white mb-6">
            Our{' '}
            <span className="relative">
              Mission
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-primary rounded-full" />
            </span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
            Building bridges between education and professional success
          </p>
        </div>
        
        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <MissionVideo />
          <MissionContent />
        </div>
      </div>
    </section>
  );
};

export default Mission;