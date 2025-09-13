import React from 'react';
import { Target, Users, Rocket } from 'lucide-react';

const missionPoints = [
  {
    icon: Target,
    title: "Our Goal",
    text: "To assist college students in their job search journey by providing professional portfolio solutions."
  },
  {
    icon: Users,
    title: "Our Approach",
    text: "Creating simple yet impressive online portfolios that effectively showcase student skills and achievements."
  },
  {
    icon: Rocket,
    title: "Your Success",
    text: "Helping students stand out in their career path and take the next step towards their professional goals."
  }
];

export const MissionContent = () => {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h3 className="text-2xl font-ubuntu text-white">Empowering Student Success</h3>
        <p className="text-gray-400 leading-relaxed">
          Our mission is to bridge the gap between education and employment by providing students with powerful tools to showcase their talents.
        </p>
      </div>

      <div className="space-y-6">
        {missionPoints.map((point, index) => (
          <div 
            key={index}
            className="flex items-start gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
          >
            <div className="p-2 rounded-lg bg-primary/20">
              <point.icon className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h4 className="text-lg font-ubuntu text-white mb-1">{point.title}</h4>
              <p className="text-gray-400">{point.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};