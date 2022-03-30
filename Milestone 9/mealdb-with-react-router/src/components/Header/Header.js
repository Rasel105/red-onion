import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
     return (
          <div className='flex justify-between items-center px-10 bg-slate-400 py-5 text-green-200'>
               <Link to={'/'} className='text-3xl'>The Restaurant</Link>
               <nav className='text-xl flex'>
                    <CustomLink className='mr-2' to='/'>Home</CustomLink>
                    <CustomLink className='mr-2' to='/restuarant'>Restaurant</CustomLink>
                    <CustomLink className='mr-2' to={'/meals'}>Meals</CustomLink>
                    <CustomLink to={'/contact'}>Contact</CustomLink>
               </nav>
          </div>
     );
};

export default Header;