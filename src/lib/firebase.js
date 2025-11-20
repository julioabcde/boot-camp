import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCZgdyJ5WmrR2MwW029O9Lv6tGTbvXojBU",
  authDomain: "febootcamp11nov2025.firebaseapp.com",
  projectId: "febootcamp11nov2025",
  storageBucket: "febootcamp11nov2025.firebasestorage.app",
  messagingSenderId: "1032669984420",
  appId: "1:1032669984420:web:e3ddac97ff89c97683d831",
  measurementId: "G-N7HTYRRJ7H"
};

const app = initializeApp(firebaseConfig);

let analytics;
if (typeof window !== 'undefined') {
  analytics = getAnalytics(app);
}

const db = getFirestore(app);

export { app, analytics, db };
