import React from 'react';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center bg-cover bg-center" 
      style={{ 
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1557429287-b2e26467fc2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')" 
      }}>
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Transform Your Outdoor Space
          </h1>
          <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
            Professional landscaping services to create the outdoor environment of your dreams. Expert solutions tailored to your unique needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              href="/contact" 
              className="bg-green-600 hover:bg-green-700 text-white text-lg font-medium py-3 px-8 rounded-md transition duration-300 inline-block"
            >
              Get a Free Estimate
            </Link>
            <Link 
              href="/services" 
              className="bg-transparent hover:bg-white/10 text-white text-lg font-medium py-3 px-8 border border-white rounded-md transition duration-300 inline-block"
            >
              Our Services
            </Link>
          </div>
        </div>
      </div>

      {/* Optional decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-black/20 to-transparent"></div>
    </section>
  );
};

export default Hero; 