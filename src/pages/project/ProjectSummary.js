import React, { useState } from "react";
import Avatar from "../../components/avatar/Avatar";
import { useFirestore } from "../../hooks/useFirestore";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useHistory } from "react-router-dom";

function ProjectSummary({ project }) {
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

  const handleClick = () => {
    deleteDocument(project.id);
    history.push("/dashboard");
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen flex items-center justify-center p-2 sm:p-6">
      <div className="w-full max-w-4xl mx-auto bg-white/10 backdrop-blur-lg p-6 sm:p-10 rounded-2xl shadow-2xl border border-white/20 transition-all duration-300">
        <h2 className="text-3xl font-extrabold mb-2 text-white drop-shadow-lg">{name}</h2>
        <p className="text-blue-200 font-semibold mb-2">By {project.createdBy.displayName}</p>
        <p className="text-blue-300 mb-2">
          Project due by {project.dueDate.toDate().toDateString()}
        </p>
        <p className="mt-2 text-white/90">{details}</p>

        <h4 className="mt-6 font-semibold text-blue-100">Project is assigned to:</h4>
        <div className="flex flex-wrap gap-4 mt-2">
          {project.assingnedUsersList.map((user) => (
            <div key={user.id} className="flex flex-col items-center">
              <Avatar className="w-12 h-12 border-2 border-blue-400 rounded-full shadow-lg" src={user.photoURL} />
              <p className="text-blue-200 text-sm mt-1">{user.displayName}</p>
            </div>
          ))}
        </div>

        {user.uid === project.createdBy.id && (
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <button
              className="bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500 text-white font-bold py-2 px-6 rounded-xl shadow transition-all"
              onClick={openModal}
            >
              Edit
            </button>
            <button
              className="bg-gradient-to-r from-green-600 to-green-400 hover:from-green-700 hover:to-green-500 text-white font-bold py-2 px-6 rounded-xl shadow transition-all"
              onClick={handleClick}
            >
              Mark as Complete
            </button>
          </div>
        )}

        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
            <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-2xl border border-white/20 w-full max-w-md">
              <h3 className="text-xl font-bold text-white mb-4">Edit Project</h3>
              <form onSubmit={handleUpdate}>
                <label className="block text-blue-100 mb-2 font-semibold">Project Name:</label>
                <input
                  className="w-full p-3 rounded-xl bg-gray-900/80 text-white border border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition mb-4"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                />
                <label className="block text-blue-100 mb-2 font-semibold">Details:</label>
                <textarea
                  className="w-full p-3 rounded-xl bg-gray-900/80 text-white border border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition mb-4"
                  rows="4"
                  onChange={(e) => setDesc(e.target.value)}
                  value={details}
                ></textarea>
                <div className="flex justify-end gap-2 mt-4">
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500 text-white font-bold py-2 px-6 rounded-xl shadow transition-all"
                  >
                    Update
                  </button>
                  <button
                    type="button"
                    className="bg-gradient-to-r from-red-600 to-red-400 hover:from-red-700 hover:to-red-500 text-white font-bold py-2 px-6 rounded-xl shadow transition-all"
                    onClick={closeModal}
                  >
                    Close
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProjectSummary;