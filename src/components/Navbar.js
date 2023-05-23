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

  return (
    <nav className="bg-yellow-300 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center text-gray-800">
          <FiHome className="h-6 w-6 mr-2" />
          <span className="text-2xl font-bold">Home</span>
        </Link>

        {/* Hamburger Menu */}
        {isMobile && (
          <div className="block lg:hidden">
            <button
              onClick={toggleMenu}
              className="flex items-center px-3 py-2 border rounded text-gray-800 border-gray-800 hover:text-yellow-600 hover:border-yellow-600"
            >
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        )}

        {/* Nav Links */}
        {!isMobile && (
          <div className="hidden lg:flex lg:items-center lg:w-auto">
            <div className="text-sm lg:flex-grow">
              <Link
                to="/recipes"
                className="block mt-4 lg:inline-block lg:mt-0 text-gray-800 hover:text-yellow-600 mr-4"
              >
                Recipes
              </Link>
              <Link
                to="/about"
                className="block mt-4 lg:inline-block lg:mt-0 text-gray-800 hover:text-yellow-600 mr-4"
              >
                About
              </Link>
              <Link
                to="/contact"
                className="block mt-4 lg:inline-block lg:mt-0 text-gray-800 hover:text-yellow-600"
              >
                Contact
              </Link>
            </div>
          </div>
        )}

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden">
            <div className="text-sm">
              <Link
                to="/recipes"
                className="block mt-4 lg:inline-block lg:mt-0 text-gray-800 hover:text-yellow-600 mr-4"
              >
                Recipes
              </Link>
              <Link
                to="/about"
                className="block mt-4 lg:inline-block lg:mt-0 text-gray-800 hover:text-yellow-600 mr-4"
              >
                About
              </Link>
              <Link
                to="/contact"
                className="block mt-4 lg:inline-block lg:mt-0 text-gray-800 hover:text-yellow-600"
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
