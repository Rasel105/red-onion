import React, { useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import Loading from '../../Loading/Loading'
import auth from '../../../firebase.init'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
     const [agree, setAgree] = useState(false);
     const nameRef = useRef('');
     const emailRef = useRef('');
     const passwordRef = useRef('');
     const confirmPasswordRef = useRef('');
     const navigate = useNavigate()
     const [
          createUserWithEmailAndPassword,
          user,
          loading,
          error,
     ] = useCreateUserWithEmailAndPassword(auth);

     const handleRegisterSubmit = event => {
          event.preventDefault();
          const email = emailRef.current.value;
          const password = passwordRef.current.value;
          createUserWithEmailAndPassword(email, password);
          toast.success('🦄 Registation Successfully!', {
               position: "top-center",
               autoClose: 2000,
               hideProgressBar: false,
               closeOnClick: true,
               pauseOnHover: true,
               draggable: true,
               progress: undefined,
          });
     }
     if (loading) {
          return <Loading></Loading>
     }

     if (user) {
          navigate('/')
     }

     return (
          <div className='w-50 mx-auto'>
               <h2 className='text-center text-primary m-3'>Please Register</h2>
               <Form onSubmit={handleRegisterSubmit}>
                    <Form.Group className="mb-2" controlId="formBasicName">
                         <Form.Label>Your Name</Form.Label>
                         <Form.Control ref={nameRef} type="text" placeholder="Enter name" />
                    </Form.Group>
                    <Form.Group className="mb-2" controlId="formBasicEmail">
                         <Form.Label>Email address</Form.Label>
                         <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group className="mb-2" controlId="formBasicPassword">
                         <Form.Label>Password</Form.Label>
                         <Form.Control ref={passwordRef} type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-2" controlId="formBasicCheckbox">
                         <Form.Check onClick={() => setAgree(!agree)} type="checkbox" label="Check me out" />
                         <label className={`${agree ? '' : 'text-danger'}`} htmlFor="terms">Accept terms and conditions</label>
                    </Form.Group>
                    <Button disabled={!agree} variant="primary d-block w-50 mx-auto" type="submit">
                         Register
                    </Button>
                    <p>Already Register? <Link to={'/login'}>Login</Link></p>
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
               </Form>
          </div>
     );
};

export default Register;