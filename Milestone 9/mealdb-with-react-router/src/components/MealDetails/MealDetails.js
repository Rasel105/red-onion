import React from 'react';
import { useNavigate } from 'react-router-dom';

const MealDetails = (props) => {
     const { idMeal, strMeal, strCategory, strMealThumb, } = props.food;
     const navigate = useNavigate()
     const showMealDetails = () => {
          const path = `/restuarant/${idMeal}`
          navigate(path)
     }
     return (
          <div className='flex bg-orange-200 p-3 justify-between items-center rounded-xl'>
               <img className='h-20 w-20 rounded-lg' src={strMealThumb} alt="" />
               <div>
                    <h1><small className='text-purple-500 text-xl'>Meal:</small> {strMeal}</h1>
                    <p>{strCategory}</p>
                    <button onClick={showMealDetails} className='px-2 py-1 rounded-lg text-white mt-2 bg-green-400'>Explore</button>
               </div>
          </div>
     );
};

export default MealDetails;