import React from 'react';
import { LucideIcon } from 'lucide-react';

interface SpotlightCardProps {
  Icon: LucideIcon;
  title: string;
  description: string;
}

export const SpotlightCard = ({ Icon, title, description }: SpotlightCardProps) => (
  <div className="group relative bg-gradient-to-br from-gray-900/50 to-gray-900/30 backdrop-blur-sm rounded-2xl p-8 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 overflow-hidden">
    {/* Animated border */}
    <div className="absolute inset-0 border border-gray-800 rounded-2xl group-hover:border-primary/50 transition-colors duration-500" />
    
    {/* Glow effect */}
    <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-transparent opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
    
    <div className="relative">
      <div className="bg-gradient-to-br from-primary to-primary/70 rounded-xl p-3 w-fit mb-6 group-hover:scale-110 transition-transform duration-500">
        <Icon className="w-8 h-8 text-white" />
      </div>
      
      <h3 className="text-2xl font-ubuntu text-white mb-4 group-hover:text-primary transition-colors">
        {title}
      </h3>
      
      <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
        {description}
      </p>
    </div>
  </div>
);