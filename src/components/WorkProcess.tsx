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
    <section className="relative w-full min-h-[1243px] bg-[#EAF6FF] py-12 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        {/* Header Section */}
        <div className="flex flex-col items-center mb-12 md:mb-16">
          {/* Badge */}
          <div className="w-full max-w-[146.21px] h-[38px] bg-gradient-to-r from-[#081AE0] via-[#0571D6] to-[#03A8D0] rounded-[12px] flex items-center justify-center mb-8">
            <span className="text-white font-medium text-[18px] leading-[27px] font-['Poppins'] text-center">
              Our Process
            </span>
          </div>

          {/* Heading */}
          <h2 className="w-full max-w-[419px] text-3xl md:text-4xl lg:text-[60px] leading-tight md:leading-[70px] lg:leading-[90px] font-semibold text-black text-center mb-6 font-['Poppins'] px-4">
            How We Work
          </h2>

          {/* Description */}
          <p className="w-full max-w-[1208px] text-lg md:text-xl lg:text-[28px] leading-relaxed md:leading-[36px] lg:leading-[42px] font-normal text-[#5D5D5D] text-center font-['Poppins'] px-4">
            A proven methodology that ensures transparency, quality, and timely delivery.
          </p>
        </div>

        {/* Process Steps */}
        <div className="max-w-[1116px] mx-auto space-y-6 md:space-y-8">
          {steps.map((step, index) => (
            <div key={index} className="flex gap-6 md:gap-8 items-start">
              {/* Number Circle */}
              <div 
                className="flex-shrink-0 w-20 h-20 rounded-full flex items-center justify-center"
                style={{
                  background: 'linear-gradient(315.31deg, #03A1D2 19.38%, #0736DD 77.82%)'
                }}
              >
                <span className="text-[32px] leading-[48px] font-semibold text-white font-['Poppins']">
                  {step.number}
                </span>
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl lg:text-[28px] leading-tight md:leading-[36px] lg:leading-[42px] font-semibold text-black mb-2 font-['Poppins']">
                  {step.title}
                </h3>
                <p className="text-base md:text-lg lg:text-[18px] leading-relaxed md:leading-[24px] lg:leading-[27px] font-normal text-[#656363] font-['Poppins']">
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
