import React from 'react';

const Footer = () => {
     // let getYear = () => {
     //      let currentYear = new Date().getFullYear();
     //      return currentYear;
     // };

     const today = new Date();
     const year = today.getFullYear();

     return (
          <footer>
               <p className='text-center mt-5'>Genius Cart Services &copy; <span>{year}</span> All Rights Reserved.</p>
          </footer>
     );
};

export default Footer;