import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import matlabLogo from 'assets/images/matlab-logo.png';
import { Button } from './common';

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 bg-bg-light z-50 border-b border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex items-center justify-between h-20 lg:h-24">
            <div className="flex items-center">
              <img src={matlabLogo} alt="MatLab Infotech" className="h-10 lg:h-12" />
            </div>

            <nav className="hidden lg:flex items-center space-x-10">
              <a href="#home" className="text-text-primary font-medium text-[22px] leading-[33px] font-poppins">Home</a>
              <a href="#services" className="text-text-light font-medium text-[22px] leading-[33px] font-poppins hover:text-text-primary transition">Services</a>
              <a href="#technologies" className="text-text-light font-medium text-[22px] leading-[33px] font-poppins hover:text-text-primary transition">Technologies</a>
              <a href="#industries" className="text-text-light font-medium text-[22px] leading-[33px] font-poppins hover:text-text-primary transition">Industries</a>
              <a href="#company" className="text-text-light font-medium text-[22px] leading-[33px] font-poppins hover:text-text-primary transition">Company</a>
            </nav>

            <div className="hidden lg:flex items-center space-x-4">
              <Button variant="secondary">
                Get Quote
              </Button>
              <Button variant="primary">
                Hire Us
              </Button>
            </div>

            <button 
              onClick={toggleDrawer}
              className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition"
              aria-label="Toggle menu"
            >
              <Menu size={28} />
            </button>
          </div>
        </div>
      </header>

      {/* Overlay */}
      {isDrawerOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-50 lg:hidden transition-opacity"
          onClick={closeDrawer}
        />
      )}

      {/* Mobile Drawer */}
      <div 
        className={`fixed top-0 right-0 h-full w-80 bg-bg-white z-50 shadow-2xl transform transition-transform duration-300 ease-in-out lg:hidden ${
          isDrawerOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Drawer Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-100">
            <img src={matlabLogo} alt="MatLab Infotech" className="h-10" />
            <button 
              onClick={closeDrawer}
              className="p-2 hover:bg-gray-100 rounded-lg transition"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col p-6 space-y-6 flex-1">
            <a 
              href="#home" 
              onClick={closeDrawer}
              className="text-text-primary font-medium text-xl font-poppins hover:text-primary transition"
            >
              Home
            </a>
            <a 
              href="#services" 
              onClick={closeDrawer}
              className="text-text-light font-medium text-xl font-poppins hover:text-primary transition"
            >
              Services
            </a>
            <a 
              href="#technologies" 
              onClick={closeDrawer}
              className="text-text-light font-medium text-xl font-poppins hover:text-primary transition"
            >
              Technologies
            </a>
            <a 
              href="#industries" 
              onClick={closeDrawer}
              className="text-text-light font-medium text-xl font-poppins hover:text-primary transition"
            >
              Industries
            </a>
            <a 
              href="#company" 
              onClick={closeDrawer}
              className="text-text-light font-medium text-xl font-poppins hover:text-primary transition"
            >
              Company
            </a>
          </nav>

          {/* Action Buttons */}
          <div className="p-6 space-y-3 border-t border-gray-100">
            <Button 
              variant="outline"
              fullWidth
              onClick={closeDrawer}
            >
              Get Quote
            </Button>
            <Button 
              variant="primary"
              fullWidth
              onClick={closeDrawer}
            >
              Hire Us
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
