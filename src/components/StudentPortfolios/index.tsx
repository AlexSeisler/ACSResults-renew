import React from 'react';
import { Carousel } from './Carousel';

const StudentPortfolios = () => {
  return (
    <section className="py-32 px-4" id="portfolios">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-ubuntu text-white mb-6">
            Student{' '}
            <span className="relative">
              Portfolios
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-primary rounded-full" />
            </span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
            Discover how our students showcase their skills and achievements through professional portfolios
          </p>
        </div>
        
        <Carousel />
      </div>
    </section>
  );
};

export default StudentPortfolios;