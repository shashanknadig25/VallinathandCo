import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Twitter, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-navy text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="block mb-4">
              <img 
                src="/images/team/logo.jpg" 
                alt="V&C Chartered Accountants" 
                className="h-12"
              />
            </Link>
            <p className="text-gray-300">
              Your trusted partner for financial success and growth.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-white">About Us</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white">Services</Link></li>
              <li><Link to="/blog" className="text-gray-300 hover:text-white">Blog</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li className="text-gray-300">Tax Planning</li>
              <li className="text-gray-300">GST Services</li>
              <li className="text-gray-300">Audit & Assurance</li>
              <li className="text-gray-300">Business Advisory</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2">
              <p className="flex items-center text-gray-300">
                <Phone size={18} className="mr-2" />
                +91 9880851333
              </p>
              <p className="flex items-center text-gray-300">
                <Mail size={18} className="mr-2" />
                Contact@vallinathandco.com
              </p>
              <div className="flex space-x-4 mt-4">
                <a href="#" className="text-gray-300 hover:text-white">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="text-gray-300 hover:text-white">
                  <Twitter size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} V&C Chartered Accountants. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;