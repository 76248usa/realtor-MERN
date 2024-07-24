// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-e41dd.firebaseapp.com",
  projectId: "mern-estate-e41dd",
  storageBucket: "mern-estate-e41dd.appspot.com",
  messagingSenderId: "604268832572",
  appId: "1:604268832572:web:4b8b362721f1bb5e7b2039",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
