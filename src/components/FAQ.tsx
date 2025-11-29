const faqs = [
  'What is your typical project timeline?',
  'How much does custom software development cost?',
  'Do you provide post-launch support?',
  'What industries do you specialize in?',
  'Can you work with our existing team?',
  'What engagement models do you offer?'
];

const FAQ = () => {
  return (
    <section className="relative w-full min-h-[930px] bg-[#EAF6FF] py-12 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        {/* Header Section */}
        <div className="flex flex-col items-center mb-12 md:mb-16">
          {/* Badge */}
          <div className="w-full max-w-[85px] h-[38px] bg-gradient-to-r from-[#081AE0] via-[#0571D6] to-[#03A8D0] rounded-[12px] flex items-center justify-center mb-8">
            <span className="text-white font-medium text-[18px] leading-[27px] font-['Poppins'] text-center">
              FAQ
            </span>
          </div>

          {/* Heading */}
          <h2 className="w-full max-w-[851px] text-3xl md:text-4xl lg:text-[60px] leading-tight md:leading-[70px] lg:leading-[90px] font-semibold text-black text-center font-['Poppins'] px-4">
            Frequently Asked Questions
          </h2>
        </div>

        {/* FAQ Items */}
        <div className="max-w-[1208px] mx-auto">
          {faqs.map((faq, index) => (
            <div key={index}>
              <div className="flex items-center justify-between h-[57.5px] cursor-pointer group">
                <h3 className="text-lg md:text-xl lg:text-[20px] leading-[27px] md:leading-[30px] lg:leading-[30px] font-normal text-black font-['Poppins'] group-hover:text-[#0571D6] transition">
                  {faq}
                </h3>
                <span 
                  className="text-[30px] leading-[45px] text-[#535151] font-['Poppins'] transition-transform group-hover:rotate-0"
                  style={{ transform: 'rotate(90deg)' }}
                >
                  &gt;
                </span>
              </div>
              {index < faqs.length - 1 && (
                <div className="w-full h-[1px] bg-[#8C8C8C]"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
