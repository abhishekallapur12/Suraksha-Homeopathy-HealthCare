
import React from 'react';
import { CLINIC_DATA } from '../constants';

const Contact: React.FC = () => {
  return (
    <div className="pt-32 pb-24 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-seagreen font-black uppercase tracking-[0.2em] text-sm mb-4">Get in Touch</h2>
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 tracking-tight">Visit Us in Koramangala</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left: Contact Form */}
          <div className="bg-white p-10 md:p-12 rounded-[3rem] shadow-2xl border border-gray-100">
            <h3 className="text-2xl font-bold mb-8 text-gray-900">Send us a Message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-black text-seagreen uppercase tracking-[0.2em] mb-2">Name</label>
                  <input type="text" className="w-full bg-gray-50 border-transparent border-2 rounded-2xl px-6 py-4 focus:border-seagreen/20 transition-all outline-none" placeholder="Your Name" />
                </div>
                <div>
                  <label className="block text-xs font-black text-seagreen uppercase tracking-[0.2em] mb-2">Phone</label>
                  <input type="tel" className="w-full bg-gray-50 border-transparent border-2 rounded-2xl px-6 py-4 focus:border-seagreen/20 transition-all outline-none" placeholder="Contact No." />
                </div>
              </div>
              <div>
                <label className="block text-xs font-black text-seagreen uppercase tracking-[0.2em] mb-2">Email</label>
                <input type="email" className="w-full bg-gray-50 border-transparent border-2 rounded-2xl px-6 py-4 focus:border-seagreen/20 transition-all outline-none" placeholder="Email Address" />
              </div>
              <div>
                <label className="block text-xs font-black text-seagreen uppercase tracking-[0.2em] mb-2">Message</label>
                <textarea rows={4} className="w-full bg-gray-50 border-transparent border-2 rounded-2xl px-6 py-4 focus:border-seagreen/20 transition-all outline-none" placeholder="How can we help?"></textarea>
              </div>
              <button className="w-full bg-seagreen text-white py-5 rounded-[2rem] font-black text-lg shadow-xl shadow-seagreen/10 hover:bg-emerald-600 transition-all">
                Submit Inquiry
              </button>
            </form>
          </div>

          {/* Right: Info & Map */}
          <div className="space-y-12">
            <div className="bg-gray-900 rounded-[3rem] p-12 text-white shadow-xl relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-seagreen/20 rounded-bl-full"></div>
               <h3 className="text-2xl font-bold mb-8">Clinic Details</h3>
               <div className="space-y-8">
                 <div className="flex items-start space-x-6">
                   <span className="text-3xl">📍</span>
                   <div>
                     <p className="font-bold text-lg">{CLINIC_DATA.address}</p>
                     <p className="text-seagreen font-bold mt-1 uppercase tracking-widest text-xs">{CLINIC_DATA.landmark}</p>
                   </div>
                 </div>
                 <div className="flex items-start space-x-6">
                   <span className="text-3xl">📞</span>
                   <div>
                     <p className="font-bold text-lg">{CLINIC_DATA.contact}</p>
                     <p className="text-gray-400 text-sm">Main Reception / Appointment</p>
                   </div>
                 </div>
                 <div className="flex items-start space-x-6">
                   <span className="text-3xl">🕒</span>
                   <div>
                     <p className="font-bold text-lg">Mon - Sat: {CLINIC_DATA.timings.monSat}</p>
                     <p className="text-seagreen font-bold">Sunday: {CLINIC_DATA.timings.sun}</p>
                   </div>
                 </div>
               </div>
            </div>

            <div className="h-[300px] w-full bg-gray-100 rounded-[3rem] overflow-hidden shadow-inner relative border border-gray-200">
               <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                 <div className="w-16 h-16 bg-seagreen/20 rounded-full flex items-center justify-center mb-4">
                    <span className="text-2xl">🗺️</span>
                 </div>
                 <h4 className="font-bold text-gray-900">Map Integration</h4>
                 <p className="text-gray-500 text-sm max-w-xs mt-2">Next to Central Bank, Koramangala 6th Block, Bangalore.</p>
                 <button className="mt-6 text-seagreen font-bold border-b border-seagreen hover:text-emerald-700">Open Google Maps</button>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
