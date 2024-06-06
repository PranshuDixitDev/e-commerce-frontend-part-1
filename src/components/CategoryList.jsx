// // src/components/CategoryList.jsx
// import React from 'react';
// import CategoryCard from './CategoryCard';
// import sofasImage from '../assets/images/sofas.webp'; 
// import bedasImage from '../assets/images/bedroom.webp';
// import dinneasImage from '../assets/images/dinning.webp';
// import storageasImage from '../assets/images/storage.webp';
// import officeasImage from '../assets/images/office.webp';
// import outdoorasImage from '../assets/images/outdoor.webp';
// import decorativeasImage from '../assets/images/decorative.webp';
// import kidsasImage from '../assets/images/kids.webp';


// const categories = [
//   { image: sofasImage, title: 'Sofas & Couches' },
//   { image: bedasImage, title: 'Bedroom Furniture' },
//   { image: dinneasImage, title: 'Dining Furniture' },
//   { image: storageasImage, title: 'Storage Furniture' },
//   { image: officeasImage, title: 'Office Furniture' },
//   { image: outdoorasImage, title: 'Bedroom Furniture' },
//   { image: decorativeasImage, title: 'Bedroom Furniture' },
//   { image: kidsasImage, title: 'Bedroom Furniture' },
  
 
// ];

// const CategoryList = () => {
//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
//       {categories.map((category, index) => (
//         <CategoryCard key={index} image={category.image} title={category.title} />
//       ))}
//     </div>
//   );
// };

// export default CategoryList;
// src/components/CategoryList.jsx
// src/components/CategoryList.jsx
// src/components/CategoryList.jsx
// src/components/CategoryList.jsx
import React from 'react';
import CategoryCard from './CategoryCard';
import sofasImage from '../assets/images/sofas.webp';
import bedasImage from '../assets/images/bedroom.webp';
import dinneasImage from '../assets/images/dinning.webp';
import storageasImage from '../assets/images/storage.webp';
import officeasImage from '../assets/images/office.webp';
import outdoorasImage from '../assets/images/outdoor.webp';
import decorativeasImage from '../assets/images/decorative.webp';
import kidsasImage from '../assets/images/kids.webp';

const categories = [
  { image: sofasImage, title: 'Sofas & Couches' },
  { image: bedasImage, title: 'Bedroom Furniture' },
  { image: dinneasImage, title: 'Dining Furniture' },
  { image: storageasImage, title: 'Storage Furniture' },
  { image: officeasImage, title: 'Office Furniture' },
  { image: outdoorasImage, title: 'Outdoor Furniture' },
  { image: decorativeasImage, title: 'Decorative Furniture' },
  { image: kidsasImage, title: 'Kids Furniture' },
];

const CategoryList = () => {
  return (
    <div className="category-list flex flex-wrap justify-center items-center gap-10 p-4">
      {categories.map((category, index) => (
        <CategoryCard key={index} image={category.image} title={category.title} />
      ))}
    </div>
  );
};

export default CategoryList;


