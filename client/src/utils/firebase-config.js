// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC7ZxyzZr4vEsEMqp7N4stn_Xu4sJtnR0s",
  authDomain: "react-netflix-clone-655b0.firebaseapp.com",
  projectId: "react-netflix-clone-655b0",
  storageBucket: "react-netflix-clone-655b0.appspot.com",
  messagingSenderId: "51859366309",
  appId: "1:51859366309:web:734ab86d8a18d6877a884c",
  measurementId: "G-ZCS3WXRQ2Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);
const analytics = getAnalytics(app);