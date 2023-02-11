import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC9j-5VPA_-5L8edqP6M1jTlZTBY4xRuUw",
  authDomain: "twitter-a7dfc.firebaseapp.com",
  projectId: "twitter-a7dfc",
  storageBucket: "twitter-a7dfc.appspot.com",
  messagingSenderId: "474059259724",
  appId: "1:474059259724:web:30f702940a9daa76da99e9",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore()
