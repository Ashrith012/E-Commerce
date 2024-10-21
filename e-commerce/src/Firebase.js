// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCdFmvbTvt_iaXcxsJ6YK5DpzbScK5u8Oo",
  authDomain: "e-commerce-7ae9b.firebaseapp.com",
  projectId: "e-commerce-7ae9b",
  storageBucket: "e-commerce-7ae9b.appspot.com",
  messagingSenderId: "49784874721",
  appId: "1:49784874721:web:c35349cffd60be252c79a0",
  measurementId: "G-5SR78LF74V"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);