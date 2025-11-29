import coinsIcon from 'assets/images/Coins.png';
import truckIcon from 'assets/images/Truck.png';
import peopleIcon from 'assets/images/People.png';
import { Badge, ProjectCard } from './common';

const blogs = [
  {
    icon: coinsIcon,
    iconSize: 'w-[80px] h-[80px]',
    title: 'Top 10 Web Development Trends in 2024',
    description: 'Explore the latest trends shaping modern web development, from AI integration to progressive web apps.',
    date: 'Nov 15, 2024',
    gradient: 'bg-gradient-blue-1',
    readMoreLink: '#'
  },
  {
    icon: truckIcon,
    iconSize: 'w-[90px] h-[90px]',
    title: 'Building Scalable Microservices Architecture',
    description: 'A comprehensive guide to designing and implementing microservices for enterprise applications.',
    date: 'Nov 8, 2024',
    gradient: 'bg-gradient-blue-1',
    readMoreLink: '#'
  },
  {
    icon: peopleIcon,
    iconSize: 'w-[100px] h-[100px]',
    title: 'AI in Software Development: A Game Changer',
    description: 'How artificial intelligence is revolutionizing the software development lifecycle and boosting productivity.',
    date: 'Nov 1, 2024',
    gradient: 'bg-gradient-blue-1',
    readMoreLink: '#'
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1250px] mx-auto">
          {blogs.map((blog, index) => (
            <ProjectCard
              key={index}
              icon={blog.icon}
              iconSize={blog.iconSize}
              title={blog.title}
              description={blog.description}
              date={blog.date}
              gradient={blog.gradient}
              readMoreLink={blog.readMoreLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
