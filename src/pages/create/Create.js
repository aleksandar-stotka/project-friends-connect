import "./Create.scss";
import Select from "react-select";
import { useCollection } from "../../hooks/useCollection";
import { timestamp } from "../../firebase/config";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useFirestore } from "../../hooks/useFirestore";
import { useHistory } from "react-router-dom";


import React, { useEffect ,useRef} from "react";
import { useState } from "react";

const categories = [
  { value: "mine", label: "Mine" },
  { value: "development", label: "development" },
  { value: "design", label: "Design" },
  { value: "sales", label: "Sales" },
  { value: "marketing", label: "Marketing" },
];

function Create() {
  const history = useHistory();
  const { addDocument, response } = useFirestore("projects");
  const { documents } = useCollection("users");

  const [users, setUsers] = useState([]);

  const { user } = useAuthContext();

  const [name, setName] = useState("");
  const [details, setDetails] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [category, setCategory] = useState("");
  const [createdDate, setC] = useState("");
  const [assingnedUsers, setAssingnedUsers] = useState([]);
  const [formError, setFormError] = useState(null);
  const messagesEndRef = useRef(null);
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  

  //i got both user uid and user createdID

  useEffect(() => {
    scrollToBottom()
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
      createdAt: new Date().toISOString(),
      assingnedUsersList,
    };

    await addDocument(project);
    if (!response.error) {
      history.push("/dashboard");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-900 p-6">
      <form onSubmit={handleSubmit} className="max-w-2xl w-full bg-gray-800 text-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-4">Create New Project</h2>
        {/* Project Name */}
        <div className="mb-4">
          <label className="block text-gray-400 font-semibold mb-2">
            Project Name:
            <input
              required
              type="text"
              onChange={(e) => setName(e.target.value)}
              value={name}
              className="w-full mt-1 p-2 bg-gray-700 text-white rounded"
              placeholder="Enter project name"
            />
          </label>
        </div>
        {/* Project Details */}
        <div className="mb-4">
          <label className="block text-gray-400 font-semibold mb-2">
            Details:
            <textarea
              required
              onChange={(e) => setDetails(e.target.value)}
              value={details}
              className="w-full mt-1 p-2 bg-gray-700 text-white rounded"
              placeholder="Enter project description"
            />
          </label>
        </div>
        {/* Due Date */}
        <div className="mb-4">
          <label className="block text-gray-400 font-semibold mb-2">
            Due Date:
            <input
              required
              type="date"
              onChange={(e) => setDueDate(e.target.value)}
              value={dueDate}
              className="w-full mt-1 p-2 bg-white text-white rounded"
            />
          </label>
        </div>
        {/* Project Category */}
        <div className="mb-4">
          <label className="block text-gray-400 font-semibold mb-2">
            Project Category:
            <Select
             menuPlacement="top"
              onChange={(option) => setCategory(option)}
              options={categories}
              className="text-black mt-1"
            />
          </label>
        </div>
        {/* Assigned Users */}
        <div className="mb-4 relative z-10">
          <label className="block text-gray-400 font-semibold mb-2">
            Assign To:
            <Select
             menuPlacement="top"
              options={users}
              onChange={(option) => setAssingnedUsers(option)}
              isMulti
              className="text-black mt-1"
              styles={{ menuPortal: base => ({ ...base, zIndex: 9999 }) }}

            />
          </label>
        </div>
        {/* Submit Button */}
        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
          Add Project
        </button>
        {/* Error Message */}
        {formError && <p className="text-red-500 mt-2">{formError}</p>}
      </form>
    </div>
  );
}


export default Create;
