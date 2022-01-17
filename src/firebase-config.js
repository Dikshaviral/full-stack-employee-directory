import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyDJqI3m7CGCua-F3BF85ZN1X_-BZ36h_xw",
    authDomain: "react-crud-9b8d0.firebaseapp.com",
    projectId: "react-crud-9b8d0",
    storageBucket: "react-crud-9b8d0.appspot.com",
    messagingSenderId: "832703534168",
    appId: "1:832703534168:web:4060f1df2a0668a07d662d",
    measurementId: "G-E0NQLHG0MK"
  };


  const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app);

  