import { signOut } from 'firebase/auth';
import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from '../../images/logo2.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Header = () => {
     const [user] = useAuthState(auth);
     const hanldeSignOut = () => {
          signOut(auth);
          toast.success('🦄 Tui Ber hoye gecho!', {
               position: "top-center",
               autoClose: 2000,
               hideProgressBar: false,
               closeOnClick: true,
               pauseOnHover: true,
               draggable: true,
               progress: undefined,
          });
     }
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
                                   {
                                        user
                                             ?
                                             <Button className='mx-2' onClick={hanldeSignOut}>Sign Out</Button>
                                             :
                                             <Link to='login'>Login</Link>
                                   }
                              </Nav>
                         </div>
                    </Container>
                    <ToastContainer
                         position="top-center"
                         autoClose={5000}
                         hideProgressBar={false}
                         newestOnTop={false}
                         closeOnClick
                         rtl={false}
                         pauseOnFocusLoss
                         draggable
                         pauseOnHover />
               </Navbar>
          </div>
     );
};

export default Header;