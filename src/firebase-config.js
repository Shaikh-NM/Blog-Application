import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCyoNjgPpzyailS-LdFiJFOERH99SCK1Vs",
  authDomain: "blog-project-deb78.firebaseapp.com",
  projectId: "blog-project-deb78",
  storageBucket: "blog-project-deb78.appspot.com",
  messagingSenderId: "1094450639200",
  appId: "1:1094450639200:web:49509df7a0d17c5251ee05",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
