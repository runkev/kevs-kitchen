import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import './App.css'; 
import { AnimatedRoutes } from './components/AnimatedRoutes';

function App() {
  return (
    <Router>
      <Navbar/>
      <AnimatedRoutes/>      
    </Router>
    // <Router>
    //   <Routes>
    //     <Route path="/" element={<Layout />}>
    //       <Route index element={<Homepage />} />
    //       <Route path="recipes" element={<Recipes />}>
    //         <Route path="1" element={<ChocolateChipBlondies />} />
    //         <Route path="2" element={<SaltedCaramelBrownies />} />
    //         <Route path="3" element={<ChocolateChipBlondies />} />
    //       </Route>
    //       <Route path="about" element={<About />} />
    //       <Route path="contact" element={<Contact />} />
    //     </Route>
    //   </Routes>
    // </Router>
  );
};

// const Layout = () => {
//   return (
//     <div className="page-transition">
//       <Outlet />
//     </div>
//   );
// };

export default App;
