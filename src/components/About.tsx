import { Target, Heart, TrendingUp } from 'lucide-react';
import { Badge } from './common';

const values = [
  {
    icon: Target,
    title: 'Our Mission',
    description: 'Empowering businesses worldwide with cutting-edge software that drives growth, efficiency, and innovation.',
    gradient: 'bg-gradient-blue-1'
  },
  {
    icon: Heart,
    title: 'Our Values',
    description: 'Quality, transparency, collaboration, and continuous learning are at the heart of everything we do.',
    gradient: 'bg-gradient-blue-2'
  },
  {
    icon: TrendingUp,
    title: 'Our Approach',
    description: 'Agile methodologies, client-centric focus, and industry-leading best practices for exceptional results.',
    gradient: 'bg-gradient-blue-1'
  }
];

const About = () => {
  return (
    <section className="relative w-full min-h-[761px] bg-bg-light py-12 md:py-20" id="company">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        {/* Header Section */}
        <div className="flex flex-col items-center mb-12 md:mb-16">
          {/* Badge */}
          <div className="mb-8">
            <Badge>About Us</Badge>
          </div>

          {/* Heading */}
          <h2 className="w-full max-w-[1196px] whitespace-nowrap text-3xl md:text-4xl lg:text-[60px] leading-tight md:leading-[70px] lg:leading-[90px] font-semibold text-text-primary text-center mb-6 font-poppins px-4">
            Building Software Excellence Since 2013
          </h2>

          {/* Description */}
          <p className="w-full max-w-[1208px] text-lg md:text-xl lg:text-[28px] leading-relaxed md:leading-[36px] lg:leading-[42px] font-normal text-text-secondary text-center font-poppins px-4">
            TechForge Solutions is a leading software development agency committed to transforming businesses through innovative technology solutions.
          </p>
        </div>

        {/* Values Cards Grid - 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12 max-w-[1304.48px] mx-auto">
          {values.map((value, index) => (
            <div
              key={index}
              className="w-full max-w-[388.48px] h-[278px] bg-white border-[0.5px] border-border-primary rounded-card p-8 mx-auto"
            >
              {/* Icon */}
              <div className={`w-[76.03px] h-[76.03px] ${value.gradient} rounded-card flex items-center justify-center mb-6`}>
                <value.icon size={38.01} color="white" />
              </div>

              {/* Title */}
              <h3 className="text-[22px] leading-[33px] font-semibold text-text-primary mb-3 font-poppins">
                {value.title}
              </h3>

              {/* Description */}
              <p className="text-[16px] leading-[24px] font-normal text-text-gray font-poppins">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Paragraph */}
        <p className="w-full max-w-[1256px] text-lg md:text-xl lg:text-[22px] leading-relaxed md:leading-[30px] lg:leading-[33px] font-normal text-text-secondary text-center mx-auto font-poppins px-4">
          With over 12 years of experience, our team of 150+ talented developers, designers, and strategists has successfully delivered 1,200+ projects for clients across 40+ countries. We combine technical expertise with business acumen to create solutions that not only meet but exceed expectations.
        </p>
      </div>
    </section>
  );
};

export default About;
