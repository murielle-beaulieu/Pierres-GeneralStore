// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB8bNyDW4KXAm-x32zLwgg0tqpPm5Gy56Y",
  authDomain: "bruges-react.firebaseapp.com",
  projectId: "bruges-react",
  storageBucket: "bruges-react.firebasestorage.app",
  messagingSenderId: "149375995877",
  appId: "1:149375995877:web:2fb68d0c18ac6483a3a90c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
console.log(db);
