import React from 'react';
import Container from '../../components/ui/Container';
import PageHeader from '../../components/layout/PageHeader';

export default function AboutPage() {
  const teamMembers = [
    {
      name: 'John Smith',
      position: 'Founder & CEO',
      bio: "With over 20 years in landscaping, John founded Green Gardens with a vision to transform outdoor spaces while respecting nature.",
      image: '/images/team/john-smith.jpg'
    },
    {
      name: 'Sarah Johnson',
      position: 'Design Director',
      bio: "Sarah brings 15 years of landscape design expertise, creating harmonious outdoor spaces that reflect each client's unique style.",
      image: '/images/team/sarah-johnson.jpg'
    },
    {
      name: 'Michael Rodriguez',
      position: 'Operations Manager',
      bio: "Michael ensures every project is completed with precision and care, managing our crews and client satisfaction.",
      image: '/images/team/michael-rodriguez.jpg'
    },
    {
      name: 'Emily Chen',
      position: 'Horticulture Specialist',
      bio: "Emily's extensive knowledge of plants and sustainable practices helps us create eco-friendly landscapes that thrive.",
      image: '/images/team/emily-chen.jpg'
    }
  ];

  return (
    <>
      <PageHeader 
        title="About Green Gardens"
        description="Our story, our values, our team"
        backgroundImage="/images/about-header.jpg"
      />
      
      <Container className="py-16">
        {/* Our Story Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-green-800 mb-6">Our Story</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-gray-700 mb-4">
                Green Gardens Landscaping began in 2005 with a simple mission: to create beautiful, 
                sustainable outdoor spaces that enhance the lives of our clients while respecting the environment.
              </p>
              <p className="text-gray-700 mb-4">
                What started as a small operation with just two employees has grown into a full-service 
                landscaping company serving the entire metropolitan area, but our core values remain the same.
              </p>
              <p className="text-gray-700">
                We believe that every outdoor space has potential, and we're passionate about helping 
                our clients discover and develop that potential into a landscape they'll enjoy for years to come.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="/images/about/our-story.jpg" 
                alt="Green Gardens founder working on an early project" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </section>
        
        {/* Our Values Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-green-800 mb-6">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-green-700 mb-3">Quality Craftsmanship</h3>
              <p className="text-gray-700">
                We take pride in our work and stand behind every project we complete. 
                Our attention to detail and commitment to excellence ensure lasting results.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-green-700 mb-3">Environmental Stewardship</h3>
              <p className="text-gray-700">
                We implement sustainable practices in all our work, from water conservation 
                to native plant selection, minimizing our impact on the planet.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-green-700 mb-3">Client Partnership</h3>
              <p className="text-gray-700">
                We believe in building lasting relationships with our clients, working 
                collaboratively to create spaces that reflect their needs and preferences.
              </p>
            </div>
          </div>
        </section>
        
        {/* Our Team Section */}
        <section>
          <h2 className="text-3xl font-bold text-green-800 mb-6">Our Team</h2>
          <p className="text-gray-700 mb-10 max-w-3xl">
            Our team of landscaping professionals brings together decades of experience, creative vision, 
            and technical expertise to transform your outdoor spaces.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div key={member.name} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-64 object-cover object-center"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-green-800">{member.name}</h3>
                  <p className="text-green-600 font-medium mb-3">{member.position}</p>
                  <p className="text-gray-700">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </Container>
    </>
  );
} 