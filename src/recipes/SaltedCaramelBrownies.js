import React, { useState } from 'react';
import Navbar from '../components/Navbar'

export const SaltedCaramelBrownies = () => {
  const [isMetric, setIsMetric] = useState(false);

  const handleUnitToggle = () => {
    setIsMetric(!isMetric);
  }

  const ingredientsBrownies = [
    {name: 'cocoa powder', metricUnit: '65g', englishUnit: '3/4 cups'},
    {name: 'granulated sugar', metricUnit: '300g', englishUnit: '1 & 1/2 cups'},
    {name: 'eggs', metricUnit: '2', englishUnit: '2'},
    {name: 'salted butter', metricUnit: '171g', englishUnit: '12 tbsp'},
    {name: 'all-purpose flour', metricUnit: '63g', englishUnit: '1/2 cup'},
    {name: 'vanilla extract', metricUnit: '2 tsps', englishUnit: '2 tsps'},
  ];
  
  const ingredientsCaramel = [
    {name: 'granulated sugar', metricUnit: '200g', englishUnit: '1 cup'},
    {name: 'salted butter', metricUnit: '86g', englishUnit: '6 tbsp'},
    {name: 'heavy cream', metricUnit: '119ml', englishUnit: '1/2 cup'},
  ]

  return (
    <div className='bg-blue-50'>
      <Navbar />

      <div className='font-mono mx-2'>
        <div className="">
          <h1 className="font-bold flex flex-col items-center max-w-screen text-center text-2xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-4xl">
            SALTED CARAMEL BROWNIES
          </h1>
          <div className="grid grid-cols-3s justify-center mt-1">
            <div>
              <h3 className="font-semibold text-center">Prep Time</h3>
              <p className="text-center">30 min</p>
            </div>
            <div>
              <h3 className="font-semibold text-center">Bake Time</h3>
              <p className="text-center">35 min</p>
            </div>
            <div>
              <h3 className="font-semibold text-center">Total Time</h3>
              <p className="text-center">65 min</p>
            </div>
          </div>
        </div>

        <h2 className="font-mono font-bold text-xl underline mt-4">INGREDIENTS</h2>
        <div className="font-mono flex items-center mt-2">
          <p className="mr-2">Change units:</p>
          <label
            className={`flex items-center ${
              isMetric ? "text-green-500" : "text-blue-500"
            }`}
          >
            <input
              type="checkbox"
              checked={isMetric}
              onChange={handleUnitToggle}
              className="hidden"
            />
            <span
              className={`relative w-10 h-6 rounded-full bg-gray-300 transition-colors ease-in-out duration-200 ${
                isMetric ? "bg-green-500" : "bg-blue-500"
              }`}
            >
              <span
                className={`inline-block w-4 h-4 transform translate-x-0.5 translate-y-0.5 rounded-full bg-white shadow ease-in-out duration-200 ${
                  isMetric ? "translate-x-4" : "translate-x-0"
                }`}
              ></span>
            </span>
            <span className="ml-2">{isMetric ? "Metric" : "English"}</span>
          </label>
        </div>

        <div>
          <p className='italic underline mt-2'>For the Brownies:</p>
          <ul className="font-mono mt-2">
            {ingredientsBrownies.map((ingredient, index) => (
              <li key={index} className="mb-1">
                <strong>
                  {isMetric ? ingredient.metricUnit : ingredient.englishUnit}
                </strong>{" "}
                {ingredient.name}
              </li>
            ))}
          </ul>
          
          <p className='italic underline mt-2'>For the Caramel:</p>
          <ul className="font-mono mt-2">
            {ingredientsCaramel.map((ingredient, index) => (
              <li key={index} className="mb-1">
                <strong>
                  {isMetric ? ingredient.metricUnit : ingredient.englishUnit}
                </strong>{" "}
                {ingredient.name}
              </li>
            ))}
          </ul>
        </div>

        <h2 className="font-mono font-bold text-xl underline mt-4">INSTRUCTIONS</h2>
        <ol>
          <li className="font-mono mb-4">
            Preheat oven to 350F. Line a 9x9 inch pan with parchment paper. (You
            can use an 8x8 inch pan. but will have to adjust bake time by 5-10
            minutes.)
          </li>
          <li className="font-mono mb-4">
            Melt butter completely if you haven't already. In a large bowl, mix{" "}
            {isMetric ? ingredientsBrownies[0].metricUnit : ingredientsBrownies[0].englishUnit}{" "}
            {ingredientsBrownies[0].name} with{" "}
            {isMetric ? ingredientsBrownies[1].metricUnit : ingredientsBrownies[1].englishUnit}{" "}
            {ingredientsBrownies[1].name}
          </li>
          <li className="font-mono mb-4">
            Add{" "}
            {isMetric ? ingredientsBrownies[2].metricUnit : ingredientsBrownies[2].englishUnit}{" "}
            {ingredientsBrownies[2].name} and{" "}
            {isMetric ? ingredientsBrownies[3].metricUnit : ingredientsBrownies[3].englishUnit}{" "}
            {ingredientsBrownies[3].name}. Mix until smooth and combined.
          </li>
          <li className="font-mono mb-4">
            Using a baking spatula, fold in{" "}
            {isMetric ? ingredientsBrownies[4].metricUnit : ingredientsBrownies[4].englishUnit}{" "}
            of {ingredientsBrownies[4].name} until completely combined. You can whisk it
            in if you want, just might get a bit messy :)
          </li>
          <li className="font-mono mb-4">
            Fold in{" "}
            {isMetric ? ingredientsBrownies[5].metricUnit : ingredientsBrownies[5].englishUnit}{" "}
            of {ingredientsBrownies[5].name} (or whatever mix-in you want really)
          </li>
          <li className="font-mono mb-4">
            Spread the mix into your pan evenly. Place pan on the middle rack
            for about 25-30 minutes, or until the edges are browned slightly.
          </li>
          <li className="font-mono mb-4">
            When done baking, place pan on a wire rack and allow it to cool
            completely in the pan before cutting.
          </li>
        </ol>
      </div>
    </div>
  );
};

export default SaltedCaramelBrownies;
