import React from 'react';
import { Link } from 'react-router-dom';

const Breakfast = () => {
     return (
          <div>
               <h2>Breakfast</h2>
               <Link to='/bill'>Pay the Bill</Link>
          </div>
     );
};

export default Breakfast;