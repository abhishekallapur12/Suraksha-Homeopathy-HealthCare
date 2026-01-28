
import React, { useState } from 'react';
import { DOCTOR_DATA } from '../constants';

const DoctorProfile: React.FC = () => {
  const [activeImage, setActiveImage] = useState('clinical');

  return (
    <div className="pt-16 sm:pt-24 lg:pt-32 pb-16 sm:pb-24 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-6 sm:gap-10 lg:gap-16 items-start">
          {/* Left: Image and Key Stats */}
          <div className="w-full sm:w-1/2 lg:w-1/3 lg:sticky lg:top-20">
            <div className="relative group rounded-2xl sm:rounded-3xl lg:rounded-[3rem] overflow-hidden shadow-2xl mb-4 sm:mb-6 lg:mb-8 border border-gray-100">
              <img 
                src={activeImage === 'clinical' ? DOCTOR_DATA.images.clinical : DOCTOR_DATA.images.consultation} 
                alt={DOCTOR_DATA.name} 
                className="w-full h-auto object-cover aspect-square sm:aspect-[4/5] transition-all duration-700 max-h-[300px] sm:max-h-none"
              />
              <div className="absolute bottom-3 sm:bottom-6 left-1/2 -translate-x-1/2 flex space-x-2 sm:space-x-3">
                 <button 
                  onClick={() => setActiveImage('clinical')}
                  className={`w-8 sm:w-12 h-8 sm:h-12 rounded-lg sm:rounded-xl border-2 transition-all overflow-hidden ${activeImage === 'clinical' ? 'border-white scale-110 shadow-lg' : 'border-white/50 opacity-70 hover:opacity-100'}`}
                 >
                   <img src={DOCTOR_DATA.images.clinical} className="w-full h-full object-cover" />
                 </button>
                 <button 
                  onClick={() => setActiveImage('consultation')}
                  className={`w-8 sm:w-12 h-8 sm:h-12 rounded-lg sm:rounded-xl border-2 transition-all overflow-hidden ${activeImage === 'consultation' ? 'border-white scale-110 shadow-lg' : 'border-white/50 opacity-70 hover:opacity-100'}`}
                 >
                   <img src={DOCTOR_DATA.images.consultation} className="w-full h-full object-cover" />
                 </button>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-2xl sm:rounded-3xl lg:rounded-[2.5rem] p-4 sm:p-6 lg:p-10 border border-gray-100 shadow-sm">
              <h3 className="font-black text-gray-900 mb-3 sm:mb-4 lg:mb-8 uppercase tracking-widest text-xs">Consultation Hours</h3>
              <div className="space-y-3 sm:space-y-4 lg:space-y-6">
                <div className="flex justify-between items-center text-xs sm:text-sm border-b border-gray-200 pb-3 sm:pb-4 gap-2">
                  <span className="text-gray-500 font-bold">Mon - Sat</span>
                  <span className="text-gray-900 font-black text-right">{DOCTOR_DATA.availability.monSat || '09:00 AM - 08:00 PM'}</span>
                </div>
                <div className="flex justify-between items-center text-xs sm:text-sm gap-2">
                  <span className="text-gray-500 font-bold">Sunday</span>
                  <span className="text-seagreen font-black text-right">{DOCTOR_DATA.availability.sunday}</span>
                </div>
              </div>
              <button className="w-full bg-seagreen text-white py-3 sm:py-4 lg:py-5 rounded-xl sm:rounded-2xl font-black mt-4 sm:mt-6 lg:mt-10 shadow-xl hover:shadow-seagreen/20 transition-all active:scale-95 bg-gradient-to-r from-seagreen to-emerald-600 text-xs sm:text-sm">
                Book Consultation
              </button>
            </div>
          </div>

          {/* Right: Biography & Credentials */}
          <div className="w-full sm:w-1/2 lg:w-2/3">
            <div className="mb-8 sm:mb-10 lg:mb-12">
              <h2 className="text-seagreen font-black uppercase tracking-[0.15em] sm:tracking-[0.2em] text-xs sm:text-sm mb-2 sm:mb-4">Expert Specialist</h2>
              <h1 className="text-2xl sm:text-3xl lg:text-5xl font-extrabold text-gray-900 mb-3 sm:mb-4 lg:mb-6 tracking-tight leading-tight">{DOCTOR_DATA.name}</h1>
              <p className="text-xs sm:text-base lg:text-xl text-gray-500 font-medium mb-4 sm:mb-6 lg:mb-10 italic leading-relaxed">
                {DOCTOR_DATA.qualifications.join(' | ')}
              </p>
              <div className="flex flex-wrap gap-2 sm:gap-3 lg:gap-4 mb-8 sm:mb-10 lg:mb-12">
                {DOCTOR_DATA.specializations.map((spec, i) => (
                  <span key={i} className="bg-seagreen/10 text-seagreen px-3 py-1.5 sm:px-4 sm:py-2 lg:px-6 lg:py-3 rounded-lg sm:rounded-xl lg:rounded-2xl text-xs sm:text-sm font-black uppercase tracking-widest">
                    {spec}
                  </span>
                ))}
              </div>
            </div>

            <div className="prose prose-sm sm:prose-base lg:prose-lg text-gray-600 max-w-none">
              <h3 className="text-lg sm:text-2xl lg:text-3xl font-black text-gray-900 mb-3 sm:mb-4 lg:mb-8 tracking-tight">Professional Profile</h3>
              <p className="mb-6 sm:mb-8 lg:mb-10 text-xs sm:text-base lg:text-xl leading-relaxed text-gray-600 font-medium">
                With a robust clinical background spanning over <strong>27 years</strong>, Dr. Sheeba Rani is a distinguished practitioner who uniquely integrates the precision of Homeopathy with the compassionate depth of Counselling Psychology.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 lg:gap-10 mb-8 sm:mb-12 lg:mb-16">
                <div className="bg-mint p-4 sm:p-6 lg:p-10 rounded-xl sm:rounded-2xl lg:rounded-[3rem] border border-seagreen/5 shadow-sm">
                  <div className="w-10 sm:w-12 h-10 sm:h-12 bg-white rounded-lg sm:rounded-2xl flex items-center justify-center mb-3 sm:mb-4 lg:mb-6 shadow-sm text-lg sm:text-xl lg:text-2xl">🌿</div>
                  <h4 className="text-gray-900 font-black text-sm sm:text-base lg:text-xl mb-2 sm:mb-3 lg:mb-4">Homeopathy Expert</h4>
                  <p className="text-gray-600 leading-relaxed text-xs sm:text-sm lg:text-base">MD in Homeopathy focusing on clinical excellence and root-cause resolution for complex chronic ailments.</p>
                </div>
                <div className="bg-mint p-4 sm:p-6 lg:p-10 rounded-xl sm:rounded-2xl lg:rounded-[3rem] border border-seagreen/5 shadow-sm">
                  <div className="w-10 sm:w-12 h-10 sm:h-12 bg-white rounded-lg sm:rounded-2xl flex items-center justify-center mb-3 sm:mb-4 lg:mb-6 shadow-sm text-lg sm:text-xl lg:text-2xl">🧠</div>
                  <h4 className="text-gray-900 font-black text-sm sm:text-base lg:text-xl mb-2 sm:mb-3 lg:mb-4">Psychotherapist</h4>
                  <p className="text-gray-600 leading-relaxed text-xs sm:text-sm lg:text-base">MS in Counselling & Psychotherapy, specialized in helping patients navigate depression, anxiety, and relationship challenges.</p>
                </div>
              </div>

              <h3 className="text-lg sm:text-2xl lg:text-3xl font-black text-gray-900 mb-3 sm:mb-4 lg:mb-8 tracking-tight">Expertise Highlights</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 lg:gap-6 mb-8 sm:mb-12 lg:mb-16">
                {[
                  "Advanced treatment for Chronic Skin & Respiratory diseases.",
                  "Specialized care for PCOD, Infertility, and Women's health.",
                  "Integrated Psychological Counseling for Depression & Anxiety.",
                  "Classical Homeopathy with zero side-effects.",
                  "Family Problems & Adolescent Counseling.",
                  "Energy Healing & Crystal Therapy integration."
                ].map((highlight, idx) => (
                  <div key={idx} className="flex items-start bg-gray-50 p-3 sm:p-4 lg:p-6 rounded-lg sm:rounded-xl lg:rounded-2xl border border-gray-100">
                    <span className="text-seagreen mr-2 sm:mr-3 lg:mr-4 text-lg sm:text-xl font-bold flex-shrink-0">✓</span>
                    <p className="text-gray-700 font-bold text-xs sm:text-sm leading-relaxed">{highlight}</p>
                  </div>
                ))}
              </div>
              
              <div className="bg-gray-900 text-white rounded-2xl sm:rounded-3xl lg:rounded-[3rem] p-6 sm:p-8 lg:p-12 lg:p-16 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 sm:w-32 lg:w-48 h-24 sm:h-32 lg:h-48 bg-seagreen/20 rounded-bl-full"></div>
                <h4 className="text-lg sm:text-xl lg:text-2xl font-black mb-3 sm:mb-4 lg:mb-6">A Message from Dr. Sheeba</h4>
                <p className="text-xs sm:text-base lg:text-lg text-gray-400 italic leading-relaxed">
                  "My goal is to provide exceptional quality medical care for the entire family. By blending Homeopathy and Psychotherapy, we don't just treat the disease—we heal the person."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorProfile;
