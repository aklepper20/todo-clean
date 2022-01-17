import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBC2-4GqBP7PVHX6shhKieAtX1zSMxzF7k",
  authDomain: "todo-a9c29.firebaseapp.com",
  projectId: "todo-a9c29",
  storageBucket: "todo-a9c29.appspot.com",
  messagingSenderId: "647994646815",
  appId: "1:647994646815:web:0436cf6cedc3a02322902a",
  measurementId: "G-VCFD31HYET",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//intialize our db form
const db = getFirestore();

export const auth = getAuth(app);
export default db;
