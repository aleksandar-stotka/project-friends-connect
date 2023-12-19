import React from "react";
import Avatar from "../../components/avatar/Avatar";
import { useFirestore } from "../../hooks/useFirestore";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useHistory, useParams } from "react-router-dom";
import { useState } from "react";


function ProjectSummary({ project }) {
  console.log(project.createdBy, "createb by");

  const { deleteDocument, updateDocument } = useFirestore("projects");
  const [name, setName] = useState(project.name);
  const [details, setDesc] = useState(project.details);
  const { user } = useAuthContext();
  const [isModalOpen, setIsModalOpen] = useState(false)

  console.log(user.uid, "uid");
  

  const handleUpdate = async (e) => {
    e.preventDefault();
    await updateDocument(project.id, {
      name,
      details,
      
    }).then(() => {
      setIsModalOpen(false)
    })
  };

  
  const history = useHistory();
  const handleClick = (e) => {
    deleteDocument(project.id);
    history.push("/dashboard"  );
  };
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div >
      <div className="project-summary">
        <h2 className="page-title">{project.name}</h2>
        <p>By {project.createdBy.displayName}</p>
        <p className="due-date">
          Project due by {project.dueDate.toDate().toDateString()}
        </p>
        <p className="details">{project.details}</p>
        <h4>Project is assigned to:</h4>
        <div className="assigned-users">
          {project.assingnedUsersList.map((user) => {
            return (
              <div key={user.id} className="m-2 ">
                <Avatar className="avatar" src={user.photoURL} />
                <h3>{user.displayName}</h3>
              </div>
            );
          })}
        </div>
      </div>
      {user.uid === project.createdBy.id && (
        <div>
      
           <button style={{margin:'1em'}} onClick={openModal}>edit</button>
           {user.uid === project.createdBy.id && (
        <button className="btn" onClick={handleClick}>
          Mark as Complete
        </button>

      )}

          
          <div
      className={`${
        isModalOpen ? 'modal-overlay show-modal' : 'modal-overlay'
      }`}
    >
      <div className='modal-container'>
        <div className="edit-form">
        <span>Project Name:</span>
        <input onChange={(e) => setName(e.target.value)} value={name} />
        <span>details:</span>
          <textarea onChange={(e) => setDesc(e.target.value)} value={details} />
        
        <button style={{margin:"1em"}} onClick={handleUpdate}>update</button>

        </div>
       
        <button className='close-modal-btn' onClick={closeModal}>
       X
        </button>
      </div>
    </div>
        </div>
      )}

     
    </div>
  );
}

export default ProjectSummary;
