import React, { useState, useEffect } from 'react';
import { ArrowUpCircle } from 'lucide-react';

export const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={`
      fixed bottom-24 right-8 z-40
      transform transition-all duration-500
      ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}
    `}>
      <button
        onClick={scrollToTop}
        className="group bg-primary/90 p-3 rounded-full hover:bg-primary transition-all duration-300 shadow-lg hover:shadow-primary/20"
        aria-label="Scroll to top"
      >
        <ArrowUpCircle className="w-6 h-6 text-white transform group-hover:-translate-y-1 transition-transform duration-300" />
      </button>
    </div>
  );
};