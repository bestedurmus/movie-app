// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHbT6lRc-SLlP-xruhbjjEwlQOToULmK0",
  authDomain: "movie-app-11d52.firebaseapp.com",
  projectId: "movie-app-11d52",
  storageBucket: "movie-app-11d52.appspot.com",
  messagingSenderId: "548194460349",
  appId: "1:548194460349:web:3e0edf880d51a9067ecdd4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)