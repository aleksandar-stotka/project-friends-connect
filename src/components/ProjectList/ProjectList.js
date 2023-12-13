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
      <div className=" grid lg:grid-cols-4 gap-4 p- min-h-screen flex items-center justify-center ">
        {projects.length === 0 && <p>No projects yet</p>}
        {projects.slice(0, visible).map((project) => (
          <Link className="max-w-sm w-full lg:max-w-full lg:flex" to={`/projects/${project.id}`} key={project.id}>
             <div className="border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
              <div className="mb-8">
              <h2 className="text-gray-900 font-bold text-xl mb-2">{project.name}</h2>
            <p className="text-gray-900 leading-none">By {project.createdBy.displayName}</p>
            <p className="text-gray-700 text-base">{project.details}</p>

            <p>Due by {project.dueDate.toDate().toDateString()}</p>
                
              </div>
            
            <div className="flex items-center">
              <ul>
                <h2>assingnedUsersList: </h2>
                {project.assingnedUsersList.map((user) => (
                  <li key={user.photoURL}>
                  
                  
                    <h4><br></br> {user.displayName}</h4>  <img className="w-10 h-10 rounded-full mr-4" src={user.photoURL} />
                
                  </li>
                ))}
              </ul>
            </div> 
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
