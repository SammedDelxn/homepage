import React from 'react';
import Container from '../ui/Container';
import Card from '../ui/Card';
import { testimonials } from '../../lib/data/mockData';

const Testimonials = () => {
  return (
    <section className="py-16 bg-gray-50">
      <Container>
           
         
        
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="h-full">
              <Card.Content>
                <div className="flex items-center mb-4">
                  {/* Rating stars */}
                  
                </div>
                
               
                
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-gray-200 mr-3 flex items-center justify-center">
                    {/* Placeholder for testimonial avatar */}
                    <span className="text-xs text-gray-500">{testimonial.name.charAt(0)}</span>
                  </div>
                  <div>
                    </div>
                </div>
              </Card.Content>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Testimonials; 