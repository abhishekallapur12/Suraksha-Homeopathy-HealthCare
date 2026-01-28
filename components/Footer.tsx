
import React from 'react';
import { Link } from 'react-router-dom';
import { CLINIC_DATA } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Clinic Brand */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-white text-xl font-bold mb-4">Suraksha Homeopathy</h3>
            <p className="text-sm leading-relaxed mb-4">
              {CLINIC_DATA.tagline}
            </p>
            <div className="flex space-x-4">
              {/* Simple icons placeholders */}
              <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-seagreen transition-colors cursor-pointer">F</div>
              <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-seagreen transition-colors cursor-pointer">I</div>
              <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-seagreen transition-colors cursor-pointer">T</div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-seagreen transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-seagreen transition-colors">Our Services</Link></li>
              <li><Link to="/doctor" className="hover:text-seagreen transition-colors">Doctor Profile</Link></li>
              <li><Link to="/testimonials" className="hover:text-seagreen transition-colors">Patient Stories</Link></li>
            </ul>
          </div>

          {/* Timings */}
          <div>
            <h3 className="text-white font-semibold mb-4">Clinic Hours</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex justify-between">
                <span>Mon - Sat</span>
                <span>{CLINIC_DATA.timings.monSat}</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span>{CLINIC_DATA.timings.sun}</span>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Find Us</h3>
            <p className="text-sm mb-2">{CLINIC_DATA.address}</p>
            <p className="text-sm mb-4 text-gray-500">{CLINIC_DATA.landmark}, {CLINIC_DATA.city}</p>
            <Link 
              to="/contact" 
              className="inline-block border border-gray-700 hover:border-seagreen hover:text-seagreen px-4 py-2 rounded-lg text-sm transition-all"
            >
              Get Directions
            </Link>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} Suraksha Homeopathy Healthcare. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
