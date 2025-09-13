import React, { useState, useEffect } from 'react';
import { Phone, Calendar } from 'lucide-react';
import { Logo } from './Logo';
import { NavButton } from './NavButton';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`
        fixed top-0 w-full z-50 transition-all duration-500
        ${isScrolled 
          ? 'bg-[#0e0e0c]/95 backdrop-blur-md py-4 shadow-lg shadow-black/10' 
          : 'bg-transparent py-6'
        }
      `}
    >
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <Logo />
        
        <nav className="flex items-center gap-4">
          <NavButton 
            href="tel:4847694650"
            icon={Phone}
            text="(484) 769-4650"
            external
          />
          
          <NavButton 
            href="/onboarding"
            icon={Calendar}
            text="Get a Portfolio"
          />
        </nav>
      </div>
    </header>
  );
};