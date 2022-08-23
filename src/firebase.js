// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6iISxxz7QDBbRnGFzqOs3GwgpcztYe04",
  authDomain: "retobemaster.firebaseapp.com",
  projectId: "retobemaster",
  storageBucket: "retobemaster.appspot.com",
  messagingSenderId: "59254612235",
  appId: "1:59254612235:web:d1542dbf2b0fc76c19820e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);