import { useState } from "react";
import CompanyIcon from "../../images/Icon1.png";
import "./navbar.css";

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
    <nav className="navbar_main">
      {/* Desktop Navigation */}
      <div className="desktop_viewNav">
        {/* Brand Section */}
        <div className="brand-section">
          <img src={CompanyIcon} id="website_Logo" alt="Website logo" />
          <span className="brand-name">Nexcent</span>
        </div>

        {/* Desktop Nav Links */}
        <div className="destop_navlinks">
          {navItems.map((item) => (
            <a key={item} href="#" className="Header_nav_link">
              {item}
            </a>
          ))}
        </div>

        {/* Desktop Auth Buttons */}
        <div className="auth-buttons">
          <a href="#login" className="login_btn">
            Login
          </a>
          <a href="#signup" className="sigUp_btn">
            Sign up
          </a>
        </div>

        {/* Mobile Menu Button (Hidden on Desktop) */}
        <button
          className="mobile-menu-button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="hamburger-icon"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="mobile_View_nav">
          {navItems.map((item) => (
            <a key={item} href="#" className="mobileView_link">
              {item}
            </a>
          ))}
          <div className="MobileView_AuthBtn">
            <a href="#login" className="mobileView_login">
              Login
            </a>
            <a href="#signup" className="mobileView_SignUp">
              Sign up
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
