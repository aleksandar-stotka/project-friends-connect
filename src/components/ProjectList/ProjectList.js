import "./ProjectList.scss";
import { Link } from "react-router-dom";
import Avatar from "../avatar/Avatar";
import React from "react";
import paginate from "../utils/utils";
import { useState } from "react";

function ProjectList({ projects }) {
  const [visible, setVisible] = useState(6);

  const showMoreItems = () => {
    setVisible((prevValue) => prevValue + 3);
  };

  
 
  return (
    <>
      <div className="project-list ">
        {projects.length === 0 && <p>No projects yet</p>}
        {projects.slice(0, visible).map((project) => (
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
      <div className="button-container">
        <button onClick={showMoreItems}>Show More</button>
      </div>
    </>
  );
}

export default ProjectList;
