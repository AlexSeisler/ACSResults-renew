import React from 'react';
import { ExternalLink, ChevronRight } from 'lucide-react';
import { PortfolioData } from './types';

export const PortfolioCard = ({ 
  templateImage, 
  profileImage, 
  name, 
  major, 
  description,
  portfolioUrl 
}: PortfolioData) => {
  return (
    <div className="group relative bg-gradient-to-br from-gray-900/50 to-gray-900/30 rounded-2xl overflow-hidden">
      {/* Portfolio Preview */}
      <div className="relative h-[300px] overflow-hidden">
        <img 
          src={templateImage} 
          alt={`${name}'s Portfolio`}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Content */}
      <div className="relative p-6">
        {/* Profile Section */}
        <div className="flex items-center gap-4 mb-4">
          <div className="relative">
            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-primary">
              <img 
                src={profileImage} 
                alt={name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -inset-1 bg-primary/20 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
          <div>
            <h3 className="text-xl font-ubuntu text-white group-hover:text-primary transition-colors duration-300">
              {name}
            </h3>
            <p className="text-gray-400">{major}</p>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-400 mb-6 line-clamp-2 group-hover:text-gray-300 transition-colors duration-300">
          {description}
        </p>

        {/* Action Button */}
        <a 
          href={portfolioUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-primary hover:text-white transition-colors duration-300"
        >
          <span>View Portfolio</span>
          <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
        </a>
      </div>

      {/* Hover Border Effect */}
      <div className="absolute inset-0 border border-gray-800 rounded-2xl group-hover:border-primary/50 transition-colors duration-500" />
    </div>
  );
};