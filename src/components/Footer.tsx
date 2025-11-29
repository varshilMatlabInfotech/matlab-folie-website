import matlabLogo from 'assets/images/white-logo-matlab.png';
import instagramIcon from 'assets/images/instagram.png';
import facebookIcon from 'assets/images/facebook.png';
import linkedinIcon from 'assets/images/linkedin.png';
import twitterIcon from 'assets/images/twitter.png';
import locationIcon from 'assets/images/location.png';
import contactIcon from 'assets/images/contact.png';
import emailIcon from 'assets/images/email.png';

const Footer = () => {
  return (
    <footer className="relative w-full min-h-[794px] bg-[#032289] pt-12 md:pt-20 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 mb-12">
          {/* MatLab Brand Section */}
          <div className="lg:col-span-3">
            <img src={matlabLogo} alt="MatLab Infotech" className="w-[276.92px] h-[155.63px] mb-6" />
            <p className="w-full max-w-[505px] text-[22px] leading-[27px] font-medium text-[#DDDDDD] mb-8 font-['Poppins']">
              Transforming businesses through innovative software solutions since 2012.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-[50px] h-[50px] flex items-center justify-center cursor-pointer hover:opacity-80 transition">
                <img src={instagramIcon} alt="Instagram" className="w-[40px] h-[40px]" />
              </a>
              <a href="#" className="w-[50px] h-[50px] flex items-center justify-center cursor-pointer hover:opacity-80 transition">
                <img src={facebookIcon} alt="Facebook" className="w-[40px] h-[40px]" />
              </a>
              <a href="#" className="w-[50px] h-[50px] flex items-center justify-center cursor-pointer hover:opacity-80 transition">
                <img src={linkedinIcon} alt="LinkedIn" className="w-[40px] h-[40px]" />
              </a>
              <a href="#" className="w-[50px] h-[50px] flex items-center justify-center cursor-pointer hover:opacity-80 transition">
                <img src={twitterIcon} alt="Twitter" className="w-[40px] h-[40px]"/>
              </a>
            </div>
          </div>

          {/* Services Section */}
          <div className="lg:col-span-2">
            <h3 className="text-[32px] leading-[48px] font-bold text-white mb-6 font-['Poppins']">
              Services
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-[22px] leading-[27px] font-medium text-[#DDDDDD] hover:text-white transition font-['Poppins']">
                  Web Devlopment
                </a>
              </li>
              <li>
                <a href="#" className="text-[22px] leading-[27px] font-medium text-[#DDDDDD] hover:text-white transition font-['Poppins']">
                  Mobile App
                </a>
              </li>
              <li>
                <a href="#" className="text-[22px] leading-[27px] font-medium text-[#DDDDDD] hover:text-white transition font-['Poppins']">
                  UI/UX Design
                </a>
              </li>
              <li>
                <a href="#" className="text-[22px] leading-[27px] font-medium text-[#DDDDDD] hover:text-white transition font-['Poppins']">
                  Cloud Solutions
                </a>
              </li>
            </ul>
          </div>

          {/* Company Section */}
          <div className="lg:col-span-2">
            <h3 className="text-[32px] leading-[48px] font-bold text-white mb-6 font-['Poppins']">
              Company
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-[22px] leading-[27px] font-medium text-[#DDDDDD] hover:text-white transition font-['Poppins']">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-[22px] leading-[27px] font-medium text-[#DDDDDD] hover:text-white transition font-['Poppins']">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-[22px] leading-[27px] font-medium text-[#DDDDDD] hover:text-white transition font-['Poppins']">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-[22px] leading-[27px] font-medium text-[#DDDDDD] hover:text-white transition font-['Poppins']">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Section */}
          <div className="lg:col-span-2">
            <h3 className="text-[32px] leading-[48px] font-bold text-white mb-6 font-['Poppins']">
              Legal
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-[22px] leading-[27px] font-medium text-[#DDDDDD] hover:text-white transition font-['Poppins']">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-[22px] leading-[27px] font-medium text-[#DDDDDD] hover:text-white transition font-['Poppins']">
                  Team Of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-[22px] leading-[27px] font-medium text-[#DDDDDD] hover:text-white transition font-['Poppins']">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Get Touch In Section */}
          <div className="lg:col-span-3">
            <h3 className="text-[32px] leading-[39px] font-bold text-white mb-6 font-['Poppins']">
              Get Touch In
            </h3>
            <div className="space-y-6">
              {/* Address */}
              <div className="flex gap-3">
                <div 
                  className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                >
                  <img src={locationIcon} alt="Location" className="w-5 h-5" />
                </div>
                <p className="text-[22px] leading-[27px] font-medium text-[#DDDDDD] font-['Poppins']">
                  B-605 - 610, IT Park, Mota Varachha, Surat, Gujarat 394105
                </p>
              </div>

              {/* Phone Numbers */}
              <div className="flex gap-3">
                <div 
                  className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                >
                  <img src={contactIcon} alt="Phone" className="w-6 h-6" />
                </div>
                <div className="space-y-2">
                  <p className="text-[22px] leading-[27px] font-medium text-[#DDDDDD] font-['Poppins']">
                    (+91) 99587 56324
                  </p>
                  <p className="text-[22px] leading-[27px] font-medium text-[#DDDDDD] font-['Poppins']">
                    (+1) 015 001 590 49
                  </p>
                  <p className="text-[22px] leading-[27px] font-medium text-[#DDDDDD] font-['Poppins']">
                    (+972) 995 87 56 32
                  </p>
                </div>
              </div>

              {/* Email Addresses */}
              <div className="flex gap-3">
                <div 
                  className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                >
                  <img src={emailIcon} alt="Email" className="w-[26px] h-[26px]" />
                </div>
                <div className="space-y-2">
                  <p className="text-[22px] leading-[23px] font-medium text-[#DDDDDD] font-['Poppins']">
                    hr@matlabinfotech.com
                  </p>
                  <p className="text-[22px] leading-[23px] font-medium text-[#DDDDDD] font-['Poppins']">
                    info@matlabinfotech.com
                  </p>
                  <p className="text-[22px] leading-[23px] font-medium text-[#DDDDDD] font-['Poppins']">
                    support@matlabinfotech.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Border Line */}
        <div className="w-full max-w-[1694px] h-[0.7px] bg-[#C5C5C5] mb-8 mx-auto"></div>

        {/* Copyright */}
        <div className="text-center">
          <p className="w-full max-w-[776px] text-[22px] leading-[27px] font-medium text-[#DDDDDD] font-['Poppins'] mx-auto">
            © 2024 Matlabinfotech Solutions. All rights reserved. Built with excellence.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
