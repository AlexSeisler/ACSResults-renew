import React, { useState, useEffect } from 'react';
import { Phone, Calendar, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`
      fixed top-0 w-full z-50 transition-all duration-500
      ${isScrolled 
        ? 'bg-[#0e0e0c]/95 backdrop-blur-md py-2 shadow-lg shadow-black/10' 
        : 'bg-transparent py-3'
      }
    `}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <div className="flex items-center gap-3 md:gap-6 group">
            <div className="relative">
              <img 
                src="/content/images/ACS-Logo-Background.png" 
                alt="ACS Logo" 
                className="h-[60px] md:h-[80px] transform transition-all duration-500 group-hover:scale-105" 
              />
              <div className="absolute -inset-2 bg-primary/20 rounded-full blur opacity-0 group-hover:opacity-100 transition-all duration-500" />
            </div>
            
            <h1 className="relative uppercase font-ubuntu text-2xl md:text-4xl lg:text-5xl text-gray-300 overflow-hidden">
              <span className="relative inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-primary after:transform after:translate-x-[-100%] after:group-hover:translate-x-0 after:transition-transform after:duration-500">
                ACS Results
              </span>
            </h1>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-white hover:text-primary transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          
          {/* Navigation Buttons - Desktop */}
          <div className="hidden md:flex gap-4">
            <NavButton 
              href="tel:4847694650"
              icon={<Phone className="w-5 h-5" />}
              text="(484) 769-4650"
            />
            <NavButton 
              href="/onboarding"
              icon={<Calendar className="w-5 h-5" />}
              text="Get a Portfolio"
            />
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`
          md:hidden
          transform transition-all duration-300 ease-in-out
          ${isMenuOpen ? 'h-auto opacity-100 mt-4' : 'h-0 opacity-0'}
          overflow-hidden
        `}>
          <div className="flex flex-col gap-3 pb-4">
            <MobileNavButton 
              href="tel:4847694650"
              icon={<Phone className="w-5 h-5" />}
              text="(484) 769-4650"
            />
            <MobileNavButton 
              href="/onboarding"
              icon={<Calendar className="w-5 h-5" />}
              text="Get a Portfolio"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

const NavButton = ({ href, icon, text, external }: any) => {
  const content = (
    <>
      <div className="relative z-10 bg-primary/30 rounded-full p-2 transform group-hover:scale-110 transition-transform duration-500">
        {icon}
      </div>
      <span className="relative z-10 text-white font-medium">
        {text}
      </span>
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-0 bg-primary blur-md" />
      </div>
    </>
  );

  const className = "group relative flex items-center gap-3 bg-primary/90 rounded-xl px-6 py-3 overflow-hidden";

  if (href.startsWith('tel:') || external) {
    return (
      <a href={href} className={className}>
        {content}
      </a>
    );
  }

  return (
    <Link to={href} className={className}>
      {content}
    </Link>
  );
};

const MobileNavButton = ({ href, icon, text, external }: any) => {
  const content = (
    <>
      <div className="bg-primary/30 rounded-full p-2">
        {icon}
      </div>
      <span className="font-medium">{text}</span>
    </>
  );

  const className = "flex items-center gap-3 bg-primary/90 rounded-xl px-4 py-3 text-white";

  if (href.startsWith('tel:') || external) {
    return (
      <a href={href} className={className}>
        {content}
      </a>
    );
  }

  return (
    <Link to={href} className={className}>
      {content}
    </Link>
  );
};

export default Header;