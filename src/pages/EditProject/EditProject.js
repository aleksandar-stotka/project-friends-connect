import { setDate } from "date-fns";
import React, { useEffect, useState } from "react";
import Select from "react-select";
import { useParams, useHistory } from "react-router-dom";
import { useDocument } from "../../hooks/useDocument";
import firebase from "firebase";
import { useCollection } from "../../hooks/useCollection";
import { projectFirestore } from "../../firebase/config";

const initialState = {
  name: "",
  details: "",
};
function EditProject(collection) {
  const { documents } = useCollection("projects");
  console.log(documents, "edit");

  const [state, setState] = useState(initialState);
  const [data, setData] = useState({});

  const { name, details } = state;

  //////params
  const { id } = useParams();
  const history = useHistory();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !details) {
      alert("error");
    }
    setTimeout(() => history.push("/"), 500);
  };

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
  useEffect(() => {
    const ref = projectFirestore.collection("projects").doc(id);

    ref.onSnapshot((snapshot) => {
      if (snapshot.data()) {
        setData({
          ...snapshot.data(),
          id: snapshot.id,
        });
      } else {
        setData({});
      }
    });

    return () => setData({});
  }, [id]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={name || ""} onChange={handleInputChange} />
        <input value={details || ""} onChange={handleInputChange} />
        <button type="submit">update</button>
      </form>
    </div>
  );
}

export default EditProject;
