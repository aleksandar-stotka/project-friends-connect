import "./ProjectList.scss";
import { Link } from "react-router-dom";
import Avatar from "../avatar/Avatar";
import { useState } from "react";
import { FaArrowDown } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";
import AssingnedList from "../assingnedList/AssingnedList";
import { useGlobalContext } from "../../globalContext/context";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import Buttons from "../buttons/Buttons";

function ProjectList({ projects }) {

  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 6
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects
    .sort((a, b) => b.createdAt.toDate() - a.createdAt.toDate()) // Sort by date
    .slice(indexOfFirstProject, indexOfLastProject);
  

    const paginate = (pageNumber) => {
      setCurrentPage(pageNumber);
    };
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(projects.length / projectsPerPage); i++) {
      pageNumbers.push(i);
    }
  console.log(projects);

  return (
    <>
    <div className="grid lg:grid-cols-3 gap-4 md:grid-cols-3 sm:grid-cols-2 ">
      {projects.length === 0 && <p>No projects yet</p>}
      {/* Display projects based on pagination */}
      {currentProjects.map((project, index) => (
        <Link
          className={`max-w-sm rounded overflow-hidden shadow-lg p-5 ${
            index === 0 ? 'bg-custom-lightGrey' : 'custom-background' // Apply 'first-element' class to the first project
          }`}
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
                <h2>Assingned Users List:</h2>
                <p>{project.assingnedUsersList.length} users</p>

                <p>Due by {project.createdAt.toDate().toDateString()}</p>
                {project.createdAt &&
                  formatDistanceToNow(project.createdAt.toDate(), {
                    addSuffix: true,
                  })}
              </div>
        </Link>
      ))}

      {/* Pagination buttons */}
     
    </div>
     <div className="flex justify-center mt-4">
     {pageNumbers.map((number) => (
       <button
         key={number}
         onClick={() => paginate(number)}
         className={`mx-1 py-1 px-3 rounded ${
           currentPage === number ? 'bg-blue-500 text-white' : 'bg-gray-300'
         }`}
       >
         {number}
       </button>
     ))}
   </div>
    </>
    
  );
}

export default ProjectList;