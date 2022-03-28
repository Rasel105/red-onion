import React from 'react';
import Navbar from '../Navbar/Navbar';

const Header = () => {
     return (
          <div>
               <Navbar></Navbar>
               <h2 className='text-3xl'>Save most o your money</h2>
               <p>By giving your money to me!</p>
          </div>
     );
};

export default Header;