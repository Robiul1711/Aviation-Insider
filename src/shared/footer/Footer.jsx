import React from "react";
import { Link } from "react-router-dom";
import logo from "@/assets/images/logo.png";
import { FaFacebook, FaYoutube, FaInstagram } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { IoLogoLinkedin } from "react-icons/io5";

const navLinks = [
  { label: "Home", path: "/home" },
  { label: "About Us", path: "/about-us" },
  { label: "Leave a Review", path: "/review" },
  { label: "Become a Pilot", path: "/become-pilot" },
  { label: "Training Providers", path: "/training-providers" },
  { label: "Aviation Insights", path: "/aviation-insights" },
  { label: "Contact Us", path: "/contact" },
];

const Footer = () => {
  return (
    <footer className="bg-Primary text-white py-6 md:py-12 section-padding-x">
      <div className="flex flex-col items-center gap-8 md:gap-10 text-center">
        {/* Logo */}
        <img
          src={logo}
          alt="Aviation Insider Logo"
          className="w-40 md:w-48 lg:w-56 xl:w-auto"
        />

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
        <div className="w-full border-t border-white/20 pt-5 md:pt-8 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6 text-sm">
   <p className="text-center md:text-left md:text-xl flex gap-2">
  <Link to="/terms-and-conditions">Terms & Conditions</Link> 
  | 
  <Link to="/privacy-policy/privacy-policy">Privacy Policy</Link> 
</p>


          <div className="flex gap-8 ">
            <a href="https://www.facebook.com/PilotNetworkLTD/">
              <FaFacebook className="hover:text-gray-300 cursor-pointer text-xl" />
            </a>
            <a href="https://x.com/network_pilot">
              <RiTwitterXFill className="hover:text-gray-300 cursor-pointer text-xl" />
            </a>
            {/* <FaYoutube className="hover:text-gray-300 cursor-pointer text-xl" /> */}
            <a href="https://www.instagram.com/pilot.network/">
              <FaInstagram className="hover:text-gray-300 cursor-pointer text-xl" />
            </a>
            <a href="https://www.linkedin.com/in/pilot-network-a779121a7/">
              <IoLogoLinkedin className="hover:text-gray-300 cursor-pointer text-xl" />
            </a>
          </div>

          <p className="text-center md:text-right md:text-xl">
            © {new Date().getFullYear()} Aviation Insider. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
