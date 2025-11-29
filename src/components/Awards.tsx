import achievementIcon from 'assets/images/achievement.png';

const awards = [
  { title: 'Top Developer 2024', organization: 'Clutch' },
  { title: 'ISO 9001:2015', organization: 'Quality Management' },
  { title: 'AWS Partner', organization: 'Amazon Web Services' },
  { title: 'Microsoft Gold Partner', organization: 'Microsoft' },
  { title: 'Innovation Award', organization: 'Tech Summit 2024' }
];

const Awards = () => {
  return (
    <section className="relative w-full min-h-[438px] bg-[#F8FDFF] py-12 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        {/* Header Section */}
        <div className="flex flex-col items-center mb-12 md:mb-16">
          {/* Badge */}
          <div className="w-full max-w-[142.02px] h-[38px] bg-gradient-to-r from-[#081AE0] via-[#0571D6] to-[#03A8D0] rounded-[12px] flex items-center justify-center mb-8">
            <span className="text-white font-medium text-[18px] leading-[27px] font-['Poppins'] text-center">
              Credentials
            </span>
          </div>

          {/* Heading */}
          <h2 className="w-full max-w-[720px] text-3xl md:text-4xl lg:text-[60px] leading-tight md:leading-[70px] lg:leading-[90px] font-semibold text-black text-center mb-6 font-['Poppins'] px-4">
            Awards & Certifications
          </h2>

          {/* Description */}
          <p className="w-full max-w-[1124px] text-lg md:text-xl lg:text-[28px] leading-relaxed md:leading-[36px] lg:leading-[42px] font-normal text-[#5D5D5D] text-center font-['Poppins'] px-4">
            Recognized for excellence and trusted by industry leaders.
          </p>
        </div>

        {/* Awards Grid - Horizontal layout */}
        <div className="flex flex-wrap justify-center items-start gap-8 lg:gap-12 max-w-[1336px] mx-auto">
          {awards.map((award, index) => (
            <div key={index} className="flex flex-col items-center min-w-[150px]">
              {/* Icon */}
              <div className="w-[76.03px] h-[76.03px] bg-gradient-to-r from-[#0822DF] to-[#048AD3] rounded-[15px] flex items-center justify-center mb-4">
                <img src={achievementIcon} alt="Award" className="w-[50px] h-[50px]" />
              </div>

              {/* Title */}
              <h3 className="text-[20px] leading-[30px] font-medium text-black text-center mb-1 font-['Poppins']">
                {award.title}
              </h3>

              {/* Organization */}
              <p className="text-[16px] leading-[24px] font-normal text-[#656464] text-center font-['Poppins']">
                {award.organization}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;
