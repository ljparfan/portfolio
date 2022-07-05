// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD-WQcoW865RtiNtDldi-GhHFlGGDYxuFs",
  authDomain: "ljparfan-90d0d.firebaseapp.com",
  projectId: "ljparfan-90d0d",
  storageBucket: "ljparfan-90d0d.appspot.com",
  messagingSenderId: "971011935892",
  appId: "1:971011935892:web:b9f7dc8e98cc4d90c42e81",
  measurementId: "G-G2PLH6RL8W",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);

export default app;
