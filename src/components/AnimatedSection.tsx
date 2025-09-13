import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'dark' | 'light';
}

export const AnimatedSection = ({ 
  children, 
  className = '',
  variant = 'dark'
}: AnimatedSectionProps) => {
  const { elementRef, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '-50px'
  });

  const baseStyles = `
    relative
    transform 
    ${isIntersecting ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} 
    transition-all duration-1000 ease-out
  `;

  const variantStyles = {
    dark: `
      before:absolute before:inset-0 before:bg-[#0e0e0c]
      after:absolute after:inset-0 after:bg-gradient-to-b after:from-primary/5 after:to-transparent
    `,
    light: `
      before:absolute before:inset-0 before:bg-gradient-to-b before:from-gray-50 before:to-white
      after:absolute after:inset-0 after:opacity-[0.15]
      after:bg-[radial-gradient(#16498b_0.5px,_transparent_0.5px)]
      after:bg-size[24px_24px]
    `
  };

  return (
    <section
      ref={elementRef}
      className={`
        ${baseStyles}
        ${variantStyles[variant]}
        ${className}
      `}
    >
      <div className="relative z-10">
        {children}
      </div>
    </section>
  );
};