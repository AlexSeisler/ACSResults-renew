import React from 'react';
import { ExternalLink } from 'lucide-react';
import { PortfolioData } from './types';

export const CarouselItem = ({ 
  templateImage, 
  profileImage, 
  name, 
  major, 
  description,
  portfolioUrl 
}: PortfolioData) => {
  return (
    <div className="min-w-full flex flex-col md:flex-row items-center p-8 gap-8">
      {/* Portfolio Preview */}
      <div className="flex-1 group relative overflow-hidden rounded-xl">
        <img 
          src={templateImage} 
          alt={`${name}'s Portfolio`} 
          className="w-full aspect-video object-cover transform group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <a 
          href={portfolioUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute bottom-4 left-4 flex items-center gap-2 text-white opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0"
        >
          <span className="font-medium">View Portfolio</span>
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>
      
      {/* Content */}
      <div className="flex-1 text-center md:text-left">
        <div className="flex items-center gap-4 mb-6 justify-center md:justify-start">
          <div className="relative">
            <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-primary">
              <img 
                src={profileImage} 
                alt={name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -inset-1 bg-primary/20 rounded-full blur animate-pulse" />
          </div>
          <div>
            <h3 className="text-2xl font-ubuntu text-white mb-1">{name}</h3>
            <p className="text-primary font-medium">{major}</p>
          </div>
        </div>
        <p className="text-gray-300 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};