// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAmbGGn8azIBfvmRKolCgsouU2OazAJ9XE",
  authDomain: "mobile-gadget.firebaseapp.com",
  projectId: "mobile-gadget",
  storageBucket: "mobile-gadget.appspot.com",
  messagingSenderId: "855982317692",
  appId: "1:855982317692:web:905aee005e0be66b7c29f9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;