// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCiRY2wFwsM70dIBEuzIHpyknOGHnEBiD4",
  authDomain: "react-cursos-e60b6.firebaseapp.com",
  projectId: "react-cursos-e60b6",
  storageBucket: "react-cursos-e60b6.appspot.com",
  messagingSenderId: "431906507161",
  appId: "1:431906507161:web:608a8cbc38dbfa423feb08",
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
