import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyA0_Lp-4UDZJmFyeYe-Z8A_mpyllchl0MY",
    authDomain: "netflix-clone-karan-89844.firebaseapp.com",
    databaseURL: "https://netflix-clone-karan-89844-default-rtdb.firebaseio.com",
    projectId: "netflix-clone-karan-89844",
    storageBucket: "netflix-clone-karan-89844.appspot.com",
    messagingSenderId: "286767383590",
    appId: "1:286767383590:web:6ed7da43c94afc8f8992e7",
    measurementId: "G-L6V8L5GZ5Z"

    // apikey: process.env.REACT_APP_FIREBASE_KEY,
    // authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
    // databaseURL: process.env.REACT_APP_FIREBASE_DATABASE,
    // projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    // storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    // messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
    // appId: process.env.REACT_APP_FIREBASE_APP_ID,
    // measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export default app;
