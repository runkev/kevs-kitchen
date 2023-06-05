import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

const RecipeDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const handleGoBack = () => {
    navigate(-1); // Navigate back by one step in the history stack
  };

  return (
    <div>
      <Navbar />
      <h1>Recipe ID: {id}</h1>
      <button
        onClick={handleGoBack}
        className="bg-slate-200 border-2 border-black rounded-md outline hover:outline-offset-4"
      >
        Go Back
      </button>
    </div>
  );
};

export default RecipeDetail;
