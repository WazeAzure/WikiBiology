// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAs3P9MpDlV7NJSqhLxiflIs98bwd4vXf8",
  authDomain: "wikibiology-f13a3.firebaseapp.com",
  projectId: "wikibiology-f13a3",
  storageBucket: "wikibiology-f13a3.appspot.com",
  messagingSenderId: "1052185962888",
  appId: "1:1052185962888:web:ea1e2ebb309ead0fb5f23d",
  measurementId: "G-XN68NNMTR6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
const analytics = getAnalytics(app);

export default db;
