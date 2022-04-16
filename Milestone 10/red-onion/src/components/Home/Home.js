import React from 'react';
import banner from '../../images/bannerbackground.png'
import FoodMenu from '../Pages/FoodMenu/FoodMenu';


const Home = () => {
     return (
          <div>
               <img className='img-fluid w-100' src={banner} alt="" />
               <FoodMenu />
          </div>
     );
};

export default Home;