"use client";

import React from 'react';
import Link from 'next/link';
import { 
  PalmtreeDuotone,
  TreePine,
  Scissors,
  LayoutGrid,
  PenTool,
  Droplets
} from 'lucide-react';
import { servicesData } from '../../data/mockData';

// Icon mapping
const iconMap = {
  "PalmTree": PalmtreeDuotone,
  "Tree": TreePine,
  "Scissors": Scissors,
  "Grid": LayoutGrid,
  "PenTool": PenTool,
  "Droplets": Droplets
};

const ServiceCard = ({ service }) => {
  const IconComponent = iconMap[service.icon];
  
  return (
    <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
      <div className="text-green-600 mb-4">
        {IconComponent && <IconComponent size={48} strokeWidth={1.5} />}
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
      <p className="text-gray-600 mb-4">{service.description}</p>
      <Link 
        href={service.href} 
        className="inline-flex items-center text-green-600 font-medium hover:text-green-700"
      >
        Learn More
        <svg className="w-5 h-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </Link>
    </div>
  );
};

const ServicesGrid = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Landscaping Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive landscaping solutions to enhance the beauty and functionality of your outdoor space
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid; 