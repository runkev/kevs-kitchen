import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const HomeImageLink = ({ imgLinkTo, imgSrc, imgAlt, imgName }) => {
  return (
    <Link to={imgLinkTo} className="hover:scale-105">
      <div className="h-64 w-80 overflow-hidden drop-shadow-2xl">
        <img src={imgSrc} alt={imgAlt} className="w-full h-full object-cover" />
      </div>
      <h1 className="text-center font-bold uppercase">{imgName}</h1>
    </Link>
  );
};

HomeImageLink.propTypes = {
  imgLink: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  imgAlt: PropTypes.string.isRequired,
  imgName: PropTypes.string.isRequired,
};

export default HomeImageLink;
