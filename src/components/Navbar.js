import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiHome } from 'react-icons/fi';

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
  <nav className="bg-yellow-300 py-4">
    <div className="container mx-auto flex justify-between items-center">
      <Link to="/" className="flex items-center text-gray-800">
        <FiHome className="h-6 w-6 mr-2 ml-2" />
      </Link>

      {/* Nav Links */}
      <div className="flex items-center ml-0 mr-2 space-x-4">
        <Link to="/recipes" className="text-gray-800 hover:text-yellow-600">
          Recipes
        </Link>
        <Link to="/about" className="text-gray-800 hover:text-yellow-600">
          About
        </Link>
        <Link to="/contact" className="text-gray-800 hover:text-yellow-600">
          Contact
        </Link>
      </div>
    </div>
  </nav>
);

// ...

};

export default Navbar;
