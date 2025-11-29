import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

const Badge: React.FC<BadgeProps> = ({ children, className = '' }) => {
  return (
    <div className={`bg-gradient-primary rounded-badge flex items-center justify-center px-6 h-[38px] ${className}`}>
      <span className="text-white font-medium text-[18px] leading-[27px] font-poppins text-center">
        {children}
      </span>
    </div>
  );
};

export default Badge;

