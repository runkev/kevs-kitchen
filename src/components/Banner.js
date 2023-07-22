import React from 'react';
import PropTypes from 'prop-types';
import brownies_tray from '../assets/brownies_tray.jpg';

const Banner = ({ title, subtitle }) => {
  return (
    
      <div
        className="flex justify-center items-center bg-cover bg-no-repeat h-52 border-solid border-cookie border-y-4"
        style={{ backgroundImage: `url(${brownies_tray})` }}
      >
        <div className="">
          <h1 className="text-4xl font-bold text-center text-white mb-2 px-2 uppercase">
            {title}
          </h1>
          {subtitle && (
            <p className="text-xl text-center text-cookie px-2">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    
  );
};

Banner.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
};

export default Banner;
