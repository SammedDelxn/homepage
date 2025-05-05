import React from 'react';

const EquipmentCard = ({ equipment }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
      <div className="h-48 relative">
        <img 
          src={equipment.image}
          alt={equipment.name}
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold text-green-800 mb-2">{equipment.name}</h3>
        <p className="text-gray-600 mb-4 flex-grow">{equipment.description}</p>
        
        <div className="flex flex-wrap gap-2">
          {equipment.tags.map((tag) => (
            <span 
              key={tag} 
              className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EquipmentCard; 