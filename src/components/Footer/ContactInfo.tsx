import React from 'react';
import { Mail, Phone } from 'lucide-react';

export const ContactInfo = () => {
  return (
    <div className="space-y-6">
      <h3 className="text-xl text-white font-ubuntu">Contact Us</h3>
      <div className="space-y-4">
        <a 
          href="tel:4847694650"
          className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group"
        >
          <Phone className="w-5 h-5" />
          <span className="relative">
            (484) 769-4650
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
          </span>
        </a>
        <a 
          href="mailto:aseisler7045@stevenscollege.edu"
          className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group"
        >
          <Mail className="w-5 h-5" />
          <span className="relative">
            aseisler7045@stevenscollege.edu
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
          </span>
        </a>
      </div>
    </div>
  );
};