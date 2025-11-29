import shoppingCartIcon from 'assets/images/Shopping Cart.png';
import heartIcon from 'assets/images/Heart.png';
import mobileIcon from 'assets/images/Mobile.png';
import coinsIcon from 'assets/images/Coins.png';
import truckIcon from 'assets/images/Truck.png';
import peopleIcon from 'assets/images/People.png';
import { Badge } from './common';

const projects = [
  {
    icon: shoppingCartIcon,
    iconSize: 'w-[106px] h-[106px]',
    title: 'Web Development',
    description: 'Responsive, scalable web applications using modern frameworks like React, Next.js, and Vue.',
    category: 'E-commerce',
    categoryWidth: 'w-[100.5px]',
    gradient: 'bg-gradient-blue-1'
  },
  {
    icon: heartIcon,
    iconSize: 'w-[100px] h-[100px]',
    title: 'Healthcare Portal',
    description: 'HIPAA-compliant telemedicine platform connecting patients with doctors nationwide.',
    category: 'Web',
    categoryWidth: 'w-[38px]',
    gradient: 'bg-gradient-blue-1'
  },
  {
    icon: mobileIcon,
    iconSize: 'w-[90px] h-[90px]',
    title: 'Mobile Banking App',
    description: 'Secure banking application with biometric authentication and instant transfers.',
    category: 'Mobile',
    categoryWidth: 'w-[48px]',
    gradient: 'bg-gradient-blue-1'
  },
  {
    icon: coinsIcon,
    iconSize: 'w-[80px] h-[80px]',
    title: 'SaaS Analytics Dashboard',
    description: 'Real-time business intelligence platform processing millions of data points.',
    category: 'SaaS',
    categoryWidth: 'w-[46px]',
    gradient: 'bg-gradient-blue-1'
  },
  {
    icon: truckIcon,
    iconSize: 'w-[90px] h-[90px]',
    title: 'Food Delivery App',
    description: 'On-demand food delivery platform serving 100+ restaurants and 10K+ customers.',
    category: 'Mobile',
    categoryWidth: 'w-[50px]',
    gradient: 'bg-gradient-blue-1'
  },
  {
    icon: peopleIcon,
    iconSize: 'w-[100px] h-[100px]',
    title: 'CRM Solution',
    description: 'Custom customer relationship management system with AI-powered insights.',
    category: 'SaaS',
    categoryWidth: 'w-[35.86px]',
    gradient: 'bg-gradient-blue-1'
  }
];

const filterButtons = [
  { label: 'All', width: 'w-[65px]', active: true },
  { label: 'Web', width: 'w-[83px]', active: false },
  { label: 'Mobile', width: 'w-[105px]', active: false },
  { label: 'E-commerce', width: 'w-[174px]', active: false },
  { label: 'SaaS', width: 'w-[83px]', active: false }
];

const Portfolio = () => {
  return (
    <section className="relative w-full min-h-[1334px] bg-bg-light py-12 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        {/* Header Section */}
        <div className="flex flex-col items-center mb-12 md:mb-16">
          {/* Badge */}
          <div className="mb-8">
            <Badge>Our Work</Badge>
          </div>

          {/* Heading */}
          <h2 className="w-full max-w-[579px] whitespace-nowrap text-3xl md:text-4xl lg:text-[60px] leading-tight md:leading-[70px] lg:leading-[90px] font-semibold text-text-primary text-center mb-6 font-poppins px-4">
            Portfolio Showcase
          </h2>

          {/* Description */}
          <p className="w-full max-w-[1056px] text-lg md:text-xl lg:text-[28px] leading-relaxed md:leading-[36px] lg:leading-[42px] font-normal text-text-secondary text-center font-poppins px-4 mb-8">
            Explore our successful projects across various industries and technologies.
          </p>

          {/* Filter Buttons */}
          <div className="flex gap-4 flex-wrap justify-center mb-12">
            {filterButtons.map((button, index) => (
              <button
                key={index}
                className={`${button.width} h-[56px] ${
                  button.active
                    ? 'bg-gradient-primary text-white'
                    : 'bg-white text-text-primary hover:bg-gray-50'
                } rounded-button font-medium text-[20px] leading-[30px] font-poppins transition`}
              >
                {button.label}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Grid - 3 columns, 2 rows */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="w-full max-w-[586.89px] h-[460px] bg-white border-[0.5px] border-border-primary rounded-card overflow-hidden hover:shadow-lg transition mx-auto"
            >
              {/* Image Area */}
              <div className={`w-full h-[256.54px] ${project.gradient} flex items-center justify-center`}>
                <img src={project.icon} alt={project.title} className={project.iconSize} />
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Category Badge */}
                <span className={`inline-block ${project.categoryWidth} h-[21px] px-2 py-1 bg-footer-bg rounded-[3px] text-[10px] leading-[15px] font-normal text-text-primary mb-4 font-poppins text-center`}>
                  {project.category}
                </span>

                {/* Title */}
                <h3 className="text-[22px] leading-[33px] font-semibold text-text-primary mb-2 font-poppins">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-[14px] leading-[21px] font-normal text-text-gray font-poppins">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
