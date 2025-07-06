// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCiZLsXrkHOtY9l6tEfX-Sl4wqkIZN4cMI",
    authDomain: "java-bakery-shop-d019f.firebaseapp.com",
    projectId: "java-bakery-shop-d019f",
    storageBucket: "java-bakery-shop-d019f.firebasestorage.app",
    messagingSenderId: "964180124624",
    appId: "1:964180124624:web:b0bd673200d95e68d2cfd5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);