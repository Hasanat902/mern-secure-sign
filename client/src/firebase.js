import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern--sign.firebaseapp.com",
  projectId: "mern--sign",
  storageBucket: "mern--sign.firebasestorage.app",
  messagingSenderId: "781511487137",
  appId: "1:781511487137:web:e9bad8a21595540df58ae0",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

