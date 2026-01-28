
import React, { useState } from 'react';
import { CLINIC_DATA, DOCTOR_DATA } from '../constants';

const Appointment: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    service: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Booking Request:', formData);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-24 pb-12 px-4 bg-mint">
        <div className="text-center bg-white p-12 md:p-16 rounded-[4rem] shadow-2xl max-w-xl animate-fade-in-up">
          <div className="w-24 h-24 bg-seagreen/10 rounded-[2rem] flex items-center justify-center mx-auto mb-10 rotate-3">
            <svg className="w-12 h-12 text-seagreen" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
          </div>
          <h2 className="text-4xl font-black text-gray-900 mb-4 tracking-tight">Booking Requested!</h2>
          <p className="text-gray-500 text-lg mb-10 leading-relaxed">
            Thank you, <span className="text-seagreen font-bold">{formData.name}</span>. Our reception team will call you at {formData.phone} shortly to finalize your appointment time.
          </p>
          <button 
            onClick={() => setSubmitted(false)}
            className="w-full bg-seagreen text-white py-5 rounded-2xl font-bold text-lg shadow-xl hover:shadow-seagreen/20 transition-all active:scale-95"
          >
            Back to Booking
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 bg-mint min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
            <h2 className="text-seagreen font-black uppercase tracking-[0.2em] text-sm mb-4">Reserve Your Slot</h2>
            <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 tracking-tight">Schedule a Consultation</h1>
        </div>

        <div className="bg-white rounded-[4rem] shadow-2xl overflow-hidden flex flex-col lg:flex-row border border-seagreen/5">
          {/* Info Panel */}
          <div className="lg:w-2/5 bg-gray-900 p-12 md:p-16 text-white relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-seagreen/20 rounded-bl-full"></div>
            <h2 className="text-3xl font-extrabold mb-8 tracking-tight">Care Information</h2>
            <p className="text-gray-400 mb-12 text-lg leading-relaxed">
              Experience the holistic approach of {DOCTOR_DATA.name}. Our clinic specializes in treating the whole person, not just the symptoms.
            </p>
            
            <div className="space-y-10">
              <div className="flex items-center group">
                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mr-6 group-hover:bg-seagreen transition-colors duration-300">
                  <span className="text-2xl">🎟️</span>
                </div>
                <div>
                  <p className="text-xs text-seagreen font-black uppercase tracking-widest mb-1">Fee</p>
                  <p className="text-2xl font-bold">{DOCTOR_DATA.consultationFee}</p>
                </div>
              </div>
              
              <div className="flex items-center group">
                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mr-6 group-hover:bg-seagreen transition-colors duration-300">
                  <span className="text-2xl">✨</span>
                </div>
                <div>
                  <p className="text-xs text-seagreen font-black uppercase tracking-widest mb-1">Satisfaction</p>
                  <p className="text-2xl font-bold">{DOCTOR_DATA.rating} Positive</p>
                </div>
              </div>

              <div className="flex items-center group">
                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mr-6 group-hover:bg-seagreen transition-colors duration-300">
                  <span className="text-2xl">📞</span>
                </div>
                <div>
                  <p className="text-xs text-seagreen font-black uppercase tracking-widest mb-1">Direct Helpline</p>
                  <p className="text-2xl font-bold tracking-tight">{CLINIC_DATA.contact}</p>
                </div>
              </div>
            </div>

            <div className="mt-20 p-8 rounded-[2rem] bg-white/5 border border-white/10">
               <p className="text-gray-400 text-sm italic">
                 "Classical Homeopathy combined with Psychological Counseling ensures the highest standards of holistic health."
               </p>
            </div>
          </div>

          {/* Form Panel */}
          <div className="lg:w-3/5 p-12 md:p-16 bg-white">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-xs font-black text-seagreen uppercase tracking-[0.2em] mb-3">Full Name</label>
                  <input
                    required
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-gray-50 border-2 border-transparent rounded-2xl px-6 py-4 focus:outline-none focus:ring-0 focus:border-seagreen/20 transition-all text-gray-900 font-medium placeholder:text-gray-300"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="block text-xs font-black text-seagreen uppercase tracking-[0.2em] mb-3">Phone Number</label>
                  <input
                    required
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full bg-gray-50 border-2 border-transparent rounded-2xl px-6 py-4 focus:outline-none focus:ring-0 focus:border-seagreen/20 transition-all text-gray-900 font-medium placeholder:text-gray-300"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-black text-seagreen uppercase tracking-[0.2em] mb-3">Email Address</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full bg-gray-50 border-2 border-transparent rounded-2xl px-6 py-4 focus:outline-none focus:ring-0 focus:border-seagreen/20 transition-all text-gray-900 font-medium placeholder:text-gray-300"
                  placeholder="name@provider.com"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-xs font-black text-seagreen uppercase tracking-[0.2em] mb-3">Preferred Date</label>
                  <input
                    required
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({...formData, date: e.target.value})}
                    className="w-full bg-gray-50 border-2 border-transparent rounded-2xl px-6 py-4 focus:outline-none focus:ring-0 focus:border-seagreen/20 transition-all text-gray-900 font-medium"
                  />
                </div>
                <div>
                  <label className="block text-xs font-black text-seagreen uppercase tracking-[0.2em] mb-3">Consultation Type</label>
                  <select
                    required
                    value={formData.service}
                    onChange={(e) => setFormData({...formData, service: e.target.value})}
                    className="w-full bg-gray-50 border-2 border-transparent rounded-2xl px-6 py-4 focus:outline-none focus:ring-0 focus:border-seagreen/20 transition-all text-gray-900 font-medium appearance-none"
                  >
                    <option value="">Select Service</option>
                    <option value="Homeopathy">Homeopathy</option>
                    <option value="Psychology">Counselling</option>
                    <option value="Energy Healing">Energy Healing</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-black text-seagreen uppercase tracking-[0.2em] mb-3">Brief Description of Concern</label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full bg-gray-50 border-2 border-transparent rounded-2xl px-6 py-4 focus:outline-none focus:ring-0 focus:border-seagreen/20 transition-all text-gray-900 font-medium placeholder:text-gray-300"
                  placeholder="How can we help you today?"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-seagreen text-white py-5 rounded-[2rem] font-black text-xl shadow-2xl shadow-seagreen/20 hover:bg-emerald-600 transition-all transform active:scale-[0.98] mt-4"
              >
                Send RequestSlot
              </button>
              
              <p className="text-center text-gray-400 text-xs font-bold uppercase tracking-widest mt-6">
                By booking, you agree to our patient confidentiality policy.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
