import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    // Simulated API call or data fetching to get the recipe details based on the id
    const fetchRecipe = async () => {
      try {
        // Replace this with your actual API call or data fetching logic
        const response = await fetch(`/api/recipes/${id}`);
        const data = await response.json();
        setRecipe(data);
      } catch (error) {
        console.error('Error fetching recipe details:', error);
      }
    };

    fetchRecipe();
  }, [id]);

  if (!recipe) {
    return (
      <div>
        <Navbar />
        <p>Loading recipe details...</p>
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>
      {/* Render other recipe details */}
    </div>
  );
};

export default RecipeDetail;
