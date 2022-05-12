import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCXFoaejA_rzZZ1LjuPz3c8CEYYBMGjsv0",
  authDomain: "friends-chat-d1bb3.firebaseapp.com",
  projectId: "friends-chat-d1bb3",
  storageBucket: "friends-chat-d1bb3.appspot.com",
  messagingSenderId: "298177385516",
  appId: "1:298177385516:web:d03e6c3825a3c226cd6d89",
};

firebase.initializeApp(firebaseConfig);

///i it
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, timestamp };
