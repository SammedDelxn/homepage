import React from 'react';
import Link from 'next/link';
import { projectsData } from '../../data/mockData';

const GalleryCard = ({ project }) => {
  return (
    <div className="relative overflow-hidden rounded-lg group">
      <div className="aspect-w-4 aspect-h-3">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
          <span className="text-green-400 text-sm font-medium uppercase tracking-wider mb-2 block">
            {project.category}
          </span>
          <h3 className="text-white text-xl font-bold mb-4">{project.title}</h3>
          <Link href={project.href} className="inline-block bg-white hover:bg-gray-100 text-green-700 font-medium py-2 px-4 rounded transition-colors duration-300">
            View Project
          </Link>
        </div>
      </div>
    </div>
  );
};

const Gallery = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Project Gallery</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Take a look at some of our recent landscaping projects and see what we can do for your outdoor space
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <GalleryCard key={project.id} project={project} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link 
            href="/portfolio" 
            className="inline-flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-3 px-8 rounded-md transition duration-300"
          >
            View All Projects
            <svg className="w-5 h-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Gallery; 