import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import recipe3 from '../assets/recipe3.jpg';

const BananaBread = () => {
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
    {name: 'extra virgin olive oil', metricUnit: '75g', englishUnit: '1/3 cup'},
    {name: 'honey', metricUnit: '168g', englishUnit: '1/2 cup'},
    {name: 'eggs', metricUnit: '2', englishUnit: '2'},
    {name: 'mashed ripe bananas', metricUnit: '225g', englishUnit: '2 to 2.5'},
    {name: 'milk', metricUnit: '56g', englishUnit: '1/4 cup'},
    {name: 'baking soda', metricUnit: '1 tsp', englishUnit: '1 tsp'},
    {name: 'vanilla extract', metricUnit: '1 tsp', englishUnit: '1 tsp'},
    {name: 'salt', metricUnit: '1/2 tsp', englishUnit: '1/2 tsp'},
    {name: 'ground cinnamon', metricUnit: '1/2 tsp', englishUnit: '1/2 tsp'},
    {name: 'whole wheat flour', metricUnit: '220g', englishUnit: '1 3/4 cups'},
    {name: 'mix-ins (choc. chips, pecans, etc.)', metricUnit: '1/2 cup', englishUnit: '1/2 cup'},
  ];
  
  return (
    <div className="bg-cream min-h-screen min-w-full">
      <Navbar />

      <div className="font-hk-grotesk">

        {/* Title Banner */}
        <div className="bg-brown py-2 w-screen border-solid border-cookie border-y-4">
          <h1 className="font-bold text-cookie flex flex-col items-center max-w-screen text-center text-2xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-4xl">
             HEALTHY(ER) BANANA BREAD
          </h1>
          <div className="grid grid-cols-3s justify-center mt-1 text-xs">
            <div className="border border-black border-solid rounded-lg mx-1 bg-cream">
              <h3 className="font-semibold text-center">Prep Time</h3>
              <p className="text-center">10 min</p>
            </div>
            <div className="border border-black border-solid rounded-lg mx-1 bg-cream">
              <h3 className="font-semibold text-center">Bake Time</h3>
              <p className="text-center">55 min</p>
            </div>
            <div className="border border-black border-solid rounded-lg mx-1 bg-cream">
              <h3 className="font-semibold text-center">Total Time</h3>
              <p className="text-center">65 min</p>
            </div>
          </div>
        </div>

        <div className="mx-auto my-2 py-2 flex flex-col max-w-5xl border-solid border-2 border-cookie rounded-lg">
            <div className='flex flex-col md:flex-row gap-4 justify-between'>
              {/* Image Div */}
              <div className="overflow-hidden drop-shadow-2xl max-w-md md:order-2 mx-2 rounded-lg">
                <img
                  src={recipe3}
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
                  Preheat oven to 325F. Grease a 9" x 5" loaf pan.
                </li>
                <li className="mb-4">
                  In a large bowl, beat the {getIngredient(0)} and {getIngredient(1)} together with a whisk.
                </li>
                <li className="mb-4">
                  Add {getIngredient(2)} and beat well. Mix in {getIngredient(3)} and {getIngredient(4)}
                </li>
                <li className="mb-4">
                  Blend in {getIngredient(5)}, {getIngredient(6)}, {getIngredient(7)}, and {getIngredient(8)}.
                </li>
                <li className="mb-4">
                  Use a big spoon or spatula to stir in {getIngredient(9)}. If you are using {getIngredient(10)}, fold those in now.
                </li>
                <li className="mb-4">
                  Pour the batter into the loaf pan. You can sprinkle more ground cinnamon on top to your liking. Bake for 50-60 minutes, or until a toothpick inserted in the center comes out clean. 
                </li>
                <li className="">
                  When done baking, let the bread cool in the pan for 10-15 more minutes, then remove and place on a wire rack to cool further before serving.
                </li>
              </ol>
            </div>
        </div>
      </div>
    </div>
  );
};

export default BananaBread;
