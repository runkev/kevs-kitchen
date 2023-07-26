import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion';
import Banner from './Banner';
import RecipeListCard from './RecipeListCard';
import recipe1 from '../assets/recipe1.jpg';
import recipe2 from '../assets/recipe2.jpg';
import recipe3 from '../assets/recipe3.jpg';


const Recipes = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const recipes = [
    { id: 1, title: 'Chocolate Chip Blondies', imageUrl: recipe1},
    { id: 2, title: 'Salted Caramel Brownies', imageUrl: recipe2},
    { id: 3, title: 'Healthy(er) Banana Bread', imageUrl: recipe3},
    { id: 4, title: 'Test', imageUrl: recipe3},
    { id: 5, title: 'Test', imageUrl: recipe3},
    { id: 5, title: 'Test', imageUrl: recipe3},
    { id: 5, title: 'Test', imageUrl: recipe3},
    { id: 5, title: 'Test', imageUrl: recipe3},
  ];

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Filter recipes based on search query
  const filteredRecipes = recipes.filter((recipe) =>
    recipe.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // return (
  //   <motion.div
  //     className="bg-cream min-h-screen min-w-full font-hk-grotesk"
  //     // initial={{opacity: 0}}
  //     // animate={{opacity: 1}}
  //     // exit={{opacity: 0}}
  //     // transition={{duration: 0.4}}
  //   >      
  //     <Banner
  //       title="Recipes"
  //     />

  //     <div className="container mx-auto px-4 py-4 max-w-6xl">
  //       <div className="w-full mb-4">
  //         <input
  //           type="text"
  //           placeholder="Search recipes"
  //           value={searchQuery}
  //           onChange={handleSearchChange}
  //           className="w-full border border-gray-300 rounded px-4 py-2"
  //         />
  //       </div>

  //       <ul className="w-full">
  //         {filteredRecipes.map((recipe) => (
  //           <li
  //             key={recipe.id}
  //             className="mb-2 bg-cookie border border-gray-300 rounded"
  //           >
  //             <Link
  //               to={`/recipes/${recipe.id}`}
  //               className="block px-4 py-2 hover:bg-gray-200"
  //             >
  //               {recipe.title}
  //             </Link>
  //           </li>
  //         ))}
  //       </ul>
  //     </div>
  //   </motion.div>
  // );

  return (
    <div className="bg-cream min-h-screen min-w-full font-hk-grotesk">
      <Banner title="Recipes" />
      <div className="container mx-auto px-4 py-4 max-w-6xl">
        <div className="w-full mb-4">
          <input
            type="text"
            placeholder="Search recipes"
            value={searchQuery}
            onChange={handleSearchChange}
            className="w-full border border-gray-300 rounded px-4 py-2"
          />
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-0">
          {filteredRecipes.map((recipe) => (
            <RecipeListCard key={recipe.id} recipe={recipe} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Recipes;
