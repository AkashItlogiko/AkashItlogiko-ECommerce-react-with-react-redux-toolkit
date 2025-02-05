import React from 'react';
import ManCetegory from '../assets/images/man.png';
import WomanCetegory from '../assets/images/woman.png';
import KidCetegory from '../assets/images/kid.png';

const categories = [
  {
    title: 'Men',
    imageUrl: ManCetegory,
  },
  {
    title: 'Women',
    imageUrl: WomanCetegory,
  },
  {
    title: 'Kids',
    imageUrl: KidCetegory,
  },
];

const CategorySection = () => {
  return (
    <div className="container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 ">
      {categories.map((category, index) => {
        const { title, imageUrl } = category;
        return (
          <div
            key={index}
            id={index}
            className="relative h-64 transform transition-transform duration-300 hover:scale-105 cursor-pointer"
          >
            <img
              src={imageUrl}
              alt=""
              className="w-full h-full object-cover rounded-lg shadow-md"
            />
            <div className="absolute top-20 left-12">
              <p className="text-xl font-bold">{title}</p>
              <p className="text-gray-600">View All</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CategorySection;
