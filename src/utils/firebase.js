// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// My web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBwZZKmrMJMHO3DEXBkEuxl6lPOR-s0cTo",
  authDomain: "netflixgpt-c4ac1.firebaseapp.com",
  projectId: "netflixgpt-c4ac1",
  storageBucket: "netflixgpt-c4ac1.appspot.com",
  messagingSenderId: "476336217573",
  appId: "1:476336217573:web:604fc7796f9017182a230c",
  measurementId: "G-BE7107GSHP"
};

// Initializing Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth()