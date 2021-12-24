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
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export default app;
