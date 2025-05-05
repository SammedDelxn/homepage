import React from 'react';
import { equipmentData } from '@/data/equipment';
import EquipmentCard from '@/components/EquipmentCard';
import PageHeader from '@/components/layout/PageHeader';
import Container from '@/components/ui/Container';

export const metadata = {
  title: 'Our Equipment | Green Gardens Landscaping',
  description: 'Explore the professional equipment we use to deliver high-quality landscaping services.',
};

export default function EquipmentPage() {
  return (
    <>
      <PageHeader
        title="Our Equipment"
        description="Professional tools for exceptional results"
        backgroundImage="/images/equipment-header.jpg"
      />
      
      <Container className="py-12">
        <div className="text-center mb-12">
          <p className="text-gray-600 max-w-3xl mx-auto">
            We invest in the best commercial-grade landscape equipment to ensure efficient, precise, and reliable service for your property. Our team is trained to operate these tools safely and effectively.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {equipmentData.map((equipment) => (
            <EquipmentCard key={equipment.id} equipment={equipment} />
          ))}
        </div>
        
        <div className="mt-16 bg-green-50 p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-green-800 mb-4">Equipment Maintenance Standards</h2>
          <p className="text-gray-600 mb-4">
            All of our equipment undergoes regular maintenance and safety checks to ensure optimal performance and reliability. Our maintenance program includes:
          </p>
          <ul className="space-y-2 text-gray-600">
            <li className="flex items-start">
              <svg className="h-6 w-6 text-green-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Daily equipment inspections before use
            </li>
            <li className="flex items-start">
              <svg className="h-6 w-6 text-green-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Regular preventative maintenance schedules
            </li>
            <li className="flex items-start">
              <svg className="h-6 w-6 text-green-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Prompt repairs by certified technicians
            </li>
            <li className="flex items-start">
              <svg className="h-6 w-6 text-green-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Regular replacement cycles to ensure modern, efficient equipment
            </li>
          </ul>
        </div>
      </Container>
    </>
  );
} 