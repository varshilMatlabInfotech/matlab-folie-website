const stats = [
  { number: '500+', label: 'Clients Served', width: '229px' },
  { number: '1,200+', label: 'Projects Completed', width: '293px' },
  { number: '150+', label: 'Team Members', width: '229px' },
  { number: '14', label: 'Years in Business', width: '240px' }
];

const Stats = () => {
  return (
    <section className="relative w-full h-[302px] bg-gradient-primary">
      <div className="container mx-auto h-full px-4 sm:px-6 lg:px-12">
        <div className="flex flex-col md:flex-row items-center justify-center h-full gap-8 md:gap-12 lg:gap-16">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center"
              style={{ maxWidth: stat.width }}
            >
              <h3 className="text-4xl md:text-5xl lg:text-[60px] leading-tight md:leading-[70px] lg:leading-[90px] font-semibold text-white mb-0 font-poppins">
                {stat.number}
              </h3>
              <p className="text-lg md:text-xl lg:text-[22px] leading-[27px] md:leading-[30px] lg:leading-[33px] font-normal text-text-stat font-poppins mt-0">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
