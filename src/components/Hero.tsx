import { Star } from 'lucide-react';
import { Button, Badge } from './common';

const Hero = () => {
  const ratings = [
    { stars: 5, text: '4.9/5 on Clutch' },
    { stars: 5, text: '4.8/5 on GoodFirms' },
    { stars: 5, text: '4.9/5 on Upwork' }
  ];

  const companies = ['COMPANY A', 'BRAND B', 'CORP C', 'TECH D', 'COMPANY A', 'BRAND B', 'CORP C', 'TECH D'];

  return (
    <section className="relative w-full min-h-[985px] bg-bg-lighter pt-[126px] pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex flex-col items-center">
          {/* Badge - Trusted by 500+ Companies Worldwide - 387x38 */}
          <div className="mb-[27px]">
            <Badge>Trusted by 500+ Companies Worldwide</Badge>
          </div>

          {/* Main Heading - Transform Your Vision into - 1245px width */}
          <h1 className="text-center px-4">
            <span className="block w-full max-w-[1245px] text-5xl md:text-6xl lg:text-[90px] leading-[100%] font-semibold font-poppins text-text-primary">
              Transform Your Vision into
            </span>
          </h1>

          {/* Exceptional Software - Gradient Text - 1002px width */}
          <h1 className="text-center px-4">
            <span className="block w-full max-w-[1002px] text-5xl md:text-6xl lg:text-[90px] leading-[100%] font-semibold font-poppins bg-gradient-primary bg-clip-text text-transparent">
              Exceptional Software
            </span>
          </h1>

          {/* Description - 952px width, 24px font-size, 36px line-height */}
          <p className="w-full max-w-[952px] mt-4 text-lg md:text-xl lg:text-[24px] leading-relaxed md:leading-[32px] lg:leading-[36px] font-normal text-text-muted text-center font-poppins mb-[68px] px-4">
            We deliver cutting-edge web, mobile, and AI solutions that drive business growth. Partner with our expert team to build scalable, innovative software tailored to your needs.
          </p>

          {/* Buttons - 200px and 217px width, 56px height, 24px gap */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-[54px]">
            <Button variant="secondary" className="w-full sm:w-[217px]">
              View Our Work
            </Button>
            <Button variant="primary" className="w-full sm:w-[200px]">
              Hire Us
            </Button>
          </div>

          {/* Ratings Section - Stars 20px, text 20px/30px */}
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-[151px] mb-[54px] w-full px-4">
            {ratings.map((rating, index) => (
              <div key={index} className="flex flex-col items-center gap-3">
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} size={20} fill="#FFB800" stroke="#FFB800" />
                  ))}
                </div>
                <span className="text-[20px] leading-[30px] font-medium text-text-primary font-poppins whitespace-nowrap">
                  {rating.text}
                </span>
              </div>
            ))}
          </div>

          {/* Line Separator - 1362px width, 0.5px height */}
          <div className="w-full max-w-[1362px] h-[0.5px] bg-[#505050] mb-[41px]"></div>

          {/* Trusted by leading companies - 20px/30px */}
          <p className="text-[20px] leading-[30px] font-normal text-text-primary text-center font-poppins mb-[38px] px-4">
            Trusted by leading companies
          </p>

          {/* Company Logos - 30px/45px, color #717171 */}
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 lg:gap-12 w-full max-w-[1891px] px-4">
            {companies.map((company, i) => (
              <span key={i} className="text-xl md:text-2xl lg:text-[30px] leading-[45px] font-semibold text-[#717171] font-poppins whitespace-nowrap">
                {company}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
