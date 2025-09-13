import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 md:pt-32">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: `url(/content/images/background.png)`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/80 to-[#0e0e0c]" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-primary/10 animate-pulse" />
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-montserrat font-semibold uppercase tracking-wider leading-tight text-white mb-6 md:mb-8">
          <span className="block mb-2">Your skills,</span>
          <span className="block mb-2">your story,</span>
          <span className="block text-primary">your future</span>
        </h1>
        
        <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 md:mb-12 max-w-2xl mx-auto leading-relaxed">
          Create a professional portfolio that showcases your expertise and helps you stand out in your career journey.
        </p>
        
        <a 
          href="#pricing" 
          className="group inline-flex items-center gap-2 bg-primary/90 text-white px-6 md:px-8 py-3 md:py-4 rounded-full text-base md:text-lg font-semibold relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80 transform translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" />
          <span className="relative z-10">Get Started</span>
          <ArrowRight className="w-5 h-5 relative z-10 transform group-hover:translate-x-1 transition-transform duration-300" />
        </a>
      </div>
    </section>
  );
};

export default Hero;