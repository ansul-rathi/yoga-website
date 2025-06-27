import React from 'react';
import { studioInfo, socialLinks, footerLinks } from '../data/studioData';
import { getIcon } from '../utils/iconMapper';

const Footer = () => {
  const LotusIcon = getIcon('Lotus');

  return (
    <footer className="bg-sage-800 text-white py-12 sm:py-16">
      <div className="container mx-auto px-4">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {/* Brand */}
          <div className="space-y-4 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-2">
              <div className="bg-sage-600 p-1.5 sm:p-2 rounded-full">
                <LotusIcon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
              </div>
              <span className="text-xl sm:text-2xl font-bold">{studioInfo.name}</span>
            </div>
            <p className="text-sage-200 leading-relaxed text-sm sm:text-base">
              Discover inner peace and transform your life through the ancient practice of yoga 
              in our welcoming, supportive community.
            </p>
            <div className="flex space-x-3 sm:space-x-4">
              {socialLinks.map((social, index) => {
                const IconComponent = getIcon(social.icon as any);
                return (
                  <a 
                    key={index}
                    href={social.url} 
                    className="bg-sage-700 p-2 rounded-full hover:bg-sage-600 transition-colors duration-200"
                    aria-label={social.platform}
                  >
                    <IconComponent className="h-4 w-4 sm:h-5 sm:w-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-sage-200 hover:text-white transition-colors duration-200 text-sm sm:text-base">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Classes */}
          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Popular Classes</h3>
            <ul className="space-y-2">
              {footerLinks.popularClasses.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-sage-200 hover:text-white transition-colors duration-200 text-sm sm:text-base">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Contact Info</h3>
            <div className="space-y-2 text-sage-200 text-sm sm:text-base">
              <p>{studioInfo.contact.address}</p>
              <p>{studioInfo.contact.city}</p>
              <p>{studioInfo.contact.phone}</p>
              <p>{studioInfo.contact.email}</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-sage-700 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-sage-200 text-sm sm:text-base text-center sm:text-left">
              © 2024 {studioInfo.name}. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center sm:justify-end space-x-4 sm:space-x-6">
              {footerLinks.legal.map((link, index) => (
                <a 
                  key={index}
                  href={link.href} 
                  className="text-sage-200 hover:text-white transition-colors duration-200 text-sm sm:text-base"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;