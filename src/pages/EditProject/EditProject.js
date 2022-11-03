import { setDate } from "date-fns";
import React, { useEffect, useState } from "react";
import Select from "react-select";
import { useParams, useHistory } from "react-router-dom";
import { useDocument } from "../../hooks/useDocument";
import firebase from "firebase";
import { useCollection } from "../../hooks/useCollection";
import { projectFirestore } from "../../firebase/config";

function EditProject() {
  const { documents } = useCollection("projects");
  console.log(documents, "edit");

  //////params

  /*useEffect(() => {
    documents.child('projects').on("value", (snapshot) => {
      if(snapshot.val () !== null){
        setDate({...snapshot.val()})
      }else {
        setData({})
      }
    });
    return () => {
      setData({})
    }
   },[id])*/

  return (
    <div>
      <form>
        <input />
        <button type="submit">update</button>
      </form>
    </div>
  );
}

export default EditProject;
