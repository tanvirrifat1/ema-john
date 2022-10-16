// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBQ8lZQHjLCUaLH-qFgXzFaz2mdX35Kcgc",
    authDomain: "ema-john-simple-ea9d4.firebaseapp.com",
    projectId: "ema-john-simple-ea9d4",
    storageBucket: "ema-john-simple-ea9d4.appspot.com",
    messagingSenderId: "892655070526",
    appId: "1:892655070526:web:aff7b844ab75414bab506f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app