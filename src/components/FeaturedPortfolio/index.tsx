import React from 'react';
import { ArrowRight, ExternalLink, Sparkles, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';

const FeaturedPortfolio = () => {
  return (
    <section className="relative py-32 px-4">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[#0e0e0c]" />
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(#16498b 0.5px, transparent 0.5px)`,
          backgroundSize: '24px 24px'
        }}
      />

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-ubuntu text-white mb-6">
            Featured{' '}
            <span className="relative">
              Templates
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-primary rounded-full" />
            </span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
            Choose the perfect portfolio template to showcase your work
          </p>
        </div>

        {/* Portfolio Cards Container */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Advanced Portfolio Card */}
          <div className="group relative bg-gradient-to-br from-gray-900/50 to-gray-900/30 backdrop-blur-sm rounded-2xl p-8 overflow-hidden">
            {/* Animated border */}
            <div className="absolute inset-0 border border-gray-800 rounded-2xl group-hover:border-primary/50 transition-colors duration-500" />
            
            {/* Glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-transparent opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />

            <div className="relative space-y-6">
              {/* Badge */}
              <div className="flex items-center gap-2 text-primary">
                <Rocket className="w-5 h-5" />
                <span className="text-sm font-semibold uppercase tracking-wider">Advanced Portfolio</span>
              </div>

              {/* Portfolio Preview */}
              <div className="relative overflow-hidden rounded-xl">
                <img 
                  src="/content/images/MainMultiPageTemplate.png"
                  alt="Advanced Portfolio Template"
                  className="w-full aspect-video object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Content */}
              <div>
                <h3 className="text-2xl font-ubuntu text-white mb-4">Multi-Page Professional Portfolio</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  A comprehensive portfolio solution featuring multiple pages, advanced interactions, and detailed project showcases. Perfect for professionals wanting to make a lasting impression.
                </p>

                <div className="flex flex-wrap gap-4">
                  <a 
                    href="https://alex-seisler.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-primary/90 text-white px-6 py-3 rounded-xl hover:bg-primary transition-colors duration-300"
                  >
                    View Portfolio
                    <ExternalLink className="w-5 h-5" />
                  </a>
                  <Link
                    to="/onboarding"
                    className="inline-flex items-center gap-2 bg-white/10 text-white px-6 py-3 rounded-xl hover:bg-white/20 transition-colors duration-300"
                  >
                    Get Started
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Basic Portfolio Card */}
          <div className="group relative bg-gradient-to-br from-gray-900/50 to-gray-900/30 backdrop-blur-sm rounded-2xl p-8 overflow-hidden">
            {/* Animated border */}
            <div className="absolute inset-0 border border-gray-800 rounded-2xl group-hover:border-primary/50 transition-colors duration-500" />
            
            {/* Glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-transparent opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />

            <div className="relative space-y-6">
              {/* Badge */}
              <div className="flex items-center gap-2 text-primary">
                <Sparkles className="w-5 h-5" />
                <span className="text-sm font-semibold uppercase tracking-wider">Basic Portfolio</span>
              </div>

              {/* Portfolio Preview */}
              <div className="relative overflow-hidden rounded-xl">
                <img 
                  src="/content/images/Alex-Full.png"
                  alt="Basic Portfolio Template"
                  className="w-full aspect-video object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Content */}
              <div>
                <h3 className="text-2xl font-ubuntu text-white mb-4">Single-Page Portfolio</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  A clean, straightforward portfolio template that presents your work in an elegant single-page layout. Ideal for students and early-career professionals.
                </p>

                <div className="flex flex-wrap gap-4">
                  <a 
                    href="https://alexseisler.github.io/ACS-Results/Main-Template/index.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-primary/90 text-white px-6 py-3 rounded-xl hover:bg-primary transition-colors duration-300"
                  >
                    View Portfolio
                    <ExternalLink className="w-5 h-5" />
                  </a>
                  <Link
                    to="/onboarding"
                    className="inline-flex items-center gap-2 bg-white/10 text-white px-6 py-3 rounded-xl hover:bg-white/20 transition-colors duration-300"
                  >
                    Get Started
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPortfolio;