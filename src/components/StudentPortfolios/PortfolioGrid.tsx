import React from 'react';
import { PortfolioCard } from './PortfolioCard';
import { portfolioData } from './portfolioData';

export const PortfolioGrid = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
      {portfolioData.map((portfolio, index) => (
        <PortfolioCard key={index} {...portfolio} />
      ))}
    </div>
  );
};