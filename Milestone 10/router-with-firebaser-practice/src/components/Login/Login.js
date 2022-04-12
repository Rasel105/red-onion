import React from 'react';
import useFirebase from '../hooks/useFirebase';

const Login = () => {
     const { user, signInWithGoogle } = useFirebase()
     return (
          <div>
               <h2>Please Login</h2>
               <div style={{ margin: '20px' }}>
                    <button onClick={signInWithGoogle}>Google Sign In</button>
               </div>
               <form>
                    <input type="email" name="" id="" placeholder='Your emeil' />
                    <br />
                    <input type="password" name="" id="" placeholder='Your password' />
                    <br />
                    <input type="submit" value="Register" />
               </form>
          </div>
     );
};

export default Login;