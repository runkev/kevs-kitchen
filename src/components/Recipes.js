import React, { useState } from 'react';
import Navbar from './Navbar';

const Recipes = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const recipes = [
    'Chocolate Chip Blondies',
    'Banana Bread',
    'Salted Caramel Brownies',
  ];

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Filter recipes based on search query
  const filteredRecipes = recipes.filter((recipe) =>
    recipe.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <Navbar /> 
      <div className='container mx-auto px-4 max-w-6xl'> 
      <h1 className="text-3xl font-bold mb-4">Recipes</h1>

      <div className="w-full mb-4">
        <input
          type="text"
          placeholder="Search recipes"
          value={searchQuery}
          onChange={handleSearchChange}
          className="w-full border border-gray-300 rounded px-4 py-2"
        />
      </div>

      <ul className='w-full'>
        {filteredRecipes.map((recipe, index) => (
          <li key={index} className="mb-2 border border-gray-300 rounded px-4 py-2 hover:bg-gray-100">
            {recipe}
          </li>
        ))}
      </ul>
      </div>
    </div>
  );
};

export default Recipes;
