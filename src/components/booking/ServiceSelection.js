"use client";

import React from 'react';
import Card from '../ui/Card';
import Button from '../ui/Button';
import useStore from '../../lib/store';

const ServiceSelection = ({ onNext }) => {
  const { services, currentBooking, updateCurrentBooking } = useStore();
  
  const handleSelectService = (serviceId) => {
    updateCurrentBooking({ serviceId });
    onNext();
  };
  
  return (
    <div className="py-8">
      <h2 className="text-2xl font-bold mb-6">Select a Service</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <Card 
            key={service.id} 
            hoverable 
            className={`cursor-pointer h-full transition-all ${
              currentBooking.serviceId === service.id ? 'ring-2 ring-green-500' : ''
            }`}
            onClick={() => handleSelectService(service.id)}
          >
            <div className="aspect-[16/9] bg-gray-200 flex items-center justify-center">
              {/* Placeholder for service image */}
              <span className="text-gray-500">{service.name} Image</span>
            </div>
            
            <Card.Content>
              <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <p className="text-green-600 font-medium">Starting at ${service.price}</p>
            </Card.Content>
            
            <Card.Footer>
              <Button 
                variant="primary" 
                className="w-full"
                onClick={() => handleSelectService(service.id)}
              >
                Select Service
              </Button>
            </Card.Footer>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ServiceSelection; 