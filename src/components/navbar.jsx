import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../style/navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) setIsMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const links = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/service', label: 'Services' }
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          Book My Mehndi
        </Link>

        {!isMobile && (
          <div className="navbar-menu">
            {links.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className={`navbar-link${location.pathname === to ? ' active' : ''}`}
              >
                {label}
              </Link>
            ))}
            <button className="navbar-book-btn">Book Now</button>
          </div>
        )}

        {/* Mobile Menu Button */}
        {isMobile && (
          <button
            className="mobile-menu-btn"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            ☰
          </button>
        )}
      </div>

      {/* Mobile Menu */}
      {isMobile && isMenuOpen && (
        <div className="mobile-menu">
          {links.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={`mobile-menu-link${location.pathname === to ? ' active' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              {label}
            </Link>
          ))}
          <button
            className="mobile-book-btn"
            onClick={() => setIsMenuOpen(false)}
          >
            Book Now
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
