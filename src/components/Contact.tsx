const Contact = () => {
  return (
    <section className="relative w-full min-h-[1385.86px] bg-[#EAF6FF] py-12 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        {/* Header Section */}
        <div className="flex flex-col items-center mb-12 md:mb-16">
          {/* Badge */}
          <div className="w-full max-w-[142.02px] h-[37.86px] bg-gradient-to-r from-[#081AE0] via-[#0571D6] to-[#03A8D0] rounded-[12px] flex items-center justify-center mb-8">
            <span className="text-white font-medium text-[18px] leading-[27px] font-['Poppins'] text-center">
              Get in Touch
            </span>
          </div>

          {/* Heading */}
          <h2 className="w-full max-w-[949px] text-3xl md:text-4xl lg:text-[60px] leading-tight md:leading-[70px] lg:leading-[90px] font-semibold text-black text-center mb-6 font-['Poppins'] px-4">
            Let's Build Something Amazing Together
          </h2>

          {/* Description */}
          <p className="w-full max-w-[975px] text-lg md:text-xl lg:text-[24px] leading-relaxed md:leading-[32px] lg:leading-[36px] font-normal text-[#5D5D5D] text-center font-['Poppins'] px-4">
            Ready to start your project? Fill out the form below and our team will contact you within 24 hours.
          </p>
        </div>

        {/* Form Container */}
        <div className="w-full max-w-[1081px] h-[786.08px] bg-white border-[0.5px] border-[#00B5FF] rounded-[26px] p-8 md:p-12 mx-auto">
          <form className="space-y-6 md:space-y-8 h-full flex flex-col">
            {/* Name Field */}
            <div className="h-[80.7px]">
              <label className="block text-[18px] leading-[27px] font-medium text-black mb-3 font-['Poppins']">
                Name
              </label>
              <input
                type="text"
                placeholder="Eleven Mice"
                className="w-full h-[45.83px] px-6 bg-white border-[0.5px] border-[#656565] rounded-[5px] text-[16px] leading-[24px] font-medium text-[#919191] font-['Poppins'] focus:outline-none focus:border-[#0571D6]"
              />
            </div>

            {/* Email Field */}
            <div className="h-[80.7px]">
              <label className="block text-[18px] leading-[27px] font-medium text-black mb-3 font-['Poppins']">
                Email
              </label>
              <input
                type="email"
                placeholder="eleven@gmail.com"
                className="w-full h-[45.83px] px-6 bg-white border-[0.5px] border-[#656565] rounded-[5px] text-[16px] leading-[24px] font-medium text-[#919191] font-['Poppins'] focus:outline-none focus:border-[#0571D6]"
              />
            </div>

            {/* Company Field */}
            <div className="h-[80.7px]">
              <label className="block text-[18px] leading-[27px] font-medium text-black mb-3 font-['Poppins']">
                Company
              </label>
              <input
                type="text"
                placeholder="Your Company Inc."
                className="w-full h-[45.83px] px-6 bg-white border-[0.5px] border-[#656565] rounded-[5px] text-[16px] leading-[24px] font-medium text-[#919191] font-['Poppins'] focus:outline-none focus:border-[#0571D6]"
              />
            </div>

            {/* Project Details Field */}
            <div className="flex-1 flex flex-col">
              <label className="block text-[18px] leading-[27px] font-medium text-black mb-3 font-['Poppins']">
                Project Details
              </label>
              <textarea
                rows={8}
                placeholder="Tell us about your project requirements..."
                className="w-full h-[228.15px] px-6 py-4 bg-white border-[0.5px] border-[#656565] rounded-[5px] text-[16px] leading-[24px] font-medium text-[#919191] font-['Poppins'] focus:outline-none focus:border-[#0571D6] resize-none"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full h-[45.83px] bg-gradient-to-r from-[#082CDE] to-[#03A6D0] border-[0.5px] border-[#656565] rounded-[5px] text-[16px] leading-[24px] font-medium text-white font-['Poppins'] hover:opacity-90 transition"
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
