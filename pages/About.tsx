
import React from 'react';
import { CLINIC_DATA } from '../constants';

const About: React.FC = () => {
  return (
    <div className="pt-32 pb-24 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-seagreen font-black uppercase tracking-[0.2em] text-sm mb-4">Our Story</h2>
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 tracking-tight">Raising Standards of Health</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="order-2 lg:order-1">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Family-Centered Holistic Care</h3>
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
              <p>{CLINIC_DATA.description}</p>
              <p>
                Our mission is to create a healthy society by addressing illnesses at their root. Whether it is a chronic physical condition or a psychological challenge, we provide an environment of healing and trust.
              </p>
              <p>
                Located in the heart of Koramangala, Suraksha has become a beacon of hope for many who sought alternatives to surgical procedures or lifelong medication with side effects.
              </p>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1000" 
                alt="Healthcare approach" 
                className="rounded-[3rem] shadow-2xl"
              />
              <div className="absolute -bottom-8 -left-8 bg-seagreen text-white p-10 rounded-[2.5rem] shadow-xl hidden md:block">
                <p className="text-4xl font-black">27+</p>
                <p className="text-sm font-bold uppercase tracking-widest opacity-80">Years of Healing</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-mint rounded-[4rem] p-12 md:p-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div>
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm">
                <span className="text-3xl">🌿</span>
              </div>
              <h4 className="text-xl font-bold mb-3">Natural Healing</h4>
              <p className="text-gray-500">Classical Homeopathy that respects your body's innate wisdom.</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm">
                <span className="text-3xl">🧠</span>
              </div>
              <h4 className="text-xl font-bold mb-3">Mental Wellness</h4>
              <p className="text-gray-500">Integrated counseling to harmonize mind and body health.</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm">
                <span className="text-3xl">💎</span>
              </div>
              <h4 className="text-xl font-bold mb-3">Energy Therapy</h4>
              <p className="text-gray-500">Crystal and Pranic healing for comprehensive energetic balance.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
