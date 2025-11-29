import { ShoppingCart, Heart, DollarSign, GraduationCap, Building2, Truck, Package, Factory } from 'lucide-react';

const industries = [
  {
    icon: ShoppingCart,
    title: 'E-commerce',
    description: 'Online stores, payment gateways, inventory management, and personalized shopping experiences.',
    gradient: 'from-[#0822DF] to-[#048AD3]'
  },
  {
    icon: Heart,
    title: 'Healthcare',
    description: 'HIPAA-compliant patient portals, telemedicine platforms, and health data analytics.',
    gradient: 'from-[#0663D8] to-[#03A5D1]'
  },
  {
    icon: DollarSign,
    title: 'Finance',
    description: 'Secure banking apps, trading platforms, payment processing, and financial analytics tools.',
    gradient: 'from-[#0822DF] to-[#048AD3]'
  },
  {
    icon: Building2,
    title: 'Real Estate',
    description: 'Property listing platforms, CRM systems, virtual tours, and transaction management.',
    gradient: 'from-[#0663D8] to-[#03A5D1]'
  },
  {
    icon: GraduationCap,
    title: 'Education',
    description: 'E-learning platforms, student management systems, and interactive educational tools.',
    gradient: 'from-[#0822DF] to-[#048AD3]'
  },
  {
    icon: Truck,
    title: 'Logistics',
    description: 'Fleet management, route optimization, warehouse systems, and supply chain solutions.',
    gradient: 'from-[#0663D8] to-[#03A5D1]'
  },
  {
    icon: Package,
    title: 'On-demand Apps',
    description: 'Food delivery, ride-sharing, home services, and marketplace applications.',
    gradient: 'from-[#0822DF] to-[#048AD3]'
  },
  {
    icon: Factory,
    title: 'Manufacturing',
    description: 'IoT integration, production tracking, quality control, and inventory automation.',
    gradient: 'from-[#0663D8] to-[#03A5D1]'
  }
];

const Industries = () => {
  return (
    <section className="relative w-full min-h-[914.14px] bg-[#F8FDFF] py-12 md:py-20" id="industries">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        {/* Header Section */}
        <div className="flex flex-col items-center mb-12 md:mb-16">
          {/* Badge */}
          <div className="w-full max-w-[120px] h-[38px] bg-gradient-to-r from-[#081AE0] via-[#0571D6] to-[#03A8D0] rounded-[12px] flex items-center justify-center mb-8">
            <span className="text-white font-medium text-[18px] leading-[27px] font-['Poppins'] text-center">
              Industries
            </span>
          </div>

          {/* Heading */}
          <h2 className="w-full max-w-[602px] text-3xl md:text-4xl lg:text-[60px] leading-tight md:leading-[70px] lg:leading-[90px] font-semibold text-black text-center mb-6 font-['Poppins'] px-4">
            Industries We Serve
          </h2>

          {/* Description */}
          <p className="w-full max-w-[1056px] text-lg md:text-xl lg:text-[28px] leading-relaxed md:leading-[36px] lg:leading-[42px] font-normal text-[#5D5D5D] text-center font-['Poppins'] px-4">
            Deep expertise across multiple sectors, delivering tailored solutions for unique industry challenges.
          </p>
        </div>

        {/* Industries Grid - 4 columns, 2 rows */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="w-full max-w-[438px] h-[282.14px] bg-white border-[0.5px] border-[#00B5FF] rounded-[15px] p-6 hover:shadow-lg transition mx-auto"
            >
              {/* Icon */}
              <div className={`w-[81.33px] h-[81.33px] bg-gradient-to-r ${industry.gradient} rounded-[15px] flex items-center justify-center mb-6`}>
                <industry.icon size={40.66} color="white" />
              </div>

              {/* Title */}
              <h3 className="text-[20px] leading-[30px] font-semibold text-black mb-3 font-['Poppins']">
                {industry.title}
              </h3>

              {/* Description */}
              <p className="text-[16px] leading-[24px] font-normal text-[#5C5C5C] font-['Poppins']">
                {industry.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
