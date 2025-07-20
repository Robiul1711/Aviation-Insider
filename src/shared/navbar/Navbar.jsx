import React, { useState } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "@/assets/images/logo.png";
import CommonButton from "@/components/common/CommonButton";
import AllDropdown from "./AllDropdown";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const isActive = (path) => location.pathname === path;

  const aboutLinks = [
    { label: "FAQS", path: "/faq" },
    { label: "Pilot Network Explained", path: "/pilot-network" },
    { label: "Partners", path: "/partner" },
  ];

  const traningProviders = [
    { label: "TOP FLIGHT SCHOOLS", path: "/top-flight-schools" },
    { label: "ALL FLIGHT SCHOOLS", path: "/all-training-providers" },
    { label: "FLIGHT SCHOOL REVIEWS", path: "/flight-school-reviews" },
    { label: "FLIGHT SCHOOLS - MAP", path: "/flight-school-map" },
    { label: "MODULAR COURSES", path: "/modular-courses" },
    { label: "LICENCE PROFICIENCY CHECKS", path: "/licence-proficiency-checks" },
    { label: "INTEGRATED COURSES", path: "/integrated-courses" },
    { label: "VERIFIED SCHOOLS", path: "/verified-schools" },
    { label: "ENHANCED FLIGHT SCHOOLS", path: "/plus-schools" },
  ];

  const aviationInsights = [
    { label: "Aviation Advice", path: "/aviation-advice" },
    { label: "Aviation Articles", path: "/aviation-articles" },
  ];

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "Leave a Review", path: "/review" },
    { label: "Become a Pilot", path: "/become-pilot" },
    { label: "Contact", path: "/contact" },
  ];


  return (
    <header className="bg-Primary text-white z-50 sticky top-0">
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
                  <Link
                    to={item.path}
                    className={`transition-colors duration-200 ${
                      isActive(item.path)
                        ? "text-yellow-400 "
                        : "text-white"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
                {index === 0 && (
                  <Link to="/about-us" className={`${
                      location.pathname==='/about-us' 
                        ? "text-yellow-400 "
                        : "text-white"
                    }`}>
                    <AllDropdown label="About Us" items={aboutLinks} />
                  </Link>
                )}
                {index === 2 && (
                  <>
                    <Link to={"/training-providers"} className={`${location.pathname==='/training-providers' ? "text-yellow-400 " : "text-white"}`}>
                      <AllDropdown
                        label="Training Providers"
                        items={traningProviders}
                      />
                    </Link>
                    <Link to={"/aviation-insights"} className={`${location.pathname==='/aviation-insights' ? "text-yellow-400 " : "text-white"}`}>
                      <AllDropdown
                        label="Aviation Insights"
                        items={aviationInsights}
                      />
                    </Link>
                  </>
                )}
              </React.Fragment>
            ))}
          </ul>

          <CommonButton
            onClick={() => navigate("/auth/sign-in")}
            type="button"
            variant="primary"
          >
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
                    className={`transition-colors duration-200 ${
                      isActive(item.path)
                        ? "text-yellow-400 font-medium"
                        : "text-white"
                    }`}
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
          <CommonButton
            onClick={() => {
              navigate("/auth/sign-in");
              setIsMobileOpen(false);
            }}
            type="button"
            variant="primary"
            fullWidth
          >
            Login
          </CommonButton>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
