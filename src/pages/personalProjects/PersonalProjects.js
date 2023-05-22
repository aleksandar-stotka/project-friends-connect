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

  // Create a query against the collection.  const {id} = useParams()

  useEffect(() => {}, []);

  return (
    <div className="cartpage">
      <div className="cart">
        {documents &&
          documents.map((doc) => {
            return <div>
              <h2>{doc.name}</h2>
              </div>;
          })}
      </div>
    </div>
  );
}

export default PersonalProjects;
