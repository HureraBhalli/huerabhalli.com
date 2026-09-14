import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const navLinks = ['Home', 'Our Work', 'Services', 'Rates', 'Our ans', 'Contact'];

  return (
    <nav className="navbar">
      <div className="navbar__container">

        {/* Logo */}
        <div className="navbar__logo">
         <img src="/images/logo.png" alt="" />
        </div>

        {/* Nav Links */}
        <div className="navbar__links">
          {navLinks.map((link, index) => (
            <React.Fragment key={link}>
              <a href="#" className="navbar__link">{link}</a>
              {index < navLinks.length - 1 && (
                <span className="navbar__divider">|</span>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* CTA Button */}
        <button className="navbar__cta">
          <span className="navbar__cta-icon">
            <ArrowUpRight size={14} />
          </span>
          Plan a Free Strategy Call
        </button>

      </div>
    </nav>
  );
};

export default Navbar;