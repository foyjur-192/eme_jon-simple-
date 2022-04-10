// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCagNB6rfa1Qfn4Pvw2P7S_8gdbYU4Q6C4",
  authDomain: "ema-john-simple-5e46f.firebaseapp.com",
  projectId: "ema-john-simple-5e46f",
  storageBucket: "ema-john-simple-5e46f.appspot.com",
  messagingSenderId: "323789847782",
  appId: "1:323789847782:web:5d6f6117454485b2800f27"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const auth = getAuth(app);
export default auth;