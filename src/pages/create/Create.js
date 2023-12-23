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
    <>
      <div className="flex items-center justify-center min-h-screen w-[50rem]" ref={messagesEndRef}>
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
        ></div>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white rounded-lg shadow-md w-[60rem] p-6">
          <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            <span>Project Name:</span>
            <input className="w-full border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500" placeholder="Enter project name"
              required
              type="text"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </label>
          </div>
           <div className="mb-4">
           <label className="block text-gray-700 font-semibold mb-2">
            <span>details:</span>
            <textarea
              required
              type="text"
              onChange={(e) => setDetails(e.target.value)}
              value={details}
              className="w-full border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500" placeholder="Enter project description"
            />
          </label>

           </div>
            <div className="mb-4">
               <label className="block text-gray-700 font-semibold mb-2">
               <span>date:</span>
            <input
              required
              type="date"
              onChange={(e) => setDueDate(e.target.value)}
              value={dueDate}
            />
               </label>
            </div>
            <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">  
              <span>Project category:</span>
              <Select className="w-full border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
                onChange={(option) => setCategory(option)}
                options={categories}
              />
            </label>
              
            </div>
            <div className="mb-4">
              
            <label className="block text-gray-700 font-semibold mb-2">
              <span>Assing to:</span>

              <Select className="w-full border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
                options={users}
                onChange={(option) => setAssingnedUsers(option)}
                isMulti
              />
            </label>

            </div>
          
           
          <button style={{ marginBottom: "1em" }} className="block text-gray-700 font-semibold mb-2">
            Add Project
          </button>
          {formError && <p className="error">{formError}</p>}
        </form>
      </div>
    </>
  );
}

export default Create;
