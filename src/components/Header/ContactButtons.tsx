import React from 'react';
import { Phone, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ContactButtonProps {
  href: string;
  icon: React.ReactNode;
  text: string;
  isExternal?: boolean;
}

const ContactButton = ({ href, icon, text, isExternal }: ContactButtonProps) => {
  const commonClasses = "group flex items-center bg-primary rounded-lg px-4 py-2 gap-3 hover:bg-primary/90 transition-all duration-300 transform hover:-translate-y-1";
  
  if (isExternal) {
    return (
      <a href={href} className={commonClasses}>
        <div className="bg-primary rounded-full p-2 group-hover:scale-110 transition-transform">
          {icon}
        </div>
        <span className="text-white text-lg md:text-xl hidden md:block font-medium">{text}</span>
      </a>
    );
  }

  return (
    <Link to={href} className={commonClasses}>
      <div className="bg-primary rounded-full p-2 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <span className="text-white text-lg md:text-xl hidden md:block font-medium">{text}</span>
    </Link>
  );
};

export const ContactButtons = () => (
  <div className="flex gap-4 md:gap-6">
    <ContactButton 
      href="tel:4847694650"
      icon={<Phone className="h-6 w-6 text-white" />}
      text="(484) 769-4650"
      isExternal
    />
    <ContactButton 
      href="/onboarding"
      icon={<Calendar className="h-6 w-6 text-white" />}
      text="Get a Portfolio"
    />
  </div>
);