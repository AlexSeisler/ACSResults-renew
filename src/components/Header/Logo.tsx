import React from 'react';

export const Logo = () => (
  <div className="flex items-center gap-6 group">
    <div className="relative">
      <img 
        src="/content/images/ACS-Logo-Background.png" 
        alt="ACS Logo" 
        className="h-[100px] transform transition-all duration-500 group-hover:scale-105" 
      />
      <div className="absolute -inset-2 bg-primary/20 rounded-full blur opacity-0 group-hover:opacity-100 transition-all duration-500" />
    </div>
    
    <h1 className="relative uppercase font-ubuntu text-4xl md:text-5xl text-gray-300 overflow-hidden">
      <span className="relative inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-primary after:transform after:translate-x-[-100%] after:group-hover:translate-x-0 after:transition-transform after:duration-500">
        ACS Results
      </span>
    </h1>
  </div>
);