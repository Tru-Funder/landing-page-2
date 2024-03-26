import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA-XqzGc82jkNZDc3sYqh9MaHTQ_uoMBeA",
  authDomain: "trufunder-whitelist.firebaseapp.com",
  projectId: "trufunder-whitelist",
  storageBucket: "trufunder-whitelist.appspot.com",
  messagingSenderId: "341369316370",
  appId: "1:341369316370:web:5b16d0a9202f2eb1b3a4cb",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const db = getFirestore(app);
