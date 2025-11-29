import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

const Card: React.FC<CardProps> = ({ children, className = '', hover = true }) => {
  const hoverStyles = hover ? 'hover:shadow-xl transition-all duration-300 hover:-translate-y-1' : '';
  
  return (
    <div className={`bg-white border border-border-primary rounded-card shadow-sm ${hoverStyles} ${className}`}>
      {children}
    </div>
  );
};

export default Card;

