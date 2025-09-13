import React from 'react';

interface FooterSectionProps {
  title: string;
  children: React.ReactNode;
}

export const FooterSection = ({ title, children }: FooterSectionProps) => {
  return (
    <div className="space-y-4">
      <h4 className="text-white font-ubuntu text-lg">{title}</h4>
      {children}
    </div>
  );
};