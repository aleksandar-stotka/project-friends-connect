import "./Create.css";
import Select from "react-select";

import React from "react";
import { useState } from "react";
const categories = [
  { value: "development", label: "development" },
  { value: "design", label: "Design" },
  { value: "sales", label: "Sales" },
  { value: "marketing", label: "Marketing" },
];

function Create() {
  const [name, setName] = useState("");
  const [details, setDetails] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [category, setCategory] = useState("");
  const [assingnedUsers, setAssingnedUsers] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, details, dueDate, category.value);
  };
  return (
    <div className="create-form">
      <h2 className="page-title">Create a new Event</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Event Name:</span>
          <input
            required
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </label>
        <label>
          <span>details:</span>
          <input
            required
            type="text"
            onChange={(e) => setDetails(e.target.value)}
            value={details}
          />
        </label>
        <label>
          <span>date:</span>
          <input
            required
            type="date"
            onChange={(e) => setDueDate(e.target.value)}
            value={dueDate}
          />
          <label>
            <span>Event category:</span>
            <Select
              onChange={(option) => setCategory(option)}
              options={categories}
            />
          </label>
          <label>
            <span>Assing to:</span>
            {}
          </label>
        </label>
        <button className="btn">Add Event</button>
      </form>
    </div>
  );
}

export default Create;
