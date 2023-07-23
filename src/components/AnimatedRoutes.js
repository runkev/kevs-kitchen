import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom';
import Homepage from './Homepage';
import Recipes from './Recipes';
import About from './About';
import ChocolateChipBlondies from '../recipes/ChocolateChipBlondies';
import SaltedCaramelBrownies from '../recipes/SaltedCaramelBrownies';
import BananaBread from '../recipes/BananaBread'

import {AnimatePresence} from 'framer-motion';
// import {} from 'framer-motion/dist/framer-motion';

export const AnimatedRoutes = () => {
    const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Homepage />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/about" element={<About />} />
        <Route path="/recipes/1" element={<ChocolateChipBlondies />} />
        <Route path="/recipes/2" element={<SaltedCaramelBrownies />} />
        <Route path="/recipes/3" element={<BananaBread />} />
      </Routes>
    </AnimatePresence>
  );
}
