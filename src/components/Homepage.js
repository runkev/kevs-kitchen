import React from 'react';
import Slideshow from './Slideshow';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

import recipe1 from '../assets/recipe1.jpg';
import recipe2 from '../assets/recipe2.jpg';
import recipe3 from '../assets/recipe3.jpg';

const Homepage = () => {
  return (
    <div className=' bg-blue-50 min-h-screen min-w-full font-mono'>
      <Navbar/>
      <div className="container mx-auto py-8" >
        <h1 className="text-4xl font-bold text-center mb-2 uppercase">Welcome to Kev's Kitchen!</h1>
        <p className="text-xl text-center mb-4">Simple, easy recipes without the mile-long life stories</p>

        <div className="flex flex-wrap justify-center gap-6">
          <Link to="/recipes/1" className="hover:scale-105">
            <div className="h-64 w-80 border-black border-4 rounded-xl overflow-hidden drop-shadow-2xl">
              <h1 className='text-center font-bold bg-yellow-200'>Chocolate Chip Blondies</h1>
              <img src={recipe1} alt="Recipe 1" className="w-full h-full object-cover" />
            </div>
          </Link>
          <Link to="/recipes/2" className="hover:scale-105">
            <div className="h-64 w-80 border-black border-4 rounded-xl overflow-hidden drop-shadow-2xl">
              <h1 className='text-center font-bold bg-yellow-200'>Salted Caramel Brownies</h1>
              <img src={recipe2} alt="Recipe 2" className="w-full h-full object-cover" />
            </div>
          </Link>
          <Link to="/recipes/3" className="hover:scale-105">
            <div className="h-64 w-80 border-black border-4 rounded-xl overflow-hidden drop-shadow-2xl">
              <h1 className='text-center font-bold bg-yellow-200'>Healthy(er) Banana Bread</h1>
              <img src={recipe3} alt="Recipe 3" className="w-full h-full object-cover" />
            </div>
          </Link>
        </div>
      </div>
      
    </div>
  );
};

export default Homepage;
