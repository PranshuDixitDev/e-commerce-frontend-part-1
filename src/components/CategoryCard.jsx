// src/components/CategoryCard.jsx
import React from 'react';

const CategoryCard = ({ image, title }) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg">
      <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-300 hover:scale-110" />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <h2 className="text-white text-lg md:text-xl font-bold">{title}</h2>
      </div>
    </div>
  );
};

export default CategoryCard;
