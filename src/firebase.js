import { initializeApp } from "firebase/app";
import { getFirestore }     from "firebase/firestore";

// Pull in your env vars
const firebaseConfig = {
  apiKey:             import.meta.env.REACT_APP_FIREBASE_API_KEY,
  authDomain:         import.meta.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId:          import.meta.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket:      import.meta.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId:  import.meta.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId:              import.meta.env.REACT_APP_FIREBASE_APP_ID
};

// Initialize Firebase
const app      = initializeApp(firebaseConfig);
export const db = getFirestore(app);