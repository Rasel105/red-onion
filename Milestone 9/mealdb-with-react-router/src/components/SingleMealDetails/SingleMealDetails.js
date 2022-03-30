import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const SingleMealDetails = () => {
     const { mealID } = useParams()
     const [meals, setMeals] = useState({})
     useEffect(() => {
          const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`
          fetch(url)
               .then(res => res.json())
               .then(data => setMeals(data.meals))
     }, [])
     console.log(meals[0])
     return (
          <div className='flex justify-center mt-20 bg-orange-300 mx-96 rounded-xl p-6'>
               <img className='h-72 w-72 rounded-xl' src={meals[0]?.strMealThumb} alt="" />
               <div className='p-4'>
                    <h1 className='text-lg'>Meal: {meals[0]?.strMeal}</h1>
                    <p>Area: {meals[0]?.strArea}</p>
                    <p>Catergory: {meals[0]?.strCategory}</p>
                    <p>Instruction: {meals[0]?.strInstructions.slice(0, 70)}</p>
               </div>
          </div>
     );
};

export default SingleMealDetails;