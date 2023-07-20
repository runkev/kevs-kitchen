import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import recipe1 from '../assets/recipe1.jpg';

const ChocolateChipBlondies = () => {
  const [isMetric, setIsMetric] = useState(false)

  const handleUnitToggle = () => {
    setIsMetric(!isMetric);
  }

  const getIngredient = (i) => {
    const ingredient = ingredients[i];
    const unit = isMetric ? ingredient.metricUnit : ingredient.englishUnit;

    return (
      <>
        {unit} of {ingredient.name}
      </>
    );
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
    <div className="bg-cream min-h-screen min-w-full">
      <Navbar />

      <div className="font-hk-grotesk">
        {/* Title Banner */}
        <div className="bg-brown py-2 w-screen border-solid border-cookie border-y-4">
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

        <div className="mx-auto my-2 py-2 flex flex-col max-w-5xl border-solid border-2 border-cookie rounded-lg">
          <div className="flex flex-col md:flex-row gap-4 justify-between">
            {/* Image Div */}
            <div className="overflow-hidden drop-shadow-2xl max-w-md md:order-2 mx-2 rounded-lg">
              <img
                src={recipe1}
                alt="Recipe 1"
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Ingredients Div */}
            <div className="md:order-1 mx-2">
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
                  <span className="ml-2">
                    {isMetric ? "Metric" : "English"}
                  </span>
                </label>
              </div>
              <ul className="mt-2">
                {ingredients.map((ingredient, index) => (
                  <li key={index} className="mb-1">
                    <strong>
                      {isMetric
                        ? ingredient.metricUnit
                        : ingredient.englishUnit}
                    </strong>{" "}
                    {ingredient.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/*Instructions Div */}
          <div className="flex flex-col justify-center mt-2 mx-2">
            <h2 className="font-bold text-xl underline ">INSTRUCTIONS</h2>
            <ol>
              <li className="mb-4">
                Preheat oven to 350F. Line a 9x9 inch pan with parchment paper.
                (You can use an 8x8 inch pan. but will have to adjust bake time
                by 5-10 minutes.)
              </li>
              <li className="mb-4">
                Melt butter completely if you haven't already. In a large bowl,
                mix {getIngredient(0)} with {getIngredient(1)}
              </li>
              <li className="mb-4">
                Add {getIngredient(2)} and {getIngredient(3)}. Mix until smooth
                and combined.
              </li>
              <li className="mb-4">
                Using a baking spatula, fold in {getIngredient(4)} until
                completely combined. You can whisk it in if you want, just might
                get a bit messy :)
              </li>
              <li className="mb-4">
                Fold in {getIngredient(5)} (or whatever mix-in you want really)
              </li>
              <li className="mb-4">
                Spread the mix into your pan evenly. Place pan on the middle
                rack for about 25-30 minutes, or until the edges are browned
                slightly.
              </li>
              <li className="">
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
