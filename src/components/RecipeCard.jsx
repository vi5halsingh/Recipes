import React from 'react';
import { Link } from 'react-router-dom';

const RecipeCard = ({ recipe }) => {
  const { id, title, chef, image, discription } = recipe;

  return (
    <Link
      to={`/recipes/details/${id}`}
      className="group block bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 w-1/4"
    >
      <div className="relative ">
        <img
          src={image}
          alt={title}
          className="w-full h-[30vh] object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="p-4">
        <h3 className="text-xl font-bold mb-2 truncate">{title}</h3>
        <p className="text-sm text-yellow-500 font-medium mb-3">By {chef}</p>
        
        <div className="text-gray-300 text-sm mb-4 h-20 overflow-hidden relative">
          {discription.slice(0, 100)}
          <div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-gray-800" />
        </div>

        <div className="flex justify-between items-center text-blue-400 text-sm">
          <span className="hover:text-blue-300 transition-colors">
            View Recipe →
          </span>
        </div>
      </div>
    </Link>
  );
};

export default RecipeCard;
