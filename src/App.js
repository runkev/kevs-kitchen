import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import Recipes from './components/Recipes';
import About from './components/About';
import RecipeDetail from './components/RecipeDetail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/about" element={<About />} />
        <Route path="/recipes/:id" element={<RecipeDetail />} />
        {/* Add other routes and components */}
      </Routes>
    </Router>
  );
}

export default App;
