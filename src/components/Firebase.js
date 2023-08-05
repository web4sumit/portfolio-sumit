import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"



const firebaseConfig = {
  apiKey: "AIzaSyAIDD8UCu2oJotQj0ZRkjIzq2mzTv-8Ozs",
  authDomain: "sumit-portfolio-react.firebaseapp.com",
  projectId: "sumit-portfolio-react",
  storageBucket: "sumit-portfolio-react.appspot.com",
  messagingSenderId: "658096399856",
  appId: "1:658096399856:web:84c6a31c979fed1c64e935"
};


export const app = initializeApp(firebaseConfig);
export const db = getFirestore()