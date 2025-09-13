import React from 'react';
import { IMAGES } from '../Content/paths';

export const BackgroundEffect = () => (
  <>
    <div 
      className="absolute inset-0 bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: `url(${IMAGES.background})`,
      }}
    />
    <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-[#0e0e0c]" />
    
    {/* Animated overlay */}
    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent animate-pulse" />
    
    {/* Grid pattern overlay */}
    <div 
      className="absolute inset-0 opacity-30"
      style={{
        backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px),
                         linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
        backgroundSize: '50px 50px',
      }}
    />
  </>
);