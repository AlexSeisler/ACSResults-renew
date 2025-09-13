import React from 'react';
import { Quote } from 'lucide-react';
import { TestimonialCardProps } from './types';

export const TestimonialCard = ({ 
  text, 
  image, 
  name, 
  role, 
  company, 
  isActive,
  onClick 
}: TestimonialCardProps) => {
  return (
    <div 
      className={`
        relative cursor-pointer group
        ${isActive ? 'scale-100' : 'scale-95 opacity-50'}
        transition-all duration-500
      `}
      onClick={onClick}
    >
      <div className="bg-gradient-to-br from-gray-900/90 to-gray-900/70 backdrop-blur-sm p-8 rounded-2xl">
        {/* Quote Icon */}
        <Quote 
          className={`
            w-12 h-12 mb-6 text-primary/50
            ${isActive ? 'rotate-0' : 'rotate-45'}
            transition-transform duration-500
          `}
        />
        
        {/* Testimonial Text */}
        <p className="text-gray-300 text-lg leading-relaxed mb-8">
          {text}
        </p>
        
        {/* Author Info */}
        <div className="flex items-center gap-4">
          <div className="relative">
            <img 
              src={image} 
              alt={name} 
              className="w-16 h-16 rounded-full object-cover border-2 border-primary/50"
            />
            {isActive && (
              <div className="absolute -inset-1 bg-primary/20 rounded-full blur animate-pulse" />
            )}
          </div>
          <div>
            <h4 className="text-white font-ubuntu text-lg">{name}</h4>
            {role && <p className="text-primary">{role}</p>}
            {company && <p className="text-gray-400 text-sm">{company}</p>}
          </div>
        </div>
      </div>
      
      {/* Hover/Active Effects */}
      <div className={`
        absolute inset-0 border border-gray-700 rounded-2xl
        ${isActive ? 'border-primary' : 'group-hover:border-gray-600'}
        transition-colors duration-300
      `} />
    </div>
  );
};