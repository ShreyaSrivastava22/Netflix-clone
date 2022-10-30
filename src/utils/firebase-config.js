
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCllgFtYzl4wULN8RXpSETCsIKCT8WjgQI",
  authDomain: "react-netflix-clone-f260d.firebaseapp.com",
  projectId: "react-netflix-clone-f260d",
  storageBucket: "react-netflix-clone-f260d.appspot.com",
  messagingSenderId: "715484149011",
  appId: "1:715484149011:web:8b16d93e93e69f9768d6e6",
  measurementId: "G-41TLL8128S"
};


const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);

