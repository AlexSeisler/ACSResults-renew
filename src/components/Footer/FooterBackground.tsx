import React from 'react';

export const FooterBackground = () => (
  <>
    <div className="absolute inset-0 bg-[#0e0e0c]" />
    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
    <div 
      className="absolute inset-0 opacity-[0.03]"
      style={{
        backgroundImage: `radial-gradient(circle at center, #16498b 0.5px, transparent 0.5px)`,
        backgroundSize: '24px 24px'
      }}
    />
  </>
);