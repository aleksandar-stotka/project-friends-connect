import "./Create.css";
import Select from "react-select";
import { useCollection } from "../../hooks/useCollection";
import { timestamp } from "../../firebase/config";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useFirestore } from "../../hooks/useFirestore";
import { useHistory } from "react-router-dom";
import { useGlobalContext } from "../../globalContext/context";
import React, { useEffect } from "react";
import { useState } from "react";
import Avatar from "../../components/avatar/Avatar";
import Header from "../../components/header/Header";
import Modal from "../../components/Modal/Modal";
const categories = [
  { value: "development", label: "development" },
  { value: "design", label: "Design" },
  { value: "sales", label: "Sales" },
  { value: "marketing", label: "Marketing" },
  { value: "mine", label: "Mine" },
];

function Create() {
  const history = useHistory();
  const { addDocument, response } = useFirestore("projects");
  const { documents } = useCollection("users");
  const { closeModal } = useGlobalContext();
  console.log(documents);
  const [users, setUsers] = useState([]);

  const { user } = useAuthContext();

  const [name, setName] = useState("");
  const [details, setDetails] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [category, setCategory] = useState("");
  const [assingnedUsers, setAssingnedUsers] = useState([]);
  const [formError, setFormError] = useState(null);

  useEffect(() => {
    if (documents) {
      const options = documents.map((user) => {
        return { value: user, label: user.displayName };
      });
      setUsers(options);
    }
  }, [documents]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError(null);
    if (!category) {
      setFormError("Please select category");
      return;
    }
    if (assingnedUsers.length < 1) {
      setFormError("Please assign project least 1");
      return;
    }

    const createdBy = {
      displayName: user.displayName,
      photoURL: user.photoURL,
      id: user.uid,
    };
    const assingnedUsersList = assingnedUsers.map((u) => {
      return {
        displayName: u.value.displayName,
        photoURL: u.value.photoURL,
        id: u.value.id,
      };
    });

    const project = {
      name,
      details,
      category: category.value,
      dueDate: timestamp.fromDate(new Date(dueDate)),
      comments: [],
      createdBy,

      assingnedUsersList,
    };

    await addDocument(project);
    if (!response.error) {
      history.push("/");
    }
  };

  return (
    <>
      <div className="create-form">
        <div
          data-aos="flip-right"
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <h1 className="form-hero">Visualize your work with a board</h1>
          <h2>Create group</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <label>
            <h2 className="label-title">Project Name:</h2>
            <input
              required
              type="text"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </label>
          <label>
            <h2>details:</h2>
            <textarea
              required
              type="text"
              onChange={(e) => setDetails(e.target.value)}
              value={details}
            />
          </label>
          <label>
            <h2>date:</h2>
            <input
              required
              type="date"
              onChange={(e) => setDueDate(e.target.value)}
              value={dueDate}
            />
            <label>
              <h2>Project category:</h2>
              <Select
                onChange={(option) => setCategory(option)}
                options={categories}
              />
            </label>
            <label>
              <h2>Assing to:</h2>

              <Select
                options={users}
                onChange={(option) => setAssingnedUsers(option)}
                isMulti
              />
            </label>
          </label>
          <button
            style={{ marginBottom: "1em" }}
            className="btn"
            onClick={closeModal}
          >
            Add Event
          </button>
          {formError && <p className="error">{formError}</p>}
        </form>
      </div>
    </>
  );
}

export default Create;
