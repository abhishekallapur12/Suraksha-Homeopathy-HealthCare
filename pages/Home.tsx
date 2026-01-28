
import React from 'react';
import { Link } from 'react-router-dom';
import { CLINIC_DATA, DOCTOR_DATA, TESTIMONIALS, SERVICES } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 bg-mint">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-seagreen/5 rounded-bl-[100px] hidden lg:block -z-0"></div>
        <div className="absolute bottom-12 left-12 w-32 h-32 bg-seagreen/10 rounded-full blur-3xl -z-0"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-24">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
            <div className="w-full lg:w-1/2 animate-fade-in-up">
              <div className="inline-flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm mb-6 border border-seagreen/10">
                <span className="flex h-2 w-2 rounded-full bg-seagreen animate-pulse"></span>
                <span className="text-seagreen text-xs font-bold uppercase tracking-widest">Healing Naturally</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 leading-[1.1] mb-8">
                Holistic Care for <br/>
                <span className="text-gray-900 bg-clip-text bg-gradient-to-r from-seagreen to-emerald-600">Complete Wellness</span>
              </h1>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-lg">
                Experience world-class Classical Homeopathy and Counseling with 27+ years of expertise.
              </p>
              <div className="flex flex-col sm:flex-row gap-5">
                <Link to="/book" className="bg-seagreen text-white text-center px-10 py-5 rounded-2xl font-bold text-lg hover:shadow-2xl transition-all transform hover:-translate-y-1 bg-gradient-to-br from-seagreen to-emerald-700">
                  Book Appointment
                </Link>
                <Link to="/services" className="bg-white text-gray-900 border-2 border-gray-100 text-center px-10 py-5 rounded-2xl font-bold text-lg hover:border-seagreen hover:text-seagreen transition-all">
                  Our Services
                </Link>
              </div>
            </div>
            
            <div className="w-full lg:w-1/2 relative group">
              <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl transform transition-transform duration-700 group-hover:scale-[1.02]">
                <img 
                  src="https://images.jdmagicbox.com/v2/comp/bangalore/q3/080pxx80.xx80.170129143610.i9q3/catalogue/suraksha-homeopathy-health-care-koramangala-bangalore-homeopathic-clinics-k8fi51zgua.jpg" 
                  alt="Modern Healthcare" 
                  className="w-full h-full object-cover aspect-[4/5] lg:aspect-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
              </div>
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-seagreen/20 rounded-full blur-3xl -z-0"></div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-emerald-200/30 rounded-full blur-3xl -z-0"></div>
              
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-6 lg:-right-12 bg-white p-6 rounded-3xl shadow-2xl z-20 animate-bounce-slow">
                <div className="flex items-center space-x-4">
                  <div className="bg-seagreen/10 p-3 rounded-2xl">
                    <svg className="w-8 h-8 text-seagreen" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                  </div>
                  <div>
                    <p className="text-2xl font-black text-gray-900 leading-none">27+</p>
                    <p className="text-gray-500 text-xs font-bold uppercase tracking-wider">Years Exp.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <div className="max-w-xl">
              <h2 className="text-seagreen font-black uppercase tracking-[0.2em] text-sm mb-4">Core Specialties</h2>
              <h3 className="text-4xl md:text-5xl font-extrabold text-gray-900">Expertise That Heals</h3>
            </div>
            <Link to="/services" className="mt-6 md:mt-0 inline-flex items-center text-seagreen font-bold group">
              Explore All Services 
              <span className="ml-2 transform group-hover:translate-x-2 transition-transform">&rarr;</span>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.slice(0, 4).map((service, index) => (
              <div key={index} className="group p-8 rounded-[2.5rem] bg-gray-50 hover:bg-white hover:shadow-2xl transition-all duration-500 border border-transparent hover:border-seagreen/10">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:bg-seagreen group-hover:text-white transition-all duration-500">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h4 className="text-xl font-extrabold text-gray-900 mb-4">{service}</h4>
                <p className="text-gray-500 leading-relaxed text-sm">
                  Deep therapeutic approach focusing on permanent recovery and root-cause resolution.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Doctor & Philosophy Section */}
      <section className="py-24 bg-mint/50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2 relative">
              <div className="relative rounded-[3rem] overflow-hidden shadow-2xl">
                <img 
                  src="https://content.jdmagicbox.com/v2/comp/bangalore/q3/080pxx80.xx80.170129143610.i9q3/catalogue/suraksha-homeopathy-health-care-koramangala-bangalore-homeopathic-clinics-tp8f0n9t31.jpg?imwidth=463.3333333333333" 
                  alt="Doctor at Work" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 bg-white p-8 rounded-[2rem] shadow-xl max-w-xs hidden md:block">
                <p className="text-gray-900 font-bold mb-2">Dr. Sheeba Rani</p>
                <p className="text-seagreen text-sm font-semibold uppercase tracking-widest">Chief Practitioner</p>
                <div className="mt-4 flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="w-full lg:w-1/2">
              <h2 className="text-seagreen font-black uppercase tracking-[0.2em] text-sm mb-4">Our Philosophy</h2>
              <h3 className="text-4xl font-extrabold text-gray-900 mb-8 leading-tight">Patient-Centered Care with Long-Term Healing</h3>
              <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                {CLINIC_DATA.description}
              </p>
              
              <div className="space-y-6">
                {[
                  { title: "Personalized Treatment", desc: "No two cases are the same. We tailor every remedy." },
                  { title: "Root Cause Therapy", desc: "We don't just mask symptoms; we find why they occur." },
                  { title: "Emotional Support", desc: "Psychotherapy integration for mental health harmony." }
                ].map((item, i) => (
                  <div key={i} className="flex items-start space-x-5 group">
                    <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center text-seagreen group-hover:bg-seagreen group-hover:text-white transition-colors duration-300">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg mb-1">{item.title}</h4>
                      <p className="text-gray-500 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials with high-end look */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-seagreen font-black uppercase tracking-[0.2em] text-sm mb-4">Patient Stories</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-gray-900">Loved by Our Community</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="relative p-10 rounded-[3rem] bg-gray-50 hover:bg-white hover:shadow-2xl transition-all duration-500 border border-transparent hover:border-seagreen/10">
                <div className="absolute top-10 right-10 text-seagreen/10">
                  <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 32 32"><path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H7.2c.4-1.7 1.8-3 3.6-3h.2V8H10zm12 0c-3.3 0-6 2.7-6 6v10h10V14h-6.8c.4-1.7 1.8-3 3.6-3h.2V8h-.2z"/></svg>
                </div>
                <div className="flex mb-6">
                  {[...Array(5)].map((_, s) => (
                    <span key={s} className="text-yellow-400 text-xl">★</span>
                  ))}
                </div>
                <p className="text-gray-700 text-lg italic leading-relaxed mb-8">"{t.feedback}"</p>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-seagreen/20 rounded-full flex items-center justify-center font-black text-seagreen">
                    {t.patient[0]}
                  </div>
                  <div>
                    <p className="font-extrabold text-gray-900">{t.patient}</p>
                    <p className="text-seagreen text-xs font-bold uppercase tracking-wider">Verified Patient</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section - Professional Display */}
      <section className="py-24 bg-gray-900 text-white rounded-t-[100px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-seagreen font-black uppercase tracking-[0.2em] text-sm mb-6">Visit Us</h2>
              <h3 className="text-4xl md:text-5xl font-extrabold mb-10 leading-tight">We are located in the <br/> heart of Koramangala</h3>
              
              <div className="space-y-8 mb-12">
                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-seagreen/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-seagreen" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Our Address</h4>
                    <p className="text-gray-400">{CLINIC_DATA.address}</p>
                    <p className="text-seagreen font-bold mt-1 text-sm">{CLINIC_DATA.landmark}</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-seagreen/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-seagreen" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Working Hours</h4>
                    <p className="text-gray-400">Mon - Sat: {CLINIC_DATA.timings.monSat}</p>
                    <p className="text-gray-400">Sunday: {CLINIC_DATA.timings.sun}</p>
                  </div>
                </div>
              </div>
              
              <Link to="/contact" className="inline-block bg-seagreen text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-xl hover:bg-emerald-600 transition-all">
                Get Precise Directions
              </Link>
            </div>
            
            <div className="h-[500px] w-full bg-gray-800 rounded-[3rem] overflow-hidden relative shadow-2xl border border-white/5">
               <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center">
                  <div className="w-20 h-20 bg-seagreen rounded-full flex items-center justify-center mb-8 animate-pulse shadow-[0_0_50px_rgba(46,139,87,0.4)]">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /></svg>
                  </div>
                  <h4 className="text-2xl font-bold mb-4">Interactive Map View</h4>
                  <p className="text-gray-400 max-w-sm mb-8">Located at #91, Koramangala 6th Block, Bangalore. Next to Central Bank.</p>
                  <button className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white px-8 py-3 rounded-xl font-bold transition-all border border-white/10">
                    Open in Google Maps
                  </button>
               </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
