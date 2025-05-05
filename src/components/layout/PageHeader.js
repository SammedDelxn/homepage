import React from 'react';

const PageHeader = ({ title, description, backgroundImage }) => {
  return (
    <div 
      className="relative py-24 bg-cover bg-center bg-no-repeat"
      style={{ 
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${backgroundImage})` 
      }}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{title}</h1>
          {description && (
            <p className="text-lg md:text-xl text-gray-200">{description}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PageHeader; 