import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import './Navbar.css';

const Navbar = ({ onNavClick }) => {
  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Our Work', id: 'works' },
    { name: 'Services', id: 'services' },
    { name: 'Rates', id: 'services' },
    { name: 'Our ans', id: 'testimonials' },
    { name: 'Contact', id: 'contact' },
  ];

  const handleClick = (e, id) => {
    e.preventDefault();
    if (onNavClick) onNavClick(id);
  };

  return (
    <nav className="navbar">
      <div className="navbar__container">

        {/* Logo */}
        <div
          className="navbar__logo"
          onClick={() => onNavClick && onNavClick('home')}
          style={{ cursor: 'pointer' }}
        >
          <img src="/images/logo.png" alt="Hurera Bhalli" />
        </div>

        {/* Nav Links */}
        <div className="navbar__links">
          {navLinks.map((link, index) => (
            <React.Fragment key={link.name}>
              <a
                href={`#${link.id}`}
                className="navbar__link"
                onClick={(e) => handleClick(e, link.id)}
              >
                {link.name}
              </a>
              {index < navLinks.length - 1 && (
                <span className="navbar__divider">|</span>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* CTA Button */}
        <button
          className="navbar__cta"
          onClick={() => onNavClick && onNavClick('contact')}
        >
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