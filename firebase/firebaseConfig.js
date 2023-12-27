import { initializeApp } from 'firebase/app';
 
// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";
 
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBy7zZ5bFWlo3J5-nDxplXfX2CJhCcnz3I",
  authDomain: "checkedin-b42c2.firebaseapp.com",
  projectId: "checkedin-b42c2",
  storageBucket: "checkedin-b42c2.appspot.com",
  messagingSenderId: "1077314575189",
  appId: "1:1077314575189:web:6b2134c750fe673c7beddc",
  measurementId: "G-K4MKX4T6F9"
};


const app = initializeApp(firebaseConfig);
console.log(app);
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
const auth = getAuth(app);

const db = getFirestore(app); // Firestore database
const storage = getStorage(app); // Firebase storage

export { app, auth, db, storage };