import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDIZ7Orp74lx5W2WYlwTu4pfMQg_S-PxN0",
  authDomain: "livonproject-2daa5.firebaseapp.com",
  projectId: "livonproject-2daa5",
  storageBucket: "livonproject-2daa5.firebasestorage.app",
  messagingSenderId: "706398689799",
  appId: "1:706398689799:web:7ecc6f272eab2bb17e28a2",
  measurementId: "G-L5Y7CWY2JK"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);