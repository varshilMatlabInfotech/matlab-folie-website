const pricingModels = [
  {
    title: 'Fixed Cost',
    description: 'Clearly defined scope, timeline, and deliverables with a fixed budget.',
    bestFor: 'Projects with well-defined requirements and specific deadlines.'
  },
  {
    title: 'Hourly Rate',
    description: 'Pay only for the hours worked, ideal for evolving requirements.',
    bestFor: 'Projects with flexible scope or ongoing development needs.'
  },
  {
    title: 'Dedicated Team',
    description: 'Your own remote team working exclusively on your projects full-time.',
    bestFor: 'Long-term projects requiring consistent development resources.'
  },
  {
    title: 'Monthly Subscription',
    description: 'Fixed monthly fee for continuous development, updates, and support.',
    bestFor: 'Ongoing product development and maintenance.'
  }
];

const Pricing = () => {
  return (
    <section className="relative w-full min-h-[782px] bg-bg-lighter py-12 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        {/* Header Section */}
        <div className="flex flex-col items-center mb-12 md:mb-16">
          {/* Badge */}
          <div className="w-full max-w-[96.7px] h-[38px] bg-gradient-primary rounded-badge flex items-center justify-center mb-8">
            <span className="text-white font-medium text-[18px] leading-[27px] font-poppins text-center">
              Pricing
            </span>
          </div>

          {/* Heading */}
          <h2 className="w-full max-w-[871px] text-3xl whitespace-nowrap md:text-4xl lg:text-[60px] leading-tight md:leading-[70px] lg:leading-[90px] font-semibold text-text-primary text-center mb-6 font-poppins px-4">
            Flexible Engagement Models
          </h2>

          {/* Description */}
          <p className="w-full max-w-[1124px] text-lg md:text-xl lg:text-[28px] leading-relaxed md:leading-[36px] lg:leading-[42px] font-normal text-text-secondary text-center font-poppins px-4">
            Choose the pricing model that best fits your project requirements and budget.
          </p>
        </div>

        {/* Pricing Cards Grid - 4 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {pricingModels.map((model, index) => (
            <div
              key={index}
              className="w-full max-w-[438px] h-[328px] bg-white border-[0.5px] border-border-primary rounded-card p-8 mx-auto flex flex-col"
            >
              {/* Title */}
              <h3 className="text-[20px] leading-[30px] font-semibold text-text-primary mb-4 font-poppins">
                {model.title}
              </h3>

              {/* Description */}
              <p className="text-[16px] leading-[24px] font-normal text-text-gray mb-auto font-poppins">
                {model.description}
              </p>

              {/* Best For Section */}
              <div className="mt-auto pt-8">
                <h4 className="text-[20px] leading-[30px] font-semibold text-text-primary mb-2 font-poppins">
                  Best for:
                </h4>
                <p className="text-[16px] leading-[24px] font-normal text-text-gray font-poppins">
                  {model.bestFor}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
