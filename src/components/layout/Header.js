"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-green-600 flex items-center">
            GreenScapes
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-green-600 font-medium">
              Home
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-green-600 font-medium">
              Services
            </Link>
            <Link href="/portfolio" className="text-gray-700 hover:text-green-600 font-medium">
              Projects
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-green-600 font-medium">
              About
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-green-600 font-medium">
              Contact
            </Link>
          </nav>

          {/* Call to Action Button */}
          <div className="hidden md:block">
            <Link href="/contact" className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-md transition duration-300">
              Get a Free Estimate
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <nav className="flex flex-col space-y-4">
              <Link href="/" className="text-gray-700 hover:text-green-600 font-medium">
                Home
              </Link>
              <Link href="/services" className="text-gray-700 hover:text-green-600 font-medium">
                Services
              </Link>
              <Link href="/portfolio" className="text-gray-700 hover:text-green-600 font-medium">
                Projects
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-green-600 font-medium">
                About
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-green-600 font-medium">
                Contact
              </Link>
              <Link href="/contact" className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-md text-center transition duration-300">
                Get a Free Estimate
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header; 