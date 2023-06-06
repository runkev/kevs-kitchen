import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';

const ChocolateChipBlondies = () => {
  const [isMetric, setIsMetric] = useState(false)

  const handleUnitToggle = () => {
    setIsMetric(!isMetric);
  }

  const ingredients = [
    {name: 'light brown sugar', metricUnit: '300g', englishUnit: '1 & 1/2 cups'},
    {name: 'salted butter (melted)', metricUnit: '170g', englishUnit: '3/4 cups'},
    {name: 'eggs', metricUnit: '2', englishUnit: '2'},
    {name: 'vanilla extract', metricUnit: '2 tsps', englishUnit: '2 tsps'},
    {name: 'all-purpose flour', metricUnit: '190g', englishUnit: '1 & 1/2 cups'},
    {name: 'semi-sweet chocolate chips', metricUnit: '175g', englishUnit: '1 cup'}
  ];

  const unitText = isMetric ? 'Metric' : 'English';

  return (
    <div>
      <Navbar />

      <h1 className="font-bold text-3xl flex flex-col items-center">
        Chocolate Chip Blondies
      </h1>
      <div className="grid grid-cols-3 justify-items-center mt-1">
        <div>
          <h3 className="font-semibold text-center">Prep Time</h3>
          <p className="text-center">10 min</p>
        </div>
        <div>
          <h3 className="font-semibold text-center">Bake Time</h3>
          <p className="text-center">25 min</p>
        </div>
        <div>
          <h3 className="font-semibold text-center">Total Time</h3>
          <p className="text-center">35 min</p>
        </div>
      </div>

      <h2 className="font-bold text-xl mt-4">Ingredients</h2>
      <div className="flex items-center mt-2">
        <p className="mr-2">Units:</p>
        <label className="switch">
          <input type="checkbox" checked={isMetric} onChange={handleUnitToggle} />
          <span className="slider round"></span>
        </label>
        <p className="ml-2">{unitText}</p>
      </div>
      <ul className="mt-2">
        {ingredients.map((ingredient, index) => (
          <li key={index} className="mb-1">
            <strong>{isMetric ? ingredient.metricUnit : ingredient.englishUnit}</strong>  {ingredient.name}
          </li>
        ))}
      </ul>

      <h2 className="font-bold text-xl mt-4">Instructions</h2>
      <ol>
        <li className='mb-4'>
          Preheat oven to 350F. Line a 9x9 inch pan with parchment paper. (You can use an 8x8 inch pan. but will have to adjust bake time by 5-10 minutes.)
        </li>
        <li className='mb-4'>
          Melt butter completely if you haven't already. In a large bowl, mix {isMetric ? ingredients[0].metricUnit : ingredients[0].englishUnit} {ingredients[0].name} with {isMetric ? ingredients[1].metricUnit : ingredients[1].englishUnit} {ingredients[1].name}
        </li>
        <li className='mb-4'>
          Add {isMetric ? ingredients[2].metricUnit : ingredients[2].englishUnit} {ingredients[2].name} and {isMetric ? ingredients[3].metricUnit : ingredients[3].englishUnit} {ingredients[3].name}. Mix until smooth and combined. 
        </li>
        <li className='mb-4'>

        </li>
      </ol>
    </div>
  );
};

export default ChocolateChipBlondies;
