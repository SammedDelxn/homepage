import React from 'react';
import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand and Social Icons */}
          <div>
            <h3 className="text-2xl font-bold mb-4">GreenScapes</h3>
            <p className="text-gray-400 mb-6">
              Professional landscaping services to transform your outdoor space into a beautiful and functional environment.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <Twitter size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <Instagram size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          {/* Services Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/services/palm-trimming" className="text-gray-400 hover:text-white transition duration-300">
                  Palm Trimming
                </Link>
              </li>
              <li>
                <Link href="/services/tree-trimming" className="text-gray-400 hover:text-white transition duration-300">
                  Tree Trimming
                </Link>
              </li>
              <li>
                <Link href="/services/palm-skinning" className="text-gray-400 hover:text-white transition duration-300">
                  Palm Skinning
                </Link>
              </li>
              <li>
                <Link href="/services/paver-grass" className="text-gray-400 hover:text-white transition duration-300">
                  Paver Grass
                </Link>
              </li>
              <li>
                <Link href="/services/landscape-design" className="text-gray-400 hover:text-white transition duration-300">
                  Landscape Design
                </Link>
              </li>
              <li>
                <Link href="/services/irrigation-systems" className="text-gray-400 hover:text-white transition duration-300">
                  Irrigation Systems
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Company Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Company</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-gray-400 hover:text-white transition duration-300">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="text-gray-400 hover:text-white transition duration-300">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-400 hover:text-white transition duration-300">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-400 hover:text-white transition duration-300">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition duration-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-gray-400">123 Landscape Lane<br />Greenville, GA 30303</span>
              </li>
              <li className="flex items-center">
                <span className="text-gray-400">(555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <span className="text-gray-400">info@greenscapes.com</span>
              </li>
              <li className="flex items-center">
                <span className="text-gray-400">Mon-Fri: 8am - 6pm</span>
              </li>
              <li className="flex items-center">
                <span className="text-gray-400">Sat: 9am - 4pm</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="bg-gray-950 py-4">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} GreenScapes. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link href="/privacy-policy" className="text-gray-500 hover:text-white text-sm transition duration-300">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-gray-500 hover:text-white text-sm transition duration-300">
              Terms of Service
            </Link>
            <Link href="/sitemap" className="text-gray-500 hover:text-white text-sm transition duration-300">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 