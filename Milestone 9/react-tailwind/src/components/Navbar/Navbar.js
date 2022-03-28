import React from 'react';
import Link from '../Link/Link';

const Navbar = () => {
     const reoutes = [
          { id: 1, name: "Home", link: '/home' },
          { id: 2, name: "Shop", link: '/shop' },
          { id: 3, name: "Deals", link: '/deals' },
          { id: 3, name: "Coupons", link: '/coupops' },
          { id: 4, name: "Contact", link: '/contact' }
     ]
     return (
          <nav>
               <ul className='md:flex justify-center'>
                    {
                         reoutes.map(route => <Link
                              key={route.id}
                              route={route}
                         />)
                    }
               </ul>
          </nav>
     );
};

export default Navbar;