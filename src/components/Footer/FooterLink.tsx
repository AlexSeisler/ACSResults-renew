import React from 'react';

interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
  external?: boolean;
}

export const FooterLink = ({ href, children, external }: FooterLinkProps) => {
  const linkProps = external ? {
    target: "_blank",
    rel: "noopener noreferrer"
  } : {};

  return (
    <a 
      href={href}
      className="text-gray-300 hover:text-white transition-colors"
      {...linkProps}
    >
      {children}
    </a>
  );
};