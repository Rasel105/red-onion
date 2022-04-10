import React from 'react';

const Footer = () => {
     let getYear = () => {
          let currentYear = new Date().getFullYear();
          return currentYear;
     };
     return (
          <footer>
               <p>Genius Cart Services &copy; <span>{getYear()}</span> All Rights Reserved.</p>
          </footer>
     );
};

export default Footer;