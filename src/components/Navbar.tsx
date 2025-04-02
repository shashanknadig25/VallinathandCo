import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    {
      name: 'Services',
      path: '/services',
      dropdown: [
        { name: 'Tax Planning', path: '/services/tax-planning' },
        { name: 'GST Services', path: '/services/gst-services' },
        { name: 'Audit & Assurance', path: '/services/audit-assurance' },
        { name: 'Business Advisory', path: '/services/business-advisory' },
      ],
    },
    { name: 'Industries', path: '/industries' },
    { name: 'Features', path: '/features' },
    { name: 'Why Choose Us', path: '/why-choose-us' },
    { name: 'Resources', path: '/resources' },
    // { name: 'Blog', path: '/blog' },
    { name: 'Careers', path: '/careers' },
    { name: 'Contact', path: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHomePage = location.pathname === '/';

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled || !isHomePage
          ? 'bg-white shadow-lg py-2' 
          : 'bg-black/20 backdrop-blur-sm py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link 
            to="/" 
            className={`transition-colors`}
          >
            <img 
              src="/images/team/logo.jpg" 
              alt="V&C Chartered Accountants" 
              className="h-12"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <div key={link.path} className="relative group">
                {link.dropdown ? (
                  <div className="relative">
                    <Link
                      to={link.path}
                      className={`flex items-center cursor-pointer font-medium transition-all hover:scale-105 ${
                        isScrolled || !isHomePage
                          ? location.pathname.startsWith(link.path)
                            ? 'text-navy'
                            : 'text-gray-600 hover:text-navy'
                          : location.pathname.startsWith(link.path)
                          ? 'text-white'
                          : 'text-gray-200 hover:text-white'
                      }`}
                      onClick={() => setServicesDropdown(false)}
                    >
                      {link.name}
                      <ChevronDown size={16} className="ml-1" />
                    </Link>
                    <div
                      className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200"
                      onMouseEnter={() => setServicesDropdown(true)}
                      onMouseLeave={() => setServicesDropdown(false)}
                    >
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.path}
                          to={item.path}
                          className="block px-4 py-2 text-gray-800 hover:bg-navy/10 hover:text-navy"
                          onClick={() => setServicesDropdown(false)}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    to={link.path}
                    className={`font-medium transition-all hover:scale-105 ${
                      isScrolled || !isHomePage
                        ? location.pathname === link.path
                          ? 'text-navy border-b-2 border-navy'
                          : 'text-gray-600 hover:text-navy'
                        : location.pathname === link.path
                        ? 'text-white border-b-2 border-white'
                        : 'text-gray-200 hover:text-white'
                    }`}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Navigation Button */}
          <button
            className={`md:hidden transition-colors ${
              isScrolled || !isHomePage ? 'text-gray-600 hover:text-navy' : 'text-white hover:text-gray-200'
            }`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 bg-white/95 backdrop-blur-sm rounded-lg shadow-lg p-4 animate-fade-in">
            {navLinks.map((link) => (
              <div key={link.path}>
                {link.dropdown ? (
                  <>
                    <Link
                      to={link.path}
                      className="w-full text-left py-3 px-4 font-medium rounded-lg transition-all text-gray-600 hover:bg-navy/10 hover:text-navy flex items-center justify-between"
                      onClick={() => {
                        setServicesDropdown(!servicesDropdown);
                        setIsOpen(false);
                      }}
                    >
                      {link.name}
                      <ChevronDown size={16} className={`transform transition-transform ${servicesDropdown ? 'rotate-180' : ''}`} />
                    </Link>
                    {servicesDropdown && (
                      <div className="pl-8">
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.path}
                            to={item.path}
                            className="block py-2 px-4 text-gray-600 hover:text-navy"
                            onClick={() => {
                              setIsOpen(false);
                              setServicesDropdown(false);
                            }}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={link.path}
                    className={`block py-3 px-4 font-medium rounded-lg transition-all ${
                      location.pathname === link.path
                        ? 'text-white bg-navy'
                        : 'text-gray-600 hover:bg-navy/10 hover:text-navy'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;