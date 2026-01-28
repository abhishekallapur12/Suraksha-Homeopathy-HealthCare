
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Logo: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 400 300" className={className} xmlns="http://www.w3.org/2000/svg">
    {/* Outline Circle/Arch */}
    <path d="M50,150 A150,130 0 1,1 350,150" fill="none" stroke="#FDB913" strokeWidth="8" strokeLinecap="round" />
    
    {/* Red Medical Cross */}
    <path d="M40,110 H120 V130 H140 V170 H120 V190 H40 V170 H20 V130 H40 Z" fill="#E31E24" />
    
    {/* Hand Silhouette (Golden/Yellow) */}
    <path d="M40,200 C80,180 200,180 360,210 C340,260 250,280 150,270 C100,265 60,240 40,200 Z" fill="#FDB913" />
    <path d="M300,215 C330,225 360,230 380,220 C390,210 370,195 350,205" fill="#FDB913" />

    {/* Family Silhouettes */}
    {/* Father */}
    <path d="M185,110 C185,100 195,100 195,110 L205,150 L210,190 L195,190 L190,165 L185,190 L170,190 L175,150 Z" fill="#0054A6" />
    <circle cx="190" cy="100" r="8" fill="#0054A6" />
    
    {/* Mother */}
    <path d="M295,120 C295,110 305,110 305,120 L315,160 L320,200 L305,200 L295,170 L285,200 L270,200 L280,160 Z" fill="#0054A6" />
    <circle cx="300" cy="110" r="8" fill="#0054A6" />
    
    {/* Child 1 */}
    <path d="M235,145 C235,138 242,138 242,145 L248,170 L250,195 L242,195 L238,180 L234,195 L226,195 L230,170 Z" fill="#00A651" />
    <circle cx="238" cy="138" r="5" fill="#00A651" />
    
    {/* Child 2 */}
    <path d="M265,155 C265,148 272,148 272,155 L278,180 L280,205 L272,205 L268,190 L264,205 L256,205 L260,180 Z" fill="#00A651" />
    <circle cx="268" cy="148" r="5" fill="#00A651" />
  </svg>
);

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Doctor', path: '/doctor' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 w-[95%] max-w-7xl`}>
      <div className={`transition-all duration-500 rounded-[2.5rem] px-4 sm:px-8 border border-white/20 ${scrolled ? 'glass-nav shadow-2xl py-2' : 'bg-white shadow-xl py-4'}`}>
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="group flex items-center space-x-3">
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 overflow-hidden">
                <Logo className="w-12 h-12" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black tracking-tight text-gray-900 group-hover:text-seagreen transition-colors">Suraksha</span>
                <span className="text-[10px] uppercase tracking-[0.3em] font-black text-seagreen -mt-1">Healthcare</span>
              </div>
            </Link>
          </div>
          
          <div className="hidden lg:flex items-center space-x-1">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`px-4 py-2 rounded-xl text-sm font-bold transition-all duration-300 ${
                  isActive(link.path) 
                    ? 'text-seagreen bg-seagreen/10' 
                    : 'text-gray-600 hover:text-seagreen hover:bg-gray-50'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="ml-4 pl-4 border-l border-gray-100">
              <Link
                to="/book"
                className="bg-seagreen text-white px-7 py-3 rounded-2xl text-sm font-black hover:shadow-[0_10px_20px_-5px_rgba(46,139,87,0.4)] transition-all transform hover:-translate-y-1 active:scale-95 bg-gradient-to-r from-seagreen to-emerald-600"
              >
                Book Slot
              </Link>
            </div>
          </div>

          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-3 rounded-2xl text-gray-600 hover:bg-gray-100 focus:outline-none transition-all"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu - Floating and Rounded */}
      <div className={`lg:hidden transition-all duration-500 ease-in-out mt-3 overflow-hidden ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 pointer-events-none'}`}>
        <div className="bg-white/95 backdrop-blur-xl rounded-[2.5rem] shadow-2xl border border-white/20 px-4 py-6 space-y-2">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`block px-6 py-4 rounded-[1.5rem] text-base font-bold transition-all ${
                isActive(link.path) 
                  ? 'text-seagreen bg-seagreen/10' 
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4">
            <Link
              to="/book"
              onClick={() => setIsOpen(false)}
              className="w-full text-center bg-seagreen text-white block px-4 py-5 rounded-[1.5rem] text-lg font-black shadow-xl"
            >
              Book Appointment
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
