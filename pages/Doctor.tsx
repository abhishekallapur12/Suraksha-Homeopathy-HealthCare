
import React from 'react';
import { DOCTOR_DATA } from '../constants';

const DoctorProfile: React.FC = () => {
  return (
    <div className="pt-32 pb-24 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          {/* Left: Image and Key Stats */}
          <div className="w-full lg:w-1/3 sticky top-32">
            <div className="rounded-[3rem] overflow-hidden shadow-2xl mb-8">
              <img 
                src="https://content.jdmagicbox.com/v2/comp/bangalore/q3/080pxx80.xx80.170129143610.i9q3/catalogue/suraksha-homeopathy-health-care-koramangala-bangalore-homeopathic-clinics-ezki6noc9c.jpg?imwidth=463.3333333333333" 
                alt={DOCTOR_DATA.name} 
                className="w-full h-full object-cover aspect-[3/4]"
              />
            </div>
            <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-6">Consultation Hours</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-500 font-bold">Mon - Sat</span>
                  <span className="text-gray-900 font-bold">{DOCTOR_DATA.availability.monSat || '09:00 AM - 08:00 PM'}</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-500 font-bold">Sunday</span>
                  <span className="text-gray-900 font-bold text-seagreen">{DOCTOR_DATA.availability.sunday}</span>
                </div>
              </div>
              <button className="w-full bg-seagreen text-white py-4 rounded-2xl font-bold mt-8 shadow-lg hover:bg-emerald-600 transition-all">
                Book with Dr. Sheeba
              </button>
            </div>
          </div>

          {/* Right: Biography & Credentials */}
          <div className="w-full lg:w-2/3">
            <div className="mb-12">
              <h2 className="text-seagreen font-black uppercase tracking-[0.2em] text-sm mb-4">Expert Specialist</h2>
              <h1 className="text-5xl font-extrabold text-gray-900 mb-4">{DOCTOR_DATA.name}</h1>
              <p className="text-xl text-gray-500 font-medium mb-6 italic">
                {DOCTOR_DATA.qualifications.join(' | ')}
              </p>
              <div className="flex flex-wrap gap-3 mb-10">
                {DOCTOR_DATA.specializations.map((spec, i) => (
                  <span key={i} className="bg-seagreen/10 text-seagreen px-4 py-2 rounded-full text-sm font-bold">
                    {spec}
                  </span>
                ))}
              </div>
            </div>

            <div className="prose prose-lg text-gray-600 max-w-none">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Professional Profile</h3>
              <p className="mb-8 text-lg leading-relaxed">
                With a robust background spanning over <strong>27 years</strong>, Dr. Sheeba Rani is a distinguished practitioner who uniquely blends the science of Homeopathy with the depth of Counselling Psychology.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="bg-mint p-8 rounded-[2rem]">
                  <h4 className="text-gray-900 font-bold text-lg mb-4">Homeopathy Expert</h4>
                  <p className="text-sm">MD in Homeopathy focusing on clinical excellence and root-cause resolution for chronic ailments.</p>
                </div>
                <div className="bg-mint p-8 rounded-[2rem]">
                  <h4 className="text-gray-900 font-bold text-lg mb-4">Psychotherapist</h4>
                  <p className="text-sm">MS in Counselling & Psychotherapy, helping patients navigate depression, anxiety, and family challenges.</p>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-6">Expertise Highlights</h3>
              <ul className="space-y-4 mb-12">
                <li className="flex items-start">
                  <span className="text-seagreen mr-3 font-bold">✓</span>
                  Advanced treatment for Chronic Skin & Respiratory diseases.
                </li>
                <li className="flex items-start">
                  <span className="text-seagreen mr-3 font-bold">✓</span>
                  Specialized care for PCOD, Infertility, and Women's health.
                </li>
                <li className="flex items-start">
                  <span className="text-seagreen mr-3 font-bold">✓</span>
                  Integrated Psychological Counseling for Depression & Anxiety.
                </li>
                <li className="flex items-start">
                  <span className="text-seagreen mr-3 font-bold">✓</span>
                  Classical Homeopathy with no side-effects.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorProfile;
