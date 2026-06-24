




import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "interviewiq-c3324.firebaseapp.com",
  projectId: "interviewiq-c3324",
  storageBucket: "interviewiq-c3324.firebasestorage.app",
  messagingSenderId: "293307027092",
  appId: "1:293307027092:web:2e67e728ce32af3bc96e81",
  measurementId: "G-G32NBWT640"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export{auth, provider}