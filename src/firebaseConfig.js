// Import the functions you need from the SDKs you need
import { initializeApp } from "@firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getStorage } from "@firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCewYf640td2UdNS_5AyxRECA0Uyca6vZc",
  authDomain: "rhesident-page-dev.firebaseapp.com",
  projectId: "rhesident-page-dev",
  storageBucket: "rhesident-page-dev.appspot.com",
  messagingSenderId: "153258071199",
  appId: "1:153258071199:web:bda8da1a8571bd8656beaa",
  measurementId: "G-5QHCT5TK4E"
};


const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const db = getFirestore(app);