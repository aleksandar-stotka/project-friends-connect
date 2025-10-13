import "./Create.scss";
import Select from "react-select";
import { useCollection } from "../../hooks/useCollection";
import { timestamp } from "../../firebase/config";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useFirestore } from "../../hooks/useFirestore";
import { useHistory } from "react-router-dom";
import React, { useEffect, useRef, useState } from "react";

const categories = [
  { value: "mine", label: "Mine" },
  { value: "development", label: "Development" },
  { value: "design", label: "Design" },
  { value: "sales", label: "Sales" },
  { value: "marketing", label: "Marketing" },
];

const Create = () => {
  const history = useHistory();
  const { addDocument, response } = useFirestore("projects");
  const { documents } = useCollection("users");
  const [users, setUsers] = useState([]);
  const { user } = useAuthContext();

  const [name, setName] = useState("");
  const [details, setDetails] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [category, setCategory] = useState("");
  const [assingnedUsers, setAssingnedUsers] = useState([]);
  const [formError, setFormError] = useState(null);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
    if (documents) {
      const options = documents.map((user) => ({
        value: user,
        label: user.displayName,
      }));
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
      setFormError("Please assign at least 1 user to the project");
      return;
    }

    const createdBy = {
      displayName: user.displayName,
      photoURL: user.photoURL,
      id: user.uid,
    };

    const assingnedUsersList = assingnedUsers.map((u) => ({
      displayName: u.value.displayName,
      photoURL: u.value.photoURL,
      id: u.value.id,
    }));

    const project = {
      name,
      details,
      category: category.value,
      dueDate: timestamp.fromDate(new Date(dueDate)),
      comments: [],
      createdBy,
      createdAt: new Date().toISOString(),
      assingnedUsersList,
    };

    await addDocument(project);
    if (!response.error) {
      history.push("/dashboard");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-900 via-blue-700 to-blue-400 p-2 sm:p-6">
      <form
        onSubmit={handleSubmit}
        className="max-w-2xl w-full bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-6 sm:p-10 border border-white/20 transition-all duration-300"
      >
        <h2 className="text-3xl font-extrabold mb-6 text-white text-center drop-shadow-lg">Create New Project</h2>
        {/* Project Name */}
        <div className="mb-6">
          <label className="block text-blue-100 font-semibold mb-2">
            Project Name:
            <input
              required
              type="text"
              onChange={(e) => setName(e.target.value)}
              value={name}
              className="w-full mt-2 p-3 bg-gray-900/80 text-white rounded-xl border border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              placeholder="Enter project name"
            />
          </label>
        </div>
        {/* Project Details */}
        <div className="mb-6">
          <label className="block text-blue-100 font-semibold mb-2">
            Details:
            <textarea
              required
              onChange={(e) => setDetails(e.target.value)}
              value={details}
              className="w-full mt-2 p-3 bg-gray-900/80 text-white rounded-xl border border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              placeholder="Enter project description"
              rows={3}
            />
          </label>
        </div>
        {/* Due Date */}
        <div className="mb-6">
          <label className="block text-blue-100 font-semibold mb-2">
            Due Date:
            <input
              required
              type="date"
              onChange={(e) => setDueDate(e.target.value)}
              value={dueDate}
              className="w-full mt-2 p-3 bg-gray-900/80 text-white rounded-xl border border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </label>
        </div>
        {/* Project Category */}
        <div className="mb-6">
          <label className="block text-blue-500 font-semibold mb-2">
            Project Category:
            <Select
              menuPlacement="top"
              onChange={(option) => setCategory(option)}
              options={categories}
              className="mt-2"
              styles={{
                control: (base) => ({
                  ...base,
                  backgroundColor: "#1e293b",
                  color: "#fff",
                  borderRadius: "0.75rem",
                  borderColor: "#3b82f6",
                  boxShadow: "none",
                }),
                singleValue: (base) => ({
                  ...base,
                  color: "#fff",
                }),
                menu: (base) => ({
                  ...base,
                  zIndex: 20,
                }),
              }}
            />
          </label>
        </div>
        {/* Assigned Users */}
        <div className="mb-6 relative z-10">
          <label className="block text-blue-500 font-semibold mb-2">
            Assign To:
            <Select
              menuPlacement="top"
              options={users}
              onChange={(option) => setAssingnedUsers(option)}
              isMulti
              className="mt-2"
              styles={{
                control: (base) => ({
                  ...base,
                  backgroundColor: "#1e293b",
                  color: "#fff",
                  borderRadius: "0.75rem",
                  borderColor: "#3b82f6",
                  boxShadow: "none",
                }),
                multiValueLabel: (base) => ({
                  ...base,
                  color: "#fff",
                }),
                menu: (base) => ({
                  ...base,
                  zIndex: 20,
                }),
              }}
            />
          </label>
        </div>
        {/* Submit Button */}
        <button className="w-full bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500 text-white font-bold py-3 px-4 rounded-xl mt-4 shadow-lg transition-all">
          Add Project
        </button>
        {/* Error Message */}
        {formError && <p className="text-red-400 mt-4 text-center font-semibold">{formError}</p>}
        <div ref={messagesEndRef} />
      </form>
    </div>
  );
};

export default Create;