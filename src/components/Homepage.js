import React from 'react';
import Slideshow from './Slideshow';
import Navbar from './Navbar';

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-yellow-100 container mx-auto py-8" >
        <h1 className="text-4xl font-bold text-center mb-6">Welcome to Kev's Kitchen!</h1>
        <p className="text-xl text-center mb-8">Simple, easy to use recipes without the mile-long life stories</p>
        <Slideshow />
      </div>
    </div>
  );
};

export default Homepage;
