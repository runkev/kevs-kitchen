import React from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

import recipe1 from '../assets/recipe1.jpg';
import recipe2 from '../assets/recipe2.jpg';
import recipe3 from '../assets/recipe3.jpg';
import brownies_tray from '../assets/brownies_tray.jpg';

const Homepage = () => {
  return (
    <div className=" bg-cream min-h-screen font-mono border-2 border-black border-solid">
      <Navbar />
      <div className="container mx-auto">
        <div
          className="bg-brown flex justify-center items-center bg-cover bg-no-repeat bg-[50%] h-72 "
          style={{ backgroundImage: `url(${brownies_tray})` }}
        >
          <div className="">
            <h1 className="text-4xl font-bold text-center text-white mb-2 uppercase">
              Welcome to Petow's Pantry!
            </h1>
            <p className="text-xl text-center text-cookie mb-8">
              Simple, easy recipes (without the mile-long life stories...)
            </p>
          </div>
        </div>

        {/* <div className=' bg-brown flex justify-center'>
          <div className='basis-1/4'>
            <img src={recipe1} alt="Recipe 1" className="w-40 h-30" />
          </div>
          <div className='basis-1/2'>
            <h1 className="text-4xl font-bold text-center text-white mb-2 uppercase">Welcome to Petow's Pantry!</h1>
            <p className="text-xl text-center text-cookie mb-8">Simple, easy recipes (without the mile-long life stories...)</p>
          </div>
          <div className='basis-1/4'>
            <img src={recipe1} alt="Recipe 1" className="w-40 h-30" />
          </div>
        </div> */}

        <div className="flex flex-wrap justify-center gap-6">
          <Link to="/recipes/1" className="hover:scale-105">
            <div className="h-64 w-80 border-black border-4 rounded-xl overflow-hidden drop-shadow-2xl">
              <h1 className="text-center font-bold bg-yellow-200 border-b-4 border-b-black">
                Chocolate Chip Blondies
              </h1>
              <img
                src={recipe1}
                alt="Recipe 1"
                className="w-full h-full object-cover"
              />
            </div>
          </Link>
          <Link to="/recipes/2" className="hover:scale-105">
            <div className="h-64 w-80 border-black border-4 rounded-xl overflow-hidden drop-shadow-2xl">
              <h1 className="text-center font-bold bg-yellow-200 border-b-4 border-b-black">
                Salted Caramel Brownies
              </h1>
              <img
                src={recipe2}
                alt="Recipe 2"
                className="w-full h-full object-cover"
              />
            </div>
          </Link>
          <Link to="/recipes/3" className="hover:scale-105">
            <div className="h-64 w-80 border-black border-4 rounded-xl overflow-hidden drop-shadow-2xl">
              <h1 className="text-center font-bold bg-yellow-200 border-b-4 border-b-black">
                Healthy(er) Banana Bread
              </h1>
              <img
                src={recipe3}
                alt="Recipe 3"
                className="w-full h-full object-cover"
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
