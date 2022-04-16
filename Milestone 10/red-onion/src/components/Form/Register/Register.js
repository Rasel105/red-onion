import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Register = () => {
     const [
          createUserWithEmailAndPassword,
          user,
          loading,
          error,
     ] = useCreateUserWithEmailAndPassword(auth);
     return (
          <div className='w-50 mx-auto'>
               <h2>Register</h2>
               <Form>
                    <Form.Group className="mb-2" controlId="formBasicName">
                         <Form.Label>Your Name</Form.Label>
                         <Form.Control type="email" placeholder="Enter name" />
                    </Form.Group>
                    <Form.Group className="mb-2" controlId="formBasicEmail">
                         <Form.Label>Email address</Form.Label>
                         <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group className="mb-2" controlId="formBasicPassword">
                         <Form.Label>Password</Form.Label>
                         <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-2" controlId="formBasicConfirmPassword">
                         <Form.Label>Confirm Password</Form.Label>
                         <Form.Control type="password" placeholder="Confirm password" />
                    </Form.Group>
                    <Form.Group className="mb-2" controlId="formBasicCheckbox">
                         <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                         Submit
                    </Button>
                    <p>Already Register? <Link to={'/login'}>Login</Link></p>
               </Form>
          </div>
     );
};

export default Register;