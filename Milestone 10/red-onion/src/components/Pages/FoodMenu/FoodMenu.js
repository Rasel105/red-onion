import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Home from '../../Home/Home';
import banner from '../../../images/bannerbackground.png'
const FoodMenu = () => {
     return (
          <div >
               <div>
                    <img className='img-fluid w-100' src={banner} alt="" />
               </div>
               <h2>Taste Our Food</h2>
               <div>
                    <Link to="breakfast">Breakfast</Link>
                    <Link to="lunch">Lunch</Link>
                    <Link to="dinner">Dinner</Link>
               </div>
               <div>
                    <Outlet />
               </div>
          </div>
     );
};

export default FoodMenu;