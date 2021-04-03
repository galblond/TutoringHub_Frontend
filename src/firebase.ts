import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDDlRk5x870JNEz7KQzVk3xPfan-MlK64I",
  authDomain: "tutoringhub-e7362.firebaseapp.com",
  projectId: "tutoringhub-e7362",
  storageBucket: "tutoringhub-e7362.appspot.com",
  messagingSenderId: "180245525929",
  appId: "1:180245525929:web:e85c5035cb68cca7d500b8",
  measurementId: "G-7D6ZGTFVTY",
};

// firebase.initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);
firebase.analytics();
export default firebase;
