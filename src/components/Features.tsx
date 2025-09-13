import React from 'react';
import { Briefcase, Wrench, PenTool } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Briefcase className="w-16 h-16 text-white" />,
      title: "JUST A HANDSHAKE",
      description: "No forced monthly fees for hosting, just a straight up price, and honest work"
    },
    {
      icon: <Wrench className="w-16 h-16 text-white" />,
      title: "LOCAL-SERVICE",
      description: "Will work directly with you to craft your website"
    },
    {
      icon: <PenTool className="w-16 h-16 text-white" />,
      title: "SHOWCASE YOUR SKILLS",
      description: "Present your best projects and skills with a sleek, professional website that captures attention and builds trust."
    }
  ];

  return (
    <div className="py-20">
      <h2 className="text-4xl text-center text-white font-ubuntu font-light mb-20">
        Step into the spotlight with a site that speaks for you
      </h2>
      
      <div className="flex flex-col md:flex-row justify-center gap-20 px-5">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-center gap-4 w-full md:w-64 text-center">
            {feature.icon}
            <h3 className="text-[#16498b] font-ubuntu text-xl">{feature.title}</h3>
            <p className="text-white tracking-wide">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Features;