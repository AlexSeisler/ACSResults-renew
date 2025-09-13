import React from 'react';
import { ArrowRight } from 'lucide-react';

export const HeroContent = () => (
  <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
    <h1 className="text-4xl md:text-6xl lg:text-7xl font-montserrat font-semibold uppercase tracking-wider leading-tight text-white mb-8">
      Your skills, your story, your future
      <span className="block text-primary mt-2">— all in one website.</span>
    </h1>
    
    <p className="text-gray-300 text-lg md:text-xl mb-12 max-w-2xl mx-auto">
      Create a professional portfolio that showcases your expertise and helps you stand out in your career journey.
    </p>
    
    <a 
      href="#pricing" 
      className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary/90 transition-all duration-300 transform hover:-translate-y-1"
    >
      Get Started
      <ArrowRight className="w-5 h-5" />
    </a>
  </div>
);