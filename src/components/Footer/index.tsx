import React from 'react';
import { FooterBackground } from './FooterBackground';
import { FooterLogo } from './FooterLogo';
import { FooterLinks } from './FooterLinks';
import { ContactInfo } from './ContactInfo';
import { FooterBottom } from './FooterBottom';

const Footer = () => {
  return (
    <footer className="relative bg-[#0e0e0c]">
      <FooterBackground />
      
      <div className="relative max-w-7xl mx-auto py-16 px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          <FooterLogo />
          <FooterLinks />
          <ContactInfo />
        </div>
        
        <FooterBottom />
      </div>
    </footer>
  );
};

export default Footer;