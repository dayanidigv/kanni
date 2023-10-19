import { initializeApp } from 'firebase/app';
import { getFirestore, doc, getDoc , setDoc } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyCVu4iJsvm3YsQQwYtHleXwHaEcpaEe4Yw",
  authDomain: "innak-91479.firebaseapp.com",
  projectId: "innak-91479",
  storageBucket: "innak-91479.appspot.com",
  messagingSenderId: "385236608299",
  appId: "1:385236608299:web:fa8f053976b412c4e6516e",
  measurementId: "G-E08J05CFPE"
};

export const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);