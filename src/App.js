import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import Recipes from './components/Recipes';
import About from './components/About';
import Contact from './components/Contact';
import ChocolateChipBlondies from './recipes/ChocolateChipBlondies';
import SaltedCaramelBrownies from './recipes/SaltedCaramelBrownies';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/recipes/1" element={<ChocolateChipBlondies />} />
        <Route path="/recipes/2" element={<SaltedCaramelBrownies />} />
        <Route path="/recipes/3" element={<ChocolateChipBlondies />} />
        {/* Add other routes and components */}
      </Routes>
    </Router>
  );
}

export default App;
