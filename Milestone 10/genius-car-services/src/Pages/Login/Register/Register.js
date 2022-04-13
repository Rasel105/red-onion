import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const Register = () => {
     const [
          createUserWithEmailAndPassword,
          user,
          loading,
          error,
     ] = useCreateUserWithEmailAndPassword(auth);

     const navigate = useNavigate();
     const navigateLogin = () => {
          navigate('/login')
     }

     if (user) {
          navigate('/')
     }

     const handleRegister = event => {
          event.preventDefault();
          // console.log(event.target.name.value, event.target.email.value)
          // console.log(event.target.password.value);
          // const name = event.target.name.value;
          // console.log(name)

          const name = event.target.name.value;
          const email = event.target.email.value;
          const password = event.target.password.value;

          createUserWithEmailAndPassword(email, password);

     }

     return (
          <div className='register-form'>
               <h2 className='text-center text-primary m-3'>Please Register</h2>
               <form onSubmit={handleRegister}>
                    <input type="text" name="name" id="" placeholder='Your Name' />

                    <input type="email" name="email" id="" placeholder='Your email' required />

                    <input placeholder='Your password ' required type="password" name="password" id="" />
                    <input type="submit" value="Register" />
               </form>
               <p>Already have an account? <Link to='/login' className='text-danger text-decoration-none' onClick={navigateLogin}>Please Login</Link></p>
          </div>
     );
};

export default Register;