import React from 'react';
import Link from 'next/link';
import { LockIcon } from 'lucide-react';

const AuthLayout = ({ children, heading, subheading }) => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left Side - Background Image with Overlay Text */}
      <div className="hidden md:flex md:w-1/2 bg-cover bg-center relative" 
        style={{ 
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1557429287-b2e26467fc2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')" 
        }}>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-8">
            <h1 className="text-4xl font-bold text-white mb-4">Transform Your Outdoor Space</h1>
            <p className="text-xl text-gray-200">Professional Landscaping Management Platform</p>
          </div>
        </div>
      </div>

      {/* Right Side - Form Container */}
      <div className="flex flex-col w-full md:w-1/2 bg-white">
        <div className="flex-grow flex flex-col items-center justify-center px-6 py-12 lg:px-16">
          {/* Logo and Company Name */}
          <div className="w-full max-w-md mb-10">
            <Link href="/" className="flex items-center justify-center md:justify-start">
              <span className="text-2xl font-bold text-green-600">Rochin Landscape</span>
            </Link>
          </div>

          <div className="w-full max-w-md">
            {/* Form Heading */}
            <div className="text-center md:text-left mb-8">
              <h2 className="text-2xl font-bold text-gray-900">{heading}</h2>
              <p className="mt-2 text-gray-600">{subheading}</p>
            </div>

            {/* Form Content */}
            {children}
          </div>
        </div>

        {/* Footer */}
        <div className="w-full px-6 py-4 bg-gray-50 border-t border-gray-200">
          <div className="w-full max-w-md mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
            <div>© 2025 Rochin Landscaping</div>
            <div className="flex items-center space-x-4 mt-2 md:mt-0">
              <Link href="/privacy-policy" className="hover:text-gray-700">Privacy Policy</Link>
              <Link href="/terms-of-service" className="hover:text-gray-700">Terms of Service</Link>
              <div className="flex items-center">
                <LockIcon size={14} className="mr-1" />
                <span>SSL Secured</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout; 