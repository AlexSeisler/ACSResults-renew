import React from 'react';
import { LucideIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

interface NavButtonProps {
  href: string;
  icon: LucideIcon;
  text: string;
  external?: boolean;
}

export const NavButton = ({ href, icon: Icon, text, external }: NavButtonProps) => {
  const commonClasses = "group relative flex items-center gap-3 bg-primary/90 rounded-xl px-6 py-3 overflow-hidden";

  const content = (
    <>
      {/* Background animation */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80 transform translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" />
      
      {/* Icon container */}
      <div className="relative z-10 bg-primary/30 rounded-full p-2 transform group-hover:scale-110 transition-transform duration-500">
        <Icon className="w-5 h-5 text-white" />
      </div>
      
      {/* Text */}
      <span className="relative z-10 text-white font-medium hidden md:block">
        {text}
      </span>
      
      {/* Glow effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-0 bg-primary blur-md" />
      </div>
    </>
  );

  if (external || href.startsWith('tel:')) {
    return (
      <a 
        href={href}
        className={commonClasses}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
      >
        {content}
      </a>
    );
  }

  return (
    <Link to={href} className={commonClasses}>
      {content}
    </Link>
  );
};