// Homepage.js
import React from 'react';
import Navbar from './Navbar';

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold mb-4">Welcome to Kev's Kitchen!</h1>
        <p className="text-lg">
          Start exploring delicious recipes for cooking and baking.
        </p>
        {/* Additional content for the homepage */}
      </div>
    </div>
  );
};

export default Homepage;
