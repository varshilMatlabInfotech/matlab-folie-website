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
    <footer className="relative w-full min-h-[794px] bg-primary-navy pt-12 md:pt-20 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 mb-12">
          {/* MatLab Brand Section - Logo: 276.92px × 155.63px */}
          <div className="lg:col-span-3">
            <img src={matlabLogo} alt="MatLab Infotech" className="w-[276.92px] h-[155.63px] mb-6" />
            {/* Description: 22px/33px, weight 500 */}
            <p className="w-full max-w-[505px] text-[22px] leading-[33px] font-medium text-footer-text mb-8 font-poppins">
              Transforming businesses through innovative software solutions since 2012.
            </p>
            {/* Social Icons: 50px × 50px, 7px border-radius */}
            <div className="flex gap-4">
              <a href="#" className="w-[50px] h-[50px] flex items-center justify-center cursor-pointer hover:opacity-80 transition">
                <img src={instagramIcon} alt="Instagram" className="w-[50px] h-[50px]" />
              </a>
              <a href="#" className="w-[50px] h-[50px] flex items-center justify-center cursor-pointer hover:opacity-80 transition">
                <img src={facebookIcon} alt="Facebook" className="w-[50px] h-[50px]" />
              </a>
              <a href="#" className="w-[50px] h-[50px] flex items-center justify-center cursor-pointer hover:opacity-80 transition">
                <img src={linkedinIcon} alt="LinkedIn" className="w-[50px] h-[50px]" />
              </a>
              <a href="#" className="w-[50px] h-[50px] flex items-center justify-center cursor-pointer hover:opacity-80 transition">
                <img src={twitterIcon} alt="Twitter" className="w-[50px] h-[50px]"/>
              </a>
            </div>
          </div>

          {/* Services Section - Heading: 32px/48px, weight 700 */}
          <div className="lg:col-span-2">
            <h3 className="text-[32px] leading-[48px] font-bold text-white mb-6 font-poppins">
              Services
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-[22px] leading-[33px] font-medium text-footer-text hover:text-white transition font-poppins">
                  Web Devlopment
                </a>
              </li>
              <li>
                <a href="#" className="text-[22px] leading-[33px] font-medium text-footer-text hover:text-white transition font-poppins">
                  Mobile App
                </a>
              </li>
              <li>
                <a href="#" className="text-[22px] leading-[33px] font-medium text-footer-text hover:text-white transition font-poppins">
                  UI/UX Design
                </a>
              </li>
              <li>
                <a href="#" className="text-[22px] leading-[33px] font-medium text-footer-text hover:text-white transition font-poppins">
                  Cloud Solutions
                </a>
              </li>
            </ul>
          </div>

          {/* Company Section */}
          <div className="lg:col-span-2">
            <h3 className="text-[32px] leading-[48px] font-bold text-white mb-6 font-poppins">
              Company
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-[22px] leading-[33px] font-medium text-footer-text hover:text-white transition font-poppins">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-[22px] leading-[33px] font-medium text-footer-text hover:text-white transition font-poppins">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-[22px] leading-[33px] font-medium text-footer-text hover:text-white transition font-poppins">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-[22px] leading-[33px] font-medium text-footer-text hover:text-white transition font-poppins">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Section */}
          <div className="lg:col-span-2">
            <h3 className="text-[32px] leading-[48px] font-bold text-white mb-6 font-poppins">
              Legal
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-[22px] leading-[33px] font-medium text-footer-text hover:text-white transition font-poppins">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-[22px] leading-[33px] font-medium text-footer-text hover:text-white transition font-poppins">
                  Team Of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-[22px] leading-[33px] font-medium text-footer-text hover:text-white transition font-poppins">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Get Touch In Section */}
          <div className="lg:col-span-3">
            <h3 className="text-[32px] leading-[48px] font-bold text-white mb-6 font-poppins">
              Get Touch In
            </h3>
            <div className="space-y-6">
              {/* Address - Icon: 40px × 40px with gradient */}
              <div className="flex gap-3">
                <div className="w-[40px] h-[40px] flex items-center justify-center flex-shrink-0">
                  <img src={locationIcon} alt="Location" className="w-[40px] h-[40px]" />
                </div>
                <p className="text-[22px] leading-[27px] font-medium text-footer-text font-poppins">
                  B-605 - 610, IT Park, Mota Varachha, Surat, Gujarat 394105
                </p>
              </div>

              {/* Phone Numbers - Icon: 40px × 40px with gradient, 24px icon */}
              <div className="flex gap-3">
                <div className="w-[40px] h-[40px] flex items-center justify-center flex-shrink-0">
                  <img src={contactIcon} alt="Phone" className="w-[40px] h-[40px]" />
                </div>
                <div className="space-y-2">
                  <p className="text-[22px] leading-[33px] font-medium text-footer-text font-poppins">
                    (+91) 99587 56324
                  </p>
                  <p className="text-[22px] leading-[33px] font-medium text-footer-text font-poppins">
                    (+1) 015 001 590 49
                  </p>
                  <p className="text-[22px] leading-[33px] font-medium text-footer-text font-poppins">
                    (+972) 995 87 56 32
                  </p>
                </div>
              </div>

              {/* Email Addresses - Icon: 40px × 40px with gradient, 26px icon, 103.26% line-height */}
              <div className="flex gap-3">
                <div className="w-[40px] h-[40px] flex items-center justify-center flex-shrink-0">
                  <img src={emailIcon} alt="Email" className="w-[40px] h-[40px]" />
                </div>
                <div className="space-y-2">
                  <p className="text-[22px] leading-[103.26%] font-medium text-footer-text font-poppins">
                    hr@matlabinfotech.com
                  </p>
                  <p className="text-[22px] leading-[103.26%] font-medium text-footer-text font-poppins">
                    info@matlabinfotech.com
                  </p>
                  <p className="text-[22px] leading-[103.26%] font-medium text-footer-text font-poppins">
                    support@matlabinfotech.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Border Line - 0.7px, color #C5C5C5, 1694px width */}
        <div className="w-full max-w-[1694px] h-[0.7px] bg-border-light mb-8 mx-auto"></div>

        {/* Copyright - 22px/33px, weight 500, 808px max-width */}
        <div className="text-center">
          <p className="w-full max-w-[808px] text-[22px] leading-[33px] font-medium text-footer-text font-poppins mx-auto">
            © 2024 Matlabinfotech Solutions. All rights reserved. Built with excellence.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
