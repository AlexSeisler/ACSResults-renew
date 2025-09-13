import React from 'react';

interface CarouselIndicatorsProps {
  total: number;
  current: number;
  onChange: (index: number) => void;
}

export const CarouselIndicators = ({ total, current, onChange }: CarouselIndicatorsProps) => {
  return (
    <div className="flex justify-center gap-3 mt-6">
      {Array.from({ length: total }).map((_, index) => (
        <button
          key={index}
          onClick={() => onChange(index)}
          className={`w-3 h-3 rounded-full transition-all duration-300 ${
            index === current 
              ? 'bg-primary w-8' 
              : 'bg-gray-600 hover:bg-gray-500'
          }`}
          aria-label={`Go to slide ${index + 1}`}
        />
      ))}
    </div>
  );
};