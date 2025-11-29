import { Badge } from './common';

const steps = [
  {
    number: '1',
    title: 'Discovery & Planning',
    description: 'We begin by understanding your business goals, target audience, and project requirements through in-depth consultations.'
  },
  {
    number: '2',
    title: 'Design & Prototyping',
    description: 'Our designers create intuitive UI/UX wireframes and interactive prototypes for your approval.'
  },
  {
    number: '3',
    title: 'Development',
    description: 'Agile development sprints with regular demos and continuous integration for rapid iteration.'
  },
  {
    number: '4',
    title: 'Quality Assurance',
    description: 'Rigorous testing including functional, performance, security, and user acceptance testing.'
  },
  {
    number: '5',
    title: 'Deployment & Launch',
    description: 'Seamless deployment to production with monitoring, documentation, and training.'
  },
  {
    number: '6',
    title: 'Maintenance & Support',
    description: 'Ongoing support, updates, and enhancements to ensure optimal performance.'
  }
];

const WorkProcess = () => {
  return (
    <section className="relative w-full min-h-[1243px] bg-bg-lighter py-12 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        {/* Header Section */}
        <div className="flex flex-col items-center mb-12 md:mb-16">
          {/* Badge */}
          <div className="mb-8">
            <Badge>Our Process</Badge>
          </div>

          {/* Heading */}
          <h2 className="w-full max-w-[419px] whitespace-nowrap text-3xl md:text-4xl lg:text-[60px] leading-tight md:leading-[70px] lg:leading-[90px] font-semibold text-text-primary text-center mb-6 font-poppins px-4">
            How We Work
          </h2>

          {/* Description */}
          <p className="w-full max-w-[1208px] text-lg md:text-xl lg:text-[28px] leading-relaxed md:leading-[36px] lg:leading-[42px] font-normal text-text-secondary text-center font-poppins px-4">
            A proven methodology that ensures transparency, quality, and timely delivery.
          </p>
        </div>

        {/* Process Steps */}
        <div className="max-w-[1116px] mx-auto space-y-6 md:space-y-8">
          {steps.map((step, index) => (
            <div key={index} className="flex gap-6 md:gap-8 items-start">
              {/* Number Circle - Using gradient from theme */}
              <div 
                className="flex-shrink-0 w-20 h-20 rounded-full flex items-center justify-center bg-gradient-to-br from-primary-light to-primary-dark"
              >
                <span className="text-[32px] leading-[48px] font-semibold text-white font-poppins">
                  {step.number}
                </span>
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl lg:text-[28px] leading-tight md:leading-[36px] lg:leading-[42px] font-semibold text-text-primary mb-2 font-poppins">
                  {step.title}
                </h3>
                <p className="text-base md:text-lg lg:text-[18px] leading-relaxed md:leading-[24px] lg:leading-[27px] font-normal text-text-secondary font-poppins">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkProcess;
