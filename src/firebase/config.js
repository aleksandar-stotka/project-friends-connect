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


///i it
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();
const projectStorage = firebase.storage();

const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, timestamp, projectStorage };
