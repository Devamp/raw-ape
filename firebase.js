import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAGuvINQx6zTqtX78iB_RzNU0oqWTDkDoI",
  authDomain: "raw-ape.firebaseapp.com",
  projectId: "raw-ape",
  storageBucket: "raw-ape.appspot.com",
  messagingSenderId: "979750576160",
  appId: "1:979750576160:web:c0809085d1fe3161d75c45",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
