// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAH53iTOBdly_7xmIGxCZXskZlgkHRQ8pU",
  authDomain: "netflixgpt-1e259.firebaseapp.com",
  projectId: "netflixgpt-1e259",
  storageBucket: "netflixgpt-1e259.appspot.com",
  messagingSenderId: "167882746376",
  appId: "1:167882746376:web:0f854deda202877926bfbd",
  measurementId: "G-1J15HQMNM6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
