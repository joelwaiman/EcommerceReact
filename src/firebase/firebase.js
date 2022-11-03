import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyAE1s9wyj3VqAe32HK3ovFXSCtBDd6gCoQ",
  authDomain: "chonkees97.firebaseapp.com",
  projectId: "chonkees97",
  storageBucket: "chonkees97.appspot.com",
  messagingSenderId: "5559857148",
  appId: "1:5559857148:web:45651cfd29df3a109f4c79"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)