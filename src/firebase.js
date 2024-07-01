import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import {
  browserLocalPersistence,
  getAuth,
  GoogleAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDbmaGL2IB0gVrz5JsFGxGFTi2qx-ENkhA",
  authDomain: "granier-db.firebaseapp.com",
  projectId: "granier-db",
  storageBucket: "granier-db.appspot.com",
  messagingSenderId: "453142435074",
  appId: "1:453142435074:web:d416ef168a0f4e35f21e1b",
  measurementId: "G-NC70T1FS49",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const facebookProvider = new FacebookAuthProvider();

auth.setPersistence(browserLocalPersistence);
googleProvider.setCustomParameters({ prompt: "select_account" });
facebookProvider.setCustomParameters({ display: "popup" });

export const storage = getStorage(app);
