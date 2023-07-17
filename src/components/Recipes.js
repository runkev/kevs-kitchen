import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const Recipes = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const recipes = [
    { id: 1, title: 'Chocolate Chip Blondies' },
    { id: 2, title: 'Banana Bread' },
    { id: 3, title: 'Salted Caramel Brownies' },
  ];

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Filter recipes based on search query
  const filteredRecipes = recipes.filter((recipe) =>
    recipe.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className='bg-slate-100 min-h-screen min-w-full'>
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
          {filteredRecipes.map((recipe) => (
            <li key={recipe.id} className="mb-2 bg-slate-50 border border-gray-300 rounded">
              <Link to={`/recipes/${recipe.id}`} className="block px-4 py-2 hover:bg-gray-200">
                {recipe.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Recipes;
