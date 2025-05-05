import React from 'react';
import Link from 'next/link';
import Container from '../ui/Container';
import Button from '../ui/Button';

const Header = () => {
  return (
    <header className="py-4 border-b border-gray-100 bg-white">
      <Container>
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-green-600">
              Green Gardens
            </Link>
            
            <nav className="hidden md:flex ml-10 space-x-8">
              <Link href="/" className="text-gray-700 hover:text-green-600">
                Home
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-green-600">
                About
              </Link>
              <Link href="/services" className="text-gray-700 hover:text-green-600">
                Services
              </Link>
              <Link href="/equipment" className="text-gray-700 hover:text-green-600">
                Equipment
              </Link>
              <Link href="/portfolio" className="text-gray-700 hover:text-green-600">
                Portfolio
              </Link>
              <Link href="/booking" className="text-gray-700 hover:text-green-600">
                Book Service
              </Link>
              <Link href="/blog" className="text-gray-700 hover:text-green-600">
                Blog
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-green-600">
                Contact
              </Link>
            </nav>
          </div>
          
          <div className="flex items-center space-x-4">
            <Link href="/booking" className="hidden sm:block">
              <Button size="sm">Book Now</Button>
            </Link>

            {/* Login Button */}
            <Link href="/login" className="hidden sm:block">
              <Button size="sm">Login</Button>
            </Link>
            
            {/* Mobile menu button - would implement with state in a real app */}
            <button className="p-2 md:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </button>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header; 