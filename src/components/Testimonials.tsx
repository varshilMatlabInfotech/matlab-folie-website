import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CEO, RetailCorp',
    text: '"Matlabinfotech delivered beyond our expectations. Their team\'s expertise and dedication transformed our business operations completely."'
  },
  {
    name: 'Michael Chen',
    role: 'CTO, FinanceHub',
    text: '"Outstanding quality and communication. They truly understand modern software development and agile methodologies."'
  },
  {
    name: 'Emily Rodriguez',
    role: 'Product Manager, HealthTech Inc',
    text: '"The best development partner we\'ve worked with. Professional, reliable, and incredibly talented team."'
  }
];

const Testimonials = () => {
  return (
    <section className="relative w-full min-h-[679px] bg-[#EAF6FF] py-12 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        {/* Header Section */}
        <div className="flex flex-col items-center mb-12 md:mb-16">
          {/* Badge */}
          <div className="w-full max-w-[161px] h-[38px] bg-gradient-to-r from-[#081AE0] via-[#0571D6] to-[#03A8D0] rounded-[12px] flex items-center justify-center mb-8">
            <span className="text-white font-medium text-[18px] leading-[27px] font-['Poppins'] text-center">
              Testimonials
            </span>
          </div>

          {/* Heading */}
          <h2 className="w-full max-w-[645px] text-3xl md:text-4xl lg:text-[60px] leading-tight md:leading-[70px] lg:leading-[90px] font-semibold text-black text-center font-['Poppins'] px-4">
            What Our Clients Say
          </h2>
        </div>

        {/* Testimonials Grid - 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-[1362px] mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="w-full max-w-[438px] h-[282.14px] bg-white border-[0.5px] border-[#00B5FF] rounded-[15px] p-8 mx-auto"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} size={26} fill="#FFB800" stroke="#FFB800" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-[16px] leading-[24px] font-normal italic text-[#5C5C5C] mb-6 font-['Poppins']">
                {testimonial.text}
              </p>

              {/* Author Info */}
              <div>
                <h4 className="text-[18px] leading-[27px] font-semibold text-black font-['Poppins'] mb-1">
                  {testimonial.name}
                </h4>
                <p className="text-[16px] leading-[24px] font-normal text-[#5C5C5C] font-['Poppins']">
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
