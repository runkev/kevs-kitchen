import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import Recipes from './components/Recipes';
import About from './components/About';
import ChocolateChipBlondies from './recipes/ChocolateChipBlondies';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Recipes" element={<Recipes />} />
        <Route path="/About" element={<About />} />
        <Route path="/recipes/chocolate-chip-blondies" element={<ChocolateChipBlondies />} />
        {/* Add other routes and components */}
      </Routes>
    </Router>
  );
}

export default App;
