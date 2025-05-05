import React from 'react';
import Link from 'next/link';
import Container from '../../components/ui/Container';
import PageHeader from '../../components/layout/PageHeader';

export default function ServicesPage() {
  const services = [
    {
      id: 'landscape-design',
      title: 'Landscape Design',
      description: 'Comprehensive landscape design services tailored to your property and preferences.',
      image: '/images/services/landscape-design.jpg',
      highlights: [
        'Custom design consultations',
        '3D visualization of proposed designs',
        'Phased implementation plans',
        'Sustainable and native plant selection',
        'Hardscape and softscape integration'
      ]
    },
    {
      id: 'lawn-maintenance',
      title: 'Lawn Maintenance',
      description: 'Regular lawn care services to keep your yard healthy and beautiful year-round.',
      image: '/images/services/lawn-maintenance.jpg',
      highlights: [
        'Weekly or bi-weekly mowing',
        'Edging and trimming',
        'Fertilization programs',
        'Weed control',
        'Aeration and overseeding'
      ]
    },
    {
      id: 'hardscaping',
      title: 'Hardscaping',
      description: 'Create beautiful outdoor living spaces with our expert hardscaping services.',
      image: '/images/services/hardscaping.jpg',
      highlights: [
        'Patios and walkways',
        'Retaining walls',
        'Outdoor kitchens',
        'Fire pits and fireplaces',
        'Pergolas and gazebos'
      ]
    },
    {
      id: 'irrigation',
      title: 'Irrigation Systems',
      description: 'Efficient irrigation solutions to maintain a lush landscape while conserving water.',
      image: '/images/services/irrigation.jpg',
      highlights: [
        'Sprinkler system design and installation',
        'Drip irrigation for gardens',
        'Smart controller integration',
        'System maintenance and repairs',
        'Seasonal adjustments and winterization'
      ]
    },
    {
      id: 'tree-care',
      title: 'Tree & Shrub Care',
      description: 'Comprehensive care for the trees and shrubs that enhance your landscape.',
      image: '/images/services/tree-care.jpg',
      highlights: [
        'Pruning and trimming',
        'Disease diagnosis and treatment',
        'Insect control',
        'Deep root fertilization',
        'Tree removal and stump grinding'
      ]
    },
    {
      id: 'outdoor-lighting',
      title: 'Outdoor Lighting',
      description: 'Enhance safety and aesthetics with professionally designed landscape lighting.',
      image: '/images/services/outdoor-lighting.jpg',
      highlights: [
        'Path and walkway lighting',
        'Accent lighting for landscape features',
        'Security lighting',
        'LED energy-efficient solutions',
        'Lighting control systems'
      ]
    }
  ];

  return (
    <>
      <PageHeader 
        title="Our Services"
        description="Professional landscaping services to enhance your outdoor living spaces"
        backgroundImage="/images/services-header.jpg"
      />
      
      <Container className="py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
              <img 
                src={service.image} 
                alt={service.title} 
                className="w-full h-52 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-green-800 mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link href={`/services/${service.id}`}>
                  <span className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded transition-colors">
                    Learn More
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-gray-50 rounded-lg p-8 shadow-inner">
          <h2 className="text-2xl font-bold text-green-800 mb-6 text-center">Custom Services</h2>
          <p className="text-gray-700 text-center max-w-2xl mx-auto mb-6">
            Don't see exactly what you're looking for? We offer customized landscaping solutions 
            tailored to your specific needs and property requirements.
          </p>
          <div className="text-center">
            <Link href="/contact">
              <span className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                Request a Consultation
              </span>
            </Link>
          </div>
        </div>
      </Container>
    </>
  );
} 