// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCt4pL7iQYySr8OatgFNCUGQokQon6-8Mo",
  authDomain: "moovie-5447d.firebaseapp.com",
  databaseURL: "https://moovie-5447d-default-rtdb.firebaseio.com",
  projectId: "moovie-5447d",
  storageBucket: "moovie-5447d.appspot.com",
  messagingSenderId: "216880492445",
  appId: "1:216880492445:web:b1dacebd7c4f495ce84974",
  measurementId: "G-2YFFR5BHWF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);