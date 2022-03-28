import React, { useState } from 'react';
import Link from '../Link/Link';
import { MenuIcon, XIcon } from '@heroicons/react/solid'
const Navbar = () => {
     const [open, setOpen] = useState(false)
     const reoutes = [
          { id: 1, name: "Home", link: '/home' },
          { id: 2, name: "Shop", link: '/shop' },
          { id: 3, name: "Deals", link: '/deals' },
          { id: 3, name: "Coupons", link: '/coupops' },
          { id: 4, name: "Contact", link: '/contact' }
     ]
     return (
          <nav className='bg-indigo-300'>
               <div onClick={() => setOpen(!open)} className='h-6 w-6 md:hidden'>
                    {open ? <XIcon></XIcon> : <MenuIcon></MenuIcon>}
               </div>
               <ul className={`md:flex justify-center absolute duration-500 ease-in bg-indigo-300 w-full md:static ${open ? 'top-6' : 'top-[-120px]'}`}>
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