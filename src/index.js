import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBjRpYvRMoS8ybXfrVr7BTUV_177gThRNQ",
  authDomain: "kiwi-front-d207a.firebaseapp.com",
  projectId: "kiwi-front-d207a",
  storageBucket: "kiwi-front-d207a.appspot.com",
  messagingSenderId: "396640241344",
  appId: "1:396640241344:web:33f567a3bca47df1028f25",
  measurementId: "G-193SJF3DDC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
