// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore, collection, getDocs } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBzufThlkBGmpKA5JcJYjAZVEXwmZZ--jQ",
  authDomain: "thetanomial.firebaseapp.com",
  projectId: "thetanomial",
  storageBucket: "thetanomial.appspot.com",
  messagingSenderId: "226065795365",
  appId: "1:226065795365:web:30baa3ea83f21f059432cc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore()
const colRef = collection(db,"movies");

getDocs(colRef).then(data => {
    data.docs.forEach(document=>{
        console.log(document.data())
    })
    console.log(data.docs)
})