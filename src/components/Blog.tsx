import coinsIcon from 'assets/images/Coins.png';
import truckIcon from 'assets/images/Truck.png';
import peopleIcon from 'assets/images/People.png';
import { Badge } from './common';

const blogs = [
  {
    icon: coinsIcon,
    iconSize: 'w-[80px] h-[80px]',
    title: 'Top 10 Web Development Trends in 2024',
    description: 'Explore the latest trends shaping modern web development, from AI integration to progressive web apps.',
    date: 'Nov 15, 2024',
    gradient: 'bg-gradient-blue-1'
  },
  {
    icon: truckIcon,
    iconSize: 'w-[90px] h-[90px]',
    title: 'Building Scalable Microservices Architecture',
    description: 'A comprehensive guide to designing and implementing microservices for enterprise applications.',
    date: 'Nov 8, 2024',
    gradient: 'bg-gradient-blue-1'
  },
  {
    icon: peopleIcon,
    iconSize: 'w-[100px] h-[100px]',
    title: 'AI in Software Development: A Game Changer',
    description: 'How artificial intelligence is revolutionizing the software development lifecycle and boosting productivity.',
    date: 'Nov 1, 2024',
    gradient: 'bg-gradient-blue-1'
  }
];

const Blog = () => {
  return (
    <section className="relative w-full min-h-[888px] bg-bg-light py-12 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        {/* Header Section */}
        <div className="flex flex-col items-center mb-12 md:mb-16">
          {/* Badge */}
          <div className="mb-8">
            <Badge>Blog</Badge>
          </div>

          {/* Heading */}
          <h2 className="w-full max-w-[441px] whitespace-nowrap text-3xl md:text-4xl lg:text-[60px] leading-tight md:leading-[70px] lg:leading-[90px] font-semibold text-text-primary text-center mb-6 font-poppins px-4">
            Latest Insights
          </h2>

          {/* Description */}
          <p className="w-full max-w-[1018px] text-lg md:text-xl lg:text-[28px] leading-relaxed md:leading-[36px] lg:leading-[42px] font-normal text-text-secondary text-center font-poppins px-4">
            Stay updated with the latest trends, tips, and best practices in software development.
          </p>
        </div>

        {/* Blog Cards Grid - 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="w-full max-w-[587px] h-[559px] bg-white border-[0.5px] border-border-primary rounded-card overflow-hidden hover:shadow-lg transition mx-auto"
            >
              {/* Image Area */}
              <div className={`w-full h-[256.54px] ${blog.gradient} flex items-center justify-center`}>
                <img src={blog.icon} alt={blog.title} className={blog.iconSize} />
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Date */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-5 h-5 bg-icon-gray rounded flex items-center justify-center">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.5 1.5H8.5V1H7.5V1.5H4.5V1H3.5V1.5H2.5C1.95 1.5 1.5 1.95 1.5 2.5V9.5C1.5 10.05 1.95 10.5 2.5 10.5H9.5C10.05 10.5 10.5 10.05 10.5 9.5V2.5C10.5 1.95 10.05 1.5 9.5 1.5ZM9.5 9.5H2.5V4.5H9.5V9.5Z" fill="white"/>
                    </svg>
                  </div>
                  <span className="text-[12px] leading-[18px] font-normal text-icon-gray font-poppins">
                    {blog.date}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-[22px] leading-[33px] font-semibold text-text-primary mb-2 font-poppins">
                  {blog.title}
                </h3>

                {/* Description */}
                <p className="text-[16px] leading-[24px] font-normal text-text-gray mb-6 font-poppins">
                  {blog.description}
                </p>

                {/* Read More */}
                <a href="#" className="text-[18px] leading-[27px] font-medium text-text-primary hover:text-primary font-poppins transition">
                  Read More &gt;
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
