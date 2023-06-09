import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import recipe1 from '../assets/recipe1.jpg';
import recipe2 from '../assets/recipe2.jpg';
import recipe3 from '../assets/recipe3.jpg';
import { Link } from 'react-router-dom';

const Slideshow = () => {
  return (
    <Carousel
      autoPlay
      infiniteLoop
      showStatus={false}
      showIndicators={false}
      showThumbs={false}
      interval={5000}
      stopOnHover={false}
      className="max-w-md mx-auto border-black border-2 rounded-2xl overflow-hidden"
    >
      <Link to="/recipes/1">
        <div>
          <img src={recipe1} alt="Recipe 1" className="w-full h-80 object-cover rounded-2xl" />
        </div>
      </Link>
      <Link to="/recipes/2">
        <div>
          <img src={recipe2} alt="Recipe 2" className="w-full h-80 object-cover rounded-2xl" />
        </div>
      </Link>
      <Link to="/recipes/3">
        <div>
          <img src={recipe3} alt="Recipe 3" className="w-full h-80 object-cover rounded-2xl" />
        </div>
      </Link>
    </Carousel>
  );
};

export default Slideshow;
