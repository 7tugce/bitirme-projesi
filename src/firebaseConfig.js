// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCmqRnZ8thVThdDhB37dt-lFSjJzY4q2HM",
  authDomain: "appointment-4705f.firebaseapp.com",
  projectId: "appointment-4705f",
  storageBucket: "appointment-4705f.appspot.com",
  messagingSenderId: "1012991497567",
  appId: "1:1012991497567:web:5ccaf914f9ebb90bad12ea",
  measurementId: "G-YWKXT63PK9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;