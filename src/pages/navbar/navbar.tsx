import { useState } from "react";
import React from "react";

import "./navbar.css";
import CompanyIcon from "../../images/Icon1.png";
const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    "Home",
    "Service",
    "Feature",
    "Product",
    "Testimonial",
    "FAQ",
  ];

  return (
    <nav className="bg-white shadow-sm mx-auto navbar_main">
      {/* <div className="mx-auto px-4 sm:px-6 lg:px-8"> */}

      <div className="desktop_viewNav">
        {/* Left side - Brand */}
        <div className="flex items-center">
          <span>
            <img src={CompanyIcon} id="website_Logo" alt="Wbsite logo" />
          </span>
          <span className="text-2xl font-bold text-gray-800">Nexcent</span>
        </div>

        {/* Middle - Navigation items (desktop) */}
        <div className="hidden md:flex items-center destop_navlinks">
          {navItems.map((item) => (
            <a key={item} href="#" className="Header_nav_link">
              {item}
            </a>
          ))}
        </div>

        {/* Right side - Auth buttons */}
        <div className="hidden md:flex items-center">
          <a href="#" className="login_btn">
            Login
          </a>
          <a href="#" className="sigUp_btn">
            Sign up
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-600 hover:text-gray-800"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="mobile_View_nav md:hidden items-center">
          {navItems.map((item) => (
            <a key={item} href="#" className="mobileView_link block gap-6 ">
              {item}
            </a>
          ))}
          <div className="MobileView_AuthBtn">
            <a href="#" className="mobileView_login">
              Login
            </a>
            <a href="#" className="mobileView_SignUp">
              Sign up
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
