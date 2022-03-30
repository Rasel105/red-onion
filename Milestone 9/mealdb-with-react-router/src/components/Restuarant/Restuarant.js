import React, { useEffect, useState } from 'react';
import MealDetails from '../MealDetails/MealDetails';

const Restuarant = () => {
     const [meal, setMeal] = useState([])
     useEffect(() => {
          const url = `https://www.themealdb.com/api/json/v1/1/search.php?s`
          fetch(url)
               .then(res => res.json())
               .then(data => setMeal(data.meals))
     }, [])

     return (
          <div>
               <p className='text-4xl font-mono mt-2'>Find your best meals</p>
               <div className='grid grid-cols-4 gap-6 p-5'>
                    {
                         meal.map(food => <MealDetails key={food.idMeal} food={food} />)
                    }
               </div>
          </div >
     );
};

export default Restuarant;