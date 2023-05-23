import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import Recipes from './components/Recipes';
import { ChocolateChipBlondies } from './recipes/ChocolateChipBlondies';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Recipes" element={<Recipes />} />
        <Route path="/ChocolateChipBlondies" element={<ChocolateChipBlondies />} />
        {/* Add other routes and components */}
      </Routes>
    </Router>
  );
}

export default App;
