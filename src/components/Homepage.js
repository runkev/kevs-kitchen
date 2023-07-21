import React from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

import recipe1 from '../assets/recipe1.jpg';
import recipe2 from '../assets/recipe2.jpg';
import recipe3 from '../assets/recipe3.jpg';
import brownies_tray from '../assets/brownies_tray.jpg';
import { FaInstagram } from 'react-icons/fa';


const Homepage = () => {
  return (
    <div className=" bg-cream min-h-screen font-hk-grotesk">
      <Navbar />
      <div className="mx-auto">
        <div
          className="flex justify-center items-center bg-cover bg-no-repeat h-60 border-solid border-cookie border-y-4"
          style={{ backgroundImage: `url(${brownies_tray})` }}
        >
          <div className="">
            <h1 className="text-4xl font-bold text-center text-white mb-2 px-2 uppercase">
              Welcome to Petow's Pantry!
            </h1>
            <p className="text-xl text-center text-cookie px-2">
              Simple, easy recipes (without the mile-long life stories...)
            </p>
            {/* <a
              href="https://www.instagram.com/kevinpetow"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-cookie flex justify-center"
            >
              <FaInstagram className="inline-block w-6 h-6 mr-1" />
              <span></span>
            </a> */}
          </div>
        </div>

        <div className="text-center text-2xl font-bold my-6 ">
          <h1>MOST POPULAR</h1>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mt-2">
          <Link to="/recipes/2" className="hover:scale-105">
            <div className="h-64 w-80 overflow-hidden drop-shadow-2xl">
              <img
                src={recipe2}
                alt="Recipe 2"
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="text-center font-bold uppercase">
              Salted Caramel Brownies
            </h1>
          </Link>
          <Link to="/recipes/1" className="hover:scale-105">
            <div className="h-64 w-80 overflow-hidden drop-shadow-2xl">
              <img
                src={recipe1}
                alt="Recipe 1"
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="text-center font-bold uppercase">
              Chocolate Chip Blondies
            </h1>
          </Link>
          <Link to="/recipes/3" className="hover:scale-105">
            <div className="h-64 w-80 overflow-hidden drop-shadow-2xl">
              <img
                src={recipe3}
                alt="Recipe 3"
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="text-center font-bold uppercase">
              Healthy(er) Banana Bread
            </h1>
          </Link>
        </div>

        <a
          href="https://www.instagram.com/kevinpetow"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-800 hover:text-cookie flex justify-center my-8"
        >
          <FaInstagram className="inline-block w-6 h-6 mr-1" />
        </a>

      </div>
    </div>
  );
};

export default Homepage;
