import { Badge } from './common';

const techStacks = [
  {
    category: 'Frontend',
    tags: ['React', 'Vue', 'Next.js', 'TypeScript', 'Tailwind CSS']
  },
  {
    category: 'Backend',
    tags: ['Node.js', 'Python', 'Django', 'Express', 'GraphQL']
  },
  {
    category: 'Mobile',
    tags: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Ionic']
  },
  {
    category: 'Enterprise',
    tags: ['Java', '.NET', 'SAP', 'Oracle', 'Microservices']
  },
  {
    category: 'Database',
    tags: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'Firebase']
  },
  {
    category: 'DevOps',
    tags: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Jenkins']
  },
  {
    category: 'AI/ML',
    tags: ['TensorFlow', 'PyTorch', 'OpenAI', 'Scikit-learn', 'NLP']
  },
  {
    category: 'Payment',
    tags: ['Stripe', 'PayPal', 'Razorpay', 'Square', 'Braintree']
  }
];

const Technologies = () => {
  return (
    <section className="relative w-full min-h-[609px] bg-bg-light py-12 md:py-20" id="technologies">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        {/* Header Section */}
        <div className="flex flex-col items-center mb-12 md:mb-16">
          {/* Badge */}
          <div className="mb-8">
            <Badge>Technologies</Badge>
          </div>

          {/* Heading */}
          <h2 className="w-full max-w-[669px] text-3xl md:text-4xl lg:text-[60px] leading-tight md:leading-[70px] whitespace-nowrap lg:leading-[90px] font-semibold text-text-primary text-center mb-6 font-poppins px-4">
            Our Technology Stack
          </h2>

          {/* Description */}
          <p className="w-full max-w-[1208px] text-lg md:text-xl lg:text-[28px] leading-relaxed md:leading-[36px] lg:leading-[42px] font-normal text-text-secondary text-center font-poppins px-4">
            We leverage cutting-edge technologies to build robust, scalable solutions.
          </p>
        </div>

        {/* Technology Cards Grid - 4 columns, 2 rows */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {techStacks.map((stack, index) => (
            <div
              key={index}
              className="w-full max-w-[327px] h-[150px] bg-white border-[0.5px] border-primary rounded-card p-6 mx-auto"
            >
              {/* Category Title */}
              <h3 className="text-[20px] leading-[30px] font-semibold text-primary mb-4 font-poppins">
                {stack.category}
              </h3>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {stack.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-2 py-0.5 bg-bg-lighter rounded-[3px] text-[12px] leading-[18px] font-normal text-text-primary font-poppins whitespace-nowrap"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
