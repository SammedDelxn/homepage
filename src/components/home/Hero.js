import React from 'react';
import Link from 'next/link';
import Container from '../ui/Container';
import Button from '../ui/Button';

const Hero = () => {
  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-b from-white to-green-50">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Transform Your Outdoor Space
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Professional landscaping and lawn care services customized to your needs. 
              From regular maintenance to complete redesigns, we'll keep your yard 
              looking its best all year round.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/booking">
                <Button size="lg">Book Now</Button>
              </Link>
              <Link href="/booking">
                <Button variant="outline" size="lg">Request Estimate</Button>
              </Link>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-[4/3] bg-gray-200 rounded-lg overflow-hidden">
              {/* In a real app, this would be an actual image */}
              <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                <span>Landscaping Hero Image</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
      
      {/* Decorative background shapes */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-green-100 rounded-full opacity-50 blur-3xl"></div>
      <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-green-200 rounded-full opacity-40 blur-3xl"></div>
    </section>
  );
};

export default Hero; 