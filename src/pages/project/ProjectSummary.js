import React from "react";
import Avatar from "../../components/avatar/Avatar";
import { useFirestore } from "../../hooks/useFirestore";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useHistory } from "react-router-dom";
import { useState } from "react";

function ProjectSummary({ project }) {
  console.log("Assigned Users: ", project.assignedUsersList);

  const { deleteDocument, updateDocument } = useFirestore("projects");
  const [name, setName] = useState(project.name);
  const [details, setDesc] = useState(project.details);
  const { user } = useAuthContext();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const history = useHistory();

  const handleUpdate = async (e) => {
    e.preventDefault();
    await updateDocument(project.id, {
      name,
      details,
    }).then(() => {
      setIsModalOpen(false);
    });
  };

  const handleClick = (e) => {
    deleteDocument(project.id);
    history.push("/dashboard");
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen  text-white p-6">
      <div className="max-w-4xl mx-auto bg-gray-800 p-5 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-2">{name}</h2>
        <p className="text-gray-400">By {project.createdBy.displayName}</p>
        <p className="text-blue-300">
          Project due by {project.dueDate.toDate().toDateString()}
        </p>
        <p className="mt-2">{details}</p>

        <h4 className="mt-4 font-semibold">Project is assigned to:</h4>
        <div className="flex space-x-2">
        {project.assingnedUsersList.map((user) => {
            return (
              <div key={user.id}>
                <Avatar className="p-3" src={user.photoURL} />
                <p>{user.displayName}</p>
              </div>
            );
          })}
        </div>

        {user.uid === project.createdBy.id && (
          <div className="mt-4">
            <button
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
              onClick={openModal}
            >
              Edit
            </button>
            <button
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
              onClick={handleClick}
            >
              Mark as Complete
            </button>
          </div>
        )}

        <div
          className={`${
            isModalOpen ? 'fixed inset-0 bg-black bg-opacity-50' : 'hidden'
          } flex justify-center items-center`}
        >
          <div className="bg-gray-700 p-5 rounded-lg">
            <div className="edit-form">
              <label className="block text-gray-400 mb-2">Project Name:</label>
              <input
                className="w-full p-2 rounded bg-gray-800 text-white"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
              <label className="block text-gray-400 mt-4 mb-2">Details:</label>
              <textarea
                className="w-full p-2 rounded bg-gray-800 text-white"
                rows="4"
                onChange={(e) => setDesc(e.target.value)}
                value={details}
              ></textarea>
              <div className="mt-4 flex justify-end">
                <button
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  onClick={handleUpdate}
                >
                  Update
                </button>
                <button
                  className="ml-2 bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                  onClick={closeModal}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectSummary;
