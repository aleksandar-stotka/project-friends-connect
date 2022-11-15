import React from "react";
import Avatar from "../../components/avatar/Avatar";
import { useFirestore } from "../../hooks/useFirestore";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";
 
function ProjectSummary({ project }) {
  console.log(project, "summary");
 
  const { deleteDocument } = useFirestore("projects");
  const { user } = useAuthContext();
  console.log(user.uid, "uid");
  const [editDoc, setEditDoc] = useState(false);
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
      {user.uid === project.createdBy.id && (
        <button className="btn" onClick={handleClick}>
          Mark as Complete
        </button>
      )}
    
    </div>
  );
}

export default ProjectSummary;
