import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyACKYlvI_nI2tR9-Pxnc9qKmQqVTS4XvAs",
  authDomain: "e-commerce-c3bef.firebaseapp.com",
  projectId: "e-commerce-c3bef",
  storageBucket: "e-commerce-c3bef.appspot.com",
  messagingSenderId: "1042309347060",
  appId: "1:1042309347060:web:23f4e923793bcaa1d710a1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);