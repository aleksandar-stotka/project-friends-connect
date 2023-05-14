import { setDate } from "date-fns";
import React, { useEffect, useState } from "react";
import Select from "react-select";
import { useParams, useHistory } from "react-router-dom";
import { useDocument } from "../../hooks/useDocument";
import firebase from "firebase";
import { useCollection } from "../../hooks/useCollection";
import { projectFirestore } from "../../firebase/config";

function EditProject() {
  const { id } = useParams();

  //////params

  const [state, setState] = useState("");
  const [data, setData] = useState({});
  console.log(state);
  const handleInputSubmit = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  const { name } = state;
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    const ref = projectFirestore.collection("projects").doc(id);

    const unsubscribe = ref.onSnapshot((snapshot) => {
      if (snapshot.data()) {
        setState({
          ...snapshot.data(),
          id: snapshot.id,
        });
      }
    });
    return () => unsubscribe();
  }, [id]);

  useEffect(() => {
    if (id) {
      setData({ ...state, data, id });
    } else {
      setData({ ...state });
    }

    return () => setData("");
  }, []);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={name} onChange={handleInputSubmit} />
        <button className="underline" type="submit">update</button>
      </form>
    </div>
  );
}

export default EditProject;
