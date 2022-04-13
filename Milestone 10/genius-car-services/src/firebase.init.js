import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
     apiKey: process.env.REACT_APPapiKey,
     authDomain: process.env.REACT_APPauthDomain,
     projectId: process.env.REACT_APPprojectId,
     storageBucket: process.env.REACT_APPstorageBucket,
     messagingSenderId: process.env.REACT_APPmessagingSenderId,
     appId: process.env.REACT_APPappId
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;