import React from 'react';
import { Link } from 'react-router-dom';
import logo from '@/assets/images/logo.png';
import { FaFacebook, FaYoutube, FaInstagram } from 'react-icons/fa';
import { RiTwitterXFill } from 'react-icons/ri';
import { IoLogoLinkedin } from 'react-icons/io5';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Leave a Review', path: '/review' },
  { label: 'Become a Pilot', path: '/become-a-pilot' },
  { label: 'Training Providers', path: '/training-providers' },
  { label: 'Aviation Insights', path: '/aviation-insights' },
  { label: 'Contact Us', path: '/contact' },
];

const Footer = () => {
  return (
    <footer className="bg-Primary text-white py-12 px-6 md:px-20">
      <div className="flex flex-col items-center gap-10 text-center">
        {/* Logo */}
        <img src={logo} alt="Aviation Insider Logo" className="h-12" />

        {/* Navigation Links */}
        <ul className="flex flex-wrap justify-center gap-6 text-base md:text-lg font-medium">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                to={link.path}
                className="hover:underline transition-all duration-200"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Bottom Section */}
        <div className="w-full border-t border-white/20 pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-sm">
          <p className="text-center md:text-left text-xl">Terms & Conditions | Privacy Policy</p>

          <div className="flex gap-8 ">
            <FaFacebook className="hover:text-gray-300 cursor-pointer text-xl" />
            <RiTwitterXFill className="hover:text-gray-300 cursor-pointer text-xl" />
            <FaYoutube className="hover:text-gray-300 cursor-pointer text-xl" />
            <FaInstagram className="hover:text-gray-300 cursor-pointer text-xl" />
            <IoLogoLinkedin className="hover:text-gray-300 cursor-pointer text-xl" />
          </div>

          <p className="text-center md:text-right text-xl">
            © {new Date().getFullYear()} Aviation Insider. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
