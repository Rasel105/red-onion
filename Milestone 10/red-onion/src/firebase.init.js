import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
     apiKey: "AIzaSyAZxLMGaa641skIgZC8Vdl1L7A8hMq6q0o",
     authDomain: "practice-project-97389.firebaseapp.com",
     projectId: "practice-project-97389",
     storageBucket: "practice-project-97389.appspot.com",
     messagingSenderId: "588066293543",
     appId: "1:588066293543:web:63ffc2182305e813d90b02"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;