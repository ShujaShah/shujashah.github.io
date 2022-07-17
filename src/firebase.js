
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyBml4mdy2J3jb1DOY14X-K_tGbGql-3Lzk",
  authDomain: "portfolio-4b440.firebaseapp.com",
  projectId: "portfolio-4b440",
  storageBucket: "portfolio-4b440.appspot.com",
  messagingSenderId: "411923072072",
  appId: "1:411923072072:web:2f36f55347e8bbdfd2847d"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);


export const signInWithGoogle = () => signInWithPopup(auth, provider);