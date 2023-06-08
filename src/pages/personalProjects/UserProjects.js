import React, { useEffect, useState } from "react";
import firebase from "firebase/app";
import { useParams } from "react-router-dom";

import { projectFirestore } from "../../firebase/config";
import { useDocument } from "../../hooks/useDocument";
import { id } from "date-fns/locale";
import { useCollection } from "../../hooks/useCollection";

const UserProjects = () => {
 

 // Assuming the user is already authenticated and the user's unique identifier is available
const userId = firebase.auth().currentUser.uid;
console.log(userId)

const {documents} = useCollection("projects")
console.log(documents,"created by")
// Retrieve projects for the authenticated user
 useEffect(() => {
  if(documents) {
    alert("yes")
  }else alert("no")
     
 },[documents])


  return (
    <div>
      <h2>My Projects</h2>
      {documents && documents.map((doc)=> doc.createdBy.id)}
      
     
    </div>
  );
};

export default UserProjects;
