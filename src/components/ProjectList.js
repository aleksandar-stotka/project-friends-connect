import "./ProjectList.css";
import { Link } from "react-router-dom";
import Avatar from "./Avatar";

import React from "react";

function ProjectList({ projects }) {
  console.log(projects);
  return (
    <div className="project-list">
      {projects.length === 0 && <p>No projects yet</p>}
      {projects.map((project) => (
        <Link to={`/projects/${project.id}`} key={project.id}>
          <h2>{project.name}</h2>
          <p>Due by {project.dueDate.toDate().toDateString()}</p>
          <div className="assigned-to">
            <ul>
              {project.assingnedUsersList.map((user) => (
                <li key={user.photoURL}>
                  <Avatar src={user.photoURL} />
                </li>
              ))}
            </ul>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default ProjectList;
