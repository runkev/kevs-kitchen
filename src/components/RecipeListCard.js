import React from 'react';
import { Link } from 'react-router-dom';

const RecipeListCard = ({ recipe }) => {
  return (
    <li className="mb-4 flex justify-center hover:scale-105">
      <Link to={`/recipes/${recipe.id}`}>
        <div className="bg-cookie border border-gray-300 rounded-lg overflow-hidden w-60 h-60 drop-shadow-lg flex flex-col">
          <img src={recipe.imageUrl} alt={recipe.title} className="object-cover h-full" />
          <div className="flex-grow flex items-center justify-center">
            <h2 className="text-md font-semibold text-center whitespace-nowrap overflow-hidden overflow-ellipsis">
              {recipe.title}
            </h2>
          </div>
        </div>
      </Link>
    </li>
  );
};

export default RecipeListCard;
