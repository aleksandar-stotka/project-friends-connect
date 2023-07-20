import "./ProjectList.scss";
import { Link } from "react-router-dom";
import Avatar from "../avatar/Avatar";
import { useState } from "react";

function ProjectList({ projects }) {
  console.log(projects);
  
  const [visible, setVisible] = useState(6);
   



  const showMoreItems = () => {
    setVisible((prevValue) => prevValue + 3);
   
  };

  const showLess = () => {
    setVisible((prevValue) => prevValue - 3);
    if (visible < 6) {
      setVisible(3);
    } 
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
                  
                    <p>By {project.createdBy.displayName}</p>
                  
                    <h4>assingnedUsersList: <br></br> {user.displayName}</h4>  <Avatar src={user.photoURL} />
                
                  </li>
                ))}
              </ul>
            </div>  
          </Link>
        ))}
      </div>

      <div className="button-container">
        <button onClick={showMoreItems}>Show More</button>
        <button onClick={showLess}>Show Less</button>
      </div>
    </>
  );
}

export default ProjectList;
