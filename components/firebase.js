// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAU9uPf7tkA8RmeAnReFpklHAdmr064fs8",
  authDomain: "prephive.firebaseapp.com",
  projectId: "prephive",
  storageBucket: "prephive.appspot.com",
  messagingSenderId: "282078671791",
  appId: "1:282078671791:web:2a33eca04ae0bb63de355a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
export {db, firebaseConfig, auth,app}