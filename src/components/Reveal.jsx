import React from 'react';
import { useReveal } from '../hooks/useReveal';

export const Reveal = ({ children, animation = 'fade-in-bottom', delay = 0, className = '' }) => {
  useReveal();
  return (
    <div 
      className={`reveal ${animation} ${className}`} 
      style={{ transitionDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
};
