import React from 'react';
import Container from '../ui/Container';
import { galleryImages } from '../../lib/data/mockData';

const Gallery = () => {
  return (
    <section className="py-16 bg-white">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Work</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Browse through our gallery of recent landscaping projects to see the 
            transformations we've created for our clients.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image) => (
            <div key={image.id} className="overflow-hidden rounded-lg shadow-md">
              {image.type === 'before-after' ? (
                <div className="relative">
                  {/* Before-After comparison (simplified for this mockup) */}
                  <div className="aspect-[4/3] grid grid-cols-2">
                    <div className="bg-gray-200 p-2 flex items-center justify-center">
                      <div className="text-center">
                        <span className="text-xs font-semibold uppercase text-gray-600 bg-white px-2 py-1 rounded">Before</span>
                      </div>
                    </div>
                    <div className="bg-gray-300 p-2 flex items-center justify-center">
                      <div className="text-center">
                        <span className="text-xs font-semibold uppercase text-gray-600 bg-white px-2 py-1 rounded">After</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 bg-white">
                    <h3 className="font-medium">{image.title}</h3>
                  </div>
                </div>
              ) : (
                <div>
                  <div className="aspect-[4/3] bg-gray-200 flex items-center justify-center">
                    {/* Placeholder for single image */}
                    <span className="text-gray-500">{image.title}</span>
                  </div>
                  <div className="p-4 bg-white">
                    <h3 className="font-medium">{image.title}</h3>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <button className="inline-flex items-center px-6 py-3 border border-gray-300 rounded-md font-medium text-gray-700 bg-white hover:bg-gray-50">
            View All Projects
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </Container>
    </section>
  );
};

export default Gallery; 