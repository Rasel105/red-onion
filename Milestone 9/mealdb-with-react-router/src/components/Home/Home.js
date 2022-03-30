import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
     return (
          <div>
               <h1 className='text-7xl text-green-300 pt-24 pb-3'>Welcome to The Restuarant</h1>
               <p className='text-lg pb-8 text-teal-400'>Eat Sleep Explore!</p>
               <Link to='restuarant' className='py-4 px-4 mt-3 bg-green-500 text-xl text-white rounded-lg'>Explore Meals</Link>
          </div>
     );
};

export default Home;