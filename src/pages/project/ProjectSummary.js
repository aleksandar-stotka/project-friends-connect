import React from "react";
import Avatar from "../../components/avatar/Avatar";
import { useFirestore } from "../../hooks/useFirestore";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useHistory, useParams } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";
import { projectFirestore } from "../../firebase/config";

function ProjectSummary({ project }) {
  console.log(project.createdBy.id, "createb by");

  const { id } = useParams();
  const { deleteDocument, updateDocument } = useFirestore("projects");
  const [name,setName] = useState(project.name)
  const [details,setDesc] = useState(project.details)
  const { user } = useAuthContext();
  console.log(user.uid, "uid");

  const handleUpdate = async (e) => {
    e.preventDefault()
    await updateDocument(project.id, {
               name,
               details
               
    })
  };

  const history = useHistory();
  const handleClick = (e) => {
    deleteDocument(project.id);
    history.push("/");
  };

  return (
    <div>
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
              <div key={user.id}>
                <Avatar className="avatar" src={user.photoURL} />
              </div>
            );
          })}
        </div>
      </div>
      { user.uid === project.createdBy.id && <div>
      <input onChange={(e) => setName(e.target.value)} value={name}/>
      <input onChange={(e) => setDesc(e.target.value)} value={details}/>
      
      <button onClick={handleUpdate}>update</button>
      </div>}
      
      {user.uid === project.createdBy.id && (
        <button className="btn" onClick={handleClick}>
          Mark as Complete
        </button>
      )}
    </div>
  );
}

export default ProjectSummary;
