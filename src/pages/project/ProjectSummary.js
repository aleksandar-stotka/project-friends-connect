import React from "react";
import Avatar from "../../components/Avatar";

function ProjectSummary({ project }) {
  return (
    <div>
      <div className="project-summary">
        <h2 className="page-title">{project.name}</h2>
        <p className="due-date">
          Event due by {project.dueDate.toDate().toDateString()}
        </p>
        <p className="details">{project.details}</p>
        <h4>Event is assigned to:</h4>
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
    </div>
  );
}

export default ProjectSummary;
