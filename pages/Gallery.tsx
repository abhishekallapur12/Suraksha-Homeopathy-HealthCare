
import React from 'react';
import { GALLERY_IMAGES } from '../constants';

const Gallery: React.FC = () => {
  return (
    <div className="py-32 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">Clinic Gallery</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A glimpse into our bright, clean, and welcoming healthcare environment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {GALLERY_IMAGES.map((img, i) => (
            <div key={i} className="group relative overflow-hidden rounded-[2rem] shadow-xl aspect-[4/3]">
              <img 
                src={img.url} 
                alt={img.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-10">
                <p className="text-white text-2xl font-bold">{img.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
