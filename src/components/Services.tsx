import { Code, Palette, Cloud, Cpu, Building } from 'lucide-react';
import mobileIcon from 'assets/images/Mobile.png';
import peopleIcon from 'assets/images/People.png';
import coinsIcon from 'assets/images/Coins.png';
import { Card, SectionHeader } from './common';

const services = [
  {
    icon: Code,
    iconImage: null,
    title: 'Web Development',
    description: 'Responsive, scalable web applications using modern frameworks like React, Next.js, and Vue.',
    gradient: 'bg-gradient-blue-1'
  },
  {
    icon: null,
    iconImage: mobileIcon,
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile apps for iOS and Android using React Native and Flutter.',
    gradient: 'bg-gradient-blue-2'
  },
  {
    icon: Palette,
    iconImage: null,
    title: 'UI/UX Design',
    description: 'User-centered design that combines aesthetics with functionality for exceptional experiences.',
    gradient: 'bg-gradient-blue-1'
  },
  {
    icon: Cloud,
    iconImage: null,
    title: 'Cloud & DevOps',
    description: 'AWS, Azure, and GCP infrastructure with CI/CD pipelines for seamless deployments.',
    gradient: 'bg-gradient-blue-2'
  },
  {
    icon: Cpu,
    iconImage: null,
    title: 'AI & Automation',
    description: 'Machine learning, NLP, and intelligent automation solutions to optimize your operations.',
    gradient: 'bg-gradient-blue-1'
  },
  {
    icon: null,
    iconImage: peopleIcon,
    title: 'Dedicated Development Team',
    description: 'Extend your team with our skilled developers who work exclusively on your projects.',
    gradient: 'bg-gradient-blue-2'
  },
  {
    icon: null,
    iconImage: coinsIcon,
    title: 'CMS/CRM Solutions',
    description: 'Custom content and customer relationship management systems built for your workflow.',
    gradient: 'bg-gradient-blue-1'
  },
  {
    icon: Building,
    iconImage: null,
    title: 'ERP Systems',
    description: 'Enterprise resource planning solutions to streamline business processes and data flow.',
    gradient: 'bg-gradient-blue-3'
  }
];

const Services = () => {
  return (
    <section className="relative w-full min-h-[948px] bg-bg-light py-12 md:py-20" id="services">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        {/* Header Section - Exact Figma specs */}
        <div className="flex flex-col items-center">
          {/* Badge - 137px x 38px */}
          <div className="mb-8">
            <SectionHeader
              badge="Our Services"
              title="Comprehensive Software Development Solutions"
              description="From concept to deployment, we offer end-to-end development services tailored to your business goals."
            />
          </div>
        </div>

        {/* Services Grid - 4 columns, 2 rows - Exact Figma: 438px cards, 100px icons */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[1824px] mx-auto">
          {services.map((service, index) => (
            <Card
              key={index}
              className="w-full max-w-[438px] h-[298px] p-6 mx-auto flex flex-col"
            >
              {/* Icon - 100px x 100px with 50px icon inside */}
              <div className={`w-[100px] h-[100px] ${service.gradient} rounded-card flex items-center justify-center mb-[30px] flex-shrink-0`}>
                {service.iconImage ? (
                  <img src={service.iconImage} alt={service.title} className="w-[50px] h-[50px]" />
                ) : (
                  service.icon && <service.icon size={50} color="white" />
                )}
              </div>

              {/* Title - 22px font, 33px line-height */}
              <h3 className="text-[22px] leading-[33px] font-semibold text-text-primary mb-[3px] font-poppins">
                {service.title}
              </h3>

              {/* Description - 18px font, 27px line-height, 376px max-width */}
              <p className="text-[14px] leading-[27px] font-normal text-text-gray font-poppins max-w-[376px] overflow-hidden">
                {service.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
