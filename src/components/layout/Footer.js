import React from 'react';
import Link from 'next/link';
import Container from '../ui/Container';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 pt-10 pb-8">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Green Gardens</h3>
            <p className="text-gray-600 mb-4">
              Professional landscaping and lawn care services for residential and commercial properties.
            </p>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/services/lawn-care" className="text-gray-600 hover:text-green-600">
                  Lawn Care
                </Link>
              </li>
              <li>
                <Link href="/services/tree-pruning" className="text-gray-600 hover:text-green-600">
                  Tree Pruning
                </Link>
              </li>
              <li>
                <Link href="/services/landscaping-design" className="text-gray-600 hover:text-green-600">
                  Landscaping Design
                </Link>
              </li>
              <li>
                <Link href="/services/seasonal-cleanup" className="text-gray-600 hover:text-green-600">
                  Seasonal Cleanup
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-600 hover:text-green-600">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-gray-600 hover:text-green-600">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/equipment" className="text-gray-600 hover:text-green-600">
                  Equipment
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-green-600">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Contact</h4>
            <address className="not-italic text-gray-600">
              <p>123 Green Street</p>
              <p>Springfield, IL 62701</p>
              <p className="mt-2">Phone: (555) 123-4567</p>
              <p>Email: info@greengardens.com</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-8 pt-6 flex flex-col md:flex-row justify-between">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Green Gardens. All rights reserved.
          </p>
          
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy-policy" className="text-gray-500 hover:text-green-600">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-gray-500 hover:text-green-600">
              Terms of Service
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer; 