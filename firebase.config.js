import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// import { getDatabase } from "firebase/database";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBcmxwvy0AHKdE8QXHVd3sLPdMHKeGTw0Q",
  authDomain: "test-next-auth-firebase-a42ac.firebaseapp.com",
  databaseURL: "https://test-next-auth-firebase-a42ac-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "test-next-auth-firebase-a42ac",
  storageBucket: "test-next-auth-firebase-a42ac.appspot.com",
  messagingSenderId: "673440538512",
  appId: "1:673440538512:web:2912f31fff984c1ef29d15",
  measurementId: "G-MQQZ5LXSMV"
};

export const app = initializeApp(firebaseConfig);
// export const db = getDatabase(app);
export const db = getFirestore(app);
// export const analytics = getAnalytics(app);