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
      <div className=" grid grid-cols-4 sm:cols-2 gap-4 p-2 ">
        {projects.length === 0 && <p>No projects yet</p>}
        {projects.slice(0, visible).map((project) => (
          <Link className="max-w-sm rounded overflow-hidden shadow-md text-center " to={`/projects/${project.id}`} key={project.id}>
            <h2>{project.name}</h2>
            <p>By {project.createdBy.displayName}</p>

            <p>Due by {project.dueDate.toDate().toDateString()}</p>
            <div className="assigned-to">
              <ul>
                <h2>assingnedUsersList: </h2>
                {project.assingnedUsersList.map((user) => (
                  <li key={user.photoURL}>
                  
                  
                    <h4><br></br> {user.displayName}</h4>  <Avatar src={user.photoURL} />
                
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
