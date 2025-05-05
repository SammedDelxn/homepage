"use client";

import React from 'react';
import Link from 'next/link';
import Container from '../ui/Container';
import Card from '../ui/Card';
import useStore from '../../lib/store';

const ServicesGrid = () => {
  const { services } = useStore();
  
  return (
    <section className="py-16 bg-white">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer a comprehensive range of landscaping and lawn care services to keep your
            outdoor spaces looking beautiful year-round.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.id} hoverable className="h-full flex flex-col">
              <div className="aspect-[16/9] bg-gray-200 relative">
                {/* Placeholder for service image */}
                <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                  <span>{service.name} Image</span>
                </div>
              </div>
              
              <Card.Content className="flex-grow">
                <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <p className="text-green-600 font-medium mb-3">Starting at ${service.price}</p>
                <Link 
                  href={`/booking?service=${service.id}`} 
                  className="text-green-600 font-medium hover:text-green-700 hover:underline inline-flex items-center"
                >
                  Book Service
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </Card.Content>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ServicesGrid; 