import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../images/logo2.png'
import FoodMenu from '../Pages/FoodMenu/FoodMenu';

const Header = () => {
     return (
          <div>
               <Navbar bg="light" variant="light">
                    <Container >
                         <div className='d-flex justify-content-end'>
                              <Navbar.Brand>
                                   <img width={100} src={logo} alt="" />
                              </Navbar.Brand>
                              <Nav>
                                   <Link to='/'>Home</Link>
                                   <Link to='menu'>Menu</Link>
                                   <Link to='login'>Login</Link>
                              </Nav>
                         </div>
                    </Container>
               </Navbar>
          </div>
     );
};

export default Header;