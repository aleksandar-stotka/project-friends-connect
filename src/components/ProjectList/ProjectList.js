import "./ProjectList.scss";
import { Link } from "react-router-dom";
import Avatar from "../avatar/Avatar";
import { useState } from "react";
import { FaArrowDown } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";
import AssingnedList from "../assingnedList/AssingnedList";
import { useGlobalContext } from "../../globalContext/context";
import formatDistanceToNow from "date-fns/formatDistanceToNow";

function ProjectList({ projects }) {

  
  const {visible, showMoreItems,showLess} = useGlobalContext()
  const [isExpanded, setIsExpanded] = useState(false);
  const currentDate = new Date()
  const [date, setDate] = useState(currentDate)
  console.log(projects);
 



  return (
    <>
      <div className=" grid lg:grid-cols-4 gap-4   ">
      {projects.length === 0 && <p>No projects yet</p>}
{projects
  .slice(0, visible)
  .sort((a, b) => b.createdAt.toDate() - a.createdAt.toDate()) // Sort by date
  .map((project, index) => (
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
        <p>Due by {project.createdAt.toDate().toDateString()}</p>
        {project.createdAt &&
          formatDistanceToNow(project.createdAt.toDate(), {
            addSuffix: true,
          })}
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
