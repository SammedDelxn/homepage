import React from 'react';
import Link from 'next/link';
import Container from '../../../components/ui/Container';
import PageHeader from '../../../components/layout/PageHeader';

// This would typically come from a database or API
const getServiceData = (id) => {
  const services = {
    'landscape-design': {
      title: 'Landscape Design',
      description: 'Expert landscape design services to transform your outdoor space.',
      fullDescription: 'Our landscape design services create harmonious outdoor environments that reflect your personal style and meet your practical needs. We blend artistic vision with horticultural expertise to develop designs that are beautiful, functional, and sustainable.',
      image: '/images/services/landscape-design.jpg',
      highlights: [
        'Custom design consultations',
        '3D visualization of proposed designs',
        'Phased implementation plans',
        'Sustainable and native plant selection',
        'Hardscape and softscape integration'
      ],
      process: [
        {
          step: 1,
          title: 'Initial Consultation',
          description: 'We meet to discuss your vision, needs, budget, and timeline while assessing your property.'
        },
        {
          step: 2,
          title: 'Concept Development',
          description: 'We create initial design concepts based on your input and site analysis.'
        },
        {
          step: 3,
          title: 'Design Presentation',
          description: 'We present detailed design plans, including 3D visualizations, plant selections, and material options.'
        },
        {
          step: 4,
          title: 'Refinement',
          description: 'We refine the design based on your feedback until it\'s perfect.'
        },
        {
          step: 5,
          title: 'Implementation',
          description: 'Our expert team brings your design to life with precision and care.'
        }
      ],
      faqs: [
        {
          question: 'How long does the design process typically take?',
          answer: 'The design process usually takes 2-4 weeks, depending on the project scope and complexity.'
        },
        {
          question: 'Can you work with my existing landscape?',
          answer: 'Absolutely! We can incorporate existing elements you love while refreshing your overall landscape.'
        },
        {
          question: 'Do you offer eco-friendly design options?',
          answer: 'Yes, we specialize in sustainable landscape design, including native plants, water conservation features, and eco-friendly materials.'
        }
      ]
    },
    'lawn-maintenance': {
      title: 'Lawn Maintenance',
      description: 'Professional lawn care services to keep your yard looking its best year-round.',
      fullDescription: 'Our comprehensive lawn maintenance services keep your property looking pristine throughout the seasons. We provide expert care tailored to your specific lawn type and local conditions for optimal health and beauty.',
      image: '/images/services/lawn-maintenance.jpg',
      highlights: [
        'Weekly or bi-weekly mowing',
        'Edging and trimming',
        'Fertilization programs',
        'Weed control',
        'Aeration and overseeding'
      ],
      process: [
        {
          step: 1,
          title: 'Lawn Assessment',
          description: 'We evaluate your lawn\'s condition, identify problem areas, and create a customized care plan.'
        },
        {
          step: 2,
          title: 'Regular Maintenance',
          description: 'We provide scheduled mowing, edging, and trimming services to keep your lawn looking neat.'
        },
        {
          step: 3,
          title: 'Seasonal Treatments',
          description: 'We apply appropriate fertilizers and treatments based on the season and your lawn\'s needs.'
        },
        {
          step: 4,
          title: 'Problem Resolution',
          description: 'We address issues like weeds, bare spots, or disease promptly to maintain lawn health.'
        },
        {
          step: 5,
          title: 'Ongoing Monitoring',
          description: 'We continually assess your lawn\'s health and adjust our approach as needed.'
        }
      ],
      faqs: [
        {
          question: 'How often should my lawn be mowed?',
          answer: 'During growing season, most lawns benefit from weekly mowing. In slower growth periods, every other week is often sufficient.'
        },
        {
          question: 'When is the best time to fertilize my lawn?',
          answer: 'The optimal fertilization schedule depends on your grass type and local climate, but most lawns benefit from 4-5 applications throughout the year.'
        },
        {
          question: 'Can you help with lawn pest problems?',
          answer: 'Yes, we identify and treat various lawn pests and diseases as part of our comprehensive maintenance services.'
        }
      ]
    },
    'hardscaping': {
      title: 'Hardscaping',
      description: 'Custom hardscape installations to enhance your outdoor living space.',
      fullDescription: 'Our hardscaping services add structure, function, and beauty to your landscape. From patios and walkways to retaining walls and outdoor kitchens, we create durable, attractive hardscape elements that complement your home and landscape.',
      image: '/images/services/hardscaping.jpg',
      highlights: [
        'Patios and walkways',
        'Retaining walls',
        'Outdoor kitchens',
        'Fire pits and fireplaces',
        'Pergolas and gazebos'
      ],
      process: [
        {
          step: 1,
          title: 'Design Consultation',
          description: 'We discuss your vision, needs, and preferences for hardscape elements.'
        },
        {
          step: 2,
          title: 'Site Analysis',
          description: 'We assess your property for drainage, elevation, and other factors that influence hardscape design.'
        },
        {
          step: 3,
          title: 'Material Selection',
          description: 'We help you choose the perfect materials that complement your home\'s architecture and existing landscape.'
        },
        {
          step: 4,
          title: 'Professional Installation',
          description: 'Our skilled team installs your hardscape elements with precision and attention to detail.'
        },
        {
          step: 5,
          title: 'Final Inspection',
          description: 'We ensure every aspect of your hardscape installation meets our high standards.'
        }
      ],
      faqs: [
        {
          question: 'How long will my hardscape project take to complete?',
          answer: 'Project timelines vary based on scope and complexity, but most residential hardscaping projects take 1-3 weeks to complete.'
        },
        {
          question: 'What types of materials do you use for patios?',
          answer: 'We offer a variety of materials including natural stone, pavers, concrete, and brick. Each has unique benefits and aesthetic qualities.'
        },
        {
          question: 'Do I need a permit for my hardscape project?',
          answer: 'Permit requirements vary by location and project type. We handle the permitting process for you when necessary.'
        }
      ]
    },
    'irrigation': {
      title: 'Irrigation Systems',
      description: 'Efficient watering solutions for a healthy landscape while conserving water.',
      fullDescription: 'Our irrigation services provide efficient, reliable watering systems tailored to your landscape\'s specific needs. We design and install smart systems that keep your plants healthy while conserving water and saving you money.',
      image: '/images/services/irrigation.jpg',
      highlights: [
        'Sprinkler system design and installation',
        'Drip irrigation for gardens',
        'Smart controller integration',
        'System maintenance and repairs',
        'Seasonal adjustments and winterization'
      ],
      process: [
        {
          step: 1,
          title: 'Site Assessment',
          description: 'We analyze your property\'s water needs, considering plant types, soil conditions, and sun exposure.'
        },
        {
          step: 2,
          title: 'System Design',
          description: 'We create a customized irrigation plan with appropriate zones and equipment.'
        },
        {
          step: 3,
          title: 'Professional Installation',
          description: 'Our team installs all components with minimal disruption to your landscape.'
        },
        {
          step: 4,
          title: 'Programming and Calibration',
          description: 'We set up your system for optimal water usage and demonstrate how to use the controls.'
        },
        {
          step: 5,
          title: 'Maintenance Support',
          description: 'We provide ongoing support including seasonal adjustments and repairs as needed.'
        }
      ],
      faqs: [
        {
          question: 'How much water will an irrigation system save?',
          answer: 'Smart irrigation systems typically reduce water usage by 30-50% compared to manual watering.'
        },
        {
          question: 'Do you offer smart irrigation controllers?',
          answer: 'Yes, we install weather-based smart controllers that adjust watering schedules based on local conditions for maximum efficiency.'
        },
        {
          question: 'How often should my irrigation system be serviced?',
          answer: 'We recommend a professional check-up twice yearly plus winterization in cold climates.'
        }
      ]
    },
    'tree-care': {
      title: 'Tree & Shrub Care',
      description: 'Expert care to maintain the health and beauty of your trees and shrubs.',
      fullDescription: 'Our tree and shrub care services help maintain the health, safety, and beauty of your woody plants. From routine pruning to specialized treatments, we provide comprehensive care that enhances your landscape\'s appearance and value.',
      image: '/images/services/tree-care.jpg',
      highlights: [
        'Pruning and trimming',
        'Disease diagnosis and treatment',
        'Insect control',
        'Deep root fertilization',
        'Tree removal and stump grinding'
      ],
      process: [
        {
          step: 1,
          title: 'Plant Assessment',
          description: 'We evaluate the health and condition of your trees and shrubs to identify any issues.'
        },
        {
          step: 2,
          title: 'Care Plan Development',
          description: 'We create a customized maintenance program based on your plants\' specific needs.'
        },
        {
          step: 3,
          title: 'Professional Pruning',
          description: 'We perform proper pruning techniques to improve plant health and appearance.'
        },
        {
          step: 4,
          title: 'Treatment Application',
          description: 'When needed, we apply appropriate treatments for pests, diseases, or nutritional deficiencies.'
        },
        {
          step: 5,
          title: 'Ongoing Monitoring',
          description: 'We regularly check your trees and shrubs for early signs of problems.'
        }
      ],
      faqs: [
        {
          question: 'When is the best time to prune my trees?',
          answer: 'The optimal pruning time depends on the tree species, but most deciduous trees are best pruned during winter dormancy, while spring-flowering trees should be pruned after flowering.'
        },
        {
          question: 'How can I tell if my tree is diseased?',
          answer: 'Common signs include unusual leaf discoloration, premature leaf drop, branch dieback, peeling bark, and visible fungal growth.'
        },
        {
          question: 'Is it necessary to remove a tree stump after tree removal?',
          answer: 'While not always mandatory, stump removal prevents regrowth, eliminates trip hazards, and prevents pest infestations.'
        }
      ]
    },
    'outdoor-lighting': {
      title: 'Outdoor Lighting',
      description: 'Beautiful and functional lighting solutions to enhance your landscape day and night.',
      fullDescription: 'Our landscape lighting services enhance the beauty, safety, and usability of your outdoor spaces after dark. We design thoughtful lighting systems that highlight your property\'s best features while providing necessary illumination for security and navigation.',
      image: '/images/services/outdoor-lighting.jpg',
      highlights: [
        'Path and walkway lighting',
        'Accent lighting for landscape features',
        'Security lighting',
        'LED energy-efficient solutions',
        'Lighting control systems'
      ],
      process: [
        {
          step: 1,
          title: 'Design Consultation',
          description: 'We discuss your lighting goals, preferences, and budget to create a personalized plan.'
        },
        {
          step: 2,
          title: 'Nighttime Demonstration',
          description: 'We provide a temporary lighting setup so you can visualize the effect before installation.'
        },
        {
          step: 3,
          title: 'Professional Installation',
          description: 'Our team installs high-quality fixtures and wiring with minimal disruption to your landscape.'
        },
        {
          step: 4,
          title: 'System Programming',
          description: 'We set up controls and timers for convenient operation and optimal energy efficiency.'
        },
        {
          step: 5,
          title: 'Maintenance Support',
          description: 'We provide ongoing maintenance to ensure your lighting system continues performing beautifully.'
        }
      ],
      faqs: [
        {
          question: 'How energy-efficient are LED landscape lights?',
          answer: 'LED landscape lighting uses up to 80% less energy than traditional halogen systems while lasting 5-10 times longer.'
        },
        {
          question: 'Can I control my landscape lighting with my phone?',
          answer: 'Yes, we offer smart lighting systems that allow you to control your outdoor lights from your mobile device.'
        },
        {
          question: 'How long do landscape lighting systems typically last?',
          answer: 'With quality components and proper installation, a professional landscape lighting system can last 15-20 years, with LED bulbs lasting 50,000+ hours.'
        }
      ]
    }
  };

  return services[id] || null;
};

export default async function ServicePage({ params }) {
  const service = getServiceData(params.id);
  
  if (!service) {
    return (
      <Container className="py-16 text-center">
        <h1 className="text-3xl font-bold text-red-600 mb-4">Service Not Found</h1>
        <p className="text-gray-700 mb-8">The service you're looking for could not be found.</p>
        <Link href="/services">
          <span className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded transition-colors">
            View All Services
          </span>
        </Link>
      </Container>
    );
  }

  return (
    <>
      <PageHeader 
        title={service.title}
        description={service.description}
        backgroundImage={service.image}
      />
      
      <Container className="py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-green-800 mb-6">Overview</h2>
            <p className="text-gray-700 mb-8">{service.fullDescription}</p>
            
            <h2 className="text-2xl font-bold text-green-800 mb-6">What We Offer</h2>
            <ul className="mb-12 grid grid-cols-1 md:grid-cols-2 gap-4">
              {service.highlights.map((highlight, index) => (
                <li key={index} className="flex items-start">
                  <svg className="h-6 w-6 text-green-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">{highlight}</span>
                </li>
              ))}
            </ul>
            
            <h2 className="text-2xl font-bold text-green-800 mb-6">Our Process</h2>
            <div className="mb-12 space-y-6">
              {service.process.map((processStep) => (
                <div key={processStep.step} className="flex bg-gray-50 rounded-lg p-6 shadow-sm">
                  <div className="mr-6">
                    <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                      {processStep.step}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-green-800 mb-2">{processStep.title}</h3>
                    <p className="text-gray-700">{processStep.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <h2 className="text-2xl font-bold text-green-800 mb-6">Frequently Asked Questions</h2>
            <div className="mb-12 space-y-6">
              {service.faqs.map((faq, index) => (
                <div key={index} className="border-b border-gray-200 pb-6">
                  <h3 className="text-xl font-semibold text-green-800 mb-2">{faq.question}</h3>
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="lg:col-span-1">
            <div className="bg-gray-50 rounded-lg p-6 shadow-sm sticky top-8">
              <h3 className="text-xl font-bold text-green-800 mb-6">Ready to Get Started?</h3>
              <p className="text-gray-700 mb-6">
                Contact us today to schedule a consultation for your {service.title.toLowerCase()} needs.
              </p>
              <div className="space-y-4">
                <Link href="/booking" className="block w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-4 rounded text-center transition-colors">
                  Book a Service
                </Link>
                <Link href="/contact" className="block w-full bg-white hover:bg-gray-100 text-green-700 border border-green-600 font-semibold py-3 px-4 rounded text-center transition-colors">
                  Request a Quote
                </Link>
              </div>
              
              <div className="mt-8 pt-8 border-t border-gray-200">
                <h3 className="text-lg font-semibold text-green-800 mb-4">Other Services</h3>
                <ul className="space-y-3">
                  {Object.entries({
                    'landscape-design': 'Landscape Design',
                    'lawn-maintenance': 'Lawn Maintenance',
                    'hardscaping': 'Hardscaping',
                    'irrigation': 'Irrigation Systems',
                    'tree-care': 'Tree & Shrub Care',
                    'outdoor-lighting': 'Outdoor Lighting'
                  })
                    .filter(([id]) => id !== params.id)
                    .map(([id, title]) => (
                      <li key={id}>
                        <Link href={`/services/${id}`} className="text-green-600 hover:text-green-800 hover:underline">
                          {title}
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}