import React, { useEffect, useState } from "react";
import firebase from "firebase";
import "firebase/firestore";
import { useCollection } from "../../hooks/useCollection";

const ProjectList = () => {
  const [projects, setProjects] = useState([]);
  console.log(projects, "pro");

  //////////////  find collection --

  const { documents } = useCollection("projects");
  console.log(document, "user Projects");
  ///////////////////////////////////////////

  const user = firebase.auth().currentUser;
  console.log(user, "user");
  const createdBy = user ? user.uid : null;
  console.log(createdBy, "created");

  return (
    <>
      <p>{user.displayName}</p>
      <img src={user.photoURL} alt="user image" />
      <h1>{user.uid}</h1>{" "}
      {/* GiRtIxGh85Ps2l2SFl2CINy1izU2
       */}
      {user.uid == createdBy &&
        documents &&
        documents.map((doc) => <p key={doc.id}>{doc.createdBy.id} {/*GiRtIxGh85Ps2l2SFl2CINy1izU2*/}</p>)}
    </>
  );
};

export default ProjectList;
