import { useState, useEffect } from "react"
import app from '../../firebase.init'
import { getAuth, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
const googleProvider = new GoogleAuthProvider();

const auth = getAuth(app);

const useFirebase = () => {
     const [user, setUser] = useState()

     const signInWithGoogle = () => {
          signInWithPopup(auth, googleProvider)
               .then(result => {
                    const user = result.user;
                    setUser(user)
                    console.log(user)
               })
     }

     useEffect(() => {
          onAuthStateChanged(auth, user => {
               setUser(user);
          })
     }, []);

     const hanleSignOut = () => {
          signOut(auth)
               .then(() => { })
     }

     return { user, signInWithGoogle, hanleSignOut }
}

export default useFirebase;