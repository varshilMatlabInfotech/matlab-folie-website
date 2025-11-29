import React from 'react';
import Badge from './Badge';

interface SectionHeaderProps {
  badge: string;
  title: string;
  description?: string;
  className?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  badge,
  title,
  description,
  className = '',
}) => {
  return (
    <div className={`flex flex-col items-center mb-12 md:mb-16 ${className}`}>
      {/* Badge */}
      <div className="mb-8">
        <Badge>{badge}</Badge>
      </div>

      {/* Heading */}
      <h2 className="w-full max-w-[1496px] text-3xl md:text-4xl lg:text-[60px] leading-tight md:leading-[70px] lg:leading-[90px] font-semibold text-text-primary text-center mb-6 font-poppins px-4">
        {title}
      </h2>

      {/* Description */}
      {description && (
        <p className="w-full max-w-[958px] text-lg md:text-xl lg:text-[28px] leading-relaxed md:leading-[36px] lg:leading-[42px] font-normal text-text-secondary text-center font-poppins px-4">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;

