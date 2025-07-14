import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "@/assets/images/logo.png";
import CommonButton from "@/components/common/CommonButton";
import AllDropdown from "./AllDropdown";

const Navbar = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation()
    const isActive = (path) => location.pathname === path;
    console.log(isActive)
  const aboutLinks = [
    { label: "FAQS", path: "/faq" },
    { label: "Pilot Network Explained", path: "/pilot-network" },
    { label: "Partners", path: "/partner" },
  ];

  const traningProviders = [
    { label: "TOP FLIGHT SCHOOLS", path: "/faq" },
    { label: "ALL FLIGHT SCHOOLS", path: "/pilot-network" },
    { label: "FLIGHT SCHOOL REVIEWS", path: "/partner" },
    { label: "FLIGHT SCHOOLS - MAP", path: "/partner" },
    { label: "MODULAR COURSES", path: "/partner" },
    { label: "LICENCE PROFICIENCY CHECKS", path: "/partner" },
    { label: "INTEGRATED COURSES", path: "/partner" },
    { label: "VERIFIED SCHOOLS", path: "/partner" },
    { label: "ENHANCED FLIGHT SCHOOLS", path: "/partner" },
  ];

  const aviationInsights = [
    { label: "Aviation Advice", path: "/faq" },
    { label: "Aviation Articles", path: "/pilot-network" },
  ];

  const navLinks = [
    { label: "Home", path: "/" },
    // { label: "AboutUs", path: "/about-us" },
    { label: "Leave a Review", path: "/review" },
    { label: "Become a Pilot", path: "/become-pilot" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <header className="bg-Primary text-white  z-50 sticky top-0">
      <div className="section-padding-x py-5 flex justify-between items-center">
        {/* Logo */}
        <Link to="/">
          <img src={logo} alt="Logo" className="w-40 md:w-60" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          <ul className="flex items-center gap-6 text-lg">
            {navLinks.map((item, index) => (
              <React.Fragment key={item.path}>
                <li>
                  <Link to={item.path}>{item.label}</Link>
                </li>
                {index === 0 && (
                  <Link to="/about-us">
                    <AllDropdown label="About Us" items={aboutLinks} />
                  </Link>
                )}
                {index === 2 && (
                  <>
                    <li>
                      <AllDropdown label="Training Providers" items={traningProviders} />
                    </li>
                    <li>
                      <AllDropdown label="Aviation Insights" items={aviationInsights} />
                    </li>
                  </>
                )}
              </React.Fragment>
            ))}
          </ul>

          <CommonButton type="button" variant="primary">
            Login
          </CommonButton>
        </nav>

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden z-50"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
        >
          {isMobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-Primary text-white transform transition-transform duration-300 ease-in-out z-40 ${
          isMobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-6 space-y-6">
          <ul className="flex flex-col gap-4 text-lg">
            {navLinks.map((item, index) => (
              <React.Fragment key={item.path}>
                <li>
                  <Link
                    to={item.path}
                    onClick={() => setIsMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
                {index === 0 && (
                  <li>
                    <AllDropdown label="About Us" items={aboutLinks} />
                  </li>
                )}
                {index === 2 && (
                  <>
                    <li>
                      <AllDropdown
                        label="Training Providers"
                        items={traningProviders}
                      />
                    </li>
                    <li>
                      <AllDropdown
                        label="Aviation Insights"
                        items={aviationInsights}
                      />
                    </li>
                  </>
                )}
              </React.Fragment>
            ))}
          </ul>
          <CommonButton type="button" variant="primary" fullWidth>
            Login
          </CommonButton>
        </div>
      </div>
    </header>
  );
};

export default Navbar;