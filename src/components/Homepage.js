import React from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

import recipe1 from '../assets/recipe1.jpg';
import recipe2 from '../assets/recipe2.jpg';
import recipe3 from '../assets/recipe3.jpg';
import brownies_tray from '../assets/brownies_tray.jpg';
import { FaInstagram } from 'react-icons/fa';
import Banner from './Banner';
import HomeImageLink from './HomeImageLink';


const Homepage = () => {
  return (
    <div className=" bg-cream min-h-screen font-hk-grotesk">
      <Navbar />
      <div className="mx-auto">
        <Banner
          title="Welcome to Petow's Pantry"
          subtitle="Simple, easy recipes (without the mile-long life stories...)"
        />

        <div className="text-center text-2xl font-bold my-6 ">
          <h1>MOST POPULAR</h1>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mt-2">
          <HomeImageLink
            imgLinkTo='/recipes/2'
            imgSrc={recipe2}
            imgAlt='Recipe 2'
            imgName='Salted Caramel Brownies'
          />
          <HomeImageLink
            imgLinkTo='/recipes/1'
            imgSrc={recipe1}
            imgAlt='Recipe 1'
            imgName='Chocolate Chip Blondies'
          />
          <HomeImageLink
            imgLinkTo='/recipes/3'
            imgSrc={recipe3}
            imgAlt='Recipe 3'
            imgName='Healthy(er) Banana Bread'
          />
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
