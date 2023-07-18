import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiHome } from 'react-icons/fi';
import chef_icon from '../assets/chef_icon.png'

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const checkScreenWidth = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Listen for window resize event
    window.addEventListener('resize', checkScreenWidth);

    // Initial check for screen width
    checkScreenWidth();

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', checkScreenWidth);
    };
  }, []);

  // ...

return (
  <nav className="bg-cream py-4 font-mono uppercase font-bold container mx-auto">
    <div className="mx-auto flex justify-between rounded-lg">
      <Link
        to="/"
        className=" text-gray-800 hover:text-blue-600 hover:scale-105 hover:shadow-lg"
      >
        <img
          src={chef_icon}
          alt="home"
          className="h-6 w-6 mr-2 ml-2"
        ></img>
      </Link>

      {/* Nav Links */}
      <div className="flex items-center ml-0 mr-2 space-x-4">
        <Link
          to="/recipes"
          className="text-gray-800 hover:text-blue-600 hover:scale-105 hover:shadow-lg rounded-md"
        >
          Recipes
        </Link>
        <Link
          to="/about"
          className="text-gray-800 hover:text-blue-600 hover:scale-105 hover:shadow-lg rounded-md"
        >
          About
        </Link>
        <Link
          to="/contact"
          className="text-gray-800 hover:text-blue-600 hover:scale-105 hover:shadow-lg rounded-md"
        >
          Contact
        </Link>
      </div>
    </div>
  </nav>
);

// ...

};

export default Navbar;
