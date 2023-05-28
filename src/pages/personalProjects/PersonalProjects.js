import React, { useEffect } from "react";
import { useCollection } from "../../hooks/useCollection";
import { useAuthContext } from "../../hooks/useAuthContext";
import { Link, useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useState } from "react";
import { projectFirestore } from "../../firebase/config";
import { useDocument } from "../../hooks/useDocument";

function PersonalProjects({ project }) {
  const { id } = useParams();
  const { documents } = useCollection("projects");
  const { user } = useAuthContext();
  const { error, document } = useDocument("projects", id);
  
  console.log(user.displayName,"user")
     if(documents) {
      console.log(documents,"document")
     }
    
    
    
     const personalProjects = documents && documents.map((doc) => {
      return doc.createdBy.displayName
     })
   console.log(personalProjects,"personal")


   
  // Create a query against the collection.  const {id} = useParams()

  useEffect(() => {}, []);
  // id on user is the same project.createdBy id ... GiRtIxGh85Ps2l2SFl2CINy1izU == 
 
  return (
    <div className="cartpage">
      <div className="cart">
        {documents &&
          documents.map((doc) => {
            return <div key={doc.id}>
              <h2>{doc.createdBy.displayName}</h2>
              <h2>{}</h2>
              
              
              </div>;
          })}
      </div>
    </div>
  );
}

export default PersonalProjects;
