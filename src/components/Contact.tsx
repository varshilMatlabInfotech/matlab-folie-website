import { Badge } from './common';

const Contact = () => {
  return (
    <section className="relative w-full min-h-[1385.86px] bg-bg-lighter py-12 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        {/* Header Section */}
        <div className="flex flex-col items-center mb-12 md:mb-16">
          {/* Badge */}
          <div className="mb-8">
            <Badge>Get in Touch</Badge>
          </div>

          {/* Heading */}
          <h2 className="w-full max-w-[949px] text-3xl md:text-4xl lg:text-[60px] leading-tight md:leading-[70px] lg:leading-[90px] font-semibold text-text-primary text-center mb-6 font-poppins px-4">
            Let's Build Something Amazing Together
          </h2>

          {/* Description */}
          <p className="w-full max-w-[975px] text-lg md:text-xl lg:text-[24px] leading-relaxed md:leading-[32px] lg:leading-[36px] font-normal text-text-secondary text-center font-poppins px-4">
            Ready to start your project? Fill out the form below and our team will contact you within 24 hours.
          </p>
        </div>

        {/* Form Container */}
        <div className="w-full max-w-[1081px] h-[786.08px] bg-white border-[0.5px] border-border-primary rounded-contact-card p-8 md:p-12 mx-auto">
          <form className="space-y-6 md:space-y-8 h-full flex flex-col">
            {/* Name Field */}
            <div className="h-[80.7px]">
              <label className="block text-[18px] leading-[27px] font-medium text-text-primary mb-3 font-poppins">
                Name
              </label>
              <input
                type="text"
                placeholder="Eleven Mice"
                className="w-full h-[45.83px] px-6 bg-white border-[0.5px] border-border-gray rounded-input text-[16px] leading-[24px] font-medium text-text-placeholder font-poppins focus:outline-none focus:border-primary"
              />
            </div>

            {/* Email Field */}
            <div className="h-[80.7px]">
              <label className="block text-[18px] leading-[27px] font-medium text-text-primary mb-3 font-poppins">
                Email
              </label>
              <input
                type="email"
                placeholder="eleven@gmail.com"
                className="w-full h-[45.83px] px-6 bg-white border-[0.5px] border-border-gray rounded-input text-[16px] leading-[24px] font-medium text-text-placeholder font-poppins focus:outline-none focus:border-primary"
              />
            </div>

            {/* Company Field */}
            <div className="h-[80.7px]">
              <label className="block text-[18px] leading-[27px] font-medium text-text-primary mb-3 font-poppins">
                Company
              </label>
              <input
                type="text"
                placeholder="Your Company Inc."
                className="w-full h-[45.83px] px-6 bg-white border-[0.5px] border-border-gray rounded-input text-[16px] leading-[24px] font-medium text-text-placeholder font-poppins focus:outline-none focus:border-primary"
              />
            </div>

            {/* Project Details Field */}
            <div className="flex-1 flex flex-col">
              <label className="block text-[18px] leading-[27px] font-medium text-text-primary mb-3 font-poppins">
                Project Details
              </label>
              <textarea
                rows={8}
                placeholder="Tell us about your project requirements..."
                className="w-full h-[228.15px] px-6 py-4 bg-white border-[0.5px] border-border-gray rounded-input text-[16px] leading-[24px] font-medium text-text-placeholder font-poppins focus:outline-none focus:border-primary resize-none"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              className="w-full h-[45.83px] bg-gradient-contact border-[0.5px] border-border-gray rounded-input text-[16px] leading-[24px] font-medium text-white font-poppins hover:opacity-90 transition"
            >
              Request Consultation
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
