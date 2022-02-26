// Import the functions you need from the SDKs you need
import { initializeApp } from "@firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getStorage } from "@firebase/storage";
import { getAuth, setPersistence, browserSessionPersistence } from "@firebase/auth";

const firebaseConfig = {
 apiKey: process.env.REACT_APP_API_KEY_PROD,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN_PROD,
  projectId: process.env.REACT_APP_PROJECT_ID_PROD,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET_PROD,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID_PROD,
  appId: process.env.REACT_APP_APP_ID_PROD,
  measurementId:process.env.REACT_APP_MEASUREMENT_ID_PROD 
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const db = getFirestore(app);
const auth = getAuth();
setPersistence(auth, browserSessionPersistence)
  .then(() => {
  })
  .catch((error) => {
    console.log(error)
  });