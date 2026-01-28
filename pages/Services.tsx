
import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <div className="py-20 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">Our Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide a wide range of homeopathic treatments and psychological therapies for holistic wellness.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <div 
              key={index} 
              className="group bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-seagreen/20 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-mint rounded-2xl flex items-center justify-center mb-6 group-hover:bg-seagreen transition-colors">
                <svg className="w-7 h-7 text-seagreen group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Expert care using evidence-based classical homeopathy and specialized counseling for {service.toLowerCase()}.
              </p>
            </div>
          ))}
        </div>

        {/* CTA Footer for Services */}
        <div className="mt-20 bg-seagreen rounded-[2rem] p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-6">Can't find what you're looking for?</h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            We offer consultation for various acute and chronic conditions. Contact us for personalized health advice.
          </p>
          <div className="flex justify-center space-x-4">
            <a href="tel:+919876543210" className="bg-white text-seagreen px-8 py-4 rounded-full font-bold hover:scale-105 transition-all">
              Call Now
            </a>
            <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-seagreen transition-all">
              Enquire Online
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
