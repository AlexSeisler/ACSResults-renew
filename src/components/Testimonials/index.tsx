import React, { useState, useEffect } from 'react';
import { TestimonialCard } from './TestimonialCard';
import { testimonials } from './testimonialData';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-rotate testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative py-32 px-4 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[#0e0e0c]" />
      <div 
        className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent"
        style={{
          maskImage: 'radial-gradient(circle at 50% 0%, black, transparent 70%)',
          WebkitMaskImage: 'radial-gradient(circle at 50% 0%, black, transparent 70%)'
        }}
      />
      
      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-ubuntu text-white mb-6">
            Our{' '}
            <span className="relative">
              Supporters
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-primary rounded-full" />
            </span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
            Hear what industry professionals and educators say about our work
          </p>
        </div>
        
        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 px-4">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              {...testimonial}
              isActive={index === activeIndex}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;