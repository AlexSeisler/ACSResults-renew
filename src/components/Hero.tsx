import React from 'react';

const Hero = () => {
  return (
    <div 
      className="h-screen w-full bg-cover bg-center bg-fixed flex items-center justify-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.7)), url(/content/images/background.png)`
      }}
    >
      <h1 className="text-white text-5xl md:text-7xl font-montserrat font-semibold uppercase text-center tracking-wider leading-relaxed w-4/5">
        Your skills, your story, your future — all in one website.
      </h1>
    </div>
  );
};

export default Hero;