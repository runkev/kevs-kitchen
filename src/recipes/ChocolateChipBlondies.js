import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';

const ChocolateChipBlondies = () => {
  const { id } = useParams();

  return (
    <div>
      <Navbar />
      <h1>Recipe ID: {id}</h1>
      <button>Back</button>
    </div>
  );
};

export default ChocolateChipBlondies;
