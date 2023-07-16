import React, { useState } from 'react';
import Navbar from '../components/Navbar'

export const SaltedCaramelBrownies = () => {
  const [isMetric, setIsMetric] = useState(false);

  const handleUnitToggle = () => {
    setIsMetric(!isMetric);
  }

  const ingredientsBrownies = [
    {name: 'salted butter', metricUnit: '171g', englishUnit: '12 tbsp'},
    {name: 'granulated sugar', metricUnit: '300g', englishUnit: '1 & 1/2 cups'},
    {name: 'eggs', metricUnit: '2', englishUnit: '2'},
    {name: 'vanilla extract', metricUnit: '2 tsps', englishUnit: '2 tsps'},
    {name: 'cocoa powder', metricUnit: '65g', englishUnit: '3/4 cups'},
    {name: 'all-purpose flour', metricUnit: '63g', englishUnit: '1/2 cup'},
  ];
  
  const ingredientsCaramel = [
    {name: 'granulated sugar', metricUnit: '200g', englishUnit: '1 cup'},
    {name: 'salted butter', metricUnit: '86g', englishUnit: '6 tbsp'},
    {name: 'heavy cream', metricUnit: '1/2 cup', englishUnit: '1/2 cup'},
  ]

  return (
    <div className='bg-blue-50 min-h-screen min-w-full'>
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
          <ul className="mt-2">
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
          <ul className="mt-2">
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

        <h2 className="font-bold text-xl underline mt-4">INSTRUCTIONS</h2>
        <h3 className='italic underline'>Start with the caramel:</h3>
        <ol>
          <li className="mb-4">
            Preheat oven to 350F. Line a 9x9 inch pan with parchment paper. (You
            can use an 8x8 inch pan. but will have to adjust bake time by a few minutes.)
          </li>
          <li className='mb-4'>
            In a medium saucepan, heat {" "} {isMetric ? ingredientsCaramel[0].metricUnit : ingredientsCaramel[0].englishUnit}{" "}{ingredientsCaramel[0].name} on medium-high heat. Occasionally stir the sugar with a spatula (make sure to get to the bottom of the saucepan). 
          </li>
          <li className='mb-4'>
            The sugar will eventually melt and turn into an amber hue (about 5 minutes). At this point, remove the saucepan from heat and stir in {isMetric ? ingredientsCaramel[1].metricUnit : ingredientsCaramel[1].englishUnit}{" "}{ingredientsCaramel[1].name} (it should bubble a lot). Stir together until they mix completely (should take a couple minutes)
          </li>
          <li className='mb-4'>
            Once mixed, pour in {isMetric ? ingredientsCaramel[2].metricUnit : ingredientsCaramel[2].englishUnit}{" "}{ingredientsCaramel[2].name} and stir until combined. Put the saucecpan back on the heat for 30-60 seconds while stirring. Now the caramel is done. Set aside to cool and begin making the brownie mix.
          </li>
        </ol>

        <h3 className='italic underline'>Now make the brownie mix:</h3>
        <ol>
          <li className="mb-4">
            Melt the {isMetric ? ingredientsBrownies[0].metricUnit : ingredientsBrownies[0].englishUnit}{" "}{ingredientsBrownies[0].name} in a microwave-safe bowl.
          </li>
          <li className='mb-4'>
            In a large bowl, mix the melted butter,{" "}
            {isMetric ? ingredientsBrownies[1].metricUnit : ingredientsBrownies[1].englishUnit}{" "}
            {ingredientsBrownies[1].name}, {isMetric ? ingredientsBrownies[2].metricUnit : ingredientsBrownies[2].englishUnit}{" "}
            {ingredientsBrownies[2].name}, and {isMetric ? ingredientsBrownies[3].metricUnit : ingredientsBrownies[3].englishUnit}{" "}
            {ingredientsBrownies[3].name}.
          </li>
          <li className="mb-4">
            Once those are combined, fold in {isMetric ? ingredientsBrownies[4].metricUnit : ingredientsBrownies[4].englishUnit}{" "}
            {ingredientsBrownies[4].name} and {isMetric ? ingredientsBrownies[5].metricUnit : ingredientsBrownies[5].englishUnit}{" "}
            {ingredientsBrownies[5].name}.
          </li>
          <li className="mb-4">
            Pour and spread about half of the mix evenly into your dish. Then pour 3/4 cup of the caramel (can go more or less if you want, honestly) over the brownie mix in the pan. Try to spread evenly without touching the edges. Spread the rest of the brownie mix on top (sealing as much of the caramel as possible).
          </li>
          <li className="mb-4">
            Bake for about 35 minutes or until a knife or toothpick comes out clean when inserted in the center of the brownies. When done baking, let the brownies cool completely in the pan (on top of a cooling rack) before cutting and serving. 
          </li>
        </ol>
      </div>
    </div>
  );
};

export default SaltedCaramelBrownies;
