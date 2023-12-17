import "./ProjectList.scss";
import { Link } from "react-router-dom";
import Avatar from "../avatar/Avatar";
import { useState } from "react";
import { FaArrowDown } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";
import AssingnedList from "../assingnedList/AssingnedList";

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
      <div className=" grid lg:grid-cols-4 gap-4   ">
        {projects.length === 0 && <p>No projects yet</p>}
        {projects.slice(0, visible).map((project, index) => (
          <Link
            className="max-w-sm rounded overflow-hidden shadow-lg p-5 h-auto"
            to={`/projects/${project.id}`}
            key={project.id}
          >
          
              <div className="mb-8">
                <h2 className="text-custom-deepBlue font-bold text-xl mb-2 h-auto">
                  {project.name}
                </h2>
                <p className="text-gray-900 leading-none">
                  By {project.createdBy.displayName}
                </p>
                <p className="text-gray-700 text-base">{project.details}</p>

                <p>Due by {project.dueDate.toDate().toDateString()}</p>
              </div>

              <div >
                <ul>
                 
                 
                <h1>assingnedUsersList: </h1> 
                      
                  { project.assingnedUsersList.map((user, index) => (
                     <AssingnedList {...user} key={user.id}  />
                      
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
