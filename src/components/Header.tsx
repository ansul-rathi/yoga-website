import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { studioInfo, navigationItems } from '../data/studioData';
import { getIcon } from '../utils/iconMapper';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const LotusIcon = getIcon('Lotus');

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="container mx-auto px-4 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="bg-sage-500 p-1.5 sm:p-2 rounded-full">
              <LotusIcon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
            </div>
            <span className="text-lg sm:text-2xl font-bold text-sage-700">{studioInfo.name}</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-sage-600 hover:text-sage-800 transition-colors duration-200 text-sm lg:text-base"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-sage-500 text-white px-4 lg:px-6 py-2 rounded-full hover:bg-sage-600 transition-colors duration-200 text-sm lg:text-base"
            >
              Contact
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-full hover:bg-sage-100 transition-colors duration-200"
          >
            {isMenuOpen ? <X className="h-5 w-5 sm:h-6 sm:w-6" /> : <Menu className="h-5 w-5 sm:h-6 sm:w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 p-4 bg-white rounded-xl sm:rounded-2xl shadow-lg">
            <div className="flex flex-col space-y-3 sm:space-y-4">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-sage-600 hover:text-sage-800 transition-colors duration-200 text-left text-sm sm:text-base"
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-sage-500 text-white px-4 sm:px-6 py-2 rounded-full hover:bg-sage-600 transition-colors duration-200 text-center text-sm sm:text-base"
              >
                Contact
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;