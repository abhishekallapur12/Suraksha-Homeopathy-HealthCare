
import React from 'react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <div className="pt-32 pb-24 animate-fade-in bg-mint/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-seagreen font-black uppercase tracking-[0.2em] text-sm mb-4">Patient Stories</h2>
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 tracking-tight">Real Results, Real People</h1>
          <p className="mt-6 text-xl text-gray-500 max-w-2xl mx-auto">
            Our commitment to holistic healing is reflected in the lives of our patients.
          </p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className="break-inside-avoid bg-white p-10 rounded-[2.5rem] shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="flex mb-4">
                {[...Array(5)].map((_, s) => (
                  <span key={s} className="text-yellow-400 text-lg">★</span>
                ))}
              </div>
              <p className="text-gray-700 text-lg leading-relaxed italic mb-8">"{t.feedback}"</p>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-seagreen/10 rounded-full flex items-center justify-center font-black text-seagreen text-lg">
                  {t.patient[0]}
                </div>
                <div>
                  <p className="font-extrabold text-gray-900">{t.patient}</p>
                  <p className="text-seagreen text-xs font-bold uppercase tracking-widest">Verified Feedback</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 bg-gray-900 rounded-[3rem] p-12 md:p-20 text-center text-white">
           <h3 className="text-3xl font-bold mb-6">Have a story to share?</h3>
           <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
             Your feedback helps others find the courage to start their healing journey.
           </p>
           <button className="bg-seagreen text-white px-10 py-4 rounded-2xl font-bold hover:bg-emerald-600 transition-all">
             Submit Your Review
           </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
