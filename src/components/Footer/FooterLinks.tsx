import React from 'react';
import { FooterSection } from './FooterSection';
import { FooterLink } from './FooterLink';
import { quickLinks, socialLinks } from './footerData';

export const FooterLinks = () => (
  <div className="grid md:grid-cols-2 gap-8">
    
    <FooterSection title="">
      
    </FooterSection>

    <FooterSection title="Quick Links">
      <ul className="space-y-3">
        {quickLinks.map((link, index) => (
          <li key={index}>
            <FooterLink href={link.href} className="group">
              <span className="relative">
                {link.label}
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
              </span>
            </FooterLink>
          </li>
        ))}
      </ul>
    </FooterSection>
  </div>
);