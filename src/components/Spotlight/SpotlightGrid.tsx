import React from 'react';
import { Briefcase, Wrench, PenTool } from 'lucide-react';
import { SpotlightCard } from './SpotlightCard';

const features = [
  {
    Icon: PenTool,
    title: "Showcase Your Skills",
    description: "Present your best projects and skills with a sleek, professional website that captures attention and builds trust with potential employers."
  },
  {
    Icon: Wrench,
    title: "Local Service",
    description: "Work directly with you to craft your perfect website. Our hands-on approach ensures your vision comes to life exactly as you imagined."
  },
  {
    Icon: Briefcase,
    title: "Just a Handshake",
    description: "No forced monthly fees for hosting, just a straight up price, and honest work. We believe in transparent pricing and lasting relationships."
  }
];

export const SpotlightGrid = () => (
  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
    {features.map((feature, index) => (
      <SpotlightCard key={index} {...feature} />
    ))}
  </div>
);