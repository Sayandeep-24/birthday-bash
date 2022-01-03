import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";


const firebaseConfig = {

  apiKey: "AIzaSyC-I9ef4BcKX-4xqK0mIih9sVb1uqGcPyc",

  authDomain: "birthday-bash-5c115.firebaseapp.com",

  projectId: "birthday-bash-5c115",

  storageBucket: "birthday-bash-5c115.appspot.com",

  messagingSenderId: "1004777371912",

  appId: "1:1004777371912:web:261c4d7a590f9b85b8d4bd",

  measurementId: "G-PC8Q0M3QHW"

};

const app = initializeApp(firebaseConfig);
var db = getFirestore(app);
export default db;
