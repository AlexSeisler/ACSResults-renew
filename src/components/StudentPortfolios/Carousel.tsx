import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { CarouselItem } from './CarouselItem';
import { CarouselIndicators } from './CarouselIndicators';
import { portfolioData } from './portfolioData';

export const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % portfolioData.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + portfolioData.length) % portfolioData.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const goToSlide = (index: number) => {
    if (isAnimating || index === currentIndex) return;
    setIsAnimating(true);
    setCurrentIndex(index);
    setTimeout(() => setIsAnimating(false), 500);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full max-w-[1200px] mx-auto relative">
      <div className="overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-900/30 backdrop-blur-sm">
        <div 
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {portfolioData.map((item, index) => (
            <CarouselItem key={index} {...item} />
          ))}
        </div>
      </div>
      
      {/* Navigation Buttons */}
      <div className="absolute top-1/2 w-full flex justify-between px-4 -translate-y-1/2">
        <button
          onClick={prevSlide}
          className="bg-primary/80 text-white p-3 rounded-full hover:bg-primary transition-colors transform hover:scale-110 duration-300"
          disabled={isAnimating}
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="bg-primary/80 text-white p-3 rounded-full hover:bg-primary transition-colors transform hover:scale-110 duration-300"
          disabled={isAnimating}
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      <CarouselIndicators 
        total={portfolioData.length}
        current={currentIndex}
        onChange={goToSlide}
      />
    </div>
  );
};