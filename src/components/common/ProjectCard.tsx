import React from 'react';

interface ProjectCardProps {
  icon: string;
  iconSize: string;
  title: string;
  description: string;
  category?: string;
  date?: string;
  gradient: string;
  readMoreLink?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  icon,
  iconSize,
  title,
  description,
  category,
  date,
  gradient,
  readMoreLink
}) => {
  return (
    <div className="w-full max-w-[400px] bg-white border border-border-primary rounded-[20px] overflow-hidden hover:shadow-xl transition-all duration-300 mx-auto">
      {/* Image Area with Gradient */}
      <div className={`w-full h-[240px] ${gradient} flex items-center justify-center rounded-t-[20px]`}>
        <img src={icon} alt={title} className={iconSize} />
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Category Badge */}
        {category && (
          <div className="mb-4">
            <span className="inline-block px-3 py-1 bg-[#F5F5F5] rounded-[5px] text-[12px] leading-[18px] font-medium text-text-primary font-poppins">
              {category}
            </span>
          </div>
        )}
        
        {/* Date */}
        {date && (
          <div className="flex items-center gap-2 mb-3">
            <div className="w-4 h-4 bg-icon-gray rounded flex items-center justify-center">
              <svg width="10" height="10" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.5 1.5H8.5V1H7.5V1.5H4.5V1H3.5V1.5H2.5C1.95 1.5 1.5 1.95 1.5 2.5V9.5C1.5 10.05 1.95 10.5 2.5 10.5H9.5C10.05 10.5 10.5 10.05 10.5 9.5V2.5C10.5 1.95 10.05 1.5 9.5 1.5ZM9.5 9.5H2.5V4.5H9.5V9.5Z" fill="white"/>
              </svg>
            </div>
            <span className="text-[12px] leading-[18px] font-normal text-icon-gray font-poppins">
              {date}
            </span>
          </div>
        )}

        {/* Title */}
        <h3 className="text-[20px] leading-[30px] font-semibold text-text-primary mb-2 font-poppins">
          {title}
        </h3>

        {/* Description */}
        <p className="text-[14px] leading-[21px] font-normal text-text-gray font-poppins mb-4">
          {description}
        </p>

        {/* Read More Link */}
        {readMoreLink && (
          <a href={readMoreLink} className="inline-flex items-center gap-2 text-[16px] leading-[24px] font-medium text-text-primary hover:text-primary font-poppins transition">
            Read More
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;

