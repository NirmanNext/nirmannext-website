import React from 'react';
import { Link } from 'react-router-dom';
import { FacebookIcon, TwitterIcon, LinkedInIcon, InstagramIcon, LocationIcon, PhoneIcon, EmailIcon } from '@/components/icons/SocialIcons';

const Footer: React.FC = () => {
  const socialLinks = [
    // { icon: <FacebookIcon />, href: '#', 'aria-label': 'Facebook' },
    // { icon: <TwitterIcon />, href: '#', 'aria-label': 'Twitter' },
    { icon: <LinkedInIcon />, href: 'https://in.linkedin.com/company/vinirmantech', 'aria-label': 'LinkedIn' },
    { icon: <InstagramIcon />, href: 'https://www.instagram.com/nirmannext/', 'aria-label': 'Instagram' },
  ];

  const companyLinks = [
    { label: "About Us", href: "/about" },
    { label: "Career", href: "/career" },
    { label: "Contact Us", href: "/contact" }
  ];

  const supportLinks = [
    { label: "FAQ", href: "/faqs" },
    { label: "Terms & Conditions", href: "/terms" },
    { label: "Privacy Policy", href: "/privacy" }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: Brand Info */}
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-white">NirmanNext</h2>
            <p className="text-gray-400">
              Building tomorrow's landmarks with today's vision and precision. Your trusted partner in construction and innovation.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a key={index} href={link.href} aria-label={link['aria-label']} className="text-gray-400 hover:text-white transition-colors duration-300">
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Company Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold tracking-wider uppercase">Company</h3>
            <ul className="space-y-3">
              {companyLinks.map((link, index) => (
                <li key={index}>
                {link.href.startsWith('/') ? (
                  <Link to={link.href} className="text-gray-400 hover:text-white transition-colors duration-300">
                    {link.label}
                  </Link>
                ) : (
                  <a href={link.href} className="text-gray-400 hover:text-white transition-colors duration-300">
                    {link.label}
                  </a>
                )}
              </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Support Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold tracking-wider uppercase">Support</h3>
            <ul className="space-y-3">
              {supportLinks.map((link, index) => (
                <li key={index}>
                  {link.href.startsWith('/') ? (
                    <Link to={link.href} className="text-gray-400 hover:text-white transition-colors duration-300">
                      {link.label}
                    </Link>
                  ) : (
                    <a href={link.href} className="text-gray-400 hover:text-white transition-colors duration-300">
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Get in Touch */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold tracking-wider uppercase">Get in Touch</h3>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start space-x-3">
                <LocationIcon className="w-6 h-6 flex-shrink-0 mt-1" />
                <span>2nd Floor, Cyber Heights, Vibhuti Khand,<br />
                Lucknow, Uttar Pradesh 226010</span>
              </li>
              <li className="flex items-center space-x-3">
                <PhoneIcon className="w-5 h-5 flex-shrink-0" />
                <a href="tel:+91-9819992488"
                className="hover:text-white transition-colors duration-300">+91-9819992488</a>
              </li>
              <li className="flex items-center space-x-3">
                <EmailIcon className="w-5 h-5 flex-shrink-0" />
                <a href="mailto:contact@nirmannext.com" className="hover:text-white transition-colors duration-300">contact@nirmannext.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} NirmanNext. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
