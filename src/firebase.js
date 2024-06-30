import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDbmaGL2IB0gVrz5JsFGxGFTi2qx-ENkhA",
  authDomain: "granier-db.firebaseapp.com",
  projectId: "granier-db",
  storageBucket: "granier-db.appspot.com",
  messagingSenderId: "453142435074",
  appId: "1:453142435074:web:d416ef168a0f4e35f21e1b",
  measurementId: "G-NC70T1FS49"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
