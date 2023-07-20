import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import recipe1 from '../assets/recipe1.jpg';

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
  
  return (
    <div className="bg-cream min-h-screen min-w-full font-hk-grotesk">
      <Navbar />

      <div className="font-hk-grotesk">
        <div className="bg-brown py-2 w-screen">
          <h1 className="font-bold text-cookie flex flex-col items-center max-w-screen text-center text-2xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-4xl">
            CHOCOLATE CHIP BLONDIES
          </h1>
          <div className="grid grid-cols-3s justify-center mt-1 text-xs">
            <div className="border border-black border-solid rounded-lg mx-1 bg-cream">
              <h3 className="font-semibold text-center">Prep Time</h3>
              <p className="text-center">10 min</p>
            </div>
            <div className="border border-black border-solid rounded-lg mx-1 bg-cream">
              <h3 className="font-semibold text-center">Bake Time</h3>
              <p className="text-center">25 min</p>
            </div>
            <div className="border border-black border-solid rounded-lg mx-1 bg-cream">
              <h3 className="font-semibold text-center">Total Time</h3>
              <p className="text-center">35 min</p>
            </div>
          </div>
        </div>

        <div className='flex flex-col md:flex-row justify-center'>
          
          <div className="mt-2 p-1 mx-2 md:w-1/2 order-2 md:order-1">
            <h2 className="font-bold text-xl underline">INGREDIENTS</h2>
            <div className="flex items-center mt-2">
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

            <ul className="mt-2">
              {ingredients.map((ingredient, index) => (
                <li key={index} className="mb-1">
                  <strong>
                    {isMetric ? ingredient.metricUnit : ingredient.englishUnit}
                  </strong>{" "}
                  {ingredient.name}
                </li>
              ))}
            </ul>
          </div>

          <div className="overflow-hidden drop-shadow-2xl mt-2 mx-2 max-w-sm order-1 md:order-2">
            <img
              src={recipe1}
              alt="Recipe 1"
              className="w-full h-auto object-cover"
            />
          </div>

        </div>

        <div className='flex justify-center'>
          <div className="my-2 mx-2 p-1 lg:w-1/2">
            <h2 className="font-bold text-xl underline ">
              INSTRUCTIONS
            </h2>
            <ol>
              <li className="mb-4">
                Preheat oven to 350F. Line a 9x9 inch pan with parchment paper.
                (You can use an 8x8 inch pan. but will have to adjust bake time by
                5-10 minutes.)
              </li>
              <li className="mb-4">
                Melt butter completely if you haven't already. In a large bowl,
                mix{" "}
                {isMetric
                  ? ingredients[0].metricUnit
                  : ingredients[0].englishUnit}{" "}
                {ingredients[0].name} with{" "}
                {isMetric
                  ? ingredients[1].metricUnit
                  : ingredients[1].englishUnit}{" "}
                {ingredients[1].name}
              </li>
              <li className="mb-4">
                Add{" "}
                {isMetric
                  ? ingredients[2].metricUnit
                  : ingredients[2].englishUnit}{" "}
                {ingredients[2].name} and{" "}
                {isMetric
                  ? ingredients[3].metricUnit
                  : ingredients[3].englishUnit}{" "}
                {ingredients[3].name}. Mix until smooth and combined.
              </li>
              <li className="mb-4">
                Using a baking spatula, fold in{" "}
                {isMetric
                  ? ingredients[4].metricUnit
                  : ingredients[4].englishUnit}{" "}
                of {ingredients[4].name} until completely combined. You can whisk
                it in if you want, just might get a bit messy :)
              </li>
              <li className="mb-4">
                Fold in{" "}
                {isMetric
                  ? ingredients[5].metricUnit
                  : ingredients[5].englishUnit}{" "}
                of {ingredients[5].name} (or whatever mix-in you want really)
              </li>
              <li className="mb-4">
                Spread the mix into your pan evenly. Place pan on the middle rack
                for about 25-30 minutes, or until the edges are browned slightly.
              </li>
              <li className="mb-4">
                When done baking, place pan on a wire rack and allow it to cool
                completely in the pan before cutting.
              </li>
            </ol>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ChocolateChipBlondies;
