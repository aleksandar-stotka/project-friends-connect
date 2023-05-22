import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyDGUNWY-OhTdao2CfrCbnatgmkSQ02S1BA",
  authDomain: "project-friends-connect.firebaseapp.com",
  projectId: "project-friends-connect",
  storageBucket: "project-friends-connect.appspot.com",
  messagingSenderId: "884440330698",
  appId: "1:884440330698:web:9d21c6ae2e7b1771421f33"
};
firebase.initializeApp(firebaseConfig);
/*const firebaseConfig = {
  apiKey: "AIzaSyCXFoaejA_rzZZ1LjuPz3c8CEYYBMGjsv0",
  authDomain: "friends-chat-d1bb3.firebaseapp.com",
  projectId: "friends-chat-d1bb3",
  storageBucket: "friends-chat-d1bb3.appspot.com",
  messagingSenderId: "298177385516",
  appId: "1:298177385516:web:d03e6c3825a3c226cd6d89",
};*/

///i it
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();
const projectStorage = firebase.storage();

const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, timestamp, projectStorage };
