import React, { useState } from 'react';
import recipe4 from '../assets/recipe4.jpg'
import Banner from '../components/Banner';

export const ProteinMac = () => {
  const [isMetric, setIsMetric] = useState(false);

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
    {name: 'protein pasta', metricUnit: '', englishUnit: ''},
    {name: 'cottage cheese', metricUnit: '', englishUnit: '1.5 cups'},
    {name: 'Non-fat shredded cheddar cheese', metricUnit: '', englishUnit: '1/2 cup'},
    {name: 'skim milk', metricUnit: '', englishUnit: '1/2 cup'},
    {name: 'cheddar cheese powder', metricUnit: '', englishUnit: ''},
    {name: 'chicken breast', metricUnit: '', englishUnit: ''},
    {name: 'garlic powder', metricUnit: '', englishUnit: ''},
    {name: 'onion powder', metricUnit: '', englishUnit: ''},
    {name: 'salt', metricUnit: '', englishUnit: ''},
    {name: 'black pepper', metricUnit: '', englishUnit: ''},
    {name: 'paprika', metricUnit: '', englishUnit: ''},
    {name: '', metricUnit: '', englishUnit: ''},
  ];

  return (
    <div className="bg-cream min-h-screen min-w-full">
        {/* <Navbar /> */}

      <div className="font-hk-grotesk">
       
       <Banner
         title="Protein Mac and Cheese"
         prepTime="5"
         bakeTime="20"
         totalTime="25"
       />

       <div className="mx-auto my-2 py-2 flex flex-col max-w-5xl border-solid border-2 border-cookie">
         <div className="flex flex-col md:flex-row gap-4 justify-between">
           {/* Image Div */}
           <div className="overflow-hidden drop-shadow-2xl max-w-md md:order-2 mx-2 rounded-lg">
             <img
               src={recipe4}
               alt="Recipe 4"
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
  )
}