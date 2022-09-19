import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBPjVSnq0Dar0aDAT64d-XkJ6B_aMneSfU",
  authDomain: "eclipse-interactive.firebaseapp.com",
  databaseURL:
    "https://eclipse-interactive-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "eclipse-interactive",
  storageBucket: "eclipse-interactive.appspot.com",
  messagingSenderId: "931461415861",
  appId: "1:931461415861:web:9d5889e1a0d4d05a608ffc",
};

firebase.initializeApp(firebaseConfig);

///i it
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();
const projectStorage = firebase.storage();

const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, timestamp, projectStorage };
