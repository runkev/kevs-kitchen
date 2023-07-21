import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import brownies_tray from '../assets/brownies_tray.jpg';


const Recipes = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const recipes = [
    { id: 1, title: 'Chocolate Chip Blondies' },
    { id: 2, title: 'Salted Caramel Brownies' },
    { id: 3, title: 'Banana Bread' },
  ];

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Filter recipes based on search query
  const filteredRecipes = recipes.filter((recipe) =>
    recipe.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className='bg-cream min-h-screen min-w-full font-hk-grotesk'>
      <Navbar />

      <div
        className="flex justify-center items-center bg-cover bg-no-repeat h-52 border-solid border-cookie border-y-4"
        style={{ backgroundImage: `url(${brownies_tray})` }}
      >
        <div className="">
          <h1 className="text-4xl font-bold text-center text-white uppercase">
            RECIPES
          </h1>
        </div>
      </div>

      <div className='container mx-auto px-4 py-4 max-w-6xl'>
      

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
            <li key={recipe.id} className="mb-2 bg-cookie border border-gray-300 rounded">
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
